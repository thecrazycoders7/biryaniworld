import { Card, CardContent } from '@/components/ui/card';

export default function GalleryPage() {
  const galleryCategories = [
    {
      title: 'Wedding Events',
      description: 'Beautiful moments from wedding celebrations',
      count: 12,
    },
    {
      title: 'Corporate Events',
      description: 'Professional catering for business celebrations',
      count: 8,
    },
    {
      title: 'Food Presentations',
      description: 'Our signature dishes and buffet setups',
      count: 15,
    },
    {
      title: 'Cultural Celebrations',
      description: 'Festival and traditional event catering',
      count: 10,
    },
  ];

  return (
    <div className="bg-black page-transition">
      <section className="relative min-h-[500px] bg-black border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-orange-600/50 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm bg-black/30">
              Our Portfolio
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            <span className="text-orange-500">Gallery</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            A Visual Journey Through Our Celebrations
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Our Work in <span className="text-orange-500">Pictures</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Explore our portfolio of events, from intimate gatherings to grand celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {galleryCategories.map((category, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                <CardContent className="p-6">
                  <div className="bg-gradient-to-br from-orange-900/20 to-green-900/20 h-48 rounded-lg mb-4 flex items-center justify-center border border-zinc-800">
                    <span className="text-6xl">📸</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{category.title}</h3>
                  <p className="text-gray-400 mb-2">{category.description}</p>
                  <p className="text-sm text-green-500 font-medium">{category.count} Photos</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-16 text-center">
            <p className="text-gray-400 mb-4">
              Images coming soon! We're currently updating our gallery with stunning photos from recent events.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-black border-t border-zinc-800 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">What Our <span className="text-orange-500">Clients Say</span></h2>
            <p className="text-xl text-gray-400">
              Real stories from real celebrations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-0 hover-lift transition-all duration-300 shadow-lg">
                <CardContent className="p-6">
                  {/* Header with profile and Google icon */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      {/* Profile Initial Circle */}
                      <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center text-white font-semibold">
                        {testimonial.initial}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{testimonial.name}</p>
                        <p className="text-xs text-gray-500">{testimonial.timeAgo}</p>
                      </div>
                    </div>
                    {/* Google Icon */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                  </div>

                  {/* Star Rating */}
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    ))}
                    <span className="ml-2 text-sm font-semibold text-gray-900">{testimonial.rating}</span>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {testimonial.quote}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const testimonials = [
  {
    name: 'Sarah Johnson',
    event: 'Wedding',
    location: 'Atlanta, GA',
    rating: 5.0,
    timeAgo: '2 weeks ago',
    quote: 'We cannot thank Biryani World Catering enough for making our wedding day absolutely perfect! The Hyderabadi Chicken Biryani was a huge hit with our 250 guests. Our guests are still raving about the food weeks later!',
    initial: 'S',
  },
  {
    name: 'Priya Patel',
    event: 'Housewarming',
    location: 'Houston, TX',
    rating: 5.0,
    timeAgo: '1 month ago',
    quote: 'Our housewarming party was a grand success! The variety of dishes from appetizers to desserts was outstanding. Many of our American friends tried Indian food for the first time and absolutely loved it.',
    initial: 'P',
  },
  {
    name: 'David Chen',
    event: 'Corporate Event',
    location: 'Chicago, IL',
    rating: 5.0,
    timeAgo: '3 weeks ago',
    quote: 'Exceptional catering service for our corporate event. Professional team, delicious food, and everything was perfectly organized. Highly recommend for any business function!',
    initial: 'D',
  },
  {
    name: 'Anjali Sharma',
    event: 'Birthday Party',
    location: 'Dallas, TX',
    rating: 5.0,
    timeAgo: '1 week ago',
    quote: 'My 50th birthday celebration was made memorable by the amazing food from Biryani World. From the tandoori appetizers to the rich curries and biryanis, every dish was a hit. Highly recommend!',
    initial: 'A',
  },
  {
    name: 'Michael Rodriguez',
    event: 'Anniversary',
    location: 'Houston, TX',
    rating: 5.0,
    timeAgo: '2 months ago',
    quote: 'The food quality and presentation exceeded our expectations. The team was professional and accommodating. Our anniversary party was a huge success thanks to Biryani World!',
    initial: 'M',
  },
  {
    name: 'Kavitha Reddy',
    event: 'Festival Celebration',
    location: 'Atlanta, GA',
    rating: 5.0,
    timeAgo: '1 month ago',
    quote: 'The delivery service is incredible! Food arrives hot and fresh every single time. Love the variety of options and the portion sizes are perfect for our family. The quality is consistently excellent!',
    initial: 'K',
  },
];
