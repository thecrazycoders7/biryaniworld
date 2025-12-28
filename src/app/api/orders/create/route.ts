import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { createCheckoutSession } from '@/lib/stripe';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const {
      customerName,
      customerEmail,
      customerPhone,
      specialNotes,
      paymentType,
      eventType,
      eventDate,
      eventTime,
      guestCount,
      eventAddress,
      eventCity,
      eventState,
      eventZip,
      locationId,
      items,
    } = body;

    if (!customerName || !customerEmail || !customerPhone || !eventType || !eventDate || !guestCount || !locationId || !items || items.length === 0) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const eventDateTime = new Date(`${eventDate}T${eventTime || '12:00'}`);
    
    let subtotal = 0;
    const orderItems = [];

    for (const item of items) {
      const menuItem = await prisma.menuItem.findUnique({
        where: { id: item.menuItemId },
      });

      if (!menuItem) {
        return NextResponse.json({ error: `Menu item ${item.menuItemId} not found` }, { status: 400 });
      }

      const pricePerPack = item.packSize === 10 
        ? menuItem.pricePerTray10 
        : item.packSize === 25 
        ? menuItem.pricePerTray25 
        : menuItem.pricePerTray50;

      const lineTotal = pricePerPack * item.quantity;
      subtotal += lineTotal;

      orderItems.push({
        menuItemId: item.menuItemId,
        packSize: item.packSize,
        quantity: item.quantity,
        pricePerPack,
        lineTotal,
      });
    }

    const serviceCharge = subtotal * 0.1;
    const tax = (subtotal + serviceCharge) * 0.07;
    const totalAmount = subtotal + serviceCharge + tax;
    const depositAmount = paymentType === 'deposit' ? totalAmount * 0.3 : totalAmount;

    const order = await prisma.eventOrder.create({
      data: {
        locationId,
        eventType,
        eventDate: eventDateTime,
        guestCount: parseInt(guestCount),
        eventAddress,
        eventCity,
        eventState,
        eventZip,
        customerName,
        customerEmail,
        customerPhone,
        specialNotes: specialNotes || null,
        subtotal,
        serviceCharge,
        tax,
        totalAmount,
        depositAmount: paymentType === 'deposit' ? depositAmount : null,
        status: 'PENDING',
        paymentStatus: 'PENDING',
        items: {
          create: orderItems,
        },
      },
    });

    const checkoutSession = await createCheckoutSession({
      orderId: order.id,
      amount: depositAmount,
      customerEmail,
      customerName,
      isDeposit: paymentType === 'deposit',
    });

    await prisma.eventOrder.update({
      where: { id: order.id },
      data: { stripeSessionId: checkoutSession.id },
    });

    return NextResponse.json({
      orderId: order.id,
      checkoutUrl: checkoutSession.url,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
