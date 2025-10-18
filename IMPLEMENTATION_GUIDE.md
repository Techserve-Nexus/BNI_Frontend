# BNI Event Hub - Frontend Implementation Guide

## Project Overview

This is a comprehensive frontend implementation of BNI (Business Network International) Event Hub built with Next.js 15, TypeScript, and Tailwind CSS. The project follows modular architecture with reusable components, centralized data management, and brand consistency throughout.

## 📁 Project Structure

```
next-enterprise-main/
├── app/
│   ├── layout.tsx              # Root layout
│   ├── page.tsx                # Home/Landing page
│   ├── auth/
│   │   ├── signin/page.tsx     # Sign in page
│   │   └── signup/page.tsx     # Sign up page
│   ├── events/
│   │   ├── page.tsx            # All events listing
│   │   └── [id]/page.tsx       # Event detail page
│   └── profile/
│       ├── layout.tsx          # Protected profile layout
│       ├── page.tsx            # Profile dashboard
│       ├── user/page.tsx       # User information tab
│       ├── subscription/page.tsx  # Subscription management
│       ├── payment/page.tsx    # Payment handling
│       └── attendance/page.tsx # Attendance tracking
├── components/
│   ├── Hero.tsx               # Hero section component
│   ├── EventsList.tsx         # Events grid component
│   ├── Appraising.tsx         # Statistics component
│   ├── Testimonials.tsx       # Testimonials section
│   └── CTA.tsx                # Call-to-action component
├── data/
│   ├── home.ts                # Home page content
│   ├── events.ts              # Events data
│   └── testimonials.ts        # Testimonials data
├── lib/
│   └── constants.ts           # BNI brand constants
├── styles/
│   └── tailwind.css           # Global styles
├── tailwind.config.js         # Tailwind configuration
└── tsconfig.json              # TypeScript configuration
```

## 🎨 Design System

### Brand Colors

- **Primary Red**: `#CF2030` (BNI Red)
- **Primary Red Hover**: `#a31a24`
- **Secondary Grey**: `#C8C8C8` (Sterling Grey)
- **Background Light**: `#F2F2F2` (Sterling Light Grey)
- **Text Dark**: `#64666A` (Granite Grey)
- **White**: `#FFFFFF`

### Tailwind Custom Classes

All brand colors are available as `bni-*` utilities:

```tsx
<div className="bg-bni-red text-bni-white rounded-bni shadow-bni">BNI Branded Element</div>
```

### Reusable Card Component

```tsx
<div className="card-bni">Content here</div>
```

## 📱 Pages & Routes

### Public Pages

- **`/`** - Landing page with hero, events preview, testimonials, and pricing
- **`/events`** - All events listing (upcoming and past)
- **`/events/[id]`** - Event details with memories
- **`/auth/signin`** - Sign in page
- **`/auth/signup`** - Sign up page

### Protected Pages (Requires Authentication)

- **`/profile`** - Profile dashboard (redirects from layout if not authenticated)
- **`/profile/user`** - User profile information
- **`/profile/subscription`** - Subscription management
- **`/profile/payment`** - Payment and upgrade
- **`/profile/attendance`** - Event attendance tracking

## 🔑 Key Features

### Authentication

- Client-side stub using localStorage
- Ready to integrate with real backend
- Session management with token storage
- Automatic redirect to signin if not authenticated

### Data Management

- Centralized constants in `lib/constants.ts`
- JSON data files in `data/` folder
- Easy to migrate to API endpoints
- TypeScript interfaces for type safety

### Responsive Design

- Mobile-first approach
- Tailwind responsive utilities
- Hamburger menu on mobile (main page)
- Adaptive layouts

### Accessibility

- Semantic HTML
- ARIA labels
- Keyboard navigation support
- Readable color contrasts

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Open browser
open http://localhost:3000
```

### Demo Credentials

```
Email: demo@example.com
Password: any password
```

## 📝 Component Documentation

### Hero Component

```tsx
import Hero from "@/components/Hero"

// Displays main hero section with branding
;<Hero />
```

### EventsList Component

```tsx
import EventsList from "@/components/EventsList"

