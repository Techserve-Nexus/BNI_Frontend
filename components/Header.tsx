"use client"
import Image from "next/image"
import { useState } from "react"
import { BNILink, Button, Container } from "./ui"

/**
 * Header Component - Reusable navigation header for all pages
 * Includes responsive mobile menu and BNI branding
 */
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="shadow-bni border-bni-grey-sterling/30 sticky top-0 z-50 border-b bg-white">
      <Container maxWidth="xl" centered>
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <BNILink href="/" variant="default" className="flex items-center gap-3 no-underline">
            <Image src="/BNI_logo.png" alt="BNI Logo" width={80} height={40} className="h-10 w-auto" />
          </BNILink>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            <BNILink href="#vision" variant="nav">
              Our Vision
            </BNILink>
            <BNILink href="#events" variant="nav">
              Events
            </BNILink>
            <BNILink href="#pricing" variant="nav">
              Pricing
            </BNILink>
            <Button href="/auth/signin" size="md">
              Sign In
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="text-bni-red text-2xl md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="bg-bni-grey-light border-bni-grey-sterling/30 space-y-4 border-t p-4 md:hidden">
            <BNILink href="#vision" variant="nav" className="block">
              Our Vision
            </BNILink>
            <BNILink href="#events" variant="nav" className="block">
              Events
            </BNILink>
            <BNILink href="#pricing" variant="nav" className="block">
              Pricing
            </BNILink>
            <Button href="/auth/signin" fullWidth>
              Sign In
            </Button>
          </div>
        )}
      </Container>
    </nav>
  )
}
