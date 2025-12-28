# Biryani World Catering - Fullstack Catering Web Application

A production-ready fullstack catering web application built with Next.js, TypeScript, Prisma, and Stripe. This platform combines emotional storytelling marketing with a complete online catering ordering system for a multi-restaurant Indian catering brand.

## Features

### Marketing Website
- **Emotional Hero Section** - Inspired by Venus Catering Service with compelling storytelling
- **About Page** - Brand story, philosophy, and 25+ years of heritage
- **Services** - Detailed catering services for weddings, corporate events, housewarmings, birthdays, and festivals
- **Locations** - 4 restaurant locations across the USA (Atlanta, Houston, Chicago, Dallas)
- **Gallery** - Event photos and food presentations
- **Testimonials** - Long-form customer reviews and success stories
- **Blog** - Catering tips and event planning guides
- **Contact** - Multi-channel contact form with location details

### Online Ordering System
- **Event Setup** - Event type, date/time, guest count, location (48hr minimum validation)
- **Location Selection** - Choose from any of 4 restaurant locations
- **Menu Builder** - Comprehensive menu with 15+ categories inspired by Biryani World Fusion & Grill
  - Breads, Bucket Biryani, Signature Biryani, Family Pack
  - Vegetarian & Non-Vegetarian Appetizers
  - Chicken, Goat, Seafood Entrees
  - Indo-Chinese Rice & Noodles, Tandoori Grill
  - Soups, Desserts, Kids Menu
- **Catering Packs** - Tray options for 10, 25, or 50 people
- **Smart Cart** - Real-time coverage calculation and recommendations
- **Stripe Checkout** - Secure payment with Stripe Tax integration
- **Order Confirmation** - Email notifications and order tracking

### Admin Panel (Coming Soon)
- Dashboard with analytics
- Order management and status updates
- Menu item CRUD operations
- Content management for site copy
- Location management

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, Tailwind CSS
- **UI Components**: Custom components with shadcn/ui patterns
- **Backend**: Next.js API Routes with input validation (Zod)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js with credentials provider
- **Payments**: Stripe Checkout + Stripe Tax
- **Email**: Resend (configured)

## Database Schema

- **User** - Customer and admin authentication
- **Location** - 4 restaurant locations with details
- **MenuCategory** - 15 organized menu categories
- **MenuItem** - 200+ menu items with pricing tiers
- **EventOrder** - Catering orders with full event details
- **EventOrderItem** - Line items for each order
- **Testimonial** - Customer reviews
- **BlogPost** - Content management
- **SiteContent** - Dynamic site configuration

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Stripe account (test mode)
- Resend account (optional, for emails)

### Installation

1. **Clone and install dependencies**
```bash
cd biryaniworldcatering
npm install
```

2. **Set up environment variables**
```bash
cp .env.example .env
```

Edit `.env` with your credentials:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/biryanicatering"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="noreply@biryaniworldcatering.com"
```

3. **Set up the database**
```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# Seed the database with sample data
npx prisma db seed
```

This will create:
- 4 restaurant locations (Atlanta, Houston, Chicago, Dallas)
- 15 menu categories
- 200+ menu items across all categories
- Sample testimonials and blog posts
- Admin user (email: admin@biryaniworldcatering.com, password: admin123)

4. **Run the development server**
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## Project Structure

```
/src
  /app
    /(marketing)          # Public marketing pages
      /page.tsx           # Home page with hero, stats, testimonials
      /about              # Brand story and values
      /services           # Service offerings
      /locations          # 4 restaurant locations
      /gallery            # Event photos
      /testimonials       # Customer reviews
      /blog               # Blog posts
      /contact            # Contact form
    /(order)              # Ordering flow
      /event              # Step 1: Event details
      /location           # Step 2: Location selection
      /menu               # Step 3: Menu builder
      /cart               # Step 4: Cart review
      /checkout           # Step 5: Payment
      /success            # Order confirmation
    /api
      /menu               # Fetch menu items by location
      /orders/create      # Create order and Stripe session
      /locations          # Get active locations
      /auth/[...nextauth] # NextAuth endpoints
  /components
    /ui                   # Reusable UI components
    /Navbar.tsx           # Main navigation
    /Footer.tsx           # Site footer
  /lib
    /db.ts                # Prisma client
    /auth.ts              # NextAuth configuration
    /stripe.ts            # Stripe integration
    /utils.ts             # Utility functions
  /prisma
    /schema.prisma        # Database schema
    /seed.ts              # Seed data script
