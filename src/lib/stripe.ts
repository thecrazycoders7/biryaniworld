import Stripe from 'stripe';

// Use placeholder for build process if STRIPE_SECRET_KEY is not available
const stripeSecretKey = process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder_for_build';

export const stripe = new Stripe(stripeSecretKey, {
  apiVersion: '2025-12-15.clover',
  typescript: true,
});

export async function createCheckoutSession({
  orderId,
  amount,
  customerEmail,
  customerName,
  isDeposit = false,
}: {
  orderId: string;
  amount: number;
  customerEmail: string;
  customerName: string;
  isDeposit?: boolean;
}) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: isDeposit ? 'Catering Order Deposit' : 'Catering Order',
            description: `Order #${orderId.slice(0, 8)}`,
          },
          unit_amount: Math.round(amount * 100),
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXTAUTH_URL}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/order/checkout?orderId=${orderId}`,
    customer_email: customerEmail,
    metadata: {
      orderId,
      isDeposit: isDeposit.toString(),
    },
    automatic_tax: {
      enabled: true,
    },
  });

  return session;
}

export async function retrieveSession(sessionId: string) {
  return await stripe.checkout.sessions.retrieve(sessionId);
}
