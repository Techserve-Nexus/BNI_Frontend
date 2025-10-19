"use client"

import Link from "next/link"

/**
 * Profile Index Page
 * Redirect to user tab
 */
export default function ProfileIndex() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-bni-grey-granite mb-2 text-3xl font-bold">Your Dashboard</h1>
        <p className="text-bni-grey-granite">Welcome to your BNI Event Hub profile</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Link href="/profile/user" className="bg-bni-grey-light hover:shadow-bni-hover rounded-lg p-6 transition">
          <div className="mb-3 text-3xl">👤</div>
          <h3 className="text-bni-grey-granite mb-2 text-lg font-bold">My Profile</h3>
          <p className="text-bni-grey-granite text-sm">View and edit your personal information</p>
        </Link>

        <Link
          href="/profile/subscription"
          className="bg-bni-grey-light hover:shadow-bni-hover rounded-lg p-6 transition"
        >
          <div className="mb-3 text-3xl">💳</div>
          <h3 className="text-bni-grey-granite mb-2 text-lg font-bold">Subscription</h3>
          <p className="text-bni-grey-granite text-sm">Manage your membership plan</p>
        </Link>

        <Link href="/profile/payment" className="bg-bni-grey-light hover:shadow-bni-hover rounded-lg p-6 transition">
          <div className="mb-3 text-3xl">💰</div>
          <h3 className="text-bni-grey-granite mb-2 text-lg font-bold">Payment</h3>
          <p className="text-bni-grey-granite text-sm">Upgrade or pay for your membership</p>
        </Link>

        <Link href="/profile/attendance" className="bg-bni-grey-light hover:shadow-bni-hover rounded-lg p-6 transition">
          <div className="mb-3 text-3xl">📅</div>
          <h3 className="text-bni-grey-granite mb-2 text-lg font-bold">Attendance</h3>
          <p className="text-bni-grey-granite text-sm">Track your event attendance</p>
        </Link>

        <Link href="/profile/upcoming" className="bg-bni-grey-light hover:shadow-bni-hover rounded-lg p-6 transition">
          <div className="mb-3 text-3xl">🔔</div>
          <h3 className="text-bni-grey-granite mb-2 text-lg font-bold">Upcoming & Reminders</h3>
          <p className="text-bni-grey-granite text-sm">View meetings and task reminders</p>
        </Link>
      </div>
    </div>
  )
}
