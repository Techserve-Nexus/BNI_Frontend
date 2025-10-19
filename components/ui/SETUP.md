# BNI UI Components - Installation & Setup Guide

## 📦 Installation

The UI components require `clsx` for class name handling. Install it by running:

```bash
pnpm add clsx
```

> **Note:** `tailwind-merge` is already installed in your project.

## ✅ Setup Complete

All components are now ready to use! The following have been created:

### Components Created:

1. ✅ **Button** - `/components/ui/Button.tsx`
2. ✅ **Card** - `/components/ui/Card.tsx`
3. ✅ **Link** - `/components/ui/Link.tsx`
4. ✅ **CTA** - `/components/ui/CTA.tsx`
5. ✅ **Badge** - `/components/ui/Badge.tsx`
6. ✅ **Container** - `/components/ui/Container.tsx`
7. ✅ **Section** - `/components/ui/Section.tsx`

### Utility Files:

- ✅ **Utils** - `/lib/utils.ts` (cn function for class merging)
- ✅ **Index** - `/components/ui/index.ts` (exports all components)
- ✅ **Documentation** - `/components/ui/README.md`
- ✅ **Examples** - `/components/examples/ComponentExamples.tsx`

## 🚀 Quick Start

### Import Components

```tsx
// Import individual components
import { Button, Card, CardHeader, CardTitle } from "@/components/ui"

// Or import all at once
import * as UI from "@/components/ui"
```

### Basic Usage

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@/components/ui"

export default function MyPage() {
  return (
    <div>
      {/* Button */}
      <Button variant="primary" size="lg">
        Click Me
      </Button>

      {/* Card */}
      <Card variant="interactive">
        <CardHeader>
          <CardTitle>My Card</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Card content goes here</p>
        </CardContent>
      </Card>
    </div>
  )
}
```

## 📚 View All Examples

To see all components in action, create a route:

1. Create `/app/components-demo/page.tsx`
2. Import and use `ComponentExamples`:

```tsx
import ComponentExamples from "@/components/examples/ComponentExamples"

export default function ComponentDemoPage() {
  return <ComponentExamples />
}
```

3. Visit `http://localhost:3000/components-demo`

## 🎨 All Available Components

### 1. Button

```tsx
<Button variant="primary" size="lg" href="/signup">
  Get Started
</Button>
```

### 2. Card

```tsx
<Card variant="interactive">
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>Content</CardContent>
  <CardFooter>Footer</CardFooter>
</Card>
```

### 3. Link

```tsx
<BNILink href="/about" variant="nav">
  About Us
</BNILink>
```

### 4. CTA

```tsx
<CTA
  title="Join BNI Today"
  description="Start networking"
  variant="gradient"
  primaryAction={{ text: "Sign Up", href: "/signup" }}
/>
```

### 5. Badge

```tsx
<Badge variant="success">Active</Badge>
```

### 6. Container

```tsx
<Container maxWidth="xl" centered>
  <h1>Page Content</h1>
</Container>
```

### 7. Section

```tsx
<Section spacing="lg" background="light">
  <SectionHeader title="Title" description="Description" />
  <SectionContent>{/* Content */}</SectionContent>
</Section>
```

## 🔧 Customization

All components accept a `className` prop for custom styling:

```tsx
<Button className="mt-4 rounded-full">Custom Button</Button>
```

The `cn()` utility merges classes intelligently, handling conflicts:

```tsx
// The second padding wins
cn("p-4", "p-8") // Result: "p-8"
```

## 📖 Full Documentation

See `/components/ui/README.md` for complete documentation including:

- All props and variants
- Usage examples
- Design tokens
- Best practices

## 🎯 Next Steps

1. Install `clsx`: `pnpm add clsx`
2. Import components in your pages
3. Refer to `/components/ui/README.md` for detailed docs
4. Check `/components/examples/ComponentExamples.tsx` for examples

## 💡 Tips

- Use TypeScript for full type safety
- Combine components for complex layouts
- Follow BNI brand guidelines (colors, spacing, etc.)
- All components are fully accessible

---

**You're all set!** 🎉 Start building with these reusable BNI components.
