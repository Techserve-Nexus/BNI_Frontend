'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

/**
 * Sign Up Page
 * Member registration with localStorage stub
 */
export default function SignUp() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    business: '',
    phone: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.password || !formData.business) {
        setError('Please fill in all required fields');
        setLoading(false);
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        setLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        setError('Password must be at least 6 characters');
        setLoading(false);
        return;
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500));

      // Save to localStorage (stub - replace with real auth)
      const user = {
        id: 'user_' + Date.now(),
        name: formData.name,
        email: formData.email,
        business: formData.business,
        phone: formData.phone,
        joinDate: new Date().toISOString().split('T')[0],
      };

      localStorage.setItem('token', 'dev-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify(user));
      localStorage.setItem('subscription', JSON.stringify({
        plan: 'Starter',
        validTill: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
      }));

      router.push('/profile/user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-bni-grey-light flex items-center justify-center px-4 py-12">
      <div className="bg-bni-white rounded-lg shadow-bni-hover p-8 md:p-12 w-full max-w-md">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-bni-grey-granite mb-2">Join BNI</h1>
          <p className="text-bni-grey-granite">Create your account to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-bni-grey-granite mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni focus:outline-none focus:ring-2 focus:ring-bni-red"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-bni-grey-granite mb-2">
              Email Address *
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni focus:outline-none focus:ring-2 focus:ring-bni-red"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-bni-grey-granite mb-2">
              Business/Company *
            </label>
            <input
              type="text"
              name="business"
              required
              placeholder="Your Business Name"
              value={formData.business}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni focus:outline-none focus:ring-2 focus:ring-bni-red"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-bni-grey-granite mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni focus:outline-none focus:ring-2 focus:ring-bni-red"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-bni-grey-granite mb-2">
              Password *
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-bni-grey-sterling rounded-bni focus:outline-none focus:ring-2 focus:ring-bni-red"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-bni-grey-granite mb-2">
              Confirm Password *
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
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
            {loading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-bni-grey-granite">
            Already have an account?{' '}
            <Link href="/auth/signin" className="text-bni-red font-bold hover:text-bni-red-hover">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
