import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function ServicesPage() {
  const menuCategories = [
    {
      name: 'Mandi',
      items: [
        'Chicken Tikka Mandi (Chef\'s Pick)',
        'Chicken Fry Piece Mandi',
        'Chicken Juicy Mandi',
        'Tandoori Chicken Mandi',
        'Mutton Marag Mandi (Chef\'s Pick)',
        'Nalli Ghosh Mandi',
        'Goat Fry Piece Mandi',
        'Goat Juicy Mandi',
        'Pomfret Fish Mandi',
        'Shrimp Mandi',
        'Fish Mandi (Bone/Boneless)',
        'Chicken Mandi (Special)',
        'Goat Mandi (Special)',
        'Seafood Mandi (Special)',
        'Chicken Biryani Mandi',
        'Goat Biryani Mandi',
        'Seafood Biryani Mandi',
        'Chicken and Goat Mandi',
        'Chicken and Seafood Mandi',
        'Goat and Seafood Mandi',
        'Chicken Goat Seafood Mandi',
        'Chicken and Goat Biryani Mandi',
        'Chicken and Seafood Biryani Mandi',
        'Goat and Seafood Biryani Mandi',
        'Chicken Goat Seafood Biryani Mandi',
      ]
    },
    {
      name: 'Biryanis',
      items: [
        'Hyderabad Veg Dum Biryani',
        'Hyderabad Egg Dum Biryani',
        'Hyderabad Chicken Dum Biryani',
        'Vijayawada Chicken Biryani',
        'Fried Chicken Biryani',
        'Gongura Chicken Biryani',
        'Gongura Veg Biryani',
        'Hyderabad Paneer Dum Biryani',
        'Gongura Paneer Biryani',
        'Fish Biryani (Bone/Boneless)',
        'Shrimp Dum Biryani',
        'Goat Dum Biryani',
        'Gongura Goat Biryani',
        'Fried Goat Biryani',
        'Goat Kheema Biryani',
      ]
    },
    {
      name: 'Pulao',
      items: [
        'Veg Pulao',
        'Mutter Pulao',
        'Mushroom Pulao',
        'Cashew Veg Pulao',
        'Paneer Pulao',
        'Cashew Paneer Pulao',
        'Pachimirchi Paneer Pulao',
        'Mushroom Paneer Pulao',
        'Fried Chicken Pulao',
        'Chicken Ghee Roast Pulao',
        'Chicken Joint Piece Pulao',
        'Pachimirchi Kodi Pulao',
        'Goat Pulao',
        'Goat Ghee Roast Pulao',
        'Pachimirchi Goat Pulao',
        'Goat Kheema Pulao',
        'Nalli Gosht Pulao',
      ]
    },
    {
      name: 'Appetizers',
      items: [
        'Roasted Papad (3 Pcs)',
        'Onion Pakoda',
        'Mirchi Bajji / Cut Mirchi',
        'Punugulu',
        'Masala Papad (3 Pcs)',
        'Wok Fried Chili Potatoes',
        'Masala Peanut',
        'Boiled / Roasted Masala Peanuts',
        'Mango Pickle',
        'Chicken 65',
        'Chicken Pakoda',
        'Chicken Lollipop',
        'Mutton Pakoda',
        'Fish Fry',
        'Prowan Fry',
        'Seafood Sampler',
      ]
    },
    {
      name: 'Tandoori & Breads',
      items: [
        'Leg Quarter',
        'Tandoori Chicken Half',
        'Kalchina Kodi',
        'Paneer Tikka',
        'Sheek Kabab Chicken',
        'Chicken Tikka',
        'Haryali Chicken Kabab',
        'Murgh Malai Kabab',
        'Tangdi Kabab',
        'Kabab Platter (3 Flavors)',
        'Chicken Kheema Mutti',
        'Tandoori Chicken Whole',
        'Pulka',
        'Chapathi',
        'Tandoori Roti',
        'Naan',
        'Poori',
        'Bathura',
        'Butter Naan',
        'Plain Kulcha',
        'Malabar Paratha',
        'Lacha Paratha',
        'Bullet Garlic Naan',
        'Cheese Kulcha',
        'Onion Naan',
        'Garlic Basil Naan',
        'Aloo Paratha',
        'Paneer Paratha',
        'Keema Naan',
      ]
    },
    {
      name: 'Curries',
      items: [
        'Dal Tadka',
        'Bagara Baingan',
        'Dal Makhani',
        'Punjabi Chana Masala',
        'Mixed Veg Kadai Masala',
        'Paneer Butter Masala',
        'Paneer Tikka Masala',
        'Paneer Tikka Lababdar',
        'Chole Paneer',
        'Kadai Paneer',
        'Palak Paneer',
        'Navarathan Kurma',
        'Methi Chaman Haryali',
        'Malai Kofta',
        'Egg Bhurji',
        'Anda Curry',
        'Chicken Kurma',
        'Butter Chicken',
        'Chicken Tikka Masala',
        'Kadai Chicken',
        'Murgh Masala',
        'Saagwala Chicken',
        'Chicken Chettinad',
        'House Special Chicken Curry',
        'Methi Chicken',
        'Chicken Vindaloo',
        'Chicken Mandakini',
        'Andhra Chicken Curry',
        'Gongura Chicken',
        'Chicken Tikka Lababdar',
        'Goat Curry Village Style',
        'Gongura Goat',
        'Kadai Goat',
        'Goat Kurma',
        'Goat Vindaloo',
        'Goat Chettinad',
        'Mutton Madakini',
        'Goat Kheema Curry',
        'Fish Curry',
        'Kadai Fish Curry',
        'Gongura Fish Curry',
        'House Special Shrimp Curry',
        'Kadai Shrimp',
        'Gongura Shrimp',
        'Nellore Chepala Pulusu',
      ]
    },
    {
      name: 'Noodles & Rice',
      items: [
        'Vegetable Noodles',
        'Egg Noodles',
        'Chicken Noodles',
        'Shrimp Noodles',
        'House Special Combination Noodles',
        'Plain Rice',
        'Boiled Egg',
        'Jeera Rice',
        'Sambar Rice',
        'Curd Rice',
        'Vegetable Fried Rice',
        'Egg Fried Rice',
        'Chicken Fried Rice',
        'Shrimp Fried Rice',
        'House Special Combination Fried Rice',
      ]
    },
    {
      name: 'Breakfast',
      items: [
        'Set Dosa',
        'Uttapam',
        'Plain Dosa',
        'Onion Dosa',
        'Karampodi Dosa',
        'Masala Dosa',
        'Mysore Masala Dosa',
        'Paneer Dosa',
        'Cheese Dosa',
      ]
    },
    {
      name: 'Soups',
      items: [
        'Hot & Sour Soup (Veg/Non-Veg)',
        'Sweet Corn Soup (Veg/Non-Veg)',
        'Creamy Tomato Soup',
        'Manchow Soup (Veg/Non-Veg)',
        'Tomato Dhaniya Shorba Soup',
        'Chicken Shorba Soup',
        'Creamy Mushroom Soup',
        'Goat Paya Soup',
        'House Special Goat Soup',
      ]
    },
    {
      name: 'Kids Menu',
      items: [
        'Kids Veg Noodles',
        'Chocolate Milk',
        'Kids Meal - Egg',
        'Kids Meal - Veg',
        'Chicken Nuggets (10 Pc)',
        'Kids Meal - Chicken',
      ]
    },
    {
      name: 'Beverages',
      items: [
        'Water Bottle',
        'Soda',
        'Thums Up',
        'Lemon Soda',
        'Salt Lassi',
        'Sweet Lassi',
        'Mango Lassi',
      ]
    },
    {
      name: 'Desserts',
      items: [
        'Gulab Jamun (4 Pcs)',
        'Rasmalai',
        'Carrot Ka Halwa',
        'Double Ka Meetha',
        'Fruit Custard',
        'Falooda',
      ]
    },
    {
      name: 'Weekend Specials',
      items: [
        'Cashew Chicken Pakoda',
        'Pachi Mirchi Kothimeera Kodi Vepudu',
        'Grilled Golden Pomfret',
        'Mutton 65',
        'Mutton Pakodi',
        'Tawa Veg Pulao',
        'Raju Gari Kodi Pulao',
        'Thalapakatty Mutton Biryani',
        'Charminar Red Chicken Curry',
        'Natu Kodi Pulusu',
        'Kothimeera Mutton Curry',
        'Nalli Ghost (Telangana Style)',
        'Apricot Delight',
        'Triple Pudding',
      ]
    },
  ];

  const serviceCategories = [
    {
      name: 'Wedding & Marriage Events',
      subtitle: 'Most Catering Demand',
      services: [
        'Wedding (Pelli)',
        'Wedding Reception',
        'Pre-Wedding Ceremony',
        'Post-Wedding Celebration',
        'Engagement (Nischitartham)',
        'Pellikoduku / Pellikuthuru Ceremony',
        'Mehndi Function',
        'Sangeet / Music Night',
      ]
    },
    {
      name: 'Baby & Child Ceremonies',
      subtitle: 'High Traditional Demand',
      services: [
        'Seemantham (Baby Shower)',
        'Barasala (Naming Ceremony)',
        'Annaprasana (First Rice Ceremony)',
        'Mundan (Hair Tonsure Ceremony)',
        'First Birthday Celebration',
        'Kids Birthday Party',
        'Thread Ceremony (Upanayanam)',
      ]
    },
    {
      name: 'Birthday & Milestone Celebrations',
      subtitle: '',
      services: [
        'Birthday Party',
        '18th Birthday Celebration',
        '25th Birthday Celebration',
        '50th Birthday Celebration',
        '60th Birthday Celebration (Shashti Poorthi)',
        '70th Birthday Celebration',
        '80th Birthday Celebration',
        '90th Birthday Celebration',
        'Surprise Birthday Party',
      ]
    },
    {
      name: 'Anniversary & Elder Celebrations',
      subtitle: '',
      services: [
        'Wedding Anniversary',
        'Silver Jubilee (25 Years)',
        'Golden Jubilee (50 Years)',
        'Diamond Jubilee (60 Years)',
        'Sathabhishekam Ceremony',
        'Retirement Celebration',
        'Felicitation Function',
      ]
    },
    {
      name: 'Religious & Traditional Telugu Events',
      subtitle: '',
      services: [
        'Gruhapravesam / House Warming',
        'Satyanarayana Swamy Vratham',
        'Varalakshmi Vratham',
        'Ganesh Pooja',
        'Lakshmi Pooja',
        'Ayudha Pooja',
        'Navaratri Celebrations',
        'Ugadi Festival',
        'Diwali Celebration',
        'Sankranti / Bhogi / Kanuma Functions',
        'Karthika Masam Pooja',
        'Vratam / Homam / Havan',
      ]
    },
    {
      name: 'Family & Social Gatherings',
      subtitle: '',
      services: [
        'Family Get-Together',
        'Relatives Meet',
        'House Party',
        'Naming Day Celebration',
        'Farewell Party',
        'Reunion Party',
      ]
    },
    {
      name: 'Corporate & Professional Events',
      subtitle: 'Urban Telugu Demand',
      services: [
        'Corporate Events',
        'Office Inauguration',
        'Product Launch',
        'Business Meetings',
        'Annual Day Celebrations',
        'Employee Engagement Events',
        'Corporate Lunch / Dinner',
        'Client Meetings',
      ]
    },
    {
      name: 'Memorial & Community Events',
      subtitle: '',
      services: [
        'Shraddha / Memorial Ceremony',
        'Community Functions',
        'Temple Annadanam',
        'Village / Caste Association Events',
      ]
    },
  ];

  return (
    <div className="bg-black page-transition">
      {/* Hero Section */}
      <section className="relative min-h-[500px] bg-black border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-orange-600/50 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm bg-black/30">
              Catering for Every Occasion
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            Our <span className="text-orange-500">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
            Professional catering for weddings, celebrations, and special events
          </p>
          <Link href="/order/event">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white border-0 text-lg px-10 py-6 h-auto">
              Start Your Order
            </Button>
          </Link>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, index) => (
        <section 
          key={index} 
          className={`py-16 ${index % 2 === 0 ? 'bg-zinc-950' : 'bg-black'} border-b border-zinc-800`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-2">
                <span className="text-orange-500">{category.name}</span>
              </h2>
              {category.subtitle && (
                <p className="text-lg text-gray-400 italic">({category.subtitle})</p>
              )}
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {category.services.map((service, serviceIndex) => (
                <Card key={serviceIndex} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                  <CardContent className="p-4 text-center">
                    <p className="text-gray-300 text-base">{service}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Menu Section Divider */}
      {menuCategories.map((category, index) => (
        <section 
          key={index} 
          className={`py-16 ${index % 2 === 0 ? 'bg-black' : 'bg-zinc-950'} border-b border-zinc-800 animate-fade-in-up`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8 text-center">
              <span className="text-orange-500">{category.name}</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.items.map((item, itemIndex) => (
                <Card key={itemIndex} className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:bg-zinc-900/70 hover:border-green-600/30 hover-lift transition-all duration-300">
                  <CardContent className="p-4">
                    <p className="text-gray-300 text-base">{item}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="py-20 bg-zinc-950 border-t border-zinc-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Ready to <span className="text-orange-500">Order?</span>
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's create a custom menu for your celebration
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/order/event">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white text-lg px-12 py-6 h-auto">
                Plan Your Event
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-2 border-white/30 bg-white text-green-600 hover:bg-gray-100 text-lg px-12 py-6 h-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
