import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

export default function AboutPage() {
  const restaurants = [
    {
      name: 'Biryani Pot',
      tagline: 'Where Flavour Feels Like Home.',
      description: 'Biryani Pot has been Atlanta\'s go-to destination for authentic Indian food that tastes like home. The restaurant brings together time-honoured recipes and fresh ingredients to serve meals that are both flavourful and familiar. From a hearty dine-in experience to the convenience of Biryani Pot To-Go, the focus remains the same – real food, made fresh, and never reheated.',
      highlight: 'From weekend buffets to comforting thaalis, biryanis, and street-style snacks, Biryani Pot brings familiar flavours to life with every meal. It\'s where generations gather, cravings are met, and food always feels just right.',
      cta: 'Walk in or take away – the flavour always follows.',
    },
    {
      name: 'Mandi & Madhushaala',
      tagline: 'A Rare Pairing of Flavour and Spirit.',
      description: 'At Mandi & Madhushaala, slow-cooked tradition meets curated indulgence. Known for its signature mandi – rich, aromatic, and made to be shared – this is where hearty platters meet handpicked pours. It\'s not just about what\'s on your plate, but how it all comes together.',
      highlight: 'Madhushaala promises an experience where every bite is warm, and every sip is well-earned.',
      cta: 'From rich plates to refined pours — savour it all.',
    },
    {
      name: 'Hyderabadi Fusion & Grill',
      tagline: 'Savor the Edge of Hyderabadi Fusion.',
      description: 'Hyderabad Fusion & Grill brings together timeless Indian flavours and a bold modern twist. From smoky tandoor grills to zesty fusion bites, every dish is crafted to surprise and satisfy. Whether you lean veg or non-veg, there\'s something here that blends heritage with heat.',
      highlight: 'Live grills, hearty portions, and vibrant tastes – all served in a space designed for indulgence.',
      cta: 'Come for the sizzle, stay for the flavour.',
    },
    {
      name: 'Saatvik Aahaar',
      tagline: '100% Vegetarian. 100% Delicious. 100% Flavorful.',
      description: 'Saatvik Aahar is Biryani World\'s celebration of all things vegetarian – where traditional Indian flavours meet fresh, wholesome ingredients. This is where comforting chaats, flavourful thaalis, and homestyle delicacies come together on a thoughtfully curated all-veg menu.',
      highlight: 'With a kitchen dedicated entirely to vegetarian cooking, we bring the richness of Indian cuisine to your plate – made with love and free from meat. Rooted in authenticity and crafted for today\'s tastes, every dish is made to nourish, comfort, and delight — without ever compromising on flavour.',
      cta: 'Step into Saatvik Aahar — where vegetarian is vibrant, satisfying, and never ordinary.',
    },
    {
      name: 'Crossroad Eatery',
      tagline: 'One Stop. Many Cravings Solved.',
      description: 'Set right by the bustling plaza, Crossroad Eatery is your go-to stop for fast, flavourful Indian street bites. Whether it\'s a quick chai break, a plate of spicy pani puri, or hearty breakfast combos – this is where familiar flavours meet everyday convenience.',
      highlight: 'Walk in for the snacks, stay for the comfort. It\'s all fresh, fuss-free, and full of desi flavour.',
      cta: 'Come for the sizzle, stay for the flavour.',
    },
  ];

  return (
    <div className="bg-black page-transition">
      <section className="relative min-h-[500px] bg-black border-b border-zinc-800">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900 to-black" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="mb-8">
            <span className="inline-block px-6 py-2 border border-orange-600/50 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm bg-black/30">
              15+ Years of Experience
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-white">
            Our Goals & <span className="text-orange-500">History</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Crafted with Passion. Served with Purpose.
          </p>
        </div>
      </section>

      {/* Main About Biryani World Section */}
      <section className="py-20 bg-zinc-950 border-b border-zinc-800 animate-fade-in-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6 text-center">
            About <span className="text-orange-500">Biryani World</span>
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed mb-6">
            Biryani World is more than just a group of restaurants – it's a culinary vision built on a deep-rooted commitment to quality, authenticity, and flavour. At its heart is <strong className="text-orange-500">Chef Anil Kompelli</strong>, a respected name in Atlanta's food scene, whose vision has always been to serve fresh, handmade Indian food that feels like home.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed mb-6">
            Driven not by profits but by the love for real food, every concept under Biryani World is built to offer something distinct to the table — whether it's rich regional variety, pure vegetarian delights, fusion innovation, or comforting classics. With every bite, we strive to bring people closer to Indian flavours, culture, and warmth.
          </p>
          <p className="text-lg text-orange-500 italic text-center">
            Come explore the taste of tradition – Reimagined, Refreshed, and always Real.
          </p>
        </div>
      </section>

      {/* Chef Anil Section */}
      <section className="py-20 bg-black border-b border-zinc-800 animate-fade-in-up">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="mb-6">
              <span className="inline-block px-6 py-2 border border-orange-600/50 rounded-full text-orange-500 text-sm font-medium backdrop-blur-sm bg-black/30">
                Led by Culinary Maestro Chef Anil
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Meet <span className="text-orange-500">Chef Anil Kompelli</span>
            </h2>
            <p className="text-2xl text-gray-300 italic">
              Blending passion and precision with 25 years of masterful experience in Indian cuisine.
            </p>
          </div>

          <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12">
              <div className="mb-8 text-center">
                <p className="text-xl text-orange-500 font-semibold mb-2">
                  Proudly serving Atlanta for over 15 years
                </p>
                <p className="text-lg text-gray-400">
                  Trusted by families, businesses & food lovers citywide.
                </p>
              </div>

              <div className="space-y-6">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Chef Anil Kompelli is the culinary force behind Biryani World, renowned for his mastery in crafting authentic Hyderabadi biryani and elevating Indian cuisine in the U.S. With over <strong className="text-orange-500">25 years of culinary experience</strong>, Chef Anil has built a reputation for precision, passion, and flavor that speaks for itself.
                </p>

                <p className="text-lg text-gray-300 leading-relaxed">
                  His signature style? A deep understanding of traditional dum cooking, meticulous layering of spices, and a commitment to using only the freshest ingredients. Whether it's a classic Chicken Dum Biryani or a bold fusion twist, Chef Anil's dishes are known for their aromatic depth and unforgettable taste.
                </p>

                <div className="bg-black/30 border border-orange-600/20 rounded-xl p-6 my-8">
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Beyond the kitchen, he's also a <strong className="text-orange-500">showman</strong>—bringing live food stations to events, where guests can watch the magic unfold in real time. His catering setups are not just meals—they're <span className="text-orange-500 italic">experiences</span>.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Restaurant Concepts */}
      {restaurants.map((restaurant, index) => (
        <section 
          key={index} 
          className={`py-20 ${index % 2 === 0 ? 'bg-black' : 'bg-zinc-950'} border-b border-zinc-800`}
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                About <span className="text-orange-500">{restaurant.name}</span>
              </h2>
              <p className="text-2xl text-orange-500/80 italic mb-6">
                {restaurant.tagline}
              </p>
            </div>
            
            <Card className="bg-zinc-900/50 border-zinc-800 backdrop-blur-sm">
              <CardContent className="p-8">
                <p className="text-lg text-gray-300 leading-relaxed mb-6">
                  {restaurant.description}
                </p>
                <p className="text-base text-gray-400 leading-relaxed mb-6">
                  {restaurant.highlight}
                </p>
                <p className="text-lg text-green-500 italic text-center font-semibold">
                  {restaurant.cta}
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      ))}
    </div>
  );
}
