import React from "react"
import { Container } from "./Container"
import { cn } from "../../lib/utils"

/**
 * BNI Section Component
 * Reusable section wrapper with consistent spacing
 *
 * @example
 * <Section>
 *   <SectionHeader
 *     title="Our Services"
 *     description="What we offer"
 *   />
 *   <SectionContent>
 *     Content here
 *   </SectionContent>
 * </Section>
 */

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "sm" | "md" | "lg" | "xl"
  background?: "white" | "light" | "gradient" | "dark" | "transparent"
  children: React.ReactNode
  className?: string
  containerWidth?: "sm" | "md" | "lg" | "xl" | "2xl" | "full"
  noPadding?: boolean
}

export const Section = React.forwardRef<HTMLElement, SectionProps>(
  (
    {
      spacing = "lg",
      background = "transparent",
      children,
      className,
      containerWidth = "xl",
      noPadding = false,
      ...props
    },
    ref
  ) => {
    const spacings = {
      none: "",
      sm: "py-8",
      md: "py-12",
      lg: "py-20",
      xl: "py-32",
    }

    const backgrounds = {
      white: "bg-white",
      light: "bg-bni-grey-light",
      gradient: "bg-gradient-to-br from-bni-grey-light to-white",
      dark: "bg-bni-grey-granite",
      transparent: "",
    }

    return (
      <section ref={ref} className={cn(spacings[spacing], backgrounds[background], className)} {...props}>
        {noPadding ? (
          children
        ) : (
          <Container maxWidth={containerWidth} centered>
            {children}
          </Container>
        )}
      </section>
    )
  }
)

Section.displayName = "Section"

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  align?: "left" | "center" | "right"
  className?: string
  badge?: React.ReactNode
}

export const SectionHeader = React.forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ title, description, align = "center", className, badge, ...props }, ref) => {
    const alignments = {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    }

    return (
      <div ref={ref} className={cn("mb-16", alignments[align], className)} {...props}>
        {badge && <div className="mb-4 inline-block">{badge}</div>}
        <h2 className="text-bni-grey-granite mb-4 text-4xl font-bold">{title}</h2>
        {description && <p className="text-bni-grey-granite mx-auto max-w-3xl text-xl">{description}</p>}
      </div>
    )
  }
)

SectionHeader.displayName = "SectionHeader"

export interface SectionContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const SectionContent = React.forwardRef<HTMLDivElement, SectionContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    )
  }
)

SectionContent.displayName = "SectionContent"
