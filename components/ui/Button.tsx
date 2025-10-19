import Link from "next/link"
import React from "react"
import { cn } from "../../lib/utils"

/**
 * BNI Button Component
 * Reusable button following BNI brand guidelines
 *
 * @example
 * <Button variant="primary">Click me</Button>
 * <Button variant="secondary" href="/about">Learn More</Button>
 * <Button variant="outline" size="lg">Get Started</Button>
 */

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger"
  size?: "sm" | "md" | "lg" | "xl"
  href?: string
  children: React.ReactNode
  className?: string
  fullWidth?: boolean
  loading?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      children,
      className,
      fullWidth = false,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref
  ) => {
    // Base styles
    const baseStyles =
      "inline-flex items-center justify-center gap-2 rounded-bni font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"

    // Variant styles
    const variants = {
      primary:
        "bg-bni-red text-white hover:bg-bni-red-hover shadow-bni hover:shadow-bni-hover focus:ring-bni-red transform hover:-translate-y-0.5",
      secondary: "border-2 border-bni-red text-bni-red bg-transparent hover:bg-bni-red/5 focus:ring-bni-red",
      outline:
        "border border-bni-grey-sterling text-bni-grey-granite bg-transparent hover:bg-bni-grey-light focus:ring-bni-grey-granite",
      ghost: "text-bni-grey-granite hover:bg-bni-grey-light focus:ring-bni-grey-granite",
      danger: "bg-red-600 text-white hover:bg-red-700 shadow-bni hover:shadow-bni-hover focus:ring-red-600",
    }

    // Size styles
    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
    }

    // Width styles
    const widthStyles = fullWidth ? "w-full" : ""

    // Combine all styles
    const buttonStyles = cn(baseStyles, variants[variant], sizes[size], widthStyles, className)

    // Loading spinner
    const LoadingSpinner = () => (
      <svg className="h-5 w-5 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
    )

    // Content with icons and loading state
    const content = (
      <>
        {loading && <LoadingSpinner />}
        {!loading && leftIcon && <span>{leftIcon}</span>}
        <span>{children}</span>
        {!loading && rightIcon && <span>{rightIcon}</span>}
      </>
    )

    // If href is provided, render as Link
    if (href) {
      return (
        <Link href={href} className={buttonStyles}>
          {content}
        </Link>
      )
    }

    // Otherwise render as button
    return (
      <button ref={ref} className={buttonStyles} disabled={disabled || loading} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = "Button"
