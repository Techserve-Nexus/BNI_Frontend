import React from "react"
import { cn } from "../../lib/utils"

/**
 * BNI Badge Component
 * Reusable badge/tag component following BNI brand guidelines
 *
 * @example
 * <Badge>New</Badge>
 * <Badge variant="success">Active</Badge>
 * <Badge variant="warning" size="lg">Pending</Badge>
 */

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "primary" | "success" | "warning" | "danger" | "info"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
  rounded?: boolean
}

export const Badge = React.forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", size = "md", children, className, rounded = true, ...props }, ref) => {
    const variants = {
      default: "bg-bni-grey-light text-bni-grey-granite",
      primary: "bg-bni-red text-white",
      success: "bg-green-100 text-green-800",
      warning: "bg-yellow-100 text-yellow-800",
      danger: "bg-red-100 text-red-800",
      info: "bg-blue-100 text-blue-800",
    }

    const sizes = {
      sm: "px-2 py-0.5 text-xs",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-1.5 text-base",
    }

    const roundedStyle = rounded ? "rounded-full" : "rounded-bni"

    return (
      <span
        ref={ref}
        className={cn("inline-block font-bold", variants[variant], sizes[size], roundedStyle, className)}
        {...props}
      >
        {children}
      </span>
    )
  }
)

Badge.displayName = "Badge"