```

## Key Features Implementation

### Menu System
- 15 categories based on Biryani World Fusion & Grill
- Each item has 3 pricing tiers (10, 25, 50 servings)
- Vegetarian/non-vegetarian indicators
- Spice level badges (Mild, Medium, Hot, Extra Hot)
- Real-time availability management

### Ordering Flow
- **48-hour minimum** advance booking validation
- **Guest count validation** (10-500 guests)
- **Smart recommendations** based on guest count
- **Coverage calculation** - warns if insufficient food ordered
- **Multi-location support** - order from any location
- **Session-based cart** - persists across page navigation

### Payment Integration
- **Stripe Checkout** for secure payments
- **Stripe Tax** for automatic tax calculation
- **Deposit option** - pay 30% upfront, rest offline
- **Full payment option** - complete payment online
- Order confirmation with email notifications

### Marketing Pages
- **Emotional storytelling** inspired by Venus Catering
- **Stats counters** - 25+ years, 200+ menu options, 10,000+ customers
- **Event type cards** - Weddings, Corporate, Housewarming, etc.
- **Long-form testimonials** - authentic customer stories
- **Service details** - comprehensive service descriptions

## Database Seeding

The seed script creates:
- **4 Locations** with complete details
- **15 Menu Categories** in proper order
- **200+ Menu Items** with authentic Indian dishes
- **5 Testimonials** with detailed reviews
- **3 Blog Posts** with catering tips
- **Site Content** for dynamic configuration
- **Admin User** for testing

## API Endpoints

### Public Endpoints
- `GET /api/menu?locationId={id}` - Fetch menu items
- `GET /api/locations` - Get active locations
- `POST /api/orders/create` - Create order and checkout session

### Protected Endpoints (Coming Soon)
- `GET /api/admin/orders` - List all orders
- `PATCH /api/admin/orders/{id}` - Update order status
- `POST /api/admin/menu` - Create menu item
- `PUT /api/admin/menu/{id}` - Update menu item

## Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| DATABASE_URL | PostgreSQL connection string | Yes |
| NEXTAUTH_URL | Application URL | Yes |
| NEXTAUTH_SECRET | NextAuth secret key | Yes |
| STRIPE_PUBLIC_KEY | Stripe publishable key | Yes |
| STRIPE_SECRET_KEY | Stripe secret key | Yes |
| STRIPE_WEBHOOK_SECRET | Stripe webhook secret | No |
| RESEND_API_KEY | Resend API key | No |
| RESEND_FROM_EMAIL | Sender email address | No |

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Database Setup

Use a managed PostgreSQL service:
- **Vercel Postgres** (easiest integration)
- **Supabase** (free tier available)
- **Railway** (PostgreSQL hosting)
- **Neon** (serverless PostgreSQL)

### Stripe Configuration

1. Enable Stripe Tax in your dashboard
2. Set up tax registration for GA (default)
3. Configure webhook endpoint: `/api/webhooks/stripe`
4. Add webhook secret to environment variables

## Testing

### Test Credentials
- **Admin**: admin@biryaniworldcatering.com / admin123

### Test Stripe Cards
- **Success**: 4242 4242 4242 4242
- **Decline**: 4000 0000 0000 0002

## Customization

### Branding
- Update colors in `tailwind.config.ts`
- Replace logo and images in `/public`
- Modify site content via database or CMS

### Menu Items
- Add/edit items via Prisma Studio: `npx prisma studio`
- Or use admin panel (coming soon)

### Locations
- Update location details in seed file
- Or manage via admin panel (coming soon)

## Performance Optimizations

- Server-side rendering for marketing pages
- Client-side state management for ordering flow
- Optimized images with Next.js Image component
- Database query optimization with Prisma
- Stripe Tax automatic calculation

## Security

- NextAuth.js for authentication
- Password hashing with bcrypt
- SQL injection protection via Prisma
- CSRF protection built-in
- Environment variable validation
- Input validation with Zod (ready to implement)

## Future Enhancements

- [ ] Complete admin panel
- [ ] Email notifications with Resend
- [ ] Order tracking for customers
- [ ] Menu item images
- [ ] Gallery with real photos
- [ ] Blog post detail pages
- [ ] Customer accounts and order history
- [ ] SMS notifications
- [ ] Advanced analytics dashboard
- [ ] Multi-language support

## Support

For questions or issues:
- Email: info@biryaniworldcatering.com
- Phone: (404) 555-0101

## License

Proprietary - All rights reserved

---

Built with ❤️ for Biryani World Catering
