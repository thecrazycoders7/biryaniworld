'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Clock, Check } from 'lucide-react';

export default function LocationSelectionPage() {
  const router = useRouter();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [eventDetails, setEventDetails] = useState<any>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem('eventDetails');
    if (!stored) {
      router.push('/order/event');
      return;
    }
    setEventDetails(JSON.parse(stored));
  }, [router]);

  const locations = [
    {
      id: 'loc-atlanta',
      name: 'Biryani World Catering - Atlanta',
      address: '2450 Peachtree Road NW',
      city: 'Atlanta',
      state: 'GA',
      zip: '30305',
      phone: '(404) 555-0101',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
    },
    {
      id: 'loc-houston',
      name: 'Biryani World Catering - Houston',
      address: '5555 Westheimer Road',
      city: 'Houston',
      state: 'TX',
      zip: '77056',
      phone: '(713) 555-0202',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
    },
    {
      id: 'loc-chicago',
      name: 'Biryani World Catering - Chicago',
      address: '1234 N Michigan Avenue',
      city: 'Chicago',
      state: 'IL',
      zip: '60611',
      phone: '(312) 555-0303',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
    },
    {
      id: 'loc-dallas',
      name: 'Biryani World Catering - Dallas',
      address: '8787 N Central Expressway',
      city: 'Dallas',
      state: 'TX',
      zip: '75231',
      phone: '(214) 555-0404',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
    },
  ];

  const handleContinue = () => {
    if (!selectedLocation) return;
    
    sessionStorage.setItem('selectedLocation', selectedLocation);
    router.push('/order/menu');
  };

  if (!eventDetails) return null;

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Select Your <span className="text-orange-500">Kitchen</span></h1>
          <p className="text-lg text-gray-400">Step 2 of 5: Choose Location</p>
        </div>

        <div className="bg-orange-900/20 border border-orange-600/30 rounded-md p-4 mb-8 max-w-4xl mx-auto">
          <p className="text-orange-400">
            <strong>You can order from any of our locations!</strong> Choose your favorite kitchen 
            regardless of where your event is taking place. All locations prepare the same authentic recipes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {locations.map((location) => (
            <Card
              key={location.id}
              className={`cursor-pointer transition-all ${
                selectedLocation === location.id
                  ? 'ring-2 ring-green-500 bg-zinc-900/70 border-green-600/50'
                  : 'bg-zinc-900/50 border-zinc-800 hover:bg-zinc-900/70 hover:border-green-600/30'
              }`}
              onClick={() => setSelectedLocation(location.id)}
            >
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white">{location.name}</h3>
                  {selectedLocation === location.id && (
                    <div className="bg-green-500 text-white rounded-full p-1">
                      <Check size={20} />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <p className="text-gray-300">{location.address}</p>
                      <p className="text-gray-400">{location.city}, {location.state} {location.zip}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="text-orange-500 flex-shrink-0" size={20} />
                    <p className="text-gray-300">{location.phone}</p>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="text-orange-500 flex-shrink-0" size={20} />
                    <p className="text-gray-300">{location.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-between">
          <Button variant="outline" onClick={() => router.push('/order/event')} className="border-zinc-700 bg-zinc-900 text-gray-300 hover:bg-zinc-800 hover:text-white">
            Back
          </Button>
          <Button onClick={handleContinue} disabled={!selectedLocation} className="bg-orange-600 hover:bg-orange-700 text-white disabled:bg-zinc-800 disabled:text-gray-500">
            Continue to Menu Selection
          </Button>
        </div>
      </div>
    </div>
  );
}
