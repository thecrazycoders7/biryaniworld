'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Leaf, Minus, Plus, ShoppingCart } from 'lucide-react';

interface MenuItem {
  id: string;
  name: string;
  description: string;
  isVegetarian: boolean;
  spiceLevel: string;
  pricePerTray10: number;
  pricePerTray25: number;
  pricePerTray50: number;
  category: string;
}

interface CartItem {
  menuItemId: string;
  name: string;
  packSize: number;
  quantity: number;
  pricePerPack: number;
}

export default function MenuBuilderPage() {
  const router = useRouter();
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [eventDetails, setEventDetails] = useState<any>(null);
  const [locationId, setLocationId] = useState('');

  useEffect(() => {
    const storedEvent = sessionStorage.getItem('eventDetails');
    const storedLocation = sessionStorage.getItem('selectedLocation');
    
    if (!storedEvent || !storedLocation) {
      router.push('/order/event');
      return;
    }

    setEventDetails(JSON.parse(storedEvent));
    setLocationId(storedLocation);

    fetchMenu(storedLocation);
  }, [router]);

  const fetchMenu = async (locationId: string) => {
    try {
      const response = await fetch(`/api/menu?locationId=${locationId}`);
      const data = await response.json();
      
      setMenuItems(data.items || []);
      const uniqueCategories = [...new Set(data.items.map((item: MenuItem) => item.category))];
      setCategories(uniqueCategories);
      if (uniqueCategories.length > 0) {
        setSelectedCategory(uniqueCategories[0]);
      }
    } catch (error) {
      console.error('Error fetching menu:', error);
    } finally {
      setLoading(false);
    }
  };

  const addToCart = (item: MenuItem, packSize: number) => {
    const pricePerPack = packSize === 10 ? item.pricePerTray10 : packSize === 25 ? item.pricePerTray25 : item.pricePerTray50;
    
    setCart(prev => {
      const existing = prev.find(i => i.menuItemId === item.id && i.packSize === packSize);
      if (existing) {
        return prev.map(i => 
          i.menuItemId === item.id && i.packSize === packSize
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }
      return [...prev, {
        menuItemId: item.id,
        name: item.name,
        packSize,
        quantity: 1,
        pricePerPack,
      }];
    });
  };

  const updateQuantity = (menuItemId: string, packSize: number, delta: number) => {
    setCart(prev => {
      const updated = prev.map(item => {
        if (item.menuItemId === menuItemId && item.packSize === packSize) {
          const newQuantity = item.quantity + delta;
          return newQuantity > 0 ? { ...item, quantity: newQuantity } : null;
        }
        return item;
      }).filter(Boolean) as CartItem[];
      return updated;
    });
  };

  const getCartItemQuantity = (menuItemId: string, packSize: number) => {
    const item = cart.find(i => i.menuItemId === menuItemId && i.packSize === packSize);
    return item?.quantity || 0;
  };

  const getTotalItems = () => cart.reduce((sum, item) => sum + item.quantity, 0);
  
  const getTotalServings = () => cart.reduce((sum, item) => sum + (item.packSize * item.quantity), 0);

  const handleContinue = () => {
    if (cart.length === 0) {
      alert('Please add at least one item to your cart');
      return;
    }
    
    sessionStorage.setItem('cart', JSON.stringify(cart));
    router.push('/order/cart');
  };

  const getSpiceIcon = (level: string) => {
    const count = level === 'MILD' ? 1 : level === 'MEDIUM' ? 2 : level === 'HOT' ? 3 : 4;
    return '🌶️'.repeat(count);
  };

  const filteredItems = menuItems.filter(item => item.category === selectedCategory);

  if (loading) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-300">Loading menu...</p>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Build Your <span className="text-orange-500">Menu</span></h1>
          <p className="text-lg text-gray-400">Step 3 of 5: Select Items</p>
          {eventDetails && (
            <p className="text-gray-400 mt-2">
              For {eventDetails.guestCount} guests • {eventDetails.eventType}
            </p>
          )}
        </div>

        {eventDetails && (
          <div className="bg-orange-900/20 border border-orange-600/30 rounded-md p-4 mb-8 max-w-4xl mx-auto">
            <p className="text-orange-400">
              <strong>Recommendation:</strong> For {eventDetails.guestCount} guests, we suggest selecting 
              {' '}{Math.ceil(parseInt(eventDetails.guestCount) / 40)} appetizers, 
              {' '}{Math.ceil(parseInt(eventDetails.guestCount) / 30)} main courses, and 
              {' '}{Math.ceil(parseInt(eventDetails.guestCount) / 50)} desserts.
            </p>
          </div>
        )}

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <Card className="sticky top-4 bg-zinc-900/50 border-zinc-800">
              <CardContent className="p-4">
                <h3 className="font-semibold mb-4 text-white">Categories</h3>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors ${
                        selectedCategory === category
                          ? 'bg-orange-600 text-white font-semibold'
                          : 'bg-zinc-800 text-gray-300 hover:bg-zinc-700'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-zinc-800">
                  <h3 className="font-semibold mb-2 text-white">Cart Summary</h3>
                  <p className="text-sm text-gray-400">Items: {getTotalItems()}</p>
                  <p className="text-sm text-gray-400">Servings: {getTotalServings()}</p>
                  <Button 
                    className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white disabled:bg-zinc-800 disabled:text-gray-500" 
                    onClick={handleContinue}
                    disabled={cart.length === 0}
                  >
                    <ShoppingCart size={16} className="mr-2" />
                    Review Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-3">
            <div className="space-y-6">
              {filteredItems.map(item => (
                <Card key={item.id} className="bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/70 transition-all">
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-xl font-bold text-white">{item.name}</h3>
                          {item.isVegetarian && (
                            <Badge variant="secondary" className="bg-green-900/30 text-green-400 border-green-600/30">
                              <Leaf size={12} className="mr-1" />
                              Veg
                            </Badge>
                          )}
                          <Badge variant="outline" className="border-zinc-700 text-gray-400">
                            {getSpiceIcon(item.spiceLevel)}
                          </Badge>
                        </div>
                        <p className="text-gray-400">{item.description}</p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { size: 10, price: item.pricePerTray10 },
                        { size: 25, price: item.pricePerTray25 },
                        { size: 50, price: item.pricePerTray50 },
                      ].map(({ size, price }) => {
                        const quantity = getCartItemQuantity(item.id, size);
                        return (
                          <div key={size} className="border border-zinc-800 rounded-lg p-4 bg-zinc-800/30">
                            <p className="font-semibold mb-1 text-gray-300">Tray for {size}</p>
                            <p className="text-2xl font-bold text-orange-500 mb-3">
                              ${price.toFixed(2)}
                            </p>
                            {quantity === 0 ? (
                              <Button
                                size="sm"
                                className="w-full bg-green-600 hover:bg-green-700 text-white"
                                onClick={() => addToCart(item, size)}
                              >
                                Add
                              </Button>
                            ) : (
                              <div className="flex items-center justify-between bg-zinc-700 rounded-md p-1">
                                <button
                                  onClick={() => updateQuantity(item.id, size, -1)}
                                  className="p-2 hover:bg-zinc-600 rounded text-gray-300"
                                >
                                  <Minus size={16} />
                                </button>
                                <span className="font-semibold text-white">{quantity}</span>
                                <button
                                  onClick={() => updateQuantity(item.id, size, 1)}
                                  className="p-2 hover:bg-zinc-600 rounded text-gray-300"
                                >
                                  <Plus size={16} />
                                </button>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between">
          <Button variant="outline" onClick={() => router.push('/order/location')} className="border-zinc-700 text-gray-300 hover:bg-zinc-800 hover:text-white">
            Back
          </Button>
          <Button onClick={handleContinue} disabled={cart.length === 0} className="bg-orange-600 hover:bg-orange-700 text-white disabled:bg-zinc-800 disabled:text-gray-500">
            Continue to Cart
          </Button>
        </div>
      </div>
    </div>
  );
}
