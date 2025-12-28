import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Award, Sparkles, Calendar, Building2, Home, Cake } from 'lucide-react';

export default function HomePage() {
  const stats = [
    { label: 'Years of Excellence', value: '25+' },
    { label: 'Menu Options', value: '200+' },
    { label: 'Staff Members', value: '50+' },
    { label: 'Happy Customers', value: '10,000+' },
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: 'Top Quality Standards',
      description: 'We source the finest ingredients and follow authentic recipes passed down through generations.',
    },
    {
      icon: Heart,
      title: 'Excellence in Every Bite',
      description: 'Every dish is crafted with love, attention to detail, and a commitment to perfection.',
    },
    {
      icon: Users,
      title: 'Outstanding Service',
      description: 'Our professional team ensures your event runs smoothly from setup to cleanup.',
    },
    {
      icon: Sparkles,
      title: 'Traditional Recipes',
      description: 'Authentic flavors that honor Indian culinary heritage while delighting modern palates.',
    },
  ];

  const eventTypes = [
    {
      icon: Heart,
      title: 'Weddings',
      description: 'Make your special day unforgettable with authentic Indian cuisine',
      color: 'bg-pink-50 text-pink-600',
    },
    {
      icon: Building2,
      title: 'Corporate Events',
      description: 'Impress clients and celebrate team success with professional catering',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      icon: Home,
      title: 'Housewarming',
      description: 'Welcome guests to your new home with warm hospitality and delicious food',
      color: 'bg-green-50 text-green-600',
    },
    {
      icon: Cake,
      title: 'Birthday Parties',
      description: 'Celebrate life\'s milestones with flavors that bring joy to every guest',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      icon: Calendar,
      title: 'Festivals',
      description: 'Honor traditions and create memories with authentic festival menus',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      icon: Sparkles,
      title: 'Special Occasions',
      description: 'Any celebration becomes extraordinary with our catering services',
      color: 'bg-yellow-50 text-yellow-600',
    },
  ];

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
  ];

  return (
    <div className="bg-black">
      <section className="relative min-h-screen overflow-hidden bg-black">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/biryaniworldhome.png"
            alt="Background"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />
        </div>

        {/* Content */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 min-h-screen flex items-center">
          <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Text Content */}
            <div className="text-left animate-fade-in-left">
              {/* Location Badge */}
              <div className="mb-8">
                <span className="inline-block px-6 py-2 border border-orange-600/50 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm bg-black/30">
                  Atlanta → Houston → Chicago → Dallas
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white leading-tight">
                Authentic <span className="text-orange-500">Indian Cuisine</span><br />
                For Your Special Events
              </h1>

              {/* Subtitle */}
              <p className="text-xl md:text-2xl text-gray-300 mb-4">
                Premium Indian Catering That Brings People Together
              </p>

              {/* Tagline */}
              <p className="text-lg text-gray-400 italic mb-8">
                From our kitchen to your celebration.
              </p>

              {/* Description */}
              <p className="text-base md:text-lg text-gray-400 mb-10 leading-relaxed">
                Experience the rich heritage of Indian cuisine with our expertly crafted catering services. 
                Whether it's a wedding, corporate event, or intimate gathering, we deliver exceptional food 
                and impeccable service that transforms your celebration into an extraordinary experience.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/order/event">
                  <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-0 text-lg px-10 py-6 h-auto">
                    Plan Your Event
                  </Button>
                </Link>
                <Link href="/order/menu">
                  <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white text-green-600 hover:bg-gray-100 text-lg px-10 py-6 h-auto">
                    Explore Menu
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Side - Hero Image */}
            <div className="relative h-[500px] lg:h-[600px] animate-slide-in-right">
              <div className="relative h-full w-full">
                <Image
                  src="/biryaniworldhome.png"
                  alt="Biryani World Catering"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="text-gray-500 text-sm mb-2">SCROLL</div>
            <div className="w-px h-12 bg-gradient-to-b from-gray-500 to-transparent mx-auto" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl md:text-5xl font-bold text-orange-500 mb-2 transition-transform duration-300 group-hover:scale-110">
                  {stat.value}
                </div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Why Choose <span className="text-orange-500">Biryani World</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We don't just cater events—we create experiences that honor tradition, 
              celebrate culture, and bring people together through the universal language of food.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-orange-600/30 hover-lift transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4">
                    <item.icon size={32} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-zinc-800 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-white">
              Catering for Every <span className="text-orange-500">Celebration</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From intimate gatherings to grand celebrations, we bring authentic Indian flavors to your special moments
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {eventTypes.map((event, index) => (
              <Card key={index} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-500/10 text-orange-500 mb-4">
                    <event.icon size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-3 text-white">{event.title}</h3>
                  <p className="text-gray-400 mb-4">{event.description}</p>
                  <Link href="/order/event" className="text-green-500 font-medium hover:text-green-400 transition-colors">
                    Plan This Event →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-black border-t border-zinc-800 animate-fade-in-up delay-400">
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

          <div className="text-center mt-12">
            <Link href="/gallery">
              <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white text-green-600 hover:bg-gray-100">
                View All Reviews
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to Create <span className="text-orange-500">Unforgettable Memories?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let us bring the authentic flavors of India to your next celebration. 
            Start planning your perfect event today.
          </p>
          <Link href="/order/event">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-12 py-6 h-auto">
              Start Planning Now
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
