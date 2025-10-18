"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"

/**
 * Sign Up Page
 * Member registration with localStorage stub
 */
export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    business: "",
    phone: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Validation
      if (!formData.name || !formData.email || !formData.password || !formData.business) {
        setError("Please fill in all required fields")
        setLoading(false)
        return
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match")
        setLoading(false)
        return
      }

      if (formData.password.length < 6) {
        setError("Password must be at least 6 characters")
        setLoading(false)
        return
      }

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 500))

      // Save to localStorage (stub - replace with real auth)
      const user = {
        id: "user_" + Date.now(),
        name: formData.name,
        email: formData.email,
        business: formData.business,
        phone: formData.phone,
        joinDate: new Date().toISOString().split("T")[0],
      }

      localStorage.setItem("token", "dev-token-" + Date.now())
      localStorage.setItem("user", JSON.stringify(user))
      localStorage.setItem(
        "subscription",
        JSON.stringify({
          plan: "Starter",
          validTill: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split("T")[0],
        })
      )

      router.push("/profile/user")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-bni-grey-light flex min-h-screen items-center justify-center px-4 py-12">
      <div className="bg-bni-white shadow-bni-hover w-full max-w-md rounded-lg p-8 md:p-12">
        <div className="mb-8">
          <h1 className="text-bni-grey-granite mb-2 text-3xl font-bold">Join BNI</h1>
          <p className="text-bni-grey-granite">Create your account to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-bni-grey-granite mb-2 block text-sm font-medium">Full Name *</label>
            <input
              type="text"
              name="name"
              required
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="border-bni-grey-sterling rounded-bni focus:ring-bni-red w-full border px-4 py-2 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-bni-grey-granite mb-2 block text-sm font-medium">Email Address *</label>
            <input
              type="email"
              name="email"
              required
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              className="border-bni-grey-sterling rounded-bni focus:ring-bni-red w-full border px-4 py-2 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-bni-grey-granite mb-2 block text-sm font-medium">Business/Company *</label>
            <input
              type="text"
              name="business"
              required
              placeholder="Your Business Name"
              value={formData.business}
              onChange={handleChange}
              className="border-bni-grey-sterling rounded-bni focus:ring-bni-red w-full border px-4 py-2 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-bni-grey-granite mb-2 block text-sm font-medium">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="(123) 456-7890"
              value={formData.phone}
              onChange={handleChange}
              className="border-bni-grey-sterling rounded-bni focus:ring-bni-red w-full border px-4 py-2 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-bni-grey-granite mb-2 block text-sm font-medium">Password *</label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="border-bni-grey-sterling rounded-bni focus:ring-bni-red w-full border px-4 py-2 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label className="text-bni-grey-granite mb-2 block text-sm font-medium">Confirm Password *</label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="••••••••"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="border-bni-grey-sterling rounded-bni focus:ring-bni-red w-full border px-4 py-2 focus:ring-2 focus:outline-none"
            />
          </div>

          {error && <div className="rounded-bni border border-red-200 bg-red-50 p-3 text-sm text-red-600">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="bg-bni-red text-bni-white rounded-bni hover:bg-bni-red-hover w-full px-4 py-3 font-bold transition disabled:opacity-50"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-bni-grey-granite">
            Already have an account?{" "}
            <Link href="/auth/signin" className="text-bni-red hover:text-bni-red-hover font-bold">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
