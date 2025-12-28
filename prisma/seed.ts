import { PrismaClient, UserRole, SpiceLevel } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('Starting seed...');

  const hashedPassword = await bcrypt.hash('admin123', 10);
  
  const admin = await prisma.user.upsert({
    where: { email: 'admin@biryaniworldcatering.com' },
    update: {},
    create: {
      email: 'admin@biryaniworldcatering.com',
      name: 'Admin User',
      password: hashedPassword,
      role: UserRole.ADMIN,
    },
  });

  console.log('Admin user created:', admin.email);

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
        description: 'Our flagship location in the heart of Atlanta, serving authentic Indian cuisine for over 25 years.',
        isActive: true,
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
        description: 'Bringing the flavors of India to Houston with exceptional catering services.',
        isActive: true,
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
        description: 'Chicago\'s premier destination for authentic Indian catering and events.',
        isActive: true,
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
        description: 'Serving Dallas with traditional Indian flavors and modern catering excellence.',
        isActive: true,
      },
    }),
  ]);

  console.log('Locations created:', locations.length);

  const categories = [
    { name: 'Breads', sortOrder: 1 },
    { name: 'Bucket Biryani', sortOrder: 2 },
    { name: 'Signature Biryani', sortOrder: 3 },
    { name: 'Family Pack Biryani', sortOrder: 4 },
    { name: 'Vegetarian Appetizers', sortOrder: 5 },
    { name: 'Non-Vegetarian Appetizers', sortOrder: 6 },
    { name: 'Chicken Entrees', sortOrder: 7 },
    { name: 'Goat Entrees', sortOrder: 8 },
    { name: 'Seafood Entrees', sortOrder: 9 },
    { name: 'Indo-Chinese Rice & Noodles', sortOrder: 10 },
    { name: 'Rice Varieties', sortOrder: 11 },
    { name: 'Tandoori Grill', sortOrder: 12 },
    { name: 'Soups', sortOrder: 13 },
    { name: 'Desserts', sortOrder: 14 },
    { name: 'Kids Menu', sortOrder: 15 },
  ];

  const createdCategories = await Promise.all(
    categories.map((cat) =>
      prisma.menuCategory.upsert({
        where: { id: `cat-${cat.name.toLowerCase().replace(/\s+/g, '-')}` },
        update: {},
        create: {
          id: `cat-${cat.name.toLowerCase().replace(/\s+/g, '-')}`,
          name: cat.name,
          sortOrder: cat.sortOrder,
        },
      })
    )
  );

  console.log('Categories created:', createdCategories.length);

  const menuItems = [
    {
      categoryName: 'Breads',
      items: [
        { name: 'Naan', description: 'Traditional Indian flatbread baked in tandoor', veg: true, spice: SpiceLevel.MILD, p10: 25, p25: 55, p50: 100 },
        { name: 'Garlic Naan', description: 'Naan topped with fresh garlic and cilantro', veg: true, spice: SpiceLevel.MILD, p10: 30, p25: 65, p50: 120 },
        { name: 'Butter Naan', description: 'Soft naan brushed with butter', veg: true, spice: SpiceLevel.MILD, p10: 28, p25: 60, p50: 110 },
        { name: 'Roti', description: 'Whole wheat Indian flatbread', veg: true, spice: SpiceLevel.MILD, p10: 22, p25: 50, p50: 90 },
        { name: 'Paratha', description: 'Layered whole wheat flatbread', veg: true, spice: SpiceLevel.MILD, p10: 35, p25: 75, p50: 140 },
      ],
    },
    {
      categoryName: 'Bucket Biryani',
      items: [
        { name: 'Chicken Dum Biryani Bucket', description: 'Aromatic basmati rice layered with marinated chicken, slow-cooked to perfection', veg: false, spice: SpiceLevel.MEDIUM, p10: 120, p25: 280, p50: 520 },
        { name: 'Goat Dum Biryani Bucket', description: 'Tender goat meat with fragrant rice and traditional spices', veg: false, spice: SpiceLevel.MEDIUM, p10: 150, p25: 350, p50: 650 },
        { name: 'Vegetable Dum Biryani Bucket', description: 'Mixed vegetables with aromatic basmati rice', veg: true, spice: SpiceLevel.MEDIUM, p10: 100, p25: 230, p50: 420 },
      ],
    },
    {
      categoryName: 'Signature Biryani',
      items: [
        { name: 'Hyderabadi Chicken Biryani', description: 'Authentic Hyderabadi style chicken biryani with raita', veg: false, spice: SpiceLevel.HOT, p10: 130, p25: 300, p50: 560 },
        { name: 'Vijayawada Boneless Biryani', description: 'Spicy boneless chicken biryani from Vijayawada', veg: false, spice: SpiceLevel.EXTRA_HOT, p10: 140, p25: 320, p50: 600 },
        { name: 'Paneer Biryani', description: 'Cottage cheese cubes with aromatic rice', veg: true, spice: SpiceLevel.MEDIUM, p10: 110, p25: 250, p50: 460 },
        { name: 'Shrimp Biryani', description: 'Succulent shrimp with fragrant basmati rice', veg: false, spice: SpiceLevel.MEDIUM, p10: 160, p25: 380, p50: 720 },
      ],
    },
    {
      categoryName: 'Family Pack Biryani',
      items: [
        { name: 'Family Chicken Biryani Pack', description: 'Large portion chicken biryani perfect for family gatherings', veg: false, spice: SpiceLevel.MEDIUM, p10: 125, p25: 290, p50: 540 },
        { name: 'Family Goat Biryani Pack', description: 'Generous serving of goat biryani for the whole family', veg: false, spice: SpiceLevel.MEDIUM, p10: 155, p25: 360, p50: 670 },
        { name: 'Family Veg Biryani Pack', description: 'Vegetarian biryani family pack with assorted vegetables', veg: true, spice: SpiceLevel.MEDIUM, p10: 105, p25: 240, p50: 440 },
      ],
    },
    {
      categoryName: 'Vegetarian Appetizers',
      items: [
        { name: 'Samosa', description: 'Crispy pastry filled with spiced potatoes and peas', veg: true, spice: SpiceLevel.MILD, p10: 40, p25: 90, p50: 160 },
        { name: 'Paneer 65', description: 'Spicy fried cottage cheese cubes', veg: true, spice: SpiceLevel.HOT, p10: 65, p25: 145, p50: 270 },
        { name: 'Gobi Manchurian', description: 'Crispy cauliflower in Indo-Chinese sauce', veg: true, spice: SpiceLevel.MEDIUM, p10: 55, p25: 125, p50: 230 },
        { name: 'Vegetable Pakora', description: 'Mixed vegetable fritters', veg: true, spice: SpiceLevel.MILD, p10: 45, p25: 100, p50: 180 },
        { name: 'Paneer Tikka', description: 'Grilled cottage cheese marinated in spices', veg: true, spice: SpiceLevel.MEDIUM, p10: 70, p25: 160, p50: 300 },
      ],
    },
    {
      categoryName: 'Non-Vegetarian Appetizers',
      items: [
        { name: 'Chicken 65', description: 'Spicy deep-fried chicken with curry leaves', veg: false, spice: SpiceLevel.HOT, p10: 75, p25: 170, p50: 320 },
        { name: 'Chicken Lollipop', description: 'Crispy chicken wings in spicy sauce', veg: false, spice: SpiceLevel.MEDIUM, p10: 80, p25: 180, p50: 340 },
        { name: 'Apollo Fish', description: 'Crispy fried fish with special spices', veg: false, spice: SpiceLevel.HOT, p10: 90, p25: 200, p50: 380 },
        { name: 'Chicken Pakora', description: 'Chicken fritters with aromatic spices', veg: false, spice: SpiceLevel.MEDIUM, p10: 70, p25: 160, p50: 300 },
        { name: 'Chilli Chicken', description: 'Indo-Chinese style chicken with peppers', veg: false, spice: SpiceLevel.HOT, p10: 85, p25: 190, p50: 360 },
      ],
    },
    {
      categoryName: 'Chicken Entrees',
      items: [
        { name: 'Butter Chicken', description: 'Creamy tomato-based curry with tender chicken', veg: false, spice: SpiceLevel.MILD, p10: 95, p25: 220, p50: 410 },
        { name: 'Chicken Tikka Masala', description: 'Grilled chicken in rich tomato cream sauce', veg: false, spice: SpiceLevel.MEDIUM, p10: 100, p25: 230, p50: 430 },
        { name: 'Chicken Curry', description: 'Traditional chicken curry with aromatic spices', veg: false, spice: SpiceLevel.MEDIUM, p10: 90, p25: 210, p50: 390 },
        { name: 'Chicken Korma', description: 'Mild creamy chicken curry with nuts', veg: false, spice: SpiceLevel.MILD, p10: 95, p25: 220, p50: 410 },
        { name: 'Chicken Vindaloo', description: 'Spicy chicken curry with potatoes', veg: false, spice: SpiceLevel.EXTRA_HOT, p10: 100, p25: 230, p50: 430 },
      ],
    },
    {
      categoryName: 'Goat Entrees',
      items: [
        { name: 'Goat Curry', description: 'Traditional goat curry with bone-in pieces', veg: false, spice: SpiceLevel.MEDIUM, p10: 130, p25: 300, p50: 560 },
        { name: 'Goat Rogan Josh', description: 'Aromatic goat curry with Kashmiri spices', veg: false, spice: SpiceLevel.MEDIUM, p10: 135, p25: 310, p50: 580 },
        { name: 'Goat Vindaloo', description: 'Spicy goat curry with tangy flavors', veg: false, spice: SpiceLevel.HOT, p10: 135, p25: 310, p50: 580 },
      ],
    },
    {
      categoryName: 'Seafood Entrees',
      items: [
        { name: 'Shrimp Curry', description: 'Succulent shrimp in coconut curry sauce', veg: false, spice: SpiceLevel.MEDIUM, p10: 140, p25: 320, p50: 600 },
        { name: 'Fish Curry', description: 'Fresh fish in traditional curry sauce', veg: false, spice: SpiceLevel.MEDIUM, p10: 130, p25: 300, p50: 560 },
        { name: 'Shrimp Tikka Masala', description: 'Grilled shrimp in creamy tomato sauce', veg: false, spice: SpiceLevel.MILD, p10: 145, p25: 330, p50: 620 },
      ],
    },
    {
      categoryName: 'Indo-Chinese Rice & Noodles',
      items: [
        { name: 'Chicken Fried Rice', description: 'Stir-fried rice with chicken and vegetables', veg: false, spice: SpiceLevel.MILD, p10: 80, p25: 180, p50: 340 },
        { name: 'Vegetable Fried Rice', description: 'Stir-fried rice with mixed vegetables', veg: true, spice: SpiceLevel.MILD, p10: 70, p25: 160, p50: 300 },
        { name: 'Chicken Hakka Noodles', description: 'Stir-fried noodles with chicken', veg: false, spice: SpiceLevel.MEDIUM, p10: 85, p25: 190, p50: 360 },
        { name: 'Vegetable Hakka Noodles', description: 'Stir-fried noodles with vegetables', veg: true, spice: SpiceLevel.MEDIUM, p10: 75, p25: 170, p50: 320 },
      ],
    },
    {
      categoryName: 'Rice Varieties',
      items: [
        { name: 'Jeera Rice', description: 'Basmati rice with cumin seeds', veg: true, spice: SpiceLevel.MILD, p10: 50, p25: 110, p50: 200 },
        { name: 'Lemon Rice', description: 'Tangy rice with lemon and peanuts', veg: true, spice: SpiceLevel.MILD, p10: 55, p25: 120, p50: 220 },
        { name: 'Curd Rice', description: 'Cooling yogurt rice with tempering', veg: true, spice: SpiceLevel.MILD, p10: 50, p25: 110, p50: 200 },
        { name: 'Plain Basmati Rice', description: 'Steamed basmati rice', veg: true, spice: SpiceLevel.MILD, p10: 40, p25: 90, p50: 160 },
      ],
    },
    {
      categoryName: 'Tandoori Grill',
      items: [
        { name: 'Tandoori Chicken', description: 'Chicken marinated in yogurt and spices, grilled in tandoor', veg: false, spice: SpiceLevel.MEDIUM, p10: 110, p25: 250, p50: 470 },
        { name: 'Chicken Tikka', description: 'Boneless chicken pieces marinated and grilled', veg: false, spice: SpiceLevel.MEDIUM, p10: 115, p25: 260, p50: 490 },
        { name: 'Seekh Kabab', description: 'Minced meat skewers with aromatic spices', veg: false, spice: SpiceLevel.MEDIUM, p10: 120, p25: 270, p50: 510 },
        { name: 'Tandoori Paneer Tikka', description: 'Grilled cottage cheese with bell peppers', veg: true, spice: SpiceLevel.MEDIUM, p10: 90, p25: 200, p50: 380 },
      ],
    },
    {
      categoryName: 'Soups',
      items: [
        { name: 'Tomato Soup', description: 'Creamy tomato soup with herbs', veg: true, spice: SpiceLevel.MILD, p10: 35, p25: 75, p50: 140 },
        { name: 'Sweet Corn Soup', description: 'Creamy corn soup with vegetables', veg: true, spice: SpiceLevel.MILD, p10: 40, p25: 85, p50: 160 },
        { name: 'Hot & Sour Soup', description: 'Spicy and tangy Indo-Chinese soup', veg: true, spice: SpiceLevel.MEDIUM, p10: 40, p25: 85, p50: 160 },
        { name: 'Chicken Soup', description: 'Clear chicken soup with vegetables', veg: false, spice: SpiceLevel.MILD, p10: 45, p25: 95, p50: 180 },
      ],
    },
    {
      categoryName: 'Desserts',
      items: [
        { name: 'Gulab Jamun', description: 'Soft milk dumplings in sugar syrup', veg: true, spice: SpiceLevel.MILD, p10: 50, p25: 110, p50: 200 },
        { name: 'Rasmalai', description: 'Cottage cheese dumplings in sweet milk', veg: true, spice: SpiceLevel.MILD, p10: 60, p25: 130, p50: 240 },
        { name: 'Kheer', description: 'Traditional rice pudding with nuts', veg: true, spice: SpiceLevel.MILD, p10: 55, p25: 120, p50: 220 },
        { name: 'Gajar Halwa', description: 'Carrot pudding with nuts and ghee', veg: true, spice: SpiceLevel.MILD, p10: 65, p25: 140, p50: 260 },
      ],
    },
    {
      categoryName: 'Kids Menu',
      items: [
        { name: 'Chicken Nuggets', description: 'Crispy chicken nuggets with sauce', veg: false, spice: SpiceLevel.MILD, p10: 60, p25: 130, p50: 240 },
        { name: 'Cheese Naan Pizza', description: 'Naan topped with cheese and sauce', veg: true, spice: SpiceLevel.MILD, p10: 50, p25: 110, p50: 200 },
        { name: 'Mini Samosas', description: 'Bite-sized samosas for kids', veg: true, spice: SpiceLevel.MILD, p10: 45, p25: 100, p50: 180 },
      ],
    },
  ];

  for (const location of locations) {
    for (const menuSection of menuItems) {
      const category = createdCategories.find(
        (c) => c.name === menuSection.categoryName
      );
      if (!category) continue;

      for (const item of menuSection.items) {
        await prisma.menuItem.create({
          data: {
            locationId: location.id,
            categoryId: category.id,
            name: item.name,
            description: item.description,
            isVegetarian: item.veg,
            spiceLevel: item.spice,
            pricePerTray10: item.p10,
            pricePerTray25: item.p25,
            pricePerTray50: item.p50,
          },
        });
      }
    }
  }

  console.log('Menu items created for all locations');

  const testimonials = [
    {
      name: 'Sarah & Michael Johnson',
      eventType: 'Wedding',
      city: 'Atlanta, GA',
      content: 'We cannot thank Biryani World Catering enough for making our wedding day absolutely perfect! From the initial consultation to the last bite of dessert, everything was flawless. The Hyderabadi Chicken Biryani was a huge hit with our 250 guests, and the vegetarian options were equally impressive. Our guests are still raving about the food weeks later! The team was professional, punctual, and went above and beyond to accommodate our special requests. The presentation was beautiful, and the flavors were authentic and delicious. If you want your special day to be memorable, this is the catering service to choose!',
      rating: 5,
    },
    {
      name: 'Priya & Raj Patel',
      eventType: 'Housewarming',
      city: 'Houston, TX',
      content: 'Our housewarming party was a grand success thanks to Biryani World Catering! We had 80 guests and wanted to showcase authentic Indian cuisine to our new neighbors and friends. The variety of dishes from appetizers to desserts was outstanding. The Paneer Tikka and Chicken 65 appetizers disappeared within minutes! The staff was courteous and made sure everything ran smoothly. The buffet setup was elegant and the food stayed hot throughout the event. Many of our American friends tried Indian food for the first time and absolutely loved it. We received so many compliments and requests for the catering contact. Highly recommended for any celebration!',
      rating: 5,
    },
    {
      name: 'Jennifer Martinez',
      eventType: 'Corporate Event',
      city: 'Chicago, IL',
      content: 'We hired Biryani World Catering for our company\'s annual celebration with 150 employees, and it was the best decision we made! The team understood our need for diverse options to accommodate various dietary restrictions. They provided an excellent mix of vegetarian, non-vegetarian, and mild to spicy options. The Butter Chicken and Vegetable Biryani were particular favorites. The service was impeccable - they arrived early, set up efficiently, and cleaned up without any hassle. The pricing was very reasonable for the quality and quantity provided. Our employees are already asking when we\'ll have them cater again!',
      rating: 5,
    },
    {
      name: 'David & Lisa Chen',
      eventType: 'Birthday Party',
      city: 'Dallas, TX',
      content: 'My husband\'s 50th birthday party was made extra special by the amazing food from Biryani World Catering. We had 60 guests with varying taste preferences, and everyone found something they loved. The Tandoori Grill selection was phenomenal, and the Indo-Chinese options were a creative touch that our guests appreciated. The kids enjoyed the Kids Menu items, which was a thoughtful addition. The team was flexible with our timeline and accommodated our last-minute guest count changes without any issues. The food was fresh, flavorful, and beautifully presented. Worth every penny!',
      rating: 5,
    },
    {
      name: 'Amit & Sneha Sharma',
      eventType: 'Engagement Party',
      city: 'Atlanta, GA',
      content: 'Our engagement party was a beautiful blend of tradition and celebration, and Biryani World Catering captured that perfectly with their food. The authentic flavors reminded us of home, and our American friends were introduced to the rich culinary heritage of India. We had 120 guests, and the variety of biryanis, curries, and appetizers ensured everyone had plenty to eat. The Goat Rogan Josh and Shrimp Tikka Masala were standout dishes. The presentation was restaurant-quality, and the service staff was attentive and professional. They made our special day even more memorable. Thank you for the wonderful experience!',
      rating: 5,
    },
  ];

  for (const testimonial of testimonials) {
    await prisma.testimonial.create({
      data: testimonial,
    });
  }

  console.log('Testimonials created');

  const blogPosts = [
    {
      title: 'The Ultimate Guide to Planning Your Indian Wedding Catering',
      slug: 'ultimate-guide-indian-wedding-catering',
      excerpt: 'Planning an Indian wedding? Discover expert tips for creating the perfect menu that will delight your guests and honor tradition.',
      content: `Planning an Indian wedding is an exciting journey filled with traditions, colors, and of course, incredible food. The catering is often the highlight of any wedding celebration, and getting it right is crucial for creating lasting memories.

## Understanding Guest Preferences

When planning your wedding menu, consider the diverse tastes of your guests. A typical Indian wedding includes guests from various backgrounds, ages, and dietary preferences. We recommend offering:

- A mix of vegetarian and non-vegetarian options
- Mild to spicy variations of popular dishes
- Traditional favorites alongside fusion options
- Accommodation for common dietary restrictions

## Popular Wedding Menu Items

Based on our 25+ years of experience, these dishes are consistently crowd-pleasers:

**Appetizers:** Samosas, Paneer Tikka, Chicken 65, and Vegetable Pakoras set the perfect tone.

**Main Course:** Biryani varieties (Chicken, Goat, and Vegetable), Butter Chicken, Paneer Tikka Masala, and Dal Makhani are essential.

**Breads:** Naan, Garlic Naan, and Roti complement the curries perfectly.

**Desserts:** Gulab Jamun and Rasmalai provide the sweet ending your celebration deserves.

## Timing and Logistics

Book your caterer at least 3-6 months in advance for wedding season dates. Schedule a tasting session to finalize your menu. Discuss setup, service style (buffet vs. plated), and cleanup arrangements well in advance.

## Budget Considerations

Quality catering is an investment in your guests' experience. Plan for $30-50 per person for a comprehensive menu. Remember, food is what guests remember most about weddings!

Contact us today to start planning your dream wedding menu!`,
      author: 'Chef Rajesh Kumar',
      isPublished: true,
    },
    {
      title: 'Corporate Event Catering: Making Your Business Celebration Memorable',
      slug: 'corporate-event-catering-guide',
      excerpt: 'Learn how to choose the perfect catering for your corporate events, from team lunches to annual galas.',
      content: `Corporate events are opportunities to strengthen team bonds, celebrate achievements, and impress clients. The right catering can elevate your event from ordinary to extraordinary.

## Types of Corporate Events We Cater

- Team building lunches and dinners
- Annual company celebrations
- Client appreciation events
- Product launches
- Holiday parties
- Board meetings and conferences

## Menu Planning for Diverse Teams

Modern workplaces are wonderfully diverse, and your catering should reflect that. We specialize in creating menus that accommodate:

- Various dietary restrictions (vegetarian, vegan, gluten-free)
- Different spice tolerance levels
- Cultural food preferences
- Time constraints for working lunches

## Popular Corporate Menu Options

**For Lunch Meetings:** Biryani bowls, Curry platters with rice and naan, Indo-Chinese rice and noodles

**For Evening Events:** Full buffet with appetizers, multiple entrees, breads, rice, and desserts

**For Networking Events:** Finger foods and appetizers like Samosas, Chicken Lollipops, and Paneer Tikka

## Service Styles

Choose from:
- **Buffet Style:** Great for larger groups, encourages mingling
- **Plated Service:** More formal, ideal for seated dinners
- **Stations:** Interactive and engaging for guests

## Why Choose Indian Cuisine for Corporate Events

Indian food offers incredible variety, bold flavors, and options for every dietary need. It's memorable, conversation-starting, and shows thoughtfulness in your event planning.

Ready to plan your next corporate event? Contact our team for a customized quote!`,
      author: 'Priya Mehta',
      isPublished: true,
    },
    {
      title: 'Housewarming Party Catering: Welcoming Guests to Your New Home',
      slug: 'housewarming-party-catering-tips',
      excerpt: 'Make your housewarming party unforgettable with the perfect blend of traditional and contemporary Indian cuisine.',
      content: `A housewarming party is a special occasion to share your joy with friends and family. Great food creates a warm, welcoming atmosphere that makes your new house feel like home.

## Setting the Right Tone

Your housewarming party menu should reflect your personality while being accessible to all guests. Whether you're hosting an intimate gathering of 20 or a large celebration of 100+, we can create the perfect menu.

## Recommended Menu for Housewarming

**Start Light:** Begin with appetizers like Vegetable Pakoras and Chicken 65 that guests can enjoy while mingling.

**Main Attractions:** Offer 2-3 curry options (one vegetarian, one chicken, one specialty), biryani, fresh breads, and rice.

**Sweet Endings:** Traditional desserts like Gulab Jamun or Kheer leave a lasting impression.

## Serving Styles for Home Parties

**Buffet Setup:** Most popular for housewarmings, allows guests to serve themselves and encourages mingling.

**Family Style:** Large platters on tables create an intimate, homey feel.

**Stations:** Different food stations around your home encourage guests to explore your new space.

## Quantity Planning

Plan for:
- 2-3 appetizer pieces per person
- 1.5 servings of main course per person
- 1 dessert per person
- Extra for guests who want seconds!

## Making It Stress-Free

Let us handle the food so you can focus on hosting. We provide:
- Complete setup and breakdown
- Serving staff if needed
- All serving equipment and utensils
- Cleanup service

## Cultural Traditions

Many cultures have food-related housewarming traditions. We're happy to incorporate special dishes or customs into your menu.

Celebrate your new beginning with food that brings people together. Contact us to plan your housewarming catering!`,
      author: 'Chef Rajesh Kumar',
      isPublished: true,
    },
  ];

  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: post,
    });
  }

  console.log('Blog posts created');

  const siteContent = [
    { key: 'hero_title', value: 'Where Food is Celebrated' },
    { key: 'hero_subtitle', value: 'Authentic Indian Catering for Weddings, Corporate Events & Special Celebrations' },
    { key: 'years_of_excellence', value: '25' },
    { key: 'menu_options', value: '200' },
    { key: 'staff_members', value: '50' },
    { key: 'happy_customers', value: '10000' },
    { key: 'about_title', value: 'A Legacy of Flavor & Tradition' },
    { key: 'about_content', value: 'For over 25 years, Biryani World Catering has been bringing the authentic flavors of India to celebrations across America. What started as a small family kitchen in Atlanta has grown into a trusted name with four locations serving communities in Georgia, Texas, and Illinois. Our journey is rooted in a simple belief: food is more than sustenance—it\'s a celebration of culture, love, and togetherness. Every dish we prepare honors traditional recipes passed down through generations, while embracing the diverse palates of modern America. From intimate family gatherings to grand weddings with hundreds of guests, we pour our heart into every meal.' },
  ];

  for (const content of siteContent) {
    await prisma.siteContent.upsert({
      where: { key: content.key },
      update: { value: content.value },
      create: content,
    });
  }

  console.log('Site content created');
  console.log('Seed completed successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
