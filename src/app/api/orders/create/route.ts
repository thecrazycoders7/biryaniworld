import { NextRequest, NextResponse } from 'next/server';
import { createCheckoutSession } from '@/lib/stripe';

// Disable static generation for this route
export const dynamic = 'force-dynamic';

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

    // Calculate totals from cart items (no database lookup needed)
    for (const item of items) {
      const lineTotal = item.pricePerPack * item.quantity;
      subtotal += lineTotal;

      orderItems.push({
        menuItemId: item.menuItemId,
        packSize: item.packSize,
        quantity: item.quantity,
        pricePerPack: item.pricePerPack,
        lineTotal,
      });
    }

    const serviceCharge = subtotal * 0.1;
    const tax = (subtotal + serviceCharge) * 0.07;
    const totalAmount = subtotal + serviceCharge + tax;
    const depositAmount = paymentType === 'deposit' ? totalAmount * 0.5 : totalAmount;

    // Generate a mock order ID
    const orderId = `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    const checkoutSession = await createCheckoutSession({
      orderId,
      amount: depositAmount,
      customerEmail,
      customerName,
      isDeposit: paymentType === 'deposit',
    });

    return NextResponse.json({
      orderId,
      checkoutUrl: checkoutSession.url,
    });
  } catch (error) {
    console.error('Error creating order:', error);
    return NextResponse.json({ error: 'Failed to create order' }, { status: 500 });
  }
}
