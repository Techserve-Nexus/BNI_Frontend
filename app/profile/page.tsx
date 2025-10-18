'use client';

import Link from 'next/link';

/**
 * Profile Index Page
 * Redirect to user tab
 */
export default function ProfileIndex() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-bni-grey-granite mb-2">Your Dashboard</h1>
        <p className="text-bni-grey-granite">Welcome to your BNI Event Hub profile</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/profile/user" className="p-6 bg-bni-grey-light rounded-lg hover:shadow-bni-hover transition">
          <div className="text-3xl mb-3">👤</div>
          <h3 className="text-lg font-bold text-bni-grey-granite mb-2">My Profile</h3>
          <p className="text-sm text-bni-grey-granite">View and edit your personal information</p>
        </Link>

        <Link href="/profile/subscription" className="p-6 bg-bni-grey-light rounded-lg hover:shadow-bni-hover transition">
          <div className="text-3xl mb-3">💳</div>
          <h3 className="text-lg font-bold text-bni-grey-granite mb-2">Subscription</h3>
          <p className="text-sm text-bni-grey-granite">Manage your membership plan</p>
        </Link>

        <Link href="/profile/payment" className="p-6 bg-bni-grey-light rounded-lg hover:shadow-bni-hover transition">
          <div className="text-3xl mb-3">💰</div>
          <h3 className="text-lg font-bold text-bni-grey-granite mb-2">Payment</h3>
          <p className="text-sm text-bni-grey-granite">Upgrade or pay for your membership</p>
        </Link>

        <Link href="/profile/attendance" className="p-6 bg-bni-grey-light rounded-lg hover:shadow-bni-hover transition">
          <div className="text-3xl mb-3">📅</div>
          <h3 className="text-lg font-bold text-bni-grey-granite mb-2">Attendance</h3>
          <p className="text-sm text-bni-grey-granite">Track your event attendance</p>
        </Link>
      </div>
    </div>
  );
}
