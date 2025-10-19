import NextLink from "next/link"
import React from "react"
import { cn } from "../../lib/utils"

/**
 * BNI Link Component
 * Reusable link component following BNI brand guidelines
 *
 * @example
 * <BNILink href="/about">About Us</BNILink>
 * <BNILink href="/contact" variant="button">Contact</BNILink>
 * <BNILink href="https://bni.com" external>BNI Official</BNILink>
 */

export interface BNILinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string
  variant?: "default" | "button" | "nav" | "footer" | "underline"
  children: React.ReactNode
  className?: string
  external?: boolean
  disabled?: boolean
}

export const BNILink = React.forwardRef<HTMLAnchorElement, BNILinkProps>(
  ({ href, variant = "default", children, className, external = false, disabled = false, ...props }, ref) => {
    const variants = {
      default: "text-bni-red hover:text-bni-white font-medium transition-colors duration-200",
      button:
        "inline-flex items-center justify-center px-6 py-3 rounded-bni bg-bni-red text-white hover:bg-bni-red-hover font-bold transition-all duration-200 shadow-bni hover:shadow-bni-hover",
      nav: "text-bni-grey-granite hover:text-bni-red font-medium transition-colors duration-200",
      footer: "text-white/70 hover:text-bni-white font-semibold transition-colors duration-200",
      underline:
        "text-bni-red hover:text-bni-red-hover underline decoration-2 underline-offset-4 font-medium transition-colors duration-200",
    }

    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed pointer-events-none" : ""

    const linkStyles = cn(variants[variant], disabledStyles, className)

    // External link attributes
    const externalProps = external
      ? {
          target: "_blank",
          rel: "noopener noreferrer",
        }
      : {}

    // If external or starts with http/mailto, use regular anchor
    if (external || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
      return (
        <a ref={ref} href={href} className={linkStyles} {...externalProps} {...props}>
          {children}
          {external && <span className="ml-1">↗</span>}
        </a>
      )
    }

    // Otherwise use Next.js Link
    return (
      <NextLink ref={ref} href={href} className={linkStyles} {...props}>
        {children}
      </NextLink>
    )
  }
)

BNILink.displayName = "BNILink"
