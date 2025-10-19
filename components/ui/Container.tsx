import React from "react"
import { cn } from "../../lib/utils"

/**
 * BNI Container Component
 * Reusable container for consistent max-width and padding
 *
 * @example
 * <Container>
 *   <h1>Page Content</h1>
 * </Container>
 * <Container maxWidth="sm" padding="lg">
 *   Smaller container
 * </Container>
 */

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  maxWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  padding?: "none" | "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
  centered?: boolean
}

export const Container = React.forwardRef<HTMLDivElement, ContainerProps>(
  ({ maxWidth = "xl", padding = "md", children, className, centered = false, ...props }, ref) => {
    const maxWidths = {
      sm: "max-w-3xl",
      md: "max-w-5xl",
      lg: "max-w-6xl",
      xl: "max-w-7xl",
      "2xl": "max-w-[1536px]",
      full: "max-w-full",
    }

    const paddings = {
      none: "",
      sm: "px-4 sm:px-6",
      md: "px-4 sm:px-6 lg:px-8",
      lg: "px-6 sm:px-8 lg:px-12",
    }

    const centerStyles = centered ? "mx-auto" : ""

    return (
      <div ref={ref} className={cn(maxWidths[maxWidth], paddings[padding], centerStyles, className)} {...props}>
        {children}
      </div>
    )
  }
)

Container.displayName = "Container"
