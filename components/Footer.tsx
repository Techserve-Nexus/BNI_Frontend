import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react"
import { BNILink, Button, Container } from "./ui"

/**
 * Footer Component - Reusable footer for all pages
 * Includes BNI SuccessNet signup, links, resources, social media, and branding
 *
 * @component
 * Follows BNI brand guidelines with official colors and typography
 */
export default function Footer() {
  const currentYear = new Date().getFullYear()

  // Social media links data - centralized for easy management
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/BNIOfficialPage/",
      icon: Facebook,
      ariaLabel: "Follow BNI on Facebook",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/bni",
      icon: Linkedin,
      ariaLabel: "Follow BNI on LinkedIn",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/bni.global",
      icon: Instagram,
      ariaLabel: "Follow BNI on Instagram",
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/user/BNIOfficialChannel",
      icon: Youtube,
      ariaLabel: "Follow BNI on YouTube",
    },
    {
      name: "X (Twitter)",
      url: "https://twitter.com/bni_official_pg",
      icon: Twitter,
      ariaLabel: "Follow BNI on X (formerly Twitter)",
    },
  ]

  return (
    <footer className="bg-bni-grey-granite border-t border-white/20 py-16 text-white">
      <Container maxWidth="xl" centered>
        <div className="mb-12 grid gap-8 md:grid-cols-4">
          {/* BNI SuccessNet Section */}
          <div>
            <div className="mb-4">
              <h5 className="mb-2 font-bold text-white">
                BNI SuccessNet<sup className="text-xs">TM</sup>
              </h5>
              <p className="text-sm leading-relaxed text-white/80">Sign up for exclusive networking tips and more.</p>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Changing the way the world does business through a structured, positive, and professional referral
              program.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 font-bold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <BNILink href="#vision" variant="footer">
                  Our Vision
                </BNILink>
              </li>
              <li>
                <BNILink href="#events" variant="footer">
                  Events
                </BNILink>
              </li>
              <li>
                <BNILink href="/membership" variant="footer">
                  Membership
                </BNILink>
              </li>
              <li>
                <BNILink href="/calendar" variant="footer">
                  Calendar
                </BNILink>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="mb-4 font-bold">Resources</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <BNILink href="/about" variant="footer">
                  About BNI
                </BNILink>
              </li>
              <li>
                <BNILink href="#core-values" variant="footer">
                  Core Values
                </BNILink>
              </li>
              <li>
                <BNILink href="/testimonials" variant="footer">
                  Success Stories
                </BNILink>
              </li>
              <li>
                <BNILink href="/contact" variant="footer">
                  Contact Us
                </BNILink>
              </li>
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="mb-4 font-bold">Connect With Us</h4>
            <p className="mb-4 text-sm text-white/70">
              Join our community and start building meaningful business relationships today.
            </p>
            <Button variant="primary" size="sm" href="/auth/signup" className="mb-6">
              Get Started
            </Button>

            {/* Social Media Links */}
            <div className="flex flex-col items-start gap-3 md:items-center">
              <span className="text-sm font-bold text-white">Follow BNI</span>
              <ul className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon
                  return (
                    <li key={social.name}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.ariaLabel}
                        className="hover:bg-bni-red flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:scale-110 hover:text-white"
                      >
                        <IconComponent size={18} strokeWidth={2} aria-hidden="true" />
                      </a>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 pt-8 text-center text-sm text-white/60">
          <p>© {currentYear} BNI. All Rights Reserved. | Givers Gain® is a registered trademark of BNI.</p>
        </div>
      </Container>
    </footer>
  )
}
