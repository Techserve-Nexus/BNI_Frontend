# BNI UI Components Documentation

This directory contains reusable UI components following BNI's official brand guidelines.

## 📦 Available Components

### 1. Button Component

Versatile button component with multiple variants and sizes.

```tsx
import { Button } from "@/components/ui"

// Primary button
<Button variant="primary" size="lg">
  Get Started
</Button>

// Secondary button with icon
<Button variant="secondary" rightIcon={<span>→</span>}>
  Learn More
</Button>

// Button as link
<Button variant="primary" href="/signup">
  Join Now
</Button>

// Loading state
<Button loading>Processing...</Button>

// With icons
<Button leftIcon={<span>🎯</span>}>
  With Icon
</Button>
```

**Props:**

- `variant`: "primary" | "secondary" | "outline" | "ghost" | "danger"
- `size`: "sm" | "md" | "lg" | "xl"
- `href`: string (renders as Link)
- `fullWidth`: boolean
- `loading`: boolean
- `leftIcon`, `rightIcon`: React.ReactNode
- `disabled`: boolean

---

### 2. Card Component

Flexible card component with header, content, and footer sections.

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui"

;<Card variant="interactive">
  <CardHeader>
    <CardTitle>Event Title</CardTitle>
    <CardDescription>November 2025</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Join us for networking and growth opportunities</p>
  </CardContent>
  <CardFooter>
    <Button>Register Now</Button>
  </CardFooter>
</Card>
```

**Props:**

- `variant`: "default" | "bordered" | "elevated" | "interactive"
- `padding`: "none" | "sm" | "md" | "lg"

---

### 3. Link Component

Smart link component that automatically handles internal/external links.

```tsx
import { BNILink } from "@/components/ui"

// Internal link
<BNILink href="/about">About Us</BNILink>

// External link (auto-detects)
<BNILink href="https://bni.com" external>
  BNI Official ↗
</BNILink>

// Navigation link
<BNILink href="/events" variant="nav">Events</BNILink>

// Button-styled link
<BNILink href="/signup" variant="button">Join Now</BNILink>

// Footer link
<BNILink href="/privacy" variant="footer">Privacy Policy</BNILink>
```

**Props:**

- `variant`: "default" | "button" | "nav" | "footer" | "underline"
- `external`: boolean
- `disabled`: boolean

---

### 4. CTA (Call-to-Action) Component

Pre-styled CTA sections for marketing and conversion.

```tsx
import { CTA } from "@/components/ui"

<CTA
  title="Ready to Join BNI?"
  description="Start building meaningful business relationships today"
  variant="gradient"
  primaryAction={{ text: "Get Started", href: "/signup" }}
  secondaryAction={{ text: "Learn More", href: "/about" }}
  align="center"
/>

// With custom content
<CTA
  title="Special Offer"
  variant="default"
>
  <p>Custom content here</p>
</CTA>
```

**Props:**

- `title`: string (required)
- `description`: string
- `variant`: "default" | "gradient" | "minimal"
- `align`: "left" | "center" | "right"
- `primaryAction`: { text: string, href?: string, onClick?: () => void }
- `secondaryAction`: { text: string, href?: string, onClick?: () => void }

---

### 5. Badge Component

Small status/tag indicators.

```tsx
import { Badge } from "@/components/ui"

<Badge>New</Badge>
<Badge variant="success">Active</Badge>
<Badge variant="warning" size="lg">Pending</Badge>
<Badge variant="danger">Closed</Badge>
```

**Props:**

- `variant`: "default" | "primary" | "success" | "warning" | "danger" | "info"
- `size`: "sm" | "md" | "lg"
- `rounded`: boolean (default: true)

---

### 6. Container Component

Responsive container with max-width constraints.

```tsx
import { Container } from "@/components/ui"

<Container maxWidth="xl" centered>
  <h1>Page Content</h1>
</Container>

<Container maxWidth="sm" padding="lg">
  Smaller, more padded container
</Container>
```

**Props:**

- `maxWidth`: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
- `padding`: "none" | "sm" | "md" | "lg"
- `centered`: boolean

---

### 7. Section Component

Page section wrapper with consistent spacing and backgrounds.

```tsx
import { Section, SectionHeader, SectionContent } from "@/components/ui"

;<Section spacing="lg" background="light">
  <SectionHeader title="Our Services" description="What we offer to our members" align="center" />
  <SectionContent>
    <div className="grid grid-cols-3 gap-8">{/* Content */}</div>
  </SectionContent>
</Section>
```

**Props:**

- `spacing`: "none" | "sm" | "md" | "lg" | "xl"
- `background`: "white" | "light" | "gradient" | "dark" | "transparent"
- `containerWidth`: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
- `noPadding`: boolean

**SectionHeader Props:**

- `title`: string (required)
- `description`: string
- `align`: "left" | "center" | "right"
- `badge`: React.ReactNode

---

## 🎨 Design Tokens

All components use BNI's official brand colors:

- **Primary Red**: `#CF0230` (`bg-bni-red`, `text-bni-red`, `border-bni-red`)
- **Red Hover**: `#a81c26` (`bg-bni-red-hover`)
- **Sterling Grey**: `#C8C8C8` (`bg-bni-grey-sterling`)
- **Light Grey**: `#F2F2F2` (`bg-bni-grey-light`)
- **Granite Grey**: `#64666A` (`text-bni-grey-granite`)
- **White**: `#FFFFFF` (`bg-bni-white`)
- **Black**: `#000000` (`bg-bni-black`)

### Border Radius

- `rounded-bni`: 4px
- `rounded-bni-lg`: 8px
- `rounded-bni-xl`: 12px

### Shadows

- `shadow-bni`: Standard shadow
- `shadow-bni-hover`: Hover shadow
- `shadow-bni-md`: Medium shadow
- `shadow-bni-lg`: Large shadow

---

## 🔧 Usage Best Practices

1. **Import from index**: Always import from `@/components/ui` or `@/components/ui/index`
2. **Type safety**: All components are fully typed with TypeScript
3. **Accessibility**: Components include proper ARIA attributes and semantic HTML
4. **Composition**: Components are designed to be composed together
5. **Customization**: Use `className` prop to override or extend styles

---

## 📝 Example Page Structure

```tsx
import {
  Section,
  SectionHeader,
  SectionContent,
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Button,
  CTA,
} from "@/components/ui"

export default function ExamplePage() {
  return (
    <>
      {/* Hero Section */}
      <Section spacing="xl" background="gradient">
        <SectionHeader title="Welcome to BNI" description="Building relationships for life" />
      </Section>

      {/* Content Section */}
      <Section spacing="lg" background="white">
        <SectionHeader title="Our Services" align="center" />
        <SectionContent>
          <div className="grid grid-cols-3 gap-8">
            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Networking</CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with professionals</p>
              </CardContent>
            </Card>
            {/* More cards */}
          </div>
        </SectionContent>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Join?"
        description="Start your BNI journey today"
        variant="gradient"
        primaryAction={{ text: "Get Started", href: "/signup" }}
        secondaryAction={{ text: "Learn More", href: "/about" }}
      />
    </>
  )
}
```

---

## 🚀 Development

To add a new component:

1. Create `ComponentName.tsx` in `/components/ui/`
2. Follow the existing component structure
3. Export from `/components/ui/index.ts`
4. Add documentation above
5. Test with various props and variants

---

## 📚 Related Files

- `lib/utils.ts` - Utility functions (cn for className merging)
- `styles/tailwind.css` - BNI theme configuration
- `lib/constants.ts` - Brand constants and colors
