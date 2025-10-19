import { Badge, Button, Card, CardContent, Container, Section } from "./ui"
import { homeData } from "../data/home"
import { BRAND } from "../lib/constants"

/**
 * Hero Component - Refactored with Reusable Components
 * Displays the main hero section with branding and call-to-action
 * Now uses: Section, Container, Badge, Button, and Card components
 */
export default function Hero() {
  return (
    <Section spacing="xl" background="gradient" noPadding>
      <Container maxWidth="xl" centered>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            {/* Vision Badge */}
            <Badge variant="primary" className="mb-6">
              <span className="text-xs">🌟 {BRAND.vision.toUpperCase()}</span>
            </Badge>

            {/* Hero Heading */}
            <h1 className="text-bni-grey-granite mb-6 text-5xl leading-tight font-bold md:text-6xl">
              {homeData.hero.title}
              <span className="text-bni-red mt-2 block">{homeData.hero.subtitle}</span>
            </h1>

            {/* Hero Description */}
            <p className="text-bni-grey-granite mb-8 max-w-lg text-xl leading-relaxed">{homeData.hero.description}</p>

            {/* CTA Buttons */}
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Button variant="primary" size="lg" href="/auth/signup">
                {homeData.hero.cta}
              </Button>
              <Button variant="secondary" size="lg" href="#events" rightIcon={<span>→</span>}>
                View Events
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6">
              {homeData.stats.map((stat: { label: string; value: string }) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-bni-red text-4xl font-bold">{stat.value}</div>
                  <div className="text-bni-grey-granite text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Conference Card */}
          <div className="relative">
            <Card variant="elevated" className="border-bni-red/10 border-4">
              <CardContent className="bg-bni-grey-light rounded-lg p-8 text-center">
                <div className="mb-4 text-6xl">🤝</div>
                <h3 className="text-bni-grey-granite mb-3 text-2xl font-bold">BNI ANNUAL CONFERENCE</h3>
                <p className="text-bni-grey-granite mb-4 font-medium">Building Relationships • Growing Business</p>
                <p className="text-bni-grey-granite mb-6 text-sm leading-relaxed">
                  Join hundreds of business professionals dedicated to networking excellence and lifelong learning.
                </p>
                <Button variant="primary" size="sm" fullWidth>
                  Register Now
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </Section>
  )
}
