# Quick Setup Guide - Biryani World Catering

This guide will help you get the application running locally in under 10 minutes.

## Prerequisites

Before starting, ensure you have:
- **Node.js 18+** installed
- **PostgreSQL** database (local or cloud)
- **Stripe account** (free test mode)
- **Git** installed

## Step-by-Step Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Edit `.env` with your credentials:

```env
# Database - Use your PostgreSQL connection string
DATABASE_URL="postgresql://username:password@localhost:5432/biryanicatering?schema=public"

# NextAuth - Generate a secret: openssl rand -base64 32
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-generated-secret-here"

# Stripe - Get from https://dashboard.stripe.com/test/apikeys
STRIPE_PUBLIC_KEY="pk_test_..."
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..." # Optional for local dev

# Email (Optional) - Get from https://resend.com
RESEND_API_KEY="re_..."
RESEND_FROM_EMAIL="noreply@biryaniworldcatering.com"
```

### 3. Set Up Database

```bash
# Generate Prisma client
npx prisma generate

# Create database tables
npx prisma migrate dev --name init

# Seed with sample data (4 locations, 200+ menu items, testimonials, etc.)
npx prisma db seed
```

**What gets seeded:**
- 4 restaurant locations (Atlanta, Houston, Chicago, Dallas)
- 15 menu categories
- 200+ authentic Indian menu items
- 5 detailed testimonials
- 3 blog posts
- Admin user: `admin@biryaniworldcatering.com` / `admin123`

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing the Application

### 1. Browse Marketing Pages
- **Home**: Hero section, stats, event types, testimonials
- **About**: Brand story and values
- **Services**: Detailed service offerings
- **Locations**: 4 restaurant locations
- **Testimonials**: Customer reviews
- **Contact**: Contact form

### 2. Test Ordering Flow

**Step 1: Event Details** (`/order/event`)
- Select event type (e.g., Wedding)
- Choose date (minimum 48 hours from now)
- Enter guest count (10-500)
- Provide event address

**Step 2: Location Selection** (`/order/location`)
- Choose from 4 restaurant locations
- Any location can serve any event

**Step 3: Menu Builder** (`/order/menu`)
- Browse 15 categories of Indian cuisine
- Add items in different tray sizes (10, 25, 50 people)
- See real-time coverage calculation

**Step 4: Cart Review** (`/order/cart`)
- Review selected items
- See subtotal, service charge, tax
- Get recommendations if coverage is low

**Step 5: Checkout** (`/order/checkout`)
- Enter contact information
- Choose payment option (full or 30% deposit)
- Complete Stripe payment

### 3. Test with Stripe

Use Stripe test cards:
- **Success**: `4242 4242 4242 4242`
- **Decline**: `4000 0000 0000 0002`
- Any future expiry date
- Any 3-digit CVC

## Database Management

### View Data with Prisma Studio

```bash
npx prisma studio
```

Opens a GUI at `http://localhost:5555` to view/edit database records.

### Reset Database

```bash
npx prisma migrate reset
```

This will:
1. Drop all tables
2. Recreate tables
3. Run seed script automatically

## Common Issues & Solutions

### Issue: Database connection error

**Solution**: Check your `DATABASE_URL` in `.env`
- Ensure PostgreSQL is running
- Verify credentials are correct
- Test connection: `psql "your-connection-string"`

### Issue: Prisma client not found

**Solution**: Generate the client
```bash
npx prisma generate
```

### Issue: Stripe payment fails

**Solution**: 
- Verify Stripe keys are in test mode (`pk_test_` and `sk_test_`)
- Check Stripe dashboard for errors
- Ensure Stripe Tax is enabled in your account

### Issue: Port 3000 already in use

**Solution**: Kill the process or use a different port
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or run on different port
PORT=3001 npm run dev
```

## Project Structure Overview

```
/src
  /app
    /(marketing)     # Public pages: Home, About, Services, etc.
    /(order)         # 5-step ordering flow
    /api             # Backend API routes
  /components
    /ui              # Reusable UI components
  /lib               # Utilities, auth, database, Stripe
/prisma
  schema.prisma      # Database schema
  seed.ts            # Sample data
```

## Key Features to Test

### Marketing Website
✅ Emotional hero section with CTA  
✅ Stats counters (25+ years, 200+ menu options)  
✅ Event type cards with descriptions  
✅ Long-form testimonials  
✅ Service details for all event types  
✅ 4 location pages with contact info  
✅ Contact form  

### Ordering System
✅ 48-hour advance booking validation  
✅ Guest count validation (10-500)  
✅ Multi-location support  
✅ 15 menu categories  
✅ 3 tray sizes per item  
✅ Vegetarian/non-veg indicators  
✅ Spice level badges  
✅ Smart coverage recommendations  
✅ Real-time cart calculations  
✅ Stripe Checkout integration  
✅ Stripe Tax automatic calculation  
✅ Deposit or full payment options  

## Next Steps

### For Development
1. Customize branding in `tailwind.config.ts`
2. Add real images to `/public/images`
3. Update location details in seed file
4. Customize menu items via Prisma Studio
5. Set up email notifications with Resend

### For Production
1. Set up production database (Vercel Postgres, Supabase, etc.)
2. Configure production Stripe keys
3. Enable Stripe Tax for your states
4. Set up Stripe webhooks
5. Configure custom domain
6. Add analytics (Google Analytics, Vercel Analytics)

## Support

If you encounter issues:
1. Check this guide's troubleshooting section
2. Review the main README.md
3. Check Prisma logs: `npx prisma studio`
4. Verify environment variables are set correctly

## Quick Commands Reference

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm run start            # Start production server

# Database
npx prisma generate      # Generate Prisma client
npx prisma migrate dev   # Create migration
npx prisma db seed       # Seed database
npx prisma studio        # Open database GUI
npx prisma migrate reset # Reset database

# Deployment
vercel                   # Deploy to Vercel
```

## Sample Test Scenario

1. **Browse the site**: Visit home, about, services pages
2. **Start an order**: Click "Plan Your Event"
3. **Enter event details**: 
   - Event: Wedding
   - Date: 3 days from now
   - Guests: 100
   - Location: Your address
4. **Select location**: Choose Atlanta
5. **Build menu**:
   - Add 2 Chicken Biryani (Tray for 50)
   - Add 1 Paneer Tikka (Tray for 25)
   - Add 2 Naan (Tray for 25)
   - Add 1 Gulab Jamun (Tray for 50)
6. **Review cart**: Check totals and coverage
7. **Checkout**: Enter contact info
8. **Pay with Stripe**: Use test card `4242 4242 4242 4242`
9. **Success**: See confirmation page

---

**You're all set!** The application is now running with a fully functional catering ordering system. Explore the features and customize as needed.
