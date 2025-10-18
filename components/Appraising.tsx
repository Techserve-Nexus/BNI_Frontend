'use client';

import { BRAND } from '../lib/constants';

/**
 * Appraising Component
 * Displays key statistics and metrics about BNI
 */
export default function Appraising() {
  const stats = [
    { label: 'Global Chapters', value: BRAND.stats.chapters },
    { label: 'Members Worldwide', value: BRAND.stats.members },
    { label: 'Annual Referrals', value: BRAND.stats.annualReferrals },
  ];

  return (
    <section className="bg-bni-white py-20 border-y border-bni-grey-sterling/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="card-bni text-center hover:shadow-bni-hover transition">
              <div className="text-4xl font-bold text-bni-red mb-2">{stat.value}</div>
              <div className="text-bni-grey-granite font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
