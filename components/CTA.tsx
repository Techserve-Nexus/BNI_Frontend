import Link from 'next/link';
import { BRAND } from '../lib/constants';

/**
 * CTA Component
 * Call-to-action section for membership enrollment
 */
export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-bni-red to-bni-red-hover py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-bni-white mb-6">
          Ready to Change Your Business?
        </h2>
        <p className="text-xl text-bni-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Join thousands of successful business professionals who are growing their business through {BRAND.name}&apos;s proven referral marketing system.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          <Link 
            href="/auth/signup" 
            className="px-10 py-5 rounded-bni bg-bni-white text-bni-red font-bold text-lg hover:bg-bni-grey-light transition shadow-bni-hover transform hover:-translate-y-0.5"
          >
            Join {BRAND.name} Today
          </Link>
          <Link 
            href="/events" 
            className="px-10 py-5 rounded-bni border-2 border-bni-white text-bni-white font-bold text-lg hover:bg-bni-white/10 transition"
          >
            Find a Chapter
          </Link>
        </div>
        <p className="text-sm text-bni-white/80">
          🌍 Over {BRAND.stats.members} members in {BRAND.stats.chapters} chapters worldwide
        </p>
      </div>
    </section>
  );
}
