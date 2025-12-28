import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  adapter: undefined,
});

async function main() {
  console.log('🚀 Setting up database...\n');

  try {
    // Create locations
    console.log('Creating locations...');
    const locations = await Promise.all([
      prisma.location.upsert({
        where: { id: 'loc-atlanta' },
        update: {},
        create: {
          id: 'loc-atlanta',
          name: 'Biryani World Catering - Atlanta',
          address: '2450 Peachtree Road NW',
          city: 'Atlanta',
          state: 'GA',
          zip: '30305',
          phone: '(404) 555-0101',
          email: 'atlanta@biryaniworldcatering.com',
          openHours: 'Mon-Sun: 10:00 AM - 10:00 PM',
          description: 'Our flagship location in the heart of Atlanta',
        },
      }),
      prisma.location.upsert({
        where: { id: 'loc-houston' },
        update: {},
        create: {
          id: 'loc-houston',
          name: 'Biryani World Catering - Houston',
          address: '5555 Westheimer Road',
          city: 'Houston',
          state: 'TX',
          zip: '77056',
          phone: '(713) 555-0202',
          email: 'houston@biryaniworldcatering.com',
          openHours: 'Mon-Sun: 10:00 AM - 10:00 PM',
          description: 'Bringing flavors of India to Houston',
        },
      }),
      prisma.location.upsert({
        where: { id: 'loc-chicago' },
        update: {},
        create: {
          id: 'loc-chicago',
          name: 'Biryani World Catering - Chicago',
          address: '1234 N Michigan Avenue',
          city: 'Chicago',
          state: 'IL',
          zip: '60611',
          phone: '(312) 555-0303',
          email: 'chicago@biryaniworldcatering.com',
          openHours: 'Mon-Sun: 10:00 AM - 10:00 PM',
          description: 'Chicago\'s premier Indian catering',
        },
      }),
      prisma.location.upsert({
        where: { id: 'loc-dallas' },
        update: {},
        create: {
          id: 'loc-dallas',
          name: 'Biryani World Catering - Dallas',
          address: '8787 N Central Expressway',
          city: 'Dallas',
          state: 'TX',
          zip: '75231',
          phone: '(214) 555-0404',
          email: 'dallas@biryaniworldcatering.com',
          openHours: 'Mon-Sun: 10:00 AM - 10:00 PM',
          description: 'Serving Dallas with traditional flavors',
        },
      }),
    ]);
    console.log(`✅ Created ${locations.length} locations\n`);

    // Create Mandi category
    console.log('Creating Mandi category...');
    const mandiCat = await prisma.menuCategory.upsert({
      where: { id: 'cat-mandi' },
      update: {},
      create: {
        id: 'cat-mandi',
        name: 'Mandi',
        description: 'Traditional Arabian rice dishes',
        sortOrder: 1,
      },
    });

    // Create Biryanis category
    const biryaniCat = await prisma.menuCategory.upsert({
      where: { id: 'cat-biryanis' },
      update: {},
      create: {
        id: 'cat-biryanis',
        name: 'Biryanis',
        description: 'Authentic Hyderabadi biryanis',
        sortOrder: 2,
      },
    });
    console.log('✅ Created categories\n');

    // Add menu items
    console.log('Adding menu items...');
    let itemCount = 0;

    const mandiItems = [
      { name: 'Chicken Tikka Mandi (Chef\'s Pick)', p10: 159.90, p25: 299.90, p50: 579.90 },
      { name: 'Mutton Marag Mandi (Chef\'s Pick)', p10: 199.90, p25: 399.90, p50: 699.90 },
      { name: 'Goat Fry Piece Mandi', p10: 199.90, p25: 399.90, p50: 699.90 },
      { name: 'Shrimp Mandi', p10: 199.90, p25: 399.90, p50: 699.90 },
      { name: 'Chicken Biryani Mandi', p10: 499.90, p25: 899.90, p50: 1299.90 },
      { name: 'Goat Biryani Mandi', p10: 599.90, p25: 1099.90, p50: 1499.90 },
    ];

    const biryaniItems = [
      { name: 'Hyderabad Veg Dum Biryani', veg: true, p10: 149.90, p25: 279.90, p50: 359.90 },
      { name: 'Hyderabad Chicken Dum Biryani', veg: false, p10: 159.90, p25: 309.90, p50: 449.90 },
      { name: 'Vijayawada Chicken Biryani', veg: false, p10: 169.90, p25: 329.90, p50: 499.90 },
      { name: 'Gongura Chicken Biryani', veg: false, p10: 179.90, p25: 349.90, p50: 509.90 },
      { name: 'Goat Dum Biryani', veg: false, p10: 229.90, p25: 449.90, p50: 599.90 },
      { name: 'Gongura Goat Biryani', veg: false, p10: 239.90, p25: 469.90, p50: 629.90 },
    ];

    for (const location of locations) {
      // Add Mandi items
      for (const item of mandiItems) {
        await prisma.menuItem.create({
          data: {
            locationId: location.id,
            categoryId: mandiCat.id,
            name: item.name,
            description: `Authentic ${item.name} with traditional Arabian spices and basmati rice`,
            isVegetarian: false,
            spiceLevel: 'MEDIUM',
            pricePerTray10: item.p10,
            pricePerTray25: item.p25,
            pricePerTray50: item.p50,
          },
        });
        itemCount++;
      }

      // Add Biryani items
      for (const item of biryaniItems) {
        await prisma.menuItem.create({
          data: {
            locationId: location.id,
            categoryId: biryaniCat.id,
            name: item.name,
            description: `Authentic ${item.name} with aromatic basmati rice`,
            isVegetarian: item.veg,
            spiceLevel: item.name.includes('Gongura') ? 'HOT' : 'MEDIUM',
            pricePerTray10: item.p10,
            pricePerTray25: item.p25,
            pricePerTray50: item.p50,
          },
        });
        itemCount++;
      }
    }

    console.log(`✅ Added ${itemCount} menu items\n`);
    console.log('🎉 Database setup complete!');
    console.log('\nYou can now:');
    console.log('1. Visit http://localhost:3002/order/menu to see the menu');
    console.log('2. Run "npx prisma studio" to view/edit data in a GUI\n');

  } catch (error) {
    console.error('❌ Error:', error.message);
    throw error;
  }
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
