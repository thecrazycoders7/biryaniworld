'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setSubmitMessage('Thank you for contacting us! We will get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="bg-black page-transition">
      <section className="relative min-h-[500px] bg-black border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-orange-600/50 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm bg-black/30">
              We're Here to Help
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            Contact <span className="text-orange-500">Us</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Let's Start Planning Your Perfect Event
          </p>
        </div>
      </section>

      <section className="py-20 bg-zinc-950 animate-fade-in-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Get in <span className="text-orange-500">Touch</span></h2>
              <p className="text-lg text-gray-400 mb-8">
                Have questions about our catering services? Want to discuss your event? 
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500/10 p-3 rounded-full">
                        <Phone className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Phone</h3>
                        <p className="text-gray-400">Atlanta: (404) 555-0101</p>
                        <p className="text-gray-400">Houston: (713) 555-0202</p>
                        <p className="text-gray-400">Chicago: (312) 555-0303</p>
                        <p className="text-gray-400">Dallas: (214) 555-0404</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500/10 p-3 rounded-full">
                        <Mail className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Email</h3>
                        <p className="text-gray-400">info@biryaniworldcatering.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500/10 p-3 rounded-full">
                        <Clock className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Hours</h3>
                        <p className="text-gray-400">Monday - Sunday</p>
                        <p className="text-gray-400">10:00 AM - 10:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-orange-500/10 p-3 rounded-full">
                        <MapPin className="text-orange-500" size={24} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white mb-2">Locations</h3>
                        <p className="text-gray-400">4 Locations Across the USA</p>
                        <p className="text-gray-400">Atlanta • Houston • Chicago • Dallas</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Send Us a Message</h2>
                  
                  {submitMessage && (
                    <div className="mb-6 p-4 bg-green-900/30 border border-green-600/30 rounded-md">
                      <p className="text-green-400">{submitMessage}</p>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-gray-300">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-gray-300">Phone *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(555) 123-4567"
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <div>
                      <Label htmlFor="eventType" className="text-gray-300">Event Type</Label>
                      <select
                        id="eventType"
                        name="eventType"
                        value={formData.eventType}
                        onChange={handleChange as any}
                        className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-900 text-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500"
                      >
                        <option value="" className="bg-zinc-900">Select an event type</option>
                        <option value="wedding" className="bg-zinc-900">Wedding</option>
                        <option value="corporate" className="bg-zinc-900">Corporate Event</option>
                        <option value="birthday" className="bg-zinc-900">Birthday Party</option>
                        <option value="housewarming" className="bg-zinc-900">Housewarming</option>
                        <option value="festival" className="bg-zinc-900">Festival</option>
                        <option value="other" className="bg-zinc-900">Other</option>
                      </select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-300">Message *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us about your event..."
                        rows={5}
                        className="bg-zinc-800/50 border-zinc-700 text-white placeholder:text-gray-500"
                      />
                    </div>

                    <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 text-white" disabled={isSubmitting}>
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
