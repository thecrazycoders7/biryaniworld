'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Button } from './ui/button';
import { Menu, X, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Locations', href: '/locations' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="bg-black/95 backdrop-blur-md border-b border-zinc-800 sticky top-0 z-50">
      {/* Contact Info Bar */}
      <div className="bg-zinc-900 border-b border-zinc-800 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-6 text-xs text-white">
            <div className="flex items-center space-x-1">
              <Phone size={12} className="text-orange-500" />
              <span>Atlanta: (404) 555-0101</span>
            </div>
            <span className="text-white">|</span>
            <div className="flex items-center space-x-1">
              <Phone size={12} className="text-orange-500" />
              <span>Houston: (713) 555-0202</span>
            </div>
            <span className="text-white">|</span>
            <div className="flex items-center space-x-1">
              <Phone size={12} className="text-orange-500" />
              <span>Chicago: (312) 555-0303</span>
            </div>
            <span className="text-white">|</span>
            <div className="flex items-center space-x-1">
              <Phone size={12} className="text-orange-500" />
              <span>Dallas: (214) 555-0404</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <Image
                src="/biryaniworldlogo.png"
                alt="Biryani World"
                width={420}
                height={126}
                className="h-24 w-auto"
                priority
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-250 ${
                  pathname === item.href
                    ? 'text-orange-500 bg-orange-500/10'
                    : 'text-gray-300 hover:text-orange-500 hover:bg-orange-500/5'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/order/event">
              <Button size="sm" className="ml-4 bg-orange-600 hover:bg-orange-700 text-white">Plan Your Event</Button>
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-300 hover:text-orange-500 transition-colors"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-orange-500 bg-orange-500/10'
                    : 'text-gray-300 hover:text-orange-500 hover:bg-orange-500/5'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/order/event" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full mt-2 bg-orange-600 hover:bg-orange-700 text-white">Plan Your Event</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
