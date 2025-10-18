"use client"

import { testimonialsData } from "../data/testimonials"

/**
 * Testimonials Component
 * Displays member success stories and testimonials
 */
interface Testimonial {
  id: string
  name: string
  company: string
  title: string
  quote: string
  avatar: string
  chapter: string
  rating: number
}

export default function Testimonials() {
  return (
    <section className="bg-bni-white border-bni-grey-sterling/30 border-y py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-bni-grey-granite mb-4 text-4xl font-bold">Member Success Stories</h2>
          <p className="text-bni-grey-granite text-xl">Real results from real BNI members</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonialsData.map((t: Testimonial) => (
            <div key={t.id} className="card-bni hover:shadow-bni-hover transition">
              <div className="mb-6 flex gap-4">
                <div className="bg-bni-red/10 flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-full text-3xl">
                  👤
                </div>
                <div>
                  <p className="text-bni-grey-granite text-lg font-bold">{t.name}</p>
                  <p className="text-bni-grey-granite text-sm">
                    {t.title} • {t.chapter}
                  </p>
                </div>
              </div>
              <p className="text-bni-grey-granite mb-4 leading-relaxed italic">&quot;{t.quote}&quot;</p>
              <div className="text-bni-red flex gap-1">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
