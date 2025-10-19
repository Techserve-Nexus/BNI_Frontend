"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

/**
 * Profile Layout
 * Protected layout with client-side auth check
 */
export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem("token")
    if (!token) {
      router.push("/auth/signin")
    } else {
      setIsAuthed(true)
    }
    setIsLoading(false)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("subscription")
    router.push("/")
  }

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <p className="text-bni-grey-granite">Loading...</p>
      </div>
    )
  }

  if (!isAuthed) {
    return null
  }

  return (
    <div className="bg-bni-grey-light min-h-screen">
      {/* Header */}
      <nav className="bg-bni-white shadow-bni border-bni-grey-sterling/30 sticky top-0 z-40 border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between bg-white px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            <Link href="/" className="text-bni-red text-2xl font-bold">
              BNI
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-bni border-bni-red text-bni-red hover:bg-bni-red/5 border px-4 py-2 font-bold transition"
          >
            Sign Out
          </button>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-bni-white shadow-bni sticky top-24 h-[calc(100vh-150px)] rounded-lg p-6">
              <h3 className="text-bni-grey-granite mb-4 font-bold">Profile Menu</h3>
              <nav className="space-y-2">
                <Link
                  href="/profile/user"
                  className="rounded-bni hover:bg-bni-grey-light text-bni-grey-granite block px-4 py-2 font-medium transition"
                >
                  👤 My Profile
                </Link>
                <Link
                  href="/profile/subscription"
                  className="rounded-bni hover:bg-bni-grey-light text-bni-grey-granite block px-4 py-2 font-medium transition"
                >
                  💳 Subscription
                </Link>
                <Link
                  href="/profile/payment"
                  className="rounded-bni hover:bg-bni-grey-light text-bni-grey-granite block px-4 py-2 font-medium transition"
                >
                  💰 Payment
                </Link>
                <Link
                  href="/profile/attendance"
                  className="rounded-bni hover:bg-bni-grey-light text-bni-grey-granite block px-4 py-2 font-medium transition"
                >
                  📅 Attendance
                </Link>
                <Link
                  href="/profile/upcoming"
                  className="rounded-bni hover:bg-bni-grey-light text-bni-grey-granite block px-4 py-2 font-medium transition"
                >
                  🔔 Upcoming & Reminders
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-bni-white shadow-bni rounded-lg p-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
