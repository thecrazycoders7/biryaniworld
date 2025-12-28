'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  const [orderId, setOrderId] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('orderId');
    if (stored) {
      setOrderId(stored);
      sessionStorage.clear();
    }
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="text-center">
          <CardContent className="p-12">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-100 mb-6">
              <CheckCircle className="text-green-600" size={48} />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Order Confirmed!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8">
              Thank you for choosing Biryani World Catering
            </p>

            {orderId && (
              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <p className="text-sm text-gray-600 mb-2">Order Number</p>
                <p className="text-2xl font-bold text-orange-600">{orderId.slice(0, 8).toUpperCase()}</p>
              </div>
            )}

            <div className="text-left bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
              <h2 className="font-semibold text-lg mb-3">What Happens Next?</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>You'll receive a confirmation email with your order details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>Our team will review your order and contact you within 24 hours</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>We'll confirm all details and finalize your menu</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-600 mr-2">✓</span>
                  <span>On your event day, we'll arrive early to set up everything perfectly</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                If you have any questions, please contact us at{' '}
                <a href="tel:4045550101" className="text-orange-600 font-semibold">
                  (404) 555-0101
                </a>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/">
                  <Button size="lg">Return to Home</Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">Contact Us</Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
