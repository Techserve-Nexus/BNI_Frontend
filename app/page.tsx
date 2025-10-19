"use client"

import Footer from "../components/Footer"
import Header from "../components/Header"
import {
  Badge,
  BNILink,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Container,
  CTA,
  Section,
  SectionContent,
  SectionHeader,
} from "../components/ui"

/**
 * BNI Home Page - Refactored with Reusable Components
 * Following BNI brand guidelines and modern React patterns
 */
export default function Home() {
  // Stats data
  const stats = [
    { value: "10,700+", label: "Global Chapters" },
    { value: "305K+", label: "Members Worldwide" },
    { value: "$19.4B", label: "Annual Referrals" },
  ]

  // Core values data
  const coreValues = [
    {
      icon: "🤝",
      title: "Givers Gain®",
      description: "By giving business to others, you will get business in return",
    },
    {
      icon: "💼",
      title: "Building Relationships",
      description: "Strong relationships are the foundation of successful networking",
    },
    {
      icon: "📚",
      title: "Lifelong Learning",
      description: "Continuous growth and education for personal and professional development",
    },
    { icon: "✨", title: "Innovation", description: "Embracing change and finding new ways to create value" },
    { icon: "⚡", title: "Positive Attitude", description: "Maintaining optimism and enthusiasm in all interactions" },
    { icon: "🎯", title: "Accountability", description: "Taking responsibility for our commitments and actions" },
    { icon: "🏆", title: "Recognition", description: "Celebrating achievements and acknowledging contributions" },
    { icon: "🎪", title: "Traditions", description: "Honoring proven processes while embracing innovation" },
  ]

  // Events data
  const events = [
    {
      date: "November 2025",
      title: "Regional Leadership Training",
      description: "Enhance your leadership skills and network with regional directors",
      attendees: "150+ Expected",
    },
    {
      date: "December 2025",
      title: "Annual Chapter Meeting",
      description: "Celebrate success and plan for the upcoming year",
      attendees: "300+ Expected",
    },
    {
      date: "January 2026",
      title: "Business Growth Summit",
      description: "Learn strategies to scale your business through referrals",
      attendees: "500+ Expected",
    },
  ]

  // Testimonials data
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Marketing Consultant • BNI Phoenix Chapter",
      quote:
        "BNI has transformed my business. In just one year, I've received over $250K in qualified referrals. The structured approach to networking really works!",
      avatar: "👤",
    },
    {
      name: "James Rodriguez",
      role: "Financial Advisor • BNI Denver Chapter",
      quote:
        "The relationships I've built through BNI are invaluable. It's not just about business—it's about building a community of trusted professionals.",
      avatar: "👤",
    },
  ]

  // Pricing plans
  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      description: "Perfect for solo entrepreneurs",
      features: [
        "Weekly networking meetings",
        "Access to member directory",
        "Referral tracking system",
        "Basic training materials",
      ],
      cta: "Get Started",
      variant: "secondary" as const,
    },
    {
      name: "Professional",
      price: "$199",
      description: "For growing businesses",
      badge: "MOST POPULAR",
      features: [
        "Everything in Starter",
        "Advanced analytics dashboard",
        "Priority support",
        "1-on-1 networking coaching",
        "Exclusive webinars",
      ],
      cta: "Start Free Trial",
      variant: "primary" as const,
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "$499",
      description: "For established organizations",
      features: [
        "Everything in Professional",
        "Multi-user access",
        "Custom reporting",
        "Dedicated account manager",
        "API access",
      ],
      cta: "Contact Sales",
      variant: "secondary" as const,
    },
  ]

  // FAQ data
  const faqs = [
    {
      question: "Can I change my plan anytime?",
      answer:
        "Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees. You only pay your monthly membership fee. Some chapters may have additional local chapter fees.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and ACH payments. Contact our support team for custom payment arrangements.",
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a 30-day money-back guarantee if you're not satisfied with your membership.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Header />

      {/* Hero Section */}
      <Section spacing="xl" background="gradient" noPadding>
        <Container maxWidth="xl" centered>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Badge variant="primary" className="mb-6">
                <span className="text-xs">🌟 CHANGING THE WAY THE WORLD DOES BUSINESS</span>
              </Badge>

              <h1 className="text-bni-grey-granite mb-6 text-5xl leading-tight font-bold md:text-6xl">
                Givers Gain®
                <span className="text-bni-red mt-2 block">Building Relationships</span>
                <span className="text-bni-grey-granite mt-2 block">For Life</span>
              </h1>

              <p className="text-bni-grey-granite mb-8 max-w-lg text-xl leading-relaxed">
                BNI provides Member-businesses with new client opportunities through a structured, positive, and
                professional referral program.
              </p>

              <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                <Button variant="primary" size="lg" href="/auth/signup">
                  Join BNI Today
                </Button>
                <Button variant="secondary" size="lg" href="#events" rightIcon={<span>→</span>}>
                  View Events
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center md:text-left">
                    <div className="text-bni-red text-4xl font-bold">{stat.value}</div>
                    <div className="text-bni-grey-granite text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Card */}
            <div className="relative">
              <Card variant="elevated" className="border-bni-red/10 border-4">
                <div className="bg-bni-grey-light rounded-lg p-8 text-center">
                  <div className="mb-4 text-6xl">🤝</div>
                  <h3 className="text-bni-grey-granite mb-3 text-2xl font-bold">BNI ANNUAL CONFERENCE</h3>
                  <p className="text-bni-grey-granite mb-4 font-medium">Building Relationships • Growing Business</p>
                  <p className="text-bni-grey-granite mb-6 text-sm leading-relaxed">
                    Join hundreds of business professionals dedicated to networking excellence and lifelong learning.
                  </p>
                  <Button variant="primary" size="sm" fullWidth>
                    Register Now
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values Section */}
      <Section id="vision" spacing="lg" background="white" className="border-bni-grey-sterling/30 border-y">
        <SectionHeader title="Our Core Values" description="The principles that guide everything we do at BNI" />
        <SectionContent>
          <div className="grid gap-8 md:grid-cols-4">
            {coreValues.map((value) => (
              <Card key={value.title} variant="interactive">
                <div className="mb-4 transform text-5xl transition group-hover:scale-110">{value.icon}</div>
                <CardTitle className="mb-3 text-xl">{value.title}</CardTitle>
                <p className="text-bni-grey-granite leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Section>

      {/* Events Section */}
      <Section id="events" spacing="lg" background="light">
        <SectionHeader
          title="Upcoming BNI Events"
          description="Join us for networking, education, and growth opportunities"
        />
        <SectionContent>
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            {events.map((event) => (
              <Card key={event.title} variant="interactive">
                <CardHeader>
                  <Badge variant="primary" size="sm" className="mb-2">
                    {event.date}
                  </Badge>
                  <CardTitle className="group-hover:text-bni-red transition">{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-bni-grey-granite leading-relaxed">{event.description}</p>
                </CardContent>
                <CardFooter>
                  <div className="flex items-center justify-between">
                    <span className="text-bni-grey-granite text-sm">👥 {event.attendees}</span>
                    <BNILink href="#" className="text-bni-red font-bold transition group-hover:translate-x-1">
                      View Details →
                    </BNILink>
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center">
            <Button variant="primary" size="lg" href="/events">
              Browse All Events
            </Button>
          </div>
        </SectionContent>
      </Section>

      {/* Testimonials Section */}
      <Section spacing="lg" background="white" className="border-bni-grey-sterling/30 border-y">
        <SectionHeader title="Member Success Stories" description="Real results from real BNI members" />
        <SectionContent>
          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name}>
                <CardContent>
                  <div className="mb-6 flex gap-4">
                    <div className="bg-bni-red/10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-3xl">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="text-bni-grey-granite text-lg font-bold">{testimonial.name}</p>
                      <p className="text-bni-grey-granite text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-bni-grey-granite mb-4 leading-relaxed italic">&quot;{testimonial.quote}&quot;</p>
                  <div className="text-bni-red flex gap-1">⭐⭐⭐⭐⭐</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </SectionContent>
      </Section>

      {/* Pricing Section */}
      <Section id="pricing" spacing="lg" background="white">
        <SectionHeader
          title="Flexible Membership Plans"
          description="Choose the membership level that works best for your business needs"
        />
        <SectionContent>
          <div className="grid gap-8 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                variant={plan.highlighted ? "elevated" : "default"}
                className={plan.highlighted ? "ring-bni-red relative ring-2" : ""}
              >
                {plan.badge && (
                  <Badge variant="primary" className="absolute -top-8 left-1/2 -translate-x-1/2 transform">
                    {plan.badge}
                  </Badge>
                )}
                <CardHeader className={plan.badge ? "mt-4" : ""}>
                  <CardTitle>{plan.name}</CardTitle>
                  <CardDescription className="mb-4">{plan.description}</CardDescription>
                  <div className="flex items-baseline gap-2">
                    <span className="text-bni-red text-4xl font-bold">{plan.price}</span>
                    <span className="text-bni-grey-granite">/month</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span className="text-bni-red font-bold">✓</span>
                        <span className="text-bni-grey-granite">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    variant={plan.variant}
                    fullWidth
                    href={plan.cta === "Contact Sales" ? "/contact" : "/auth/signup"}
                  >
                    {plan.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <Container maxWidth="lg" centered className="mt-20">
            <h3 className="text-bni-grey-granite mb-8 text-center text-2xl font-bold">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question}>
                  <CardContent>
                    <h4 className="text-bni-grey-granite mb-2 text-lg font-bold">{faq.question}</h4>
                    <p className="text-bni-grey-granite">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </Container>
        </SectionContent>
      </Section>

      {/* CTA Section */}
      <CTA
        title="Ready to Change Your Business?"
        description="Join thousands of successful business professionals who are growing their business through BNI's proven referral marketing system."
        variant="gradient"
        primaryAction={{ text: "Join BNI Today", href: "/auth/signup" }}
        secondaryAction={{ text: "Find a Chapter", href: "/events" }}
      >
        <p className="text-sm text-white/80">🌍 Over 305,000 members in 10,700+ chapters worldwide</p>
      </CTA>

      {/* Footer */}
      <Footer />
    </div>
  )
}
