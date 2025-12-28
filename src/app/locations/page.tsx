import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export default function LocationsPage() {
  const locations = [
    {
      name: 'Biryani World Catering - Atlanta',
      address: '2450 Peachtree Road NW',
      city: 'Atlanta',
      state: 'GA',
      zip: '30305',
      phone: '(404) 555-0101',
      email: 'atlanta@biryaniworldcatering.com',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      description: 'Our flagship location in the heart of Atlanta, serving authentic Indian cuisine for over 25 years.',
    },
    {
      name: 'Biryani World Catering - Houston',
      address: '5555 Westheimer Road',
      city: 'Houston',
      state: 'TX',
      zip: '77056',
      phone: '(713) 555-0202',
      email: 'houston@biryaniworldcatering.com',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      description: 'Bringing the flavors of India to Houston with exceptional catering services.',
    },
    {
      name: 'Biryani World Catering - Chicago',
      address: '1234 N Michigan Avenue',
      city: 'Chicago',
      state: 'IL',
      zip: '60611',
      phone: '(312) 555-0303',
      email: 'chicago@biryaniworldcatering.com',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      description: 'Chicago\'s premier destination for authentic Indian catering and events.',
    },
    {
      name: 'Biryani World Catering - Dallas',
      address: '8787 N Central Expressway',
      city: 'Dallas',
      state: 'TX',
      zip: '75231',
      phone: '(214) 555-0404',
      email: 'dallas@biryaniworldcatering.com',
      hours: 'Mon-Sun: 10:00 AM - 10:00 PM',
      description: 'Serving Dallas with traditional Indian flavors and modern catering excellence.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah & Michael Johnson',
      event: 'Wedding',
      location: 'Atlanta, GA',
      quote: 'Biryani World Catering made our wedding day absolutely perfect! The food was incredible, and our guests are still talking about the Hyderabadi biryani. The team was professional, punctual, and went above and beyond to ensure everything was flawless.',
    },
    {
      name: 'Priya & Raj Patel',
      event: 'Housewarming',
      location: 'Houston, TX',
      quote: 'Our housewarming party was a grand success! The variety of dishes from appetizers to desserts was outstanding. Many of our American friends tried Indian food for the first time and absolutely loved it.',
    },
    {
      name: 'David Chen',
      event: 'Corporate Event',
      location: 'Chicago, IL',
      quote: 'We hired Biryani World for our annual company celebration, and they exceeded all expectations. The presentation was elegant, the flavors were authentic, and they accommodated all dietary restrictions seamlessly.',
    },
    {
      name: 'Anjali Sharma',
      event: 'Birthday Party',
      location: 'Dallas, TX',
      quote: 'My 50th birthday celebration was made memorable by the amazing food from Biryani World. From the tandoori appetizers to the rich curries and biryanis, every dish was a hit. Highly recommend!',
    },
  ];

  return (
    <div className="bg-black page-transition">
      <section className="relative min-h-[500px] bg-black border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-orange-600/50 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm bg-black/30">
              Serving 4 Cities Nationwide
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            Our <span className="text-orange-500">Locations</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Four Locations Serving Communities Across America
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-b border-zinc-800 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Find a Location <span className="text-orange-500">Near You</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              With four locations across the United States, we're ready to serve your catering needs. 
              You can order from any location regardless of where your event is taking place.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {locations.map((location, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-4">{location.name}</h3>
                  <p className="text-gray-400 mb-6">{location.description}</p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start space-x-3">
                      <MapPin className="text-orange-500 mt-1 flex-shrink-0" size={20} />
                      <div>
                        <p className="text-gray-300">{location.address}</p>
                        <p className="text-gray-400">{location.city}, {location.state} {location.zip}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Phone className="text-orange-500 flex-shrink-0" size={20} />
                      <a href={`tel:${location.phone}`} className="text-gray-300 hover:text-orange-500 transition-colors">
                        {location.phone}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Mail className="text-orange-500 flex-shrink-0" size={20} />
                      <a href={`mailto:${location.email}`} className="text-gray-300 hover:text-orange-500 transition-colors">
                        {location.email}
                      </a>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <Clock className="text-orange-500 flex-shrink-0" size={20} />
                      <p className="text-gray-300">{location.hours}</p>
                    </div>
                  </div>

                  <Link href="/order/event">
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Order from This Location</Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black border-b border-zinc-800 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              What Our <span className="text-orange-500">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-400">
              Real stories from real celebrations across our locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                <CardContent className="p-8">
                  <p className="text-lg mb-6 leading-relaxed text-gray-300">&ldquo;{testimonial.quote}&rdquo;</p>
                  <div className="border-t border-zinc-800 pt-4">
                    <p className="font-semibold text-lg text-white">{testimonial.name}</p>
                    <p className="text-gray-500">{testimonial.event} • {testimonial.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Order from <span className="text-orange-500">Any Location</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            No matter where your event is, you can choose to order from any of our four locations. 
            Each kitchen prepares the same authentic recipes with the same commitment to quality.
          </p>
          <Link href="/order/event">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-12 py-6 h-auto">
              Start Your Order
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
