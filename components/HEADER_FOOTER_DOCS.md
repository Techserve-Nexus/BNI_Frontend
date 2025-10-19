# Header and Footer Components

## Overview

Reusable Header and Footer components that provide consistent navigation and branding across all pages in the BNI application.

---

## 📦 Components

### 1. Header Component

**Location**: `components/Header.tsx`

A responsive navigation header with mobile menu support and BNI branding.

#### Features:

- ✅ Sticky positioning (stays at top on scroll)
- ✅ Responsive mobile menu with hamburger icon
- ✅ BNI logo with link to home
- ✅ Desktop navigation links
- ✅ Sign In button
- ✅ Consistent styling with BNI brand guidelines

#### Usage:

```tsx
import Header from "@/components/Header"

export default function Page() {
  return (
    <div>
      <Header />
      {/* Your page content */}
    </div>
  )
}
```

#### Navigation Links:

- Our Vision (#vision)
- Events (#events)
- Pricing (#pricing)
- Sign In (/auth/signin)

#### Mobile Behavior:

- Hamburger menu icon on screens < 768px
- Full menu overlay with stacked links
- Close icon (✕) when menu is open
- Mobile menu includes all navigation links + Sign In button

---

### 2. Footer Component

**Location**: `components/Footer.tsx`

A comprehensive footer with links, resources, and branding information.

#### Features:

- ✅ 4-column grid layout (responsive)
- ✅ BNI branding and tagline
- ✅ Quick links section
- ✅ Resources section
- ✅ Connect/CTA section
- ✅ Copyright notice with dynamic year
- ✅ Trademark acknowledgment

#### Usage:

```tsx
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <div>
      {/* Your page content */}
      <Footer />
    </div>
  )
}
```

#### Footer Sections:

**Brand Section:**

- BNI logo and name
- Company tagline
- Mission statement

**Quick Links:**

- Our Vision
- Events
- Membership
- Calendar

**Resources:**

- About BNI
- Core Values
- Success Stories
- Contact Us

**Connect:**

- Call-to-action text
- "Get Started" button

**Copyright:**

- Dynamic year
- Trademark notice for "Givers Gain®"

---

## 🎨 Styling

### Header Styling:

- Background: White
- Border: Bottom border with BNI grey
- Shadow: BNI shadow for depth
- Position: Sticky (z-index: 50)
- Logo: BNI Red (#CF2030)
- Links: BNI Grey with hover effects

### Footer Styling:

- Background: BNI Granite Grey (#64666A)
- Text: White with opacity variants
- Links: Footer variant (white/70)
- CTA Button: Primary BNI Red
- Border: Top border with white/20 opacity

---

## 🔧 Customization

### Modifying Navigation Links

To add/remove navigation links, edit `components/Header.tsx`:

```tsx
{
  /* Desktop Navigation */
}
;<div className="hidden items-center gap-8 md:flex">
  <BNILink href="#vision" variant="nav">
    Our Vision
  </BNILink>
  <BNILink href="#events" variant="nav">
    Events
  </BNILink>
  <BNILink href="#pricing" variant="nav">
    Pricing
  </BNILink>
  <BNILink href="/new-page" variant="nav">
    New Page
  </BNILink> {/* Add here */}
  <Button href="/auth/signin" size="md">
    Sign In
  </Button>
</div>

{
  /* Also update Mobile Navigation */
}
{
  mobileMenuOpen && (
    <div className="...">
      <BNILink href="#vision" variant="nav" className="block">
        Our Vision
      </BNILink>
      {/* Add mobile links here too */}
    </div>
  )
}
```

### Modifying Footer Links

To add/remove footer links, edit `components/Footer.tsx`:

```tsx
{
  /* Quick Links */
}
;<ul className="space-y-2 text-sm text-white/70">
  <li>
    <BNILink href="/new-link" variant="footer">
      New Link
    </BNILink>
  </li>
  {/* Add more links */}
</ul>
```

### Changing Footer CTA

```tsx
<Button variant="primary" size="sm" href="/your-custom-link">
  Your Custom CTA Text
</Button>
```

---

## 📱 Responsive Behavior

### Header:

- **Desktop (≥ 768px)**: Horizontal navigation with links side-by-side
- **Mobile (< 768px)**: Hamburger menu with overlay
- Logo remains visible on all screen sizes

### Footer:

- **Desktop (≥ 768px)**: 4-column grid
- **Tablet (≥ 640px)**: 2-column grid
- **Mobile (< 640px)**: Single column stack

---

## 🚀 Integration with Pages

### Standard Page Layout:

```tsx
import Footer from "@/components/Footer"
import Header from "@/components/Header"

export default function MyPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>{/* Your page content */}</main>

      <Footer />
    </div>
  )
}
```

### With Layout Component:

You can also add Header/Footer to your root layout for site-wide consistency:

```tsx
// app/layout.tsx
import Footer from "@/components/Footer"
import Header from "@/components/Header"
import "styles/tailwind.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
```

**Note**: If using in layout, remove `<Header />` and `<Footer />` from individual pages.

---

## ♿ Accessibility

### Header:

- ✅ Semantic `<nav>` element
- ✅ `aria-label` on mobile menu button
- ✅ Keyboard navigation support
- ✅ Focus indicators on all interactive elements

### Footer:

- ✅ Semantic `<footer>` element
- ✅ Proper heading hierarchy
- ✅ Link text is descriptive
- ✅ Sufficient color contrast (WCAG AA compliant)

---

## 🎯 BNI Brand Compliance

Both components follow official BNI brand guidelines:

### Colors Used:

- **BNI Red**: `#CF2030` (Primary CTA, logo)
- **Granite Grey**: `#64666A` (Footer background)
- **Sterling Grey**: `#C8C8C8` (Borders)
- **True White**: `#FFFFFF` (Text, backgrounds)

### Typography:

- Font: Helvetica Neue (with Arial fallback)
- Weights: Regular (400), Bold (700)
- Proper hierarchy with semantic headings

### Logo Usage:

- BNI Red logo text
- Handshake emoji (🤝) as brand icon
- Proper spacing and sizing
- Links to homepage

---

## 🧪 Testing Checklist

Before deploying, verify:

- [ ] Header appears on all pages
- [ ] Mobile menu opens/closes correctly
- [ ] All navigation links work
- [ ] Sign In button redirects properly
- [ ] Footer appears on all pages
- [ ] All footer links work
- [ ] Copyright year is dynamic
- [ ] Responsive on mobile, tablet, desktop
- [ ] Keyboard navigation works
- [ ] Screen reader friendly

---

## 📝 Update History

**Version 1.0** (October 19, 2025)

- ✅ Created reusable Header component
- ✅ Created reusable Footer component
- ✅ Integrated into home page (page.tsx)
- ✅ Full responsive design
- ✅ Mobile menu functionality
- ✅ BNI brand compliance
- ✅ Accessibility features
- ✅ Documentation complete

---

## 🔮 Future Enhancements

Potential improvements for future versions:

1. **Header:**

   - Add search functionality
   - User profile dropdown (when logged in)
   - Notification bell
   - Active link highlighting based on current route
   - Mega menu for nested navigation

2. **Footer:**

   - Social media icons
   - Newsletter signup form
   - Language selector
   - Sitemap
   - Dynamic chapter information

3. **Both:**
   - Dark mode support
   - Animation transitions
   - Loading states
   - Breadcrumb integration (Header)
   - Back to top button (Footer)

---

## 📚 Related Documentation

- [Component Library README](./ui/README.md)
- [Component Setup Guide](./ui/SETUP.md)
- [Migration Complete Guide](../MIGRATION_COMPLETE.md)
- [BNI Brand Guidelines](../.github/copilot-instructions.md)

---

**Need help?** Check the component examples in `components/examples/ComponentExamples.tsx` or refer to the main component documentation.
