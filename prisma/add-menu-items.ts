import { PrismaClient, SpiceLevel } from '@prisma/client';

const prisma = new PrismaClient();

async function addMenuItems() {
  console.log('Adding new menu items...');

  // Get all locations
  const locations = await prisma.location.findMany();
  
  // Get or create categories
  const categoryMap = new Map<string, string>();
  
  const categories = [
    { name: 'Mandi', sortOrder: 1 },
    { name: 'Biryanis', sortOrder: 2 },
    { name: 'Pulao', sortOrder: 3 },
    { name: 'Appetizers', sortOrder: 4 },
    { name: 'Tandoori & Breads', sortOrder: 5 },
    { name: 'Curries', sortOrder: 6 },
    { name: 'Noodles & Rice', sortOrder: 7 },
    { name: 'Breakfast', sortOrder: 8 },
    { name: 'Soups', sortOrder: 9 },
    { name: 'Kids Menu', sortOrder: 10 },
    { name: 'Beverages', sortOrder: 11 },
    { name: 'Desserts', sortOrder: 12 },
    { name: 'Weekend Specials', sortOrder: 13 },
  ];

  for (const cat of categories) {
    const category = await prisma.menuCategory.upsert({
      where: { id: `cat-${cat.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}` },
      update: {},
      create: {
        id: `cat-${cat.name.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`,
        name: cat.name,
        sortOrder: cat.sortOrder,
      },
    });
    categoryMap.set(cat.name, category.id);
  }

  // Menu items data - converting to catering pack sizes
  const menuData = [
    // Mandi items
    { category: 'Mandi', name: 'Chicken Tikka Mandi (Chef\'s Pick)', veg: false, spice: SpiceLevel.MEDIUM, single: 15.99, mini: 29.99, large: 57.99, bahubali: 84.99 },
    { category: 'Mandi', name: 'Chicken Fry Piece Mandi', veg: false, spice: SpiceLevel.MEDIUM, single: 15.99, mini: 29.99, large: 57.99, bahubali: 84.99 },
    { category: 'Mandi', name: 'Chicken Juicy Mandi', veg: false, spice: SpiceLevel.MILD, single: 15.99, mini: 29.99, large: 57.99, bahubali: 84.99 },
    { category: 'Mandi', name: 'Tandoori Chicken Mandi', veg: false, spice: SpiceLevel.MEDIUM, single: 15.99, mini: 29.99, large: 57.99, bahubali: 84.99 },
    { category: 'Mandi', name: 'Mutton Marag Mandi (Chef\'s Pick)', veg: false, spice: SpiceLevel.MEDIUM, single: 19.99, mini: 39.99, large: 69.99, bahubali: 99.99 },
    { category: 'Mandi', name: 'Nalli Ghosh Mandi', veg: false, spice: SpiceLevel.MEDIUM, single: 19.99, mini: 39.99, large: 69.99, bahubali: 99.99 },
    { category: 'Mandi', name: 'Goat Fry Piece Mandi', veg: false, spice: SpiceLevel.MEDIUM, single: 19.99, mini: 39.99, large: 69.99, bahubali: 99.99 },
    { category: 'Mandi', name: 'Goat Juicy Mandi', veg: false, spice: SpiceLevel.MILD, single: 19.99, mini: 39.99, large: 69.99, bahubali: 99.99 },
    { category: 'Mandi', name: 'Pomfret Fish Mandi', veg: false, spice: SpiceLevel.MEDIUM, mini: 39.99, large: 69.99, bahubali: 99.99 },
    { category: 'Mandi', name: 'Shrimp Mandi', veg: false, spice: SpiceLevel.MEDIUM, single: 19.99, mini: 39.99, large: 69.99, bahubali: 99.99 },
    { category: 'Mandi', name: 'Fish Mandi (Bone/Boneless)', veg: false, spice: SpiceLevel.MEDIUM, single: 19.99, mini: 39.99, large: 69.99, bahubali: 99.99 },
    { category: 'Mandi', name: 'Chicken Mandi (Special)', veg: false, spice: SpiceLevel.MEDIUM, mini: 39.99, large: 69.99, bahubali: 99.99 },
    { category: 'Mandi', name: 'Goat Mandi (Special)', veg: false, spice: SpiceLevel.MEDIUM, mini: 49.99, large: 89.99, bahubali: 129.99 },
    { category: 'Mandi', name: 'Seafood Mandi (Special)', veg: false, spice: SpiceLevel.MEDIUM, mini: 49.99, large: 89.99, bahubali: 129.99 },
    { category: 'Mandi', name: 'Chicken Biryani Mandi', veg: false, spice: SpiceLevel.MEDIUM, mini: 49.99, large: 89.99, bahubali: 129.99 },
    { category: 'Mandi', name: 'Goat Biryani Mandi', veg: false, spice: SpiceLevel.MEDIUM, mini: 59.99, large: 109.99, bahubali: 149.99 },
    { category: 'Mandi', name: 'Seafood Biryani Mandi', veg: false, spice: SpiceLevel.MEDIUM, mini: 59.99, large: 109.99, bahubali: 149.99 },
    { category: 'Mandi', name: 'Chicken and Goat Mandi', veg: false, spice: SpiceLevel.MEDIUM, mini: 49.99, large: 89.99, bahubali: 124.99 },
    { category: 'Mandi', name: 'Chicken and Seafood Mandi', veg: false, spice: SpiceLevel.MEDIUM, mini: 49.99, large: 89.99, bahubali: 124.99 },
    { category: 'Mandi', name: 'Goat and Seafood Mandi', veg: false, spice: SpiceLevel.MEDIUM, mini: 59.99, large: 109.99, bahubali: 149.99 },
    { category: 'Mandi', name: 'Chicken Goat Seafood Mandi', veg: false, spice: SpiceLevel.MEDIUM, mini: 69.99, large: 129.99, bahubali: 179.99 },

    // Biryanis
    { category: 'Biryanis', name: 'Hyderabad Veg Dum Biryani', veg: true, spice: SpiceLevel.MEDIUM, single: 14.99, family: 27.99, bucket: 35.99 },
    { category: 'Biryanis', name: 'Hyderabad Egg Dum Biryani', veg: false, spice: SpiceLevel.MEDIUM, single: 15.99, family: 30.99, bucket: 38.99 },
    { category: 'Biryanis', name: 'Hyderabad Chicken Dum Biryani', veg: false, spice: SpiceLevel.MEDIUM, single: 15.99, family: 30.99, bucket: 44.99 },
    { category: 'Biryanis', name: 'Vijayawada Chicken Biryani', veg: false, spice: SpiceLevel.HOT, single: 16.99, family: 32.99, bucket: 49.99 },
    { category: 'Biryanis', name: 'Fried Chicken Biryani', veg: false, spice: SpiceLevel.MEDIUM, single: 16.99, family: 32.99, bucket: 49.99 },
    { category: 'Biryanis', name: 'Gongura Chicken Biryani', veg: false, spice: SpiceLevel.HOT, single: 17.99, family: 34.99, bucket: 50.99 },
    { category: 'Biryanis', name: 'Gongura Veg Biryani', veg: true, spice: SpiceLevel.HOT, single: 16.99, family: 32.99, bucket: 49.99 },
    { category: 'Biryanis', name: 'Hyderabad Paneer Dum Biryani', veg: true, spice: SpiceLevel.MEDIUM, single: 16.99, family: 32.99, bucket: 49.99 },
    { category: 'Biryanis', name: 'Gongura Paneer Biryani', veg: true, spice: SpiceLevel.HOT, single: 17.99, family: 33.99, bucket: 50.99 },
    { category: 'Biryanis', name: 'Fish Biryani (Bone/Boneless)', veg: false, spice: SpiceLevel.MEDIUM, single: 20.99, family: 40.99, bucket: 54.99 },
    { category: 'Biryanis', name: 'Shrimp Dum Biryani', veg: false, spice: SpiceLevel.MEDIUM, single: 20.99, family: 40.99, bucket: 54.99 },
    { category: 'Biryanis', name: 'Goat Dum Biryani', veg: false, spice: SpiceLevel.MEDIUM, single: 22.99, family: 44.99, bucket: 59.99 },
    { category: 'Biryanis', name: 'Gongura Goat Biryani', veg: false, spice: SpiceLevel.HOT, single: 23.99, family: 46.99, bucket: 62.99 },
    { category: 'Biryanis', name: 'Fried Goat Biryani', veg: false, spice: SpiceLevel.MEDIUM, single: 23.99, family: 46.99, bucket: 62.99 },
    { category: 'Biryanis', name: 'Goat Kheema Biryani', veg: false, spice: SpiceLevel.MEDIUM, single: 28.99, family: 46.99, bucket: 62.99 },

    // Pulao
    { category: 'Pulao', name: 'Veg Pulao', veg: true, spice: SpiceLevel.MILD, regular: 13.99, family: 26.99 },
    { category: 'Pulao', name: 'Mutter Pulao', veg: true, spice: SpiceLevel.MILD, regular: 13.99, family: 26.99 },
    { category: 'Pulao', name: 'Mushroom Pulao', veg: true, spice: SpiceLevel.MILD, regular: 13.99, family: 26.99 },
    { category: 'Pulao', name: 'Cashew Veg Pulao', veg: true, spice: SpiceLevel.MILD, regular: 14.99, family: 29.99 },
    { category: 'Pulao', name: 'Paneer Pulao', veg: true, spice: SpiceLevel.MILD, regular: 14.99, family: 29.99 },
    { category: 'Pulao', name: 'Fried Chicken Pulao', veg: false, spice: SpiceLevel.MEDIUM, regular: 15.99, family: 29.99 },
    { category: 'Pulao', name: 'Chicken Ghee Roast Pulao', veg: false, spice: SpiceLevel.MEDIUM, regular: 15.99, family: 29.99 },
    { category: 'Pulao', name: 'Pachimirchi Kodi Pulao', veg: false, spice: SpiceLevel.HOT, regular: 15.99, family: 29.99 },
    { category: 'Pulao', name: 'Goat Pulao', veg: false, spice: SpiceLevel.MEDIUM, regular: 19.99, family: 42.99 },
    { category: 'Pulao', name: 'Goat Kheema Pulao', veg: false, spice: SpiceLevel.MEDIUM, regular: 19.99, family: 42.99 },

    // Appetizers
    { category: 'Appetizers', name: 'Onion Pakoda', veg: true, spice: SpiceLevel.MILD, price: 6.99 },
    { category: 'Appetizers', name: 'Mirchi Bajji / Cut Mirchi', veg: true, spice: SpiceLevel.HOT, price: 6.99 },
    { category: 'Appetizers', name: 'Masala Papad (3 Pcs)', veg: true, spice: SpiceLevel.MILD, price: 8.99 },
    { category: 'Appetizers', name: 'Chicken 65', veg: false, spice: SpiceLevel.HOT, price: 9.99 },
    { category: 'Appetizers', name: 'Chicken Pakoda', veg: false, spice: SpiceLevel.MEDIUM, price: 9.99 },
    { category: 'Appetizers', name: 'Chicken Lollipop', veg: false, spice: SpiceLevel.MEDIUM, price: 9.99 },
    { category: 'Appetizers', name: 'Fish Fry', veg: false, spice: SpiceLevel.MEDIUM, price: 10.99 },
    { category: 'Appetizers', name: 'Prawn Fry', veg: false, spice: SpiceLevel.MEDIUM, price: 10.99 },

    // Curries
    { category: 'Curries', name: 'Dal Tadka', veg: true, spice: SpiceLevel.MILD, price: 10.99 },
    { category: 'Curries', name: 'Paneer Butter Masala', veg: true, spice: SpiceLevel.MILD, price: 16.99 },
    { category: 'Curries', name: 'Palak Paneer', veg: true, spice: SpiceLevel.MILD, price: 16.99 },
    { category: 'Curries', name: 'Butter Chicken', veg: false, spice: SpiceLevel.MILD, price: 16.99 },
    { category: 'Curries', name: 'Chicken Tikka Masala', veg: false, spice: SpiceLevel.MEDIUM, price: 16.99 },
    { category: 'Curries', name: 'Kadai Chicken', veg: false, spice: SpiceLevel.MEDIUM, price: 16.99 },
    { category: 'Curries', name: 'Gongura Chicken', veg: false, spice: SpiceLevel.HOT, price: 17.99 },
    { category: 'Curries', name: 'Goat Curry Village Style', veg: false, spice: SpiceLevel.MEDIUM, price: 22.99 },
    { category: 'Curries', name: 'Gongura Goat', veg: false, spice: SpiceLevel.HOT, price: 22.99 },

    // Desserts
    { category: 'Desserts', name: 'Gulab Jamun (4 Pcs)', veg: true, spice: SpiceLevel.MILD, price: 5.99 },
    { category: 'Desserts', name: 'Rasmalai', veg: true, spice: SpiceLevel.MILD, price: 5.99 },
    { category: 'Desserts', name: 'Carrot Ka Halwa', veg: true, spice: SpiceLevel.MILD, price: 6.99 },
  ];

  // Convert prices to catering pack sizes (10, 25, 50 people)
  for (const location of locations) {
    for (const item of menuData) {
      const categoryId = categoryMap.get(item.category);
      if (!categoryId) continue;

      let price10, price25, price50;

      // Convert individual/family/bucket sizes to catering packs
      if ('single' in item && item.single) {
        price10 = item.single * 10;
        price25 = item.mini || item.single * 25;
        price50 = item.large || item.single * 50;
      } else if ('regular' in item && item.regular) {
        price10 = item.regular * 10;
        price25 = item.family || item.regular * 25;
        price50 = (item.family ? item.family * 2 : item.regular * 50);
      } else if ('price' in item && item.price) {
        price10 = item.price * 10;
        price25 = item.price * 25;
        price50 = item.price * 50;
      } else {
        continue;
      }

      await prisma.menuItem.create({
        data: {
          locationId: location.id,
          categoryId,
          name: item.name,
          description: `Authentic ${item.name} prepared with traditional spices and ingredients`,
          isVegetarian: item.veg,
          spiceLevel: item.spice,
          pricePerTray10: price10,
          pricePerTray25: price25,
          pricePerTray50: price50,
          isActive: true,
          isAvailable: true,
        },
      });
    }
  }

  console.log('Menu items added successfully!');
}

addMenuItems()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
