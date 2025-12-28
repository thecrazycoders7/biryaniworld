'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function CheckoutPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    specialNotes: '',
    paymentType: 'full',
  });

  useEffect(() => {
    const cart = sessionStorage.getItem('cart');
    const eventDetails = sessionStorage.getItem('eventDetails');
    const location = sessionStorage.getItem('selectedLocation');
    
    if (!cart || !eventDetails || !location) {
      router.push('/order/event');
    }
  }, [router]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const cart = JSON.parse(sessionStorage.getItem('cart') || '[]');
      const eventDetails = JSON.parse(sessionStorage.getItem('eventDetails') || '{}');
      const locationId = sessionStorage.getItem('selectedLocation');

      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          ...eventDetails,
          locationId,
          items: cart,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        sessionStorage.setItem('orderId', data.orderId);
        
        if (data.checkoutUrl) {
          window.location.href = data.checkoutUrl;
        } else {
          router.push('/order/success');
        }
      } else {
        alert(data.error || 'Failed to create order');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2"><span className="text-orange-500">Checkout</span></h1>
          <p className="text-lg text-gray-400">Step 5 of 5: Payment & Confirmation</p>
        </div>

        <Card className="bg-zinc-900/50 border-zinc-800">
          <CardContent className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-4 text-white">Contact Information</h2>
                
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="customerName" className="text-gray-300">Full Name *</Label>
                    <Input
                      id="customerName"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="customerEmail" className="text-gray-300">Email *</Label>
                    <Input
                      id="customerEmail"
                      name="customerEmail"
                      type="email"
                      value={formData.customerEmail}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="customerPhone" className="text-gray-300">Phone *</Label>
                    <Input
                      id="customerPhone"
                      name="customerPhone"
                      type="tel"
                      value={formData.customerPhone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>

                  <div>
                    <Label htmlFor="specialNotes" className="text-gray-300">Special Instructions or Dietary Requirements</Label>
                    <Textarea
                      id="specialNotes"
                      name="specialNotes"
                      value={formData.specialNotes}
                      onChange={handleChange}
                      placeholder="Any allergies, special requests, or additional information..."
                      rows={4}
                      className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500"
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-800 pt-6">
                <h2 className="text-2xl font-bold mb-4 text-white">Payment Options</h2>
                
                <div className="space-y-3">
                  <label className="flex items-center p-4 border border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-800/50 transition-colors">
                    <input
                      type="radio"
                      name="paymentType"
                      value="full"
                      checked={formData.paymentType === 'full'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-semibold text-white">Pay Full Amount Now</p>
                      <p className="text-sm text-gray-400">Complete payment via Stripe</p>
                    </div>
                  </label>

                  <label className="flex items-center p-4 border border-zinc-700 rounded-lg cursor-pointer hover:bg-zinc-800/50 transition-colors">
                    <input
                      type="radio"
                      name="paymentType"
                      value="deposit"
                      checked={formData.paymentType === 'deposit'}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-semibold text-white">Pay 50% Deposit Now</p>
                      <p className="text-sm text-gray-400">Pay remaining balance offline before event</p>
                    </div>
                  </label>
                </div>
              </div>

              <div className="bg-orange-900/20 border border-orange-600/30 rounded-md p-4">
                <p className="text-sm text-orange-400">
                  <strong>Note:</strong> After clicking "Place Order", you'll be redirected to our secure 
                  payment processor (Stripe) to complete your payment. You'll receive a confirmation email 
                  with all order details.
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => router.push('/order/cart')}
                  disabled={loading}
                  className="border-zinc-700 bg-zinc-900 text-gray-300 hover:bg-zinc-800 hover:text-white"
                >
                  Back to Cart
                </Button>
                <Button type="submit" disabled={loading} className="bg-green-600 hover:bg-green-700 text-white disabled:bg-zinc-800 disabled:text-gray-500">
                  {loading ? 'Processing...' : 'Place Order & Pay'}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
