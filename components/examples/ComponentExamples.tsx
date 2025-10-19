/**
 * BNI Component Examples
 * Demonstration of all reusable UI components
 */

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
} from "../ui"

export default function ComponentExamples() {
  return (
    <div className="min-h-screen bg-white">
      {/* Button Examples */}
      <Section spacing="lg" background="light">
        <SectionHeader title="Button Components" description="Various button styles and states" />
        <SectionContent>
          <div className="space-y-8">
            {/* Button Variants */}
            <div>
              <h3 className="text-bni-grey-granite mb-4 text-xl font-bold">Variants</h3>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary">Primary Button</Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="outline">Outline Button</Button>
                <Button variant="ghost">Ghost Button</Button>
                <Button variant="danger">Danger Button</Button>
              </div>
            </div>

            {/* Button Sizes */}
            <div>
              <h3 className="text-bni-grey-granite mb-4 text-xl font-bold">Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Button size="sm">Small</Button>
                <Button size="md">Medium</Button>
                <Button size="lg">Large</Button>
                <Button size="xl">Extra Large</Button>
              </div>
            </div>

            {/* Button States */}
            <div>
              <h3 className="text-bni-grey-granite mb-4 text-xl font-bold">States</h3>
              <div className="flex flex-wrap gap-4">
                <Button loading>Loading...</Button>
                <Button disabled>Disabled</Button>
                <Button leftIcon={<span>👈</span>}>Left Icon</Button>
                <Button rightIcon={<span>👉</span>}>Right Icon</Button>
                <Button fullWidth>Full Width Button</Button>
              </div>
            </div>

            {/* Button as Link */}
            <div>
              <h3 className="text-bni-grey-granite mb-4 text-xl font-bold">As Link</h3>
              <div className="flex flex-wrap gap-4">
                <Button href="/about" variant="primary">
                  Button Link
                </Button>
                <Button href="#section" variant="secondary">
                  Anchor Link
                </Button>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>

      {/* Card Examples */}
      <Section spacing="lg" background="white">
        <SectionHeader title="Card Components" description="Flexible card layouts" />
        <SectionContent>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Default Card */}
            <Card variant="default">
              <CardHeader>
                <CardTitle>Default Card</CardTitle>
                <CardDescription>Standard card with shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-bni-grey-granite">This is the default card variant with standard styling.</p>
              </CardContent>
            </Card>

            {/* Interactive Card */}
            <Card variant="interactive">
              <CardHeader>
                <CardTitle>Interactive Card</CardTitle>
                <CardDescription>Hover for effect</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-bni-grey-granite">This card has hover effects and is clickable.</p>
              </CardContent>
              <CardFooter>
                <Button size="sm" variant="secondary">
                  Learn More
                </Button>
              </CardFooter>
            </Card>

            {/* Elevated Card */}
            <Card variant="elevated">
              <CardHeader>
                <CardTitle>Elevated Card</CardTitle>
                <CardDescription>Enhanced shadow</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-bni-grey-granite">This card has more prominent shadow for emphasis.</p>
              </CardContent>
            </Card>
          </div>
        </SectionContent>
      </Section>

      {/* Link Examples */}
      <Section spacing="lg" background="light">
        <SectionHeader title="Link Components" description="Various link styles" />
        <SectionContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Link Variants</h3>
              <div className="flex flex-wrap gap-6">
                <BNILink href="/about">Default Link</BNILink>
                <BNILink href="/contact" variant="button">
                  Button Link
                </BNILink>
                <BNILink href="/events" variant="nav">
                  Nav Link
                </BNILink>
                <BNILink href="/terms" variant="underline">
                  Underlined Link
                </BNILink>
                <BNILink href="https://bni.com" external>
                  External Link
                </BNILink>
              </div>
            </div>
          </div>
        </SectionContent>
      </Section>

      {/* Badge Examples */}
      <Section spacing="lg" background="white">
        <SectionHeader title="Badge Components" description="Status and tag indicators" />
        <SectionContent>
          <div className="space-y-6">
            <div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Badge Variants</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Badge>Default</Badge>
                <Badge variant="primary">Primary</Badge>
                <Badge variant="success">Success</Badge>
                <Badge variant="warning">Warning</Badge>
                <Badge variant="danger">Danger</Badge>
                <Badge variant="info">Info</Badge>
              </div>
            </div>

            <div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Badge Sizes</h3>
              <div className="flex flex-wrap items-center gap-4">
                <Badge size="sm" variant="primary">
                  Small
                </Badge>
                <Badge size="md" variant="primary">
                  Medium
                </Badge>
                <Badge size="lg" variant="primary">
                  Large
                </Badge>
              </div>
            </div>

            <div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">In Context</h3>
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle>Event Title</CardTitle>
                      <CardDescription>November 2025</CardDescription>
                    </div>
                    <Badge variant="success">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-bni-grey-granite">Example of badge used in a card header.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </SectionContent>
      </Section>

      {/* Container Examples */}
      <Section spacing="lg" background="light" noPadding>
        <div className="space-y-8 py-20">
          <div className="text-center">
            <h2 className="text-bni-grey-granite mb-4 text-4xl font-bold">Container Components</h2>
            <p className="text-bni-grey-granite text-xl">Different max-width containers</p>
          </div>

          <Container maxWidth="sm" centered className="bg-blue-100 p-8">
            <p className="text-center">Small Container (max-w-3xl)</p>
          </Container>

          <Container maxWidth="md" centered className="bg-green-100 p-8">
            <p className="text-center">Medium Container (max-w-5xl)</p>
          </Container>

          <Container maxWidth="lg" centered className="bg-yellow-100 p-8">
            <p className="text-center">Large Container (max-w-6xl)</p>
          </Container>

          <Container maxWidth="xl" centered className="bg-red-100 p-8">
            <p className="text-center">Extra Large Container (max-w-7xl)</p>
          </Container>
        </div>
      </Section>

      {/* CTA Examples */}
      <CTA
        title="Ready to Transform Your Business?"
        description="Join thousands of successful business professionals who are growing through BNI's proven referral system"
        variant="gradient"
        primaryAction={{ text: "Get Started Today", href: "/signup" }}
        secondaryAction={{ text: "Learn More", href: "/about" }}
      />

      <CTA
        title="Have Questions?"
        description="Our team is here to help you succeed"
        variant="default"
        align="left"
        primaryAction={{ text: "Contact Us", href: "/contact" }}
      />

      <CTA
        title="Subscribe to Our Newsletter"
        variant="minimal"
        align="center"
        primaryAction={{ text: "Subscribe", onClick: () => alert("Subscribe clicked!") }}
      >
        <p className="text-bni-grey-granite mb-8">
          Get the latest updates, networking tips, and exclusive event invitations.
        </p>
      </CTA>

      {/* Section Examples */}
      <Section spacing="lg" background="white">
        <SectionHeader
          title="Section Component"
          description="Pre-styled sections with various backgrounds"
          align="center"
          badge={<Badge variant="primary">New</Badge>}
        />
        <SectionContent>
          <div className="space-y-4">
            <Card>
              <CardContent>
                <p className="text-bni-grey-granite">
                  The Section component provides consistent spacing and background options for page sections.
                </p>
              </CardContent>
            </Card>
          </div>
        </SectionContent>
      </Section>

      {/* Usage Guide */}
      <Section spacing="lg" background="gradient">
        <Container maxWidth="lg" centered>
          <div className="text-center">
            <h2 className="text-bni-grey-granite mb-6 text-4xl font-bold">How to Use</h2>
            <p className="text-bni-grey-granite mb-8 text-xl">
              All components are available in <code className="rounded bg-white px-2 py-1">components/ui</code>
            </p>
            <div className="text-bni-grey-granite rounded-bni bg-white p-6 text-left">
              <pre className="overflow-x-auto text-sm">
                {`import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  BNILink,
  Badge,
  CTA,
  Section,
  SectionHeader,
  Container
} from "@/components/ui"

// Use in your components
<Button variant="primary">Click Me</Button>
<Card variant="interactive">
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>`}
              </pre>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  )
}
