import Footer from "../components/Footer"
import Header from "../components/Header"
import { Container, Section, SectionContent, SectionHeader } from "../components/ui"

/**
 * Example Page - Demonstrates how to use Header and Footer components
 * This is a template for creating new pages with consistent layout
 */
export default function ExamplePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header - Reusable across all pages */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Section spacing="xl" background="gradient">
          <Container maxWidth="xl" centered>
            <div className="text-center">
              <h1 className="text-bni-grey-granite mb-6 text-5xl font-bold">Example Page</h1>
              <p className="text-bni-grey-granite text-xl">
                This demonstrates how to use the reusable Header and Footer components.
              </p>
            </div>
          </Container>
        </Section>

        {/* Content Section */}
        <Section spacing="lg" background="white">
          <SectionHeader
            title="Page Content Goes Here"
            description="Build your page content using the reusable UI components"
            align="center"
          />
          <SectionContent>
            <Container maxWidth="lg" centered>
              <div className="text-bni-grey-granite prose max-w-none">
                <p>
                  This is an example page that shows how to structure your pages with the reusable Header and Footer
                  components.
                </p>
                <h2>Key Benefits</h2>
                <ul>
                  <li>Consistent navigation across all pages</li>
                  <li>Automatic responsive behavior</li>
                  <li>BNI brand compliance</li>
                  <li>Easy to maintain and update</li>
                </ul>
                <h2>How to Use</h2>
                <ol>
                  <li>Import Header and Footer components</li>
                  <li>Add Header at the top of your page</li>
                  <li>Build your content in between</li>
                  <li>Add Footer at the bottom</li>
                </ol>
              </div>
            </Container>
          </SectionContent>
        </Section>
      </main>

      {/* Footer - Reusable across all pages */}
      <Footer />
    </div>
  )
}
