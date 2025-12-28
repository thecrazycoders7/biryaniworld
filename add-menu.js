const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Adding new menu items...');

  // Get all locations
  const locations = await prisma.location.findMany();
  console.log(`Found ${locations.length} locations`);

  // Create Mandi category
  const mandiCategory = await prisma.menuCategory.upsert({
    where: { id: 'cat-mandi' },
    update: {},
    create: {
      id: 'cat-mandi',
      name: 'Mandi',
      sortOrder: 1,
      isActive: true,
    },
  });

  // Sample Mandi items - converting to catering sizes
  const mandiItems = [
    { name: 'Chicken Tikka Mandi (Chef\'s Pick)', veg: false, spice: 'MEDIUM', p10: 159.90, p25: 299.90, p50: 579.90 },
    { name: 'Chicken Fry Piece Mandi', veg: false, spice: 'MEDIUM', p10: 159.90, p25: 299.90, p50: 579.90 },
    { name: 'Mutton Marag Mandi (Chef\'s Pick)', veg: false, spice: 'MEDIUM', p10: 199.90, p25: 399.90, p50: 699.90 },
    { name: 'Goat Fry Piece Mandi', veg: false, spice: 'MEDIUM', p10: 199.90, p25: 399.90, p50: 699.90 },
    { name: 'Shrimp Mandi', veg: false, spice: 'MEDIUM', p10: 199.90, p25: 399.90, p50: 699.90 },
    { name: 'Fish Mandi (Bone/Boneless)', veg: false, spice: 'MEDIUM', p10: 199.90, p25: 399.90, p50: 699.90 },
    { name: 'Chicken Biryani Mandi', veg: false, spice: 'MEDIUM', p10: 499.90, p25: 899.90, p50: 1299.90 },
    { name: 'Goat Biryani Mandi', veg: false, spice: 'MEDIUM', p10: 599.90, p25: 1099.90, p50: 1499.90 },
  ];

  // Update existing Biryanis category
  const biryaniCategory = await prisma.menuCategory.findFirst({
    where: { name: { contains: 'Biryani' } }
  });

  // Additional Biryani items
  const newBiryanis = [
    { name: 'Vijayawada Chicken Biryani', veg: false, spice: 'HOT', p10: 169.90, p25: 329.90, p50: 499.90 },
    { name: 'Gongura Chicken Biryani', veg: false, spice: 'HOT', p10: 179.90, p25: 349.90, p50: 509.90 },
    { name: 'Gongura Goat Biryani', veg: false, spice: 'HOT', p10: 239.90, p25: 469.90, p50: 629.90 },
    { name: 'Goat Kheema Biryani', veg: false, spice: 'MEDIUM', p10: 289.90, p25: 469.90, p50: 629.90 },
  ];

  let itemCount = 0;

  // Add Mandi items to all locations
  for (const location of locations) {
    for (const item of mandiItems) {
      await prisma.menuItem.create({
        data: {
          locationId: location.id,
          categoryId: mandiCategory.id,
          name: item.name,
          description: `Authentic ${item.name} prepared with traditional Arabian spices and basmati rice`,
          isVegetarian: item.veg,
          spiceLevel: item.spice,
          pricePerTray10: item.p10,
          pricePerTray25: item.p25,
          pricePerTray50: item.p50,
          isActive: true,
          isAvailable: true,
        },
      });
      itemCount++;
    }

    // Add new Biryani items if category exists
    if (biryaniCategory) {
      for (const item of newBiryanis) {
        await prisma.menuItem.create({
          data: {
            locationId: location.id,
            categoryId: biryaniCategory.id,
            name: item.name,
            description: `Authentic ${item.name} with aromatic basmati rice and traditional spices`,
            isVegetarian: item.veg,
            spiceLevel: item.spice,
            pricePerTray10: item.p10,
            pricePerTray25: item.p25,
            pricePerTray50: item.p50,
            isActive: true,
            isAvailable: true,
          },
        });
        itemCount++;
      }
    }
  }

  console.log(`✅ Successfully added ${itemCount} menu items across ${locations.length} locations!`);
  console.log('New categories: Mandi');
  console.log('Updated categories: Biryanis');
}

main()
  .catch((e) => {
    console.error('Error:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
