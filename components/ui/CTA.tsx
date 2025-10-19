import React from "react"
import { Button } from "./Button"
import { cn } from "../../lib/utils"

/**
 * BNI CTA (Call-to-Action) Component
 * Reusable CTA section following BNI brand guidelines
 *
 * @example
 * <CTA
 *   title="Ready to Join BNI?"
 *   description="Start building meaningful business relationships today"
 *   primaryAction={{ text: "Get Started", href: "/signup" }}
 *   secondaryAction={{ text: "Learn More", href: "/about" }}
 * />
 */

export interface CTAAction {
  text: string
  href?: string
  onClick?: () => void
}

export interface CTAProps {
  title: string
  description?: string
  primaryAction?: CTAAction
  secondaryAction?: CTAAction
  variant?: "default" | "gradient" | "minimal"
  align?: "left" | "center" | "right"
  className?: string
  children?: React.ReactNode
}

export const CTA: React.FC<CTAProps> = ({
  title,
  description,
  primaryAction,
  secondaryAction,
  variant = "default",
  align = "center",
  className,
  children,
}) => {
  const variants = {
    default: "bg-bni-grey-light py-20",
    gradient: "bg-gradient-to-br from-bni-red to-bni-red-hover py-20",
    minimal: "py-12",
  }

  const alignments = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const textColor = variant === "gradient" ? "text-white" : "text-bni-grey-granite"
  const descriptionColor = variant === "gradient" ? "text-white/90" : "text-bni-grey-granite"

  const buttonAlignment = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  }

  return (
    <section className={cn(variants[variant], className)}>
      <div className={cn("mx-auto max-w-5xl px-4 sm:px-6 lg:px-8", alignments[align])}>
        <h2 className={cn("mb-6 text-4xl font-bold md:text-5xl", textColor)}>{title}</h2>

        {description && (
          <p className={cn("mx-auto mb-12 max-w-3xl text-xl leading-relaxed", descriptionColor)}>{description}</p>
        )}

        {children && <div className="mb-12">{children}</div>}

        {(primaryAction || secondaryAction) && (
          <div className={cn("flex flex-col gap-6 sm:flex-row", buttonAlignment[align])}>
            {primaryAction && (
              <Button
                variant={variant === "gradient" ? "secondary" : "primary"}
                size="lg"
                href={primaryAction.href}
                onClick={primaryAction.onClick}
                className={variant === "gradient" ? "text-bni-red hover:bg-bni-grey-light bg-white" : ""}
              >
                {primaryAction.text}
              </Button>
            )}

            {secondaryAction && (
              <Button
                variant={variant === "gradient" ? "ghost" : "secondary"}
                size="lg"
                href={secondaryAction.href}
                onClick={secondaryAction.onClick}
                className={variant === "gradient" ? "border-2 border-white text-white hover:bg-white/10" : ""}
              >
                {secondaryAction.text}
              </Button>
            )}
          </div>
        )}
      </div>
    </section>
  )
}

CTA.displayName = "CTA"
