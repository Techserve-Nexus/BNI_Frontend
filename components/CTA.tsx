import Link from "next/link"
import { BRAND } from "../lib/constants"

/**
 * CTA Component
 * Call-to-action section for membership enrollment
 */
export default function CTA() {
  return (
    <section className="from-bni-red to-bni-red-hover bg-gradient-to-br py-20">
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-bni-white mb-6 text-4xl font-bold md:text-5xl">Ready to Change Your Business?</h2>
        <p className="text-bni-white/90 mx-auto mb-12 max-w-3xl text-xl leading-relaxed">
          Join thousands of successful business professionals who are growing their business through {BRAND.name}&apos;s
          proven referral marketing system.
        </p>
        <div className="mb-12 flex flex-col justify-center gap-6 sm:flex-row">
          <Link
            href="/auth/signup"
            className="rounded-bni bg-bni-white text-bni-red hover:bg-bni-grey-light shadow-bni-hover transform px-10 py-5 text-lg font-bold transition hover:-translate-y-0.5"
          >
            Join {BRAND.name} Today
          </Link>
          <Link
            href="/events"
            className="rounded-bni border-bni-white text-bni-white hover:bg-bni-white/10 border-2 px-10 py-5 text-lg font-bold transition"
          >
            Find a Chapter
          </Link>
        </div>
        <p className="text-bni-white/80 text-sm">
          🌍 Over {BRAND.stats.members} members in {BRAND.stats.chapters} chapters worldwide
        </p>
      </div>
    </section>
  )
}
