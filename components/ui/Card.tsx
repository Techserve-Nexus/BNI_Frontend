import React from "react"
import { cn } from "../../lib/utils"

/**
 * BNI Card Component
 * Reusable card component following BNI brand guidelines
 *
 * @example
 * <Card>
 *   <CardHeader>
 *     <CardTitle>Card Title</CardTitle>
 *     <CardDescription>Card description goes here</CardDescription>
 *   </CardHeader>
 *   <CardContent>
 *     Card content
 *   </CardContent>
 *   <CardFooter>
 *     Card footer
 *   </CardFooter>
 * </Card>
 */

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated" | "interactive"
  padding?: "none" | "sm" | "md" | "lg"
  children: React.ReactNode
  className?: string
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant = "default", padding = "md", children, className, ...props }, ref) => {
    const variants = {
      default: "bg-white border border-bni-grey-sterling/20 shadow-bni",
      bordered: "bg-white border-2 border-bni-grey-sterling",
      elevated: "bg-white border border-bni-grey-sterling/20 shadow-bni-md",
      interactive:
        "bg-white border border-bni-grey-sterling/20 shadow-bni hover:shadow-bni-hover transition-all cursor-pointer group",
    }

    const paddings = {
      none: "p-0",
      sm: "p-4",
      md: "p-6",
      lg: "p-8",
    }

    return (
      <div ref={ref} className={cn("rounded-bni", variants[variant], paddings[padding], className)} {...props}>
        {children}
      </div>
    )
  }
)

Card.displayName = "Card"

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mb-4", className)} {...props}>
        {children}
      </div>
    )
  }
)

CardHeader.displayName = "CardHeader"

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, as: Component = "h3", ...props }, ref) => {
    return (
      <Component ref={ref} className={cn("text-bni-grey-granite text-2xl font-bold", className)} {...props}>
        {children}
      </Component>
    )
  }
)

CardTitle.displayName = "CardTitle"

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p ref={ref} className={cn("text-bni-grey-granite text-sm", className)} {...props}>
        {children}
      </p>
    )
  }
)

CardDescription.displayName = "CardDescription"

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("", className)} {...props}>
        {children}
      </div>
    )
  }
)

CardContent.displayName = "CardContent"

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("border-bni-grey-sterling/30 mt-4 border-t pt-4", className)} {...props}>
        {children}
      </div>
    )
  }
)

CardFooter.displayName = "CardFooter"
