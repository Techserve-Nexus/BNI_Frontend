# BNI Event Hub - Tailwind CSS Style Guide

This guide provides a comprehensive overview of the BNI-branded Tailwind CSS utilities and components available in this project.

## Table of Contents

- [Colors](#colors)
- [Typography](#typography)
- [Spacing](#spacing)
- [Shadows](#shadows)
- [Border Radius](#border-radius)
- [Components](#components)
- [Utilities](#utilities)
- [Best Practices](#best-practices)

---

## Colors

### Brand Colors

All colors follow BNI's official brand guidelines:

| Color Name    | Utility Class                                      | Hex Code | Usage                              |
| ------------- | -------------------------------------------------- | -------- | ---------------------------------- |
| BNI Red       | `bg-bni-red`, `text-bni-red`                       | #CF2030  | Primary actions, links, highlights |
| BNI Red Hover | `bg-bni-red-hover`                                 | #a31a24  | Hover states for red elements      |
| Granite Grey  | `bg-bni-grey-granite`, `text-bni-grey-granite`     | #64666A  | Body text, headings                |
| Sterling Grey | `bg-bni-grey-sterling`, `border-bni-grey-sterling` | #C8C8C8  | Borders, dividers                  |
| Light Grey    | `bg-bni-grey-light`                                | #F2F2F2  | Backgrounds, sections              |
| Power Black   | `bg-bni-black`, `text-bni-black`                   | #000000  | Strong emphasis                    |
| True White    | `bg-bni-white`, `text-bni-white`                   | #FFFFFF  | Cards, backgrounds                 |

### Usage Examples

```jsx
// Primary button with BNI red
<button className="bg-bni-red text-bni-white">Click Me</button>

// Card with light background
<div className="bg-bni-grey-light p-6">Content</div>

// Text in granite grey
<p className="text-bni-grey-granite">Your content here</p>
```

---

## Typography

### Font Family

- **Primary Font**: `font-bni` or `font-sans` → 'Helvetica Neue', Arial, sans-serif
- Default applied globally via CSS base layer

### Font Sizes

| Size        | Utility         | Pixel Value | Line Height | Usage                |
| ----------- | --------------- | ----------- | ----------- | -------------------- |
| Extra Small | `text-bni-xs`   | 12px        | 1.5         | Fine print, labels   |
| Small       | `text-bni-sm`   | 14px        | 1.6         | Small text, captions |
| Base        | `text-bni-base` | 16px        | 1.6         | Body text (default)  |
| Large       | `text-bni-lg`   | 18px        | 1.6         | Emphasized body      |
| XL          | `text-bni-xl`   | 20px        | 1.6         | Subheadings          |
| 2XL         | `text-bni-2xl`  | 24px        | 1.5         | Section titles       |
| 3XL         | `text-bni-3xl`  | 32px        | 1.4         | Page titles          |
| 4XL         | `text-bni-4xl`  | 40px        | 1.3         | Large headings       |
| 5XL         | `text-bni-5xl`  | 48px        | 1.2         | Hero headings        |

### Heading Components

Pre-styled heading utilities:

```jsx
<h1 className="heading-bni-1">Main Title</h1>
<h2 className="heading-bni-2">Section Title</h2>
<h3 className="heading-bni-3">Subsection Title</h3>
```

### Text Components

```jsx
<p className="text-bni-body">Standard paragraph text</p>
<p className="text-bni-subtitle">Larger subtitle text</p>
```

---

## Spacing

### BNI Spacing Scale

| Name | Utility                  | Value | Usage            |
| ---- | ------------------------ | ----- | ---------------- |
| XS   | `p-bni-xs`, `m-bni-xs`   | 8px   | Tight spacing    |
| SM   | `p-bni-sm`, `m-bni-sm`   | 12px  | Small gaps       |
| MD   | `p-bni-md`, `m-bni-md`   | 16px  | Default spacing  |
| LG   | `p-bni-lg`, `m-bni-lg`   | 24px  | Medium gaps      |
| XL   | `p-bni-xl`, `m-bni-xl`   | 32px  | Large gaps       |
| 2XL  | `p-bni-2xl`, `m-bni-2xl` | 48px  | Extra large gaps |
| 3XL  | `p-bni-3xl`, `m-bni-3xl` | 64px  | Huge gaps        |

### Usage Examples

```jsx
<div className="p-bni-lg m-bni-md">Padded and margined box</div>
<section className="py-bni-3xl">Large vertical section</section>
```

---

## Shadows

### Shadow Utilities

| Name        | Utility            | Usage                       |
| ----------- | ------------------ | --------------------------- |
| Default     | `shadow-bni`       | Standard card shadow        |
| Hover       | `shadow-bni-hover` | BNI red-tinted hover shadow |
| Medium      | `shadow-bni-md`    | Elevated elements           |
| Large       | `shadow-bni-lg`    | Modal dialogs               |
| Extra Large | `shadow-bni-xl`    | Prominent overlays          |

### Usage Examples

```jsx
<div className="shadow-bni hover:shadow-bni-hover">Card with hover effect</div>
<dialog className="shadow-bni-lg">Modal content</dialog>
```

---

## Border Radius

| Name    | Utility          | Value | Usage                  |
| ------- | ---------------- | ----- | ---------------------- |
| Default | `rounded-bni`    | 4px   | Buttons, inputs, cards |
| Large   | `rounded-bni-lg` | 8px   | Larger elements        |
| XL      | `rounded-bni-xl` | 12px  | Feature boxes          |

### Usage Examples

```jsx
<button className="rounded-bni">Button</button>
<div className="rounded-bni-lg">Large card</div>
```

---

## Components

### Card Component

```jsx
<div className="card-bni">
  <h3>Card Title</h3>
  <p>Card content goes here</p>
</div>
```

**Includes**: White background, padding, border, shadow, BNI border radius

---

### Button Components

#### Primary Button

```jsx
<button className="btn-bni-primary">Primary Action</button>
```

**Styles**: BNI red background, white text, hover effect, shadow

#### Secondary Button

```jsx
<button className="btn-bni-secondary">Secondary Action</button>
```

**Styles**: BNI red border, red text, transparent background

#### Outline Button

```jsx
<button className="btn-bni-outline">Outline Action</button>
```

**Styles**: Grey border, grey text, hover background

---

### Input Component

```jsx
<input type="text" className="input-bni" placeholder="Enter text" />
```

**Includes**: Full width, padding, border, focus ring

---

### Badge Components

```jsx
<span className="badge-bni-primary">Primary</span>
<span className="badge-bni-success">Success</span>
<span className="badge-bni-warning">Warning</span>
<span className="badge-bni-danger">Danger</span>
```

---

### Layout Components

#### Container

```jsx
<div className="container-bni">Centered content with max-width and responsive padding</div>
```

#### Section

```jsx
<section className="section-bni">Section with vertical padding</section>
```

---

### Link Component

```jsx
<a href="#" className="link-bni">
  BNI styled link
</a>
```

**Styles**: BNI red color with hover effect

---

### Divider

```jsx
<hr className="divider-bni" />
```

---

## Utilities

### Gradient Backgrounds

```jsx
<div className="bg-gradient-bni-red">Red gradient</div>
<div className="bg-gradient-bni-light">Light gradient</div>
```

### Text Gradient

```jsx
<h1 className="text-gradient-bni">Gradient text</h1>
```

### Animations

```jsx
<div className="animate-fade-in">Fades in</div>
<div className="animate-slide-up">Slides up</div>
```

### Hover Effects

```jsx
<div className="hover-lift">Lifts on hover</div>
```

### Custom Scrollbar

```jsx
<div className="scrollbar-bni overflow-auto">Scrollable content with BNI-styled scrollbar</div>
```

### Focus Visible

```jsx
<button className="focus-visible-bni">Accessible focus ring</button>
```

### Z-Index

```jsx
<div className="z-bni-modal">Modal element</div>
<div className="z-bni-tooltip">Tooltip element</div>
```

---

## Best Practices

### 1. **Always Use BNI Colors**

❌ Don't use: `bg-red-500`, `text-gray-700`
✅ Do use: `bg-bni-red`, `text-bni-grey-granite`

### 2. **Use Semantic Component Classes**

❌ Don't:

```jsx
<button className="bg-bni-red rounded-bni px-6 py-3 text-white">Click</button>
```

✅ Do:

```jsx
<button className="btn-bni-primary">Click</button>
```

### 3. **Consistent Spacing**

Use BNI spacing scale for consistency:

```jsx
<div className="p-bni-lg m-bni-md">Content</div>
```

### 4. **Typography Hierarchy**

```jsx
<h1 className="heading-bni-1">Page Title</h1>
<h2 className="heading-bni-2">Section Title</h2>
<p className="text-bni-body">Body content</p>
```

### 5. **Accessible Focus States**

Always add focus states to interactive elements:

```jsx
<button className="btn-bni-primary focus-visible-bni">Accessible Button</button>
```

### 6. **Responsive Design**

Combine BNI utilities with Tailwind responsive prefixes:

```jsx
<h1 className="text-bni-3xl md:text-bni-4xl lg:text-bni-5xl">Responsive Heading</h1>
```

### 7. **Hover Effects**

Add smooth transitions:

```jsx
<div className="card-bni hover-lift duration-bni transition-all">Interactive Card</div>
```

---

## Quick Reference Card

### Common Patterns

#### Full-Width Section with Container

```jsx
<section className="section-bni bg-bni-grey-light">
  <div className="container-bni">
    <h2 className="heading-bni-2 mb-bni-lg">Section Title</h2>
    <p className="text-bni-body">Content</p>
  </div>
</section>
```

#### Card Grid

```jsx
<div className="gap-bni-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  <div className="card-bni">Card 1</div>
  <div className="card-bni">Card 2</div>
  <div className="card-bni">Card 3</div>
</div>
```

#### Button Group

```jsx
<div className="gap-bni-sm flex">
  <button className="btn-bni-primary">Primary</button>
  <button className="btn-bni-secondary">Secondary</button>
  <button className="btn-bni-outline">Outline</button>
</div>
```

#### Form Field

```jsx
<div className="space-y-bni-sm">
  <label className="text-bni-grey-granite font-bold">Email</label>
  <input type="email" className="input-bni" placeholder="you@example.com" />
</div>
```

---

## Migration from Standard Tailwind

If you have existing code using standard Tailwind classes, here's how to migrate:

| Old (Standard Tailwind) | New (BNI Style)         |
| ----------------------- | ----------------------- |
| `bg-red-600`            | `bg-bni-red`            |
| `text-gray-600`         | `text-bni-grey-granite` |
| `rounded-md`            | `rounded-bni`           |
| `shadow-md`             | `shadow-bni`            |
| `p-6`                   | `p-bni-lg`              |
| `text-xl`               | `text-bni-xl`           |

---

## Additional Resources

- **BNI Brand Guidelines**: See `.github/copilot-instructions.md`
- **Tailwind Config**: `tailwind.config.js`
- **Global Styles**: `styles/tailwind.css`
- **Constants**: `lib/constants.ts`

---

## Support

For questions about BNI styling or Tailwind usage, refer to:

1. This style guide
2. Official BNI brand guidelines
3. Tailwind CSS documentation: https://tailwindcss.com

---

**Last Updated**: 2024
**Maintained By**: BNI Event Hub Development Team
