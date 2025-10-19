/**
 * BNI Brand Constants
 * Centralized brand colors, fonts, and configuration following BNI guidelines
 */

export const BRAND = {
  name: "BNI",
  tagline: "Givers Gain®",
  vision: "Changing the way the world does business",
  purpose: "BNI provides Member-businesses with new client opportunities",

  colors: {
    primary: "#CF0230", // BNI Red (Official Brand Color)
    primaryHover: "#a81c26", // BNI Red Hover (Darkened)
    secondary: "#C8C8C8", // Sterling Grey
    backgroundLight: "#F2F2F2", // Sterling Light Grey
    textDark: "#64666A", // Granite Grey
    black: "#000000", // Power Black
    white: "#FFFFFF", // True White
  },

  fonts: {
    primary: "'Helvetica Neue', Arial, sans-serif",
    weights: {
      light: 300,
      regular: 400,
      bold: 700,
    },
  },

  coreValues: [
    {
      id: 1,
      name: "Givers Gain®",
      emoji: "🤝",
      description: "By giving business to others, you will get business in return",
    },
    {
      id: 2,
      name: "Building Relationships",
      emoji: "💼",
      description: "Strong relationships are the foundation of successful networking",
    },
    {
      id: 3,
      name: "Lifelong Learning",
      emoji: "📚",
      description: "Continuous growth and education for personal and professional development",
    },
    { id: 4, name: "Innovation", emoji: "✨", description: "Embracing change and finding new ways to create value" },
    {
      id: 5,
      name: "Positive Attitude",
      emoji: "⚡",
      description: "Maintaining optimism and enthusiasm in all interactions",
    },
    {
      id: 6,
      name: "Accountability",
      emoji: "🎯",
      description: "Taking responsibility for our commitments and actions",
    },
    {
      id: 7,
      name: "Recognition",
      emoji: "🏆",
      description: "Celebrating achievements and acknowledging contributions",
    },
    { id: 8, name: "Traditions", emoji: "🎪", description: "Honoring proven processes while embracing innovation" },
  ],

  stats: {
    chapters: "10,700+",
    members: "305K+",
    annualReferrals: "$19.4B",
  },

  brandPersonality: ["Professional", "Positive", "Welcoming", "Energetic", "Trustworthy", "Friendly", "Fun", "Caring"],
}

export const MEMBERSHIP_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: 99,
    description: "Perfect for solo entrepreneurs",
    features: [
      "Weekly networking meetings",
      "Access to member directory",
      "Referral tracking system",
      "Basic training materials",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: 199,
    description: "For growing businesses",
    features: [
      "Everything in Starter",
      "Advanced analytics dashboard",
      "Priority support",
      "1-on-1 networking coaching",
      "Exclusive webinars",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 499,
    description: "For established organizations",
    features: [
      "Everything in Professional",
      "Multi-user access",
      "Custom reporting",
      "Dedicated account manager",
      "API access",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
]

export const NAVIGATION_LINKS = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/#events" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/about" },
]

export const FOOTER_LINKS = {
  quickLinks: [
    { label: "Our Vision", href: "#vision" },
    { label: "Events", href: "#events" },
    { label: "Membership", href: "/membership" },
    { label: "Calendar", href: "/calendar" },
  ],
  resources: [
    { label: "About BNI", href: "/about" },
    { label: "Core Values", href: "#vision" },
    { label: "Success Stories", href: "#stories" },
    { label: "Contact Us", href: "/contact" },
  ],
}
