import Link from "next/link"
import { homeData } from "../data/home"
import { BRAND } from "../lib/constants"

/**
 * Hero Component
 * Displays the main hero section with branding and call-to-action
 */
export default function Hero() {
  return (
    <section className="from-bni-grey-light to-bni-white w-full bg-gradient-to-br py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <div className="rounded-bni bg-bni-red/10 border-bni-red/30 mb-6 inline-block border px-4 py-2">
              <span className="text-bni-red text-sm font-bold">🌟 {BRAND.vision.toUpperCase()}</span>
            </div>
            <h1 className="text-bni-grey-granite mb-6 text-5xl leading-tight font-bold md:text-6xl">
              {homeData.hero.title}
              <span className="text-bni-red mt-2 block">{homeData.hero.subtitle}</span>
            </h1>
            <p className="text-bni-grey-granite mb-8 max-w-lg text-xl leading-relaxed">{homeData.hero.description}</p>
            <div className="mb-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/auth/signup"
                className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover shadow-bni-hover transform px-8 py-4 text-lg font-bold transition hover:-translate-y-0.5"
              >
                {homeData.hero.cta}
              </Link>
              <Link
                href="#events"
                className="rounded-bni border-bni-red text-bni-red hover:bg-bni-red/5 border-2 px-8 py-4 text-lg font-bold transition"
              >
                View Events →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {homeData.stats.map((stat: { label: string; value: string }) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-bni-red text-4xl font-bold">{stat.value}</div>
                  <div className="text-bni-grey-granite text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-bni-white shadow-bni-hover border-bni-red/10 rounded-lg border-4 p-8">
              <div className="bg-bni-grey-light rounded-lg p-8 text-center">
                <div className="mb-4 text-6xl">🤝</div>
                <h3 className="text-bni-grey-granite mb-3 text-2xl font-bold">BNI ANNUAL CONFERENCE</h3>
                <p className="text-bni-grey-granite mb-4 font-medium">Building Relationships • Growing Business</p>
                <p className="text-bni-grey-granite text-sm leading-relaxed">
                  Join hundreds of business professionals dedicated to networking excellence and lifelong learning.
                </p>
                <div className="bg-bni-red text-bni-white rounded-bni mt-6 inline-block px-6 py-2 font-bold">
                  Register Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
