import Link from 'next/link';
import { homeData } from '../data/home';
import { BRAND } from '../lib/constants';

/**
 * Hero Component
 * Displays the main hero section with branding and call-to-action
 */
export default function Hero() {
  return (
    <section className="w-full bg-gradient-to-br from-bni-grey-light to-bni-white py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block mb-6 px-4 py-2 rounded-bni bg-bni-red/10 border border-bni-red/30">
              <span className="text-sm text-bni-red font-bold">🌟 {BRAND.vision.toUpperCase()}</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-bni-grey-granite">
              {homeData.hero.title}
              <span className="block text-bni-red mt-2">{homeData.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-bni-grey-granite mb-8 max-w-lg leading-relaxed">
              {homeData.hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="/auth/signup" 
                className="px-8 py-4 rounded-bni bg-bni-red text-bni-white font-bold text-lg hover:bg-bni-red-hover transition shadow-bni-hover transform hover:-translate-y-0.5"
              >
                {homeData.hero.cta}
              </Link>
              <Link 
                href="#events" 
                className="px-8 py-4 rounded-bni border-2 border-bni-red text-bni-red font-bold text-lg hover:bg-bni-red/5 transition"
              >
                View Events →
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {homeData.stats.map((stat: { label: string; value: string }) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="text-4xl font-bold text-bni-red">{stat.value}</div>
                  <div className="text-sm text-bni-grey-granite">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="bg-bni-white rounded-lg p-8 shadow-bni-hover border-4 border-bni-red/10">
              <div className="bg-bni-grey-light rounded-lg p-8 text-center">
                <div className="mb-4 text-6xl">🤝</div>
                <h3 className="text-2xl font-bold mb-3 text-bni-grey-granite">BNI ANNUAL CONFERENCE</h3>
                <p className="text-bni-grey-granite mb-4 font-medium">Building Relationships • Growing Business</p>
                <p className="text-sm text-bni-grey-granite leading-relaxed">
                  Join hundreds of business professionals dedicated to networking excellence and lifelong learning.
                </p>
                <div className="mt-6 inline-block px-6 py-2 bg-bni-red text-bni-white rounded-bni font-bold">
                  Register Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
