'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Trash2 } from 'lucide-react';

interface CartItem {
  menuItemId: string;
  name: string;
  packSize: number;
  quantity: number;
  pricePerPack: number;
}

export default function CartPage() {
  const router = useRouter();
  const [cart, setCart] = useState<CartItem[]>([]);
  const [eventDetails, setEventDetails] = useState<any>(null);

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    const storedEvent = sessionStorage.getItem('eventDetails');
    
    if (!storedCart || !storedEvent) {
      router.push('/order/event');
      return;
    }

    setCart(JSON.parse(storedCart));
    setEventDetails(JSON.parse(storedEvent));
  }, [router]);

  const removeItem = (menuItemId: string, packSize: number) => {
    const updated = cart.filter(item => !(item.menuItemId === menuItemId && item.packSize === packSize));
    setCart(updated);
    sessionStorage.setItem('cart', JSON.stringify(updated));
  };

  const updateQuantity = (menuItemId: string, packSize: number, newQuantity: number) => {
    if (newQuantity < 1) {
      removeItem(menuItemId, packSize);
      return;
    }
    
    const updated = cart.map(item =>
      item.menuItemId === menuItemId && item.packSize === packSize
        ? { ...item, quantity: newQuantity }
        : item
    );
    setCart(updated);
    sessionStorage.setItem('cart', JSON.stringify(updated));
  };

  const getSubtotal = () => cart.reduce((sum, item) => sum + (item.pricePerPack * item.quantity), 0);
  
  const getTotalServings = () => cart.reduce((sum, item) => sum + (item.packSize * item.quantity), 0);

  const getServiceCharge = () => getSubtotal() * 0.1;
  
  const getTax = () => (getSubtotal() + getServiceCharge()) * 0.07;
  
  const getTotal = () => getSubtotal() + getServiceCharge() + getTax();

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert('Your cart is empty');
      return;
    }
    router.push('/order/checkout');
  };

  if (!eventDetails) return null;

  const guestCount = parseInt(eventDetails.guestCount);
  const totalServings = getTotalServings();
  const coveragePercentage = (totalServings / guestCount) * 100;

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Review Your <span className="text-orange-500">Order</span></h1>
          <p className="text-lg text-gray-400">Step 4 of 5: Cart Review</p>
        </div>

        {coveragePercentage < 80 && (
          <div className="bg-orange-900/20 border border-orange-600/30 rounded-md p-4 mb-6">
            <p className="text-orange-400">
              <strong>Notice:</strong> Your current selection provides approximately {totalServings} servings 
              for {guestCount} guests ({coveragePercentage.toFixed(0)}% coverage). We recommend adding more items 
              to ensure all guests are well-fed.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <h2 className="text-2xl font-bold mb-6 text-white">Cart Items</h2>
                
                {cart.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-gray-400 mb-4">Your cart is empty</p>
                    <Button onClick={() => router.push('/order/menu')} className="bg-orange-600 hover:bg-orange-700 text-white">
                      Add Items
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {cart.map((item, index) => (
                      <div key={index} className="flex items-center justify-between border-b border-zinc-800 pb-4">
                        <div className="flex-1">
                          <h3 className="font-semibold text-lg text-white">{item.name}</h3>
                          <p className="text-gray-400">Tray for {item.packSize} people</p>
                          <p className="text-sm text-gray-500">
                            ${item.pricePerPack.toFixed(2)} × {item.quantity}
                          </p>
                        </div>
                        
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQuantity(item.menuItemId, item.packSize, item.quantity - 1)}
                              className="px-3 py-1 border border-zinc-700 rounded hover:bg-zinc-800 text-gray-300"
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-semibold text-white">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.menuItemId, item.packSize, item.quantity + 1)}
                              className="px-3 py-1 border border-zinc-700 rounded hover:bg-zinc-800 text-gray-300"
                            >
                              +
                            </button>
                          </div>
                          
                          <div className="w-24 text-right font-semibold text-orange-500">
                            ${(item.pricePerPack * item.quantity).toFixed(2)}
                          </div>
                          
                          <button
                            onClick={() => removeItem(item.menuItemId, item.packSize)}
                            className="text-red-500 hover:text-red-400"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-4 bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-6">
                <h2 className="text-xl font-bold mb-4 text-white">Order Summary</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="font-semibold text-gray-300">${getSubtotal().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Service Charge (10%)</span>
                    <span className="font-semibold text-gray-300">${getServiceCharge().toFixed(2)}</span>
                  </div>
                  
                  <div className="flex justify-between">
                    <span className="text-gray-400">Tax (7%)</span>
                    <span className="font-semibold text-gray-300">${getTax().toFixed(2)}</span>
                  </div>
                  
                  <div className="border-t border-zinc-800 pt-3 flex justify-between text-lg">
                    <span className="font-bold text-white">Total</span>
                    <span className="font-bold text-orange-500">${getTotal().toFixed(2)}</span>
                  </div>
                </div>

                <div className="bg-zinc-800/50 rounded-md p-4 mb-4">
                  <h3 className="font-semibold mb-2 text-white">Event Details</h3>
                  <p className="text-sm text-gray-400">Type: {eventDetails.eventType}</p>
                  <p className="text-sm text-gray-400">Date: {eventDetails.eventDate}</p>
                  <p className="text-sm text-gray-400">Guests: {eventDetails.guestCount}</p>
                  <p className="text-sm text-gray-400">Servings: {totalServings}</p>
                </div>

                <Button 
                  className="w-full mb-3 bg-green-600 hover:bg-green-700 text-white disabled:bg-zinc-800 disabled:text-gray-500" 
                  onClick={handleCheckout}
                  disabled={cart.length === 0}
                >
                  Proceed to Checkout
                </Button>
                
                <Button 
                  variant="outline" 
                  className="w-full border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white"
                  onClick={() => router.push('/order/menu')}
                >
                  Add More Items
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={() => router.push('/order/menu')} className="border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white">
            Back to Menu
          </Button>
        </div>
      </div>
    </div>
  );
}
