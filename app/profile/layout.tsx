'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

/**
 * Profile Layout
 * Protected layout with client-side auth check
 */
export default function ProfileLayout({ children }: { children: React.ReactNode }) {
  const [isAuthed, setIsAuthed] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Check for token in localStorage
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/signin');
    } else {
      setIsAuthed(true);
    }
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('subscription');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-bni-grey-granite">Loading...</p>
      </div>
    );
  }

  if (!isAuthed) {
    return null;
  }

  return (
    <div className="min-h-screen bg-bni-grey-light">
      {/* Header */}
      <nav className="sticky top-0 z-40 bg-bni-white shadow-bni border-b border-bni-grey-sterling/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            <Link href="/" className="text-2xl font-bold text-bni-red">
              BNI Event Hub
            </Link>
          </div>
          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded-bni border border-bni-red text-bni-red font-bold hover:bg-bni-red/5 transition"
          >
            Sign Out
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="md:col-span-1">
            <div className="bg-bni-white rounded-lg shadow-bni p-6">
              <h3 className="font-bold text-bni-grey-granite mb-4">Profile Menu</h3>
              <nav className="space-y-2">
                <Link
                  href="/profile/user"
                  className="block px-4 py-2 rounded-bni hover:bg-bni-grey-light text-bni-grey-granite font-medium transition"
                >
                  👤 My Profile
                </Link>
                <Link
                  href="/profile/subscription"
                  className="block px-4 py-2 rounded-bni hover:bg-bni-grey-light text-bni-grey-granite font-medium transition"
                >
                  💳 Subscription
                </Link>
                <Link
                  href="/profile/payment"
                  className="block px-4 py-2 rounded-bni hover:bg-bni-grey-light text-bni-grey-granite font-medium transition"
                >
                  💰 Payment
                </Link>
                <Link
                  href="/profile/attendance"
                  className="block px-4 py-2 rounded-bni hover:bg-bni-grey-light text-bni-grey-granite font-medium transition"
                >
                  📅 Attendance
                </Link>
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="md:col-span-3">
            <div className="bg-bni-white rounded-lg shadow-bni p-8">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
