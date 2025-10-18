"use client"

import { BRAND } from "../lib/constants"

/**
 * Appraising Component
 * Displays key statistics and metrics about BNI
 */
export default function Appraising() {
  const stats = [
    { label: "Global Chapters", value: BRAND.stats.chapters },
    { label: "Members Worldwide", value: BRAND.stats.members },
    { label: "Annual Referrals", value: BRAND.stats.annualReferrals },
  ]

  return (
    <section className="bg-bni-white border-bni-grey-sterling/30 border-y py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label} className="card-bni hover:shadow-bni-hover text-center transition">
              <div className="text-bni-red mb-2 text-4xl font-bold">{stat.value}</div>
              <div className="text-bni-grey-granite font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
