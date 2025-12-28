import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const locationId = searchParams.get('locationId');

    if (!locationId) {
      return NextResponse.json({ error: 'Location ID is required' }, { status: 400 });
    }

    // Mock menu data until database is set up
    const mockMenuItems = [
      // Mandi
      { id: '1', name: 'Chicken Tikka Mandi (Chef\'s Pick)', description: 'Authentic Arabian-style mandi with tender chicken tikka', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 159.90, pricePerTray25: 299.90, pricePerTray50: 579.90, category: 'Mandi' },
      { id: '2', name: 'Mutton Marag Mandi (Chef\'s Pick)', description: 'Traditional mutton mandi with aromatic spices', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 199.90, pricePerTray25: 399.90, pricePerTray50: 699.90, category: 'Mandi' },
      { id: '3', name: 'Goat Fry Piece Mandi', description: 'Crispy fried goat pieces with fragrant rice', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 199.90, pricePerTray25: 399.90, pricePerTray50: 699.90, category: 'Mandi' },
      { id: '4', name: 'Shrimp Mandi', description: 'Succulent shrimp with traditional mandi rice', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 199.90, pricePerTray25: 399.90, pricePerTray50: 699.90, category: 'Mandi' },
      { id: '5', name: 'Chicken Biryani Mandi', description: 'Fusion of biryani and mandi styles', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 499.90, pricePerTray25: 899.90, pricePerTray50: 1299.90, category: 'Mandi' },
      { id: '6', name: 'Goat Biryani Mandi', description: 'Premium goat biryani mandi', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 599.90, pricePerTray25: 1099.90, pricePerTray50: 1499.90, category: 'Mandi' },
      
      // Biryanis
      { id: '7', name: 'Hyderabad Veg Dum Biryani', description: 'Authentic vegetarian dum biryani with aromatic spices', isVegetarian: true, spiceLevel: 'MEDIUM', pricePerTray10: 149.90, pricePerTray25: 279.90, pricePerTray50: 359.90, category: 'Biryanis' },
      { id: '8', name: 'Hyderabad Chicken Dum Biryani', description: 'Classic Hyderabadi chicken biryani', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 159.90, pricePerTray25: 309.90, pricePerTray50: 449.90, category: 'Biryanis' },
      { id: '9', name: 'Vijayawada Chicken Biryani', description: 'Spicy Vijayawada-style chicken biryani', isVegetarian: false, spiceLevel: 'HOT', pricePerTray10: 169.90, pricePerTray25: 329.90, pricePerTray50: 499.90, category: 'Biryanis' },
      { id: '10', name: 'Gongura Chicken Biryani', description: 'Tangy gongura leaves with chicken biryani', isVegetarian: false, spiceLevel: 'HOT', pricePerTray10: 179.90, pricePerTray25: 349.90, pricePerTray50: 509.90, category: 'Biryanis' },
      { id: '11', name: 'Goat Dum Biryani', description: 'Tender goat meat slow-cooked with basmati rice', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 229.90, pricePerTray25: 449.90, pricePerTray50: 599.90, category: 'Biryanis' },
      { id: '12', name: 'Gongura Goat Biryani', description: 'Spicy gongura goat biryani', isVegetarian: false, spiceLevel: 'HOT', pricePerTray10: 239.90, pricePerTray25: 469.90, pricePerTray50: 629.90, category: 'Biryanis' },
      
      // Appetizers
      { id: '13', name: 'Chicken 65', description: 'Spicy fried chicken appetizer', isVegetarian: false, spiceLevel: 'HOT', pricePerTray10: 99.90, pricePerTray25: 249.75, pricePerTray50: 499.50, category: 'Appetizers' },
      { id: '14', name: 'Chicken Pakoda', description: 'Crispy chicken fritters', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 99.90, pricePerTray25: 249.75, pricePerTray50: 499.50, category: 'Appetizers' },
      { id: '15', name: 'Onion Pakoda', description: 'Crispy onion fritters', isVegetarian: true, spiceLevel: 'MILD', pricePerTray10: 69.90, pricePerTray25: 174.75, pricePerTray50: 349.50, category: 'Appetizers' },
      
      // Curries
      { id: '16', name: 'Butter Chicken', description: 'Creamy tomato-based chicken curry', isVegetarian: false, spiceLevel: 'MILD', pricePerTray10: 169.90, pricePerTray25: 424.75, pricePerTray50: 849.50, category: 'Curries' },
      { id: '17', name: 'Paneer Butter Masala', description: 'Rich paneer in creamy tomato gravy', isVegetarian: true, spiceLevel: 'MILD', pricePerTray10: 169.90, pricePerTray25: 424.75, pricePerTray50: 849.50, category: 'Curries' },
      { id: '18', name: 'Goat Curry Village Style', description: 'Traditional village-style goat curry', isVegetarian: false, spiceLevel: 'MEDIUM', pricePerTray10: 229.90, pricePerTray25: 574.75, pricePerTray50: 1149.50, category: 'Curries' },
      
      // Breads
      { id: '19', name: 'Naan', description: 'Traditional tandoori bread', isVegetarian: true, spiceLevel: 'MILD', pricePerTray10: 19.90, pricePerTray25: 49.75, pricePerTray50: 99.50, category: 'Breads' },
      { id: '20', name: 'Garlic Naan', description: 'Naan with fresh garlic', isVegetarian: true, spiceLevel: 'MILD', pricePerTray10: 29.90, pricePerTray25: 74.75, pricePerTray50: 149.50, category: 'Breads' },
    ];

    return NextResponse.json({ items: mockMenuItems });
  } catch (error) {
    console.error('Error fetching menu:', error);
    return NextResponse.json({ error: 'Failed to fetch menu' }, { status: 500 });
  }
}
