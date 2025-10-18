'use client';

import { useEffect, useState } from 'react';

/**
 * Subscription Tab
 * Display current subscription and plan details
 */
interface Subscription {
  plan: string;
  validTill: string;
  status: string;
}

export default function SubscriptionTab() {
  const [sub, setSub] = useState<Subscription | null>(null);

  useEffect(() => {
    const data = localStorage.getItem('subscription');
    if (data) {
      const subData = JSON.parse(data) as { plan: string; validTill: string };
      const now = new Date();
      const validTill = new Date(subData.validTill);
      setSub({
        plan: subData.plan,
        validTill: subData.validTill,
        status: validTill > now ? 'Active' : 'Expired',
      });
    }
  }, []);

  if (!sub) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold text-bni-grey-granite mb-6">Subscription</h2>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-bni-grey-light rounded-lg p-6">
          <p className="text-sm text-bni-grey-granite mb-2">Current Plan</p>
          <p className="text-2xl font-bold text-bni-red">{sub.plan}</p>
        </div>
        <div className="bg-bni-grey-light rounded-lg p-6">
          <p className="text-sm text-bni-grey-granite mb-2">Valid Until</p>
          <p className="text-2xl font-bold text-bni-grey-granite">{new Date(sub.validTill).toLocaleDateString()}</p>
        </div>
        <div className="bg-bni-grey-light rounded-lg p-6">
          <p className="text-sm text-bni-grey-granite mb-2">Status</p>
          <p className={`text-2xl font-bold ${sub.status === 'Active' ? 'text-green-600' : 'text-red-600'}`}>
            {sub.status}
          </p>
        </div>
      </div>

      <div className="bg-bni-grey-light rounded-lg p-6">
        <h3 className="font-bold text-bni-grey-granite mb-4">Plan Features</h3>
        <ul className="space-y-2 text-bni-grey-granite">
          <li className="flex gap-2">
            <span>✓</span>
            <span>Access to all BNI events</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>Member directory access</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>Referral tracking system</span>
          </li>
          <li className="flex gap-2">
            <span>✓</span>
            <span>Networking opportunities</span>
          </li>
        </ul>
      </div>

      <div className="mt-6 flex gap-4">
        <button className="px-6 py-3 rounded-bni bg-bni-red text-bni-white font-bold hover:bg-bni-red-hover transition">
          Upgrade Plan
        </button>
        <button className="px-6 py-3 rounded-bni border border-bni-grey-sterling text-bni-grey-granite hover:bg-bni-grey-light transition">
          Manage Subscription
        </button>
      </div>
    </div>
  );
}
