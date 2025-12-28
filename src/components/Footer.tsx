import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-zinc-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold font-serif text-orange-500 mb-4">
              Biryani World Catering
            </h3>
            <p className="text-gray-400 text-sm">
              Authentic Indian catering for weddings, corporate events, and special celebrations across America.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors duration-250">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-orange-500 transition-colors duration-250">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/locations" className="text-gray-400 hover:text-orange-500 transition-colors duration-250">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-orange-500 transition-colors duration-250">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors duration-250">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li className="text-gray-400">Wedding Catering</li>
              <li className="text-gray-400">Corporate Events</li>
              <li className="text-gray-400">Birthday Parties</li>
              <li className="text-gray-400">Housewarming</li>
              <li className="text-gray-400">Festival Celebrations</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-2">
                <Phone size={16} className="text-orange-500 mt-1" />
                <span className="text-gray-400">(404) 555-0101</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail size={16} className="text-orange-500 mt-1" />
                <span className="text-gray-400">info@biryaniworldcatering.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin size={16} className="text-orange-500 mt-1" />
                <span className="text-gray-400">4 Locations across the USA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Biryani World Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
