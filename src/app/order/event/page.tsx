'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function EventSetupPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    eventType: '',
    eventDate: '',
    eventTime: '',
    guestCount: '',
    eventAddress: '',
    eventCity: '',
    eventState: '',
    eventZip: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const eventDateTime = new Date(`${formData.eventDate}T${formData.eventTime}`);
    const now = new Date();
    const minDate = new Date(now.getTime() + 48 * 60 * 60 * 1000);

    if (eventDateTime < minDate) {
      setError('Event must be scheduled at least 48 hours in advance.');
      return;
    }

    const guestCount = parseInt(formData.guestCount);
    if (guestCount < 1) {
      setError('Please enter a valid guest count.');
      return;
    }

    sessionStorage.setItem('eventDetails', JSON.stringify(formData));
    router.push('/order/location');
  };

  return (
    <div className="bg-black min-h-screen py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">Plan Your <span className="text-orange-500">Event</span></h1>
          <p className="text-lg text-gray-400">Step 1 of 5: Event Details</p>
        </div>

        {/* Services Domain Highlight */}
        <div className="mb-6 p-6 bg-gradient-to-r from-orange-900/20 to-orange-800/20 border-2 border-orange-600/40 rounded-lg backdrop-blur-sm">
          <div className="text-center">
            <h3 className="text-xl font-bold text-orange-500 mb-2">🍛 Authentic Indian Catering Services 🍛</h3>
            <p className="text-gray-300 text-sm mb-3">
              Serving <span className="text-orange-500 font-semibold">Atlanta • Houston • Chicago • Dallas</span>
            </p>
            <div className="flex flex-wrap justify-center gap-2 text-xs">
              <span className="px-3 py-1 bg-green-500/10 border border-green-600/30 rounded-full text-green-400">Weddings</span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-600/30 rounded-full text-green-400">Corporate Events</span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-600/30 rounded-full text-green-400">Birthday Parties</span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-600/30 rounded-full text-green-400">Religious Ceremonies</span>
              <span className="px-3 py-1 bg-green-500/10 border border-green-600/30 rounded-full text-green-400">Family Gatherings</span>
            </div>
          </div>
        </div>

        <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white text-2xl">Tell Us About Your Event</CardTitle>
          </CardHeader>
          <CardContent>
            {error && (
              <div className="mb-6 p-4 bg-red-900/30 border border-red-600/30 rounded-md">
                <p className="text-red-400">{error}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="eventType" className="text-gray-300">Event Type *</Label>
                <select
                  id="eventType"
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  required
                  className="flex h-10 w-full rounded-md border border-zinc-700 bg-zinc-900 text-white px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500"
                >
                  <option value="" className="bg-zinc-900">Select event type</option>
                  
                  <optgroup label="Wedding & Marriage Events" className="bg-zinc-900">
                    <option value="Wedding (Pelli)" className="bg-zinc-900">Wedding (Pelli)</option>
                    <option value="Wedding Reception" className="bg-zinc-900">Wedding Reception</option>
                    <option value="Pre-Wedding Ceremony" className="bg-zinc-900">Pre-Wedding Ceremony</option>
                    <option value="Post-Wedding Celebration" className="bg-zinc-900">Post-Wedding Celebration</option>
                    <option value="Engagement (Nischitartham)" className="bg-zinc-900">Engagement (Nischitartham)</option>
                    <option value="Pellikoduku / Pellikuthuru Ceremony" className="bg-zinc-900">Pellikoduku / Pellikuthuru Ceremony</option>
                    <option value="Mehndi Function" className="bg-zinc-900">Mehndi Function</option>
                    <option value="Sangeet / Music Night" className="bg-zinc-900">Sangeet / Music Night</option>
                  </optgroup>

                  <optgroup label="Baby & Child Ceremonies" className="bg-zinc-900">
                    <option value="Seemantham (Baby Shower)" className="bg-zinc-900">Seemantham (Baby Shower)</option>
                    <option value="Barasala (Naming Ceremony)" className="bg-zinc-900">Barasala (Naming Ceremony)</option>
                    <option value="Annaprasana (First Rice Ceremony)" className="bg-zinc-900">Annaprasana (First Rice Ceremony)</option>
                    <option value="Mundan (Hair Tonsure Ceremony)" className="bg-zinc-900">Mundan (Hair Tonsure Ceremony)</option>
                    <option value="First Birthday Celebration" className="bg-zinc-900">First Birthday Celebration</option>
                    <option value="Kids Birthday Party" className="bg-zinc-900">Kids Birthday Party</option>
                    <option value="Thread Ceremony (Upanayanam)" className="bg-zinc-900">Thread Ceremony (Upanayanam)</option>
                  </optgroup>

                  <optgroup label="Birthday & Milestone Celebrations" className="bg-zinc-900">
                    <option value="Birthday Party" className="bg-zinc-900">Birthday Party</option>
                    <option value="18th Birthday Celebration" className="bg-zinc-900">18th Birthday Celebration</option>
                    <option value="25th Birthday Celebration" className="bg-zinc-900">25th Birthday Celebration</option>
                    <option value="50th Birthday Celebration" className="bg-zinc-900">50th Birthday Celebration</option>
                    <option value="60th Birthday Celebration (Shashti Poorthi)" className="bg-zinc-900">60th Birthday Celebration (Shashti Poorthi)</option>
                    <option value="70th Birthday Celebration" className="bg-zinc-900">70th Birthday Celebration</option>
                    <option value="80th Birthday Celebration" className="bg-zinc-900">80th Birthday Celebration</option>
                    <option value="90th Birthday Celebration" className="bg-zinc-900">90th Birthday Celebration</option>
                    <option value="Surprise Birthday Party" className="bg-zinc-900">Surprise Birthday Party</option>
                  </optgroup>

                  <optgroup label="Anniversary & Elder Celebrations" className="bg-zinc-900">
                    <option value="Wedding Anniversary" className="bg-zinc-900">Wedding Anniversary</option>
                    <option value="Silver Jubilee (25 Years)" className="bg-zinc-900">Silver Jubilee (25 Years)</option>
                    <option value="Golden Jubilee (50 Years)" className="bg-zinc-900">Golden Jubilee (50 Years)</option>
                    <option value="Diamond Jubilee (60 Years)" className="bg-zinc-900">Diamond Jubilee (60 Years)</option>
                    <option value="Sathabhishekam Ceremony" className="bg-zinc-900">Sathabhishekam Ceremony</option>
                    <option value="Retirement Celebration" className="bg-zinc-900">Retirement Celebration</option>
                    <option value="Felicitation Function" className="bg-zinc-900">Felicitation Function</option>
                  </optgroup>

                  <optgroup label="Religious & Traditional Telugu Events" className="bg-zinc-900">
                    <option value="Gruhapravesam / House Warming" className="bg-zinc-900">Gruhapravesam / House Warming</option>
                    <option value="Satyanarayana Swamy Vratham" className="bg-zinc-900">Satyanarayana Swamy Vratham</option>
                    <option value="Varalakshmi Vratham" className="bg-zinc-900">Varalakshmi Vratham</option>
                    <option value="Ganesh Pooja" className="bg-zinc-900">Ganesh Pooja</option>
                    <option value="Lakshmi Pooja" className="bg-zinc-900">Lakshmi Pooja</option>
                    <option value="Ayudha Pooja" className="bg-zinc-900">Ayudha Pooja</option>
                    <option value="Navaratri Celebrations" className="bg-zinc-900">Navaratri Celebrations</option>
                    <option value="Ugadi Festival" className="bg-zinc-900">Ugadi Festival</option>
                    <option value="Diwali Celebration" className="bg-zinc-900">Diwali Celebration</option>
                    <option value="Sankranti / Bhogi / Kanuma Functions" className="bg-zinc-900">Sankranti / Bhogi / Kanuma Functions</option>
                    <option value="Karthika Masam Pooja" className="bg-zinc-900">Karthika Masam Pooja</option>
                    <option value="Vratam / Homam / Havan" className="bg-zinc-900">Vratam / Homam / Havan</option>
                  </optgroup>

                  <optgroup label="Family & Social Gatherings" className="bg-zinc-900">
                    <option value="Family Get-Together" className="bg-zinc-900">Family Get-Together</option>
                    <option value="Relatives Meet" className="bg-zinc-900">Relatives Meet</option>
                    <option value="House Party" className="bg-zinc-900">House Party</option>
                    <option value="Naming Day Celebration" className="bg-zinc-900">Naming Day Celebration</option>
                    <option value="Farewell Party" className="bg-zinc-900">Farewell Party</option>
                    <option value="Reunion Party" className="bg-zinc-900">Reunion Party</option>
                  </optgroup>

                  <optgroup label="Corporate & Professional Events" className="bg-zinc-900">
                    <option value="Corporate Events" className="bg-zinc-900">Corporate Events</option>
                    <option value="Office Inauguration" className="bg-zinc-900">Office Inauguration</option>
                    <option value="Product Launch" className="bg-zinc-900">Product Launch</option>
                    <option value="Business Meetings" className="bg-zinc-900">Business Meetings</option>
                    <option value="Annual Day Celebrations" className="bg-zinc-900">Annual Day Celebrations</option>
                    <option value="Employee Engagement Events" className="bg-zinc-900">Employee Engagement Events</option>
                    <option value="Corporate Lunch / Dinner" className="bg-zinc-900">Corporate Lunch / Dinner</option>
                    <option value="Client Meetings" className="bg-zinc-900">Client Meetings</option>
                  </optgroup>

                  <optgroup label="Memorial & Community Events" className="bg-zinc-900">
                    <option value="Shraddha / Memorial Ceremony" className="bg-zinc-900">Shraddha / Memorial Ceremony</option>
                    <option value="Community Functions" className="bg-zinc-900">Community Functions</option>
                    <option value="Temple Annadanam" className="bg-zinc-900">Temple Annadanam</option>
                    <option value="Village / Caste Association Events" className="bg-zinc-900">Village / Caste Association Events</option>
                  </optgroup>

                  <option value="Other" className="bg-zinc-900">Other</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="eventDate" className="text-gray-300">Event Date *</Label>
                  <Input
                    id="eventDate"
                    name="eventDate"
                    type="date"
                    value={formData.eventDate}
                    onChange={handleChange}
                    required
                    min={new Date(Date.now() + 48 * 60 * 60 * 1000).toISOString().split('T')[0]}
                    className="bg-zinc-900 border-zinc-700 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-70 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                  />
                </div>

                <div>
                  <Label htmlFor="eventTime" className="text-gray-300">Event Time *</Label>
                  <Input
                    id="eventTime"
                    name="eventTime"
                    type="time"
                    value={formData.eventTime}
                    onChange={handleChange}
                    required
                    className="bg-zinc-900 border-zinc-700 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500 [&::-webkit-calendar-picker-indicator]:filter [&::-webkit-calendar-picker-indicator]:invert [&::-webkit-calendar-picker-indicator]:opacity-70 [&::-webkit-calendar-picker-indicator]:hover:opacity-100"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="guestCount" className="text-gray-300">Number of Guests *</Label>
                <Input
                  id="guestCount"
                  name="guestCount"
                  type="number"
                  min="1"
                  value={formData.guestCount}
                  onChange={handleChange}
                  required
                  placeholder="Enter guest count"
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500"
                />
              </div>

              <div>
                <Label htmlFor="eventAddress" className="text-gray-300">Event Address *</Label>
                <Input
                  id="eventAddress"
                  name="eventAddress"
                  value={formData.eventAddress}
                  onChange={handleChange}
                  required
                  placeholder="Street address"
                  className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500"
                />
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <Label htmlFor="eventCity" className="text-gray-300">City *</Label>
                  <Input
                    id="eventCity"
                    name="eventCity"
                    value={formData.eventCity}
                    onChange={handleChange}
                    required
                    className="bg-zinc-900 border-zinc-700 text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500"
                  />
                </div>

                <div>
                  <Label htmlFor="eventState" className="text-gray-300">State *</Label>
                  <Input
                    id="eventState"
                    name="eventState"
                    value={formData.eventState}
                    onChange={handleChange}
                    required
                    placeholder="GA"
                    maxLength={2}
                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500"
                  />
                </div>

                <div>
                  <Label htmlFor="eventZip" className="text-gray-300">ZIP Code *</Label>
                  <Input
                    id="eventZip"
                    name="eventZip"
                    value={formData.eventZip}
                    onChange={handleChange}
                    required
                    placeholder="30305"
                    className="bg-zinc-900 border-zinc-700 text-white placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-600 focus-visible:border-zinc-500"
                  />
                </div>
              </div>

              <div className="bg-orange-900/20 border border-orange-600/30 rounded-md p-4">
                <p className="text-sm text-orange-400">
                  <strong>Note:</strong> All catering orders must be placed at least 48 hours in advance.
                </p>
              </div>

              <div className="flex justify-between pt-4">
                <Button type="button" variant="outline" onClick={() => router.push('/')} className="border-zinc-700 bg-zinc-900 text-gray-300 hover:bg-zinc-800 hover:text-white">
                  Cancel
                </Button>
                <Button type="submit" className="bg-orange-600 hover:bg-orange-700 text-white">
                  Continue to Location Selection
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