// Shows event cards with limit
;<EventsList limit={3} />
```

### Testimonials Component

```tsx
import Testimonials from "@/components/Testimonials"

// Display member success stories
;<Testimonials />
```

### Appraising Component

```tsx
import Appraising from "@/components/Appraising"

// Shows key statistics
;<Appraising />
```

### CTA Component

```tsx
import CTA from "@/components/CTA"

// Call-to-action section
;<CTA />
```

## 🔧 Customization

### Adding New Events

Edit `data/events.ts`:

```typescript
export const eventsData = [
  {
    id: "new-event",
    title: "New Event Title",
    description: "Event description",
    date: "2025-11-01",
    time: "10:00 AM",
    venue: "Venue Name",
    location: "City",
    image: "/events/image.jpg",
    expectedAttendees: 100,
    status: "upcoming",
    memories: [],
  },
]
```

### Adding New Testimonials

Edit `data/testimonials.ts`:

```typescript
{
  id: 't_new',
  name: 'Person Name',
  company: 'Company Name',
  title: 'Job Title',
  quote: 'Their quote here',
  avatar: '/avatars/avatar.jpg',
  chapter: 'Chapter Name',
  rating: 5
}
```

### Updating Brand Colors

Edit `lib/constants.ts`:

```typescript
export const BRAND = {
  colors: {
    primary: "#CF2030",
    // ... update colors
  },
}
```

## 🔌 API Integration

### Authentication Endpoint

Replace localStorage stub in `/app/auth/signin/page.tsx`:

```typescript
// Current: localStorage
// TODO: Replace with API call
const res = await fetch("/api/auth/signin", {
  method: "POST",
  body: JSON.stringify({ email, password }),
})
```

### Events Endpoint

Migrate from `data/events.ts`:

```typescript
// Current: Import from file
// TODO: Fetch from API
const res = await fetch("/api/events")
const events = await res.json()
```

### Payment Verification

Update `/app/profile/payment/page.tsx`:

```typescript
// Current: Stub
// TODO: Upload to S3/Cloudinary
const formData = new FormData()
formData.append("file", file)
const res = await fetch("/api/payment/upload", {
  method: "POST",
  body: formData,
})
```

## 📊 Membership Plans

Three tiers are predefined in `lib/constants.ts`:

1. **Starter** - $99/month

   - Basic features
   - Weekly meetings
   - Member directory

2. **Professional** - $199/month (Most Popular)

   - Advanced analytics
   - Priority support
   - 1-on-1 coaching

3. **Enterprise** - $499/month
   - Multi-user access
   - Custom reporting
   - Dedicated manager

## 🛠️ Development Tips

### Creating New Pages

1. Create folder in `app/` directory
2. Add `page.tsx` file
3. Use 'use client' for interactive components
4. Import components from `components/`

### Styling Guidelines

- Use Tailwind classes for styling
- Follow BNI color scheme
- Use `rounded-bni` for borders
- Use `shadow-bni` for shadows
- Keep consistency across pages

### TypeScript Usage

- Define interfaces for all data types
- Use proper typing for props
- Avoid `any` types
- Use `// eslint-disable-next-line` for necessary exceptions

## 📋 Checklist for Production

- [ ] Replace localStorage with real authentication
- [ ] Connect to API endpoints
- [ ] Add image assets
- [ ] Set up database (if needed)
- [ ] Configure environment variables
- [ ] Add unit tests
- [ ] Add E2E tests
- [ ] Performance optimization
- [ ] SEO optimization
- [ ] Deployment configuration

## 🐛 Known Limitations

1. **Authentication**: Currently uses localStorage (development only)
2. **Images**: Placeholder divs used instead of actual images
3. **Payment**: No real payment integration (stub only)
4. **Email**: No email notifications implemented
5. **Database**: All data is static/hardcoded

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
- [BNI Official Website](https://www.bni.com)

## 📞 Support

For questions about implementation:

1. Check the code comments
2. Review the component documentation above
3. Refer to the project structure
4. Check Tailwind and Next.js docs

## 📄 License

This project follows the guidelines of Business Network International (BNI).

---

**Last Updated**: October 18, 2025
**Version**: 1.0.0
