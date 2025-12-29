import { NextResponse } from 'next/server';

// Disable static generation for this route
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    // Return mock data - database not configured
    const mockLocations = [
      {
        id: '1',
        name: 'Atlanta',
        city: 'Atlanta',
        state: 'GA',
        phone: '(404) 555-0101',
      },
      {
        id: '2',
        name: 'Houston',
        city: 'Houston',
        state: 'TX',
        phone: '(713) 555-0202',
      },
      {
        id: '3',
        name: 'Chicago',
        city: 'Chicago',
        state: 'IL',
        phone: '(312) 555-0303',
      },
      {
        id: '4',
        name: 'Dallas',
        city: 'Dallas',
        state: 'TX',
        phone: '(214) 555-0404',
      },
    ];

    return NextResponse.json({ locations: mockLocations });
  } catch (error) {
    console.error('Error fetching locations:', error);
    return NextResponse.json({ locations: [] });
  }
}
