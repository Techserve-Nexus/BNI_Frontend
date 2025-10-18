'use client';

import { testimonialsData } from '../data/testimonials';

/**
 * Testimonials Component
 * Displays member success stories and testimonials
 */
interface Testimonial {
  id: string;
  name: string;
  company: string;
  title: string;
  quote: string;
  avatar: string;
  chapter: string;
  rating: number;
}

export default function Testimonials() {
  return (
    <section className="bg-bni-white py-20 border-y border-bni-grey-sterling/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-bni-grey-granite">Member Success Stories</h2>
          <p className="text-xl text-bni-grey-granite">Real results from real BNI members</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {testimonialsData.map((t: Testimonial) => (
            <div key={t.id} className="card-bni hover:shadow-bni-hover transition">
              <div className="flex gap-4 mb-6">
                <div className="w-16 h-16 rounded-full bg-bni-red/10 flex items-center justify-center text-3xl flex-shrink-0">
                  👤
                </div>
                <div>
                  <p className="font-bold text-lg text-bni-grey-granite">{t.name}</p>
                  <p className="text-sm text-bni-grey-granite">{t.title} • {t.chapter}</p>
                </div>
              </div>
              <p className="text-bni-grey-granite leading-relaxed italic mb-4">
                &quot;{t.quote}&quot;
              </p>
              <div className="flex gap-1 text-bni-red">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
