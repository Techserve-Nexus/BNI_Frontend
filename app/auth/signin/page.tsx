'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * Sign In Page
 * Simple authentication stub using localStorage
 */
export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Stub: In production, call actual authentication endpoint
      if (!email || !password) {
        setError('Please fill in all fields');
        setLoading(false);
        return;
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Save to localStorage (stub - replace with real auth)
      const user = {
        id: 'user_' + Date.now(),
        name: email.split('@')[0],
        email,
        business: 'My Business',
        joinDate: new Date().toISOString().split('T')[0],
      };

      localStorage.setItem('token', 'dev-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('subscription', JSON.stringify({
        plan: 'Professional',
        validTill: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      }));

      router.push('/profile/user');
    } catch {
      setError('Authentication failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bni-grey-light flex items-center justify-center px-4">
      <div className="bg-bni-white rounded-lg shadow-bni-hover p-8 md:p-12 w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-bni-grey-granite mb-2">Sign In</h1>
          <p className="text-bni-grey-granite">Welcome back to BNI Event Hub</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-bni-grey-granite mb-2">
              Email Address
            </label>
            <input
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni focus:outline-none focus:ring-2 focus:ring-bni-red"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-bni-grey-granite mb-2">
              Password
            </label>
            <input
              type="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni focus:outline-none focus:ring-2 focus:ring-bni-red"
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-bni text-red-600 text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-3 bg-bni-red text-bni-white font-bold rounded-bni hover:bg-bni-red-hover transition disabled:opacity-50"
          >
            {loading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-bni-grey-granite">
            Don&apos;t have an account?{' '}
            <Link href="/auth/signup" className="text-bni-red font-bold hover:text-bni-red-hover">
              Sign Up
            </Link>
          </p>
        </div>

        <div className="mt-4 p-3 bg-bni-grey-light rounded-bni text-xs text-bni-grey-granite">
          <p className="font-semibold mb-1">Demo Credentials:</p>
          <p>Email: demo@example.com</p>
          <p>Password: any password</p>
        </div>
      </div>
    </div>
  );
}
