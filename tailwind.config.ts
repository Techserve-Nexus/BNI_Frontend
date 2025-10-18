import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      // BNI Brand Colors
      colors: {
        bni: {
          red: "#CF2030",
          "red-hover": "#a31a24",
          grey: {
            sterling: "#C8C8C8",
            light: "#F2F2F2",
            granite: "#64666A",
          },
          black: "#000000",
          white: "#FFFFFF",
        },
      },

      // BNI Border Radius
      borderRadius: {
        bni: "4px",
        "bni-lg": "8px",
        "bni-xl": "12px",
      },

      // BNI Box Shadows
      boxShadow: {
        bni: "0 2px 8px rgba(0, 0, 0, 0.1)",
        "bni-hover": "0 4px 12px rgba(207, 32, 48, 0.2)",
        "bni-md": "0 4px 16px rgba(0, 0, 0, 0.1)",
        "bni-lg": "0 8px 24px rgba(0, 0, 0, 0.15)",
        "bni-xl": "0 12px 32px rgba(0, 0, 0, 0.2)",
      },

      // BNI Ring Colors
      ringColor: {
        "bni-red": "#CF2030",
      },

      // BNI Font Family
      fontFamily: {
        sans: ["'Helvetica Neue'", "Arial", "sans-serif"],
        bni: ["'Helvetica Neue'", "Arial", "sans-serif"],
      },

      // BNI Spacing (based on 4px base unit)
      spacing: {
        "bni-xs": "8px",
        "bni-sm": "12px",
        "bni-md": "16px",
        "bni-lg": "24px",
        "bni-xl": "32px",
        "bni-2xl": "48px",
        "bni-3xl": "64px",
      },

      // BNI Typography
      fontSize: {
        "bni-xs": ["0.75rem", { lineHeight: "1.5" }],
        "bni-sm": ["0.875rem", { lineHeight: "1.6" }],
        "bni-base": ["1rem", { lineHeight: "1.6" }],
        "bni-lg": ["1.125rem", { lineHeight: "1.6" }],
        "bni-xl": ["1.25rem", { lineHeight: "1.6" }],
        "bni-2xl": ["1.5rem", { lineHeight: "1.5" }],
        "bni-3xl": ["2rem", { lineHeight: "1.4" }],
        "bni-4xl": ["2.5rem", { lineHeight: "1.3" }],
        "bni-5xl": ["3rem", { lineHeight: "1.2" }],
      },

      // BNI Animation Durations
      transitionDuration: {
        bni: "200ms",
        "bni-slow": "300ms",
      },

      // BNI Z-Index Scale
      zIndex: {
        "bni-dropdown": "1000",
        "bni-sticky": "1020",
        "bni-fixed": "1030",
        "bni-modal-backdrop": "1040",
        "bni-modal": "1050",
        "bni-popover": "1060",
        "bni-tooltip": "1070",
      },

      // BNI Container Sizes
      maxWidth: {
        "bni-sm": "640px",
        "bni-md": "768px",
        "bni-lg": "1024px",
        "bni-xl": "1280px",
        "bni-2xl": "1536px",
      },

      // BNI Gradient Colors
      gradientColorStops: {
        "bni-red": "#CF2030",
        "bni-red-hover": "#a31a24",
        "bni-grey-light": "#F2F2F2",
        "bni-white": "#FFFFFF",
      },
    },
  },
  plugins: [],
}

export default config
