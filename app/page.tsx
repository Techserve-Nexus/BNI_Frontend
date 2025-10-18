"use client"

import Link from "next/link"
import { useState } from "react"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-bni-white text-bni-grey-granite w-full">
      <nav className="bg-bni-white shadow-bni border-bni-grey-sterling/30 sticky top-0 z-50 border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            <span className="text-bni-red text-2xl font-bold">BNI Event Hub</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#vision" className="text-bni-grey-granite hover:text-bni-red font-medium transition">
              Our Vision
            </a>
            <a href="#events" className="text-bni-grey-granite hover:text-bni-red font-medium transition">
              Events
            </a>
            <a href="#pricing" className="text-bni-grey-granite hover:text-bni-red font-medium transition">
              Pricing
            </a>
            <Link
              href="/auth/signin"
              className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover shadow-bni px-6 py-3 font-bold transition"
            >
              Sign In
            </Link>
          </div>
          <button
            className="text-bni-red text-2xl md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="bg-bni-grey-light border-bni-grey-sterling/30 space-y-4 border-t p-4 md:hidden">
            <a href="#vision" className="text-bni-grey-granite hover:text-bni-red block font-medium">
              Our Vision
            </a>
            <a href="#events" className="text-bni-grey-granite hover:text-bni-red block font-medium">
              Events
            </a>
            <Link
              href="/auth/signin"
              className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover block px-6 py-3 text-center font-bold transition"
            >
              Sign In
            </Link>
          </div>
        )}
      </nav>

      <section className="from-bni-grey-light to-bni-white bg-gradient-to-br py-20 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <div className="rounded-bni bg-bni-red/10 border-bni-red/30 mb-6 inline-block border px-4 py-2">
                <span className="text-bni-red text-sm font-bold">🌟 CHANGING THE WAY THE WORLD DOES BUSINESS</span>
              </div>
              <h1 className="text-bni-grey-granite mb-6 text-5xl leading-tight font-bold md:text-6xl">
                Givers Gain®
                <span className="text-bni-red mt-2 block">Building Relationships</span>
                <span className="text-bni-grey-granite mt-2 block">For Life</span>
              </h1>
              <p className="text-bni-grey-granite mb-8 max-w-lg text-xl leading-relaxed">
                BNI provides Member-businesses with new client opportunities through a structured, positive, and
                professional referral program.
              </p>
              <div className="mb-12 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/auth/signup"
                  className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover shadow-bni-hover transform px-8 py-4 text-lg font-bold transition hover:-translate-y-0.5"
                >
                  Join BNI Today
                </Link>
                <Link
                  href="#events"
                  className="rounded-bni border-bni-red text-bni-red hover:bg-bni-red/5 border-2 px-8 py-4 text-lg font-bold transition"
                >
                  View Events →
                </Link>
              </div>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center md:text-left">
                  <div className="text-bni-red text-4xl font-bold">10,700+</div>
                  <div className="text-bni-grey-granite text-sm">Global Chapters</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-bni-red text-4xl font-bold">305K+</div>
                  <div className="text-bni-grey-granite text-sm">Members Worldwide</div>
                </div>
                <div className="text-center md:text-left">
                  <div className="text-bni-red text-4xl font-bold">$19.4B</div>
                  <div className="text-bni-grey-granite text-sm">Annual Referrals</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-bni-white shadow-bni-hover border-bni-red/10 rounded-lg border-4 p-8">
                <div className="bg-bni-grey-light rounded-lg p-8 text-center">
                  <div className="mb-4 text-6xl">🤝</div>
                  <h3 className="text-bni-grey-granite mb-3 text-2xl font-bold">BNI ANNUAL CONFERENCE</h3>
                  <p className="text-bni-grey-granite mb-4 font-medium">Building Relationships • Growing Business</p>
                  <p className="text-bni-grey-granite text-sm leading-relaxed">
                    Join hundreds of business professionals dedicated to networking excellence and lifelong learning.
                  </p>
                  <div className="bg-bni-red text-bni-white rounded-bni mt-6 inline-block px-6 py-2 font-bold">
                    Register Now
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="vision" className="bg-bni-white border-bni-grey-sterling/30 border-y py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-bni-grey-granite mb-4 text-4xl font-bold">Our Core Values</h2>
            <p className="text-bni-grey-granite mx-auto max-w-3xl text-xl">
              The principles that guide everything we do at BNI
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            <div className="card-bni hover:shadow-bni-hover group transition">
              <div className="mb-4 transform text-5xl transition group-hover:scale-110">🤝</div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Givers Gain®</h3>
              <p className="text-bni-grey-granite leading-relaxed">
                By giving business to others, you will get business in return
              </p>
            </div>
            <div className="card-bni hover:shadow-bni-hover group transition">
              <div className="mb-4 transform text-5xl transition group-hover:scale-110">💼</div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Building Relationships</h3>
              <p className="text-bni-grey-granite leading-relaxed">
                Strong relationships are the foundation of successful networking
              </p>
            </div>
            <div className="card-bni hover:shadow-bni-hover group transition">
              <div className="mb-4 transform text-5xl transition group-hover:scale-110">📚</div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Lifelong Learning</h3>
              <p className="text-bni-grey-granite leading-relaxed">
                Continuous growth and education for personal and professional development
              </p>
            </div>
            <div className="card-bni hover:shadow-bni-hover group transition">
              <div className="mb-4 transform text-5xl transition group-hover:scale-110">✨</div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Innovation</h3>
              <p className="text-bni-grey-granite leading-relaxed">
                Embracing change and finding new ways to create value
              </p>
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-4">
            <div className="card-bni hover:shadow-bni-hover group transition">
              <div className="mb-4 transform text-5xl transition group-hover:scale-110">⚡</div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Positive Attitude</h3>
              <p className="text-bni-grey-granite leading-relaxed">
                Maintaining optimism and enthusiasm in all interactions
              </p>
            </div>
            <div className="card-bni hover:shadow-bni-hover group transition">
              <div className="mb-4 transform text-5xl transition group-hover:scale-110">🎯</div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Accountability</h3>
              <p className="text-bni-grey-granite leading-relaxed">
                Taking responsibility for our commitments and actions
              </p>
            </div>
            <div className="card-bni hover:shadow-bni-hover group transition">
              <div className="mb-4 transform text-5xl transition group-hover:scale-110">🏆</div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Recognition</h3>
              <p className="text-bni-grey-granite leading-relaxed">
                Celebrating achievements and acknowledging contributions
              </p>
            </div>
            <div className="card-bni hover:shadow-bni-hover group transition">
              <div className="mb-4 transform text-5xl transition group-hover:scale-110">🎪</div>
              <h3 className="text-bni-grey-granite mb-3 text-xl font-bold">Traditions</h3>
              <p className="text-bni-grey-granite leading-relaxed">
                Honoring proven processes while embracing innovation
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="events" className="bg-bni-grey-light py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-bni-grey-granite mb-4 text-4xl font-bold">Upcoming BNI Events</h2>
            <p className="text-bni-grey-granite text-xl">Join us for networking, education, and growth opportunities</p>
          </div>
          <div className="mb-12 grid gap-8 md:grid-cols-3">
            <div className="card-bni group hover:shadow-bni-hover cursor-pointer transition-all">
              <div className="text-bni-red mb-2 text-sm font-bold">November 2025</div>
              <h3 className="text-bni-grey-granite group-hover:text-bni-red mb-3 text-2xl font-bold transition">
                Regional Leadership Training
              </h3>
              <p className="text-bni-grey-granite mb-4 leading-relaxed">
                Enhance your leadership skills and network with regional directors
              </p>
              <div className="border-bni-grey-sterling/30 flex items-center justify-between border-t pt-4">
                <span className="text-bni-grey-granite text-sm">👥 150+ Expected</span>
                <span className="text-bni-red font-bold transition group-hover:translate-x-1">View Details →</span>
              </div>
            </div>
            <div className="card-bni group hover:shadow-bni-hover cursor-pointer transition-all">
              <div className="text-bni-red mb-2 text-sm font-bold">December 2025</div>
              <h3 className="text-bni-grey-granite group-hover:text-bni-red mb-3 text-2xl font-bold transition">
                Annual Chapter Meeting
              </h3>
              <p className="text-bni-grey-granite mb-4 leading-relaxed">
                Celebrate success and plan for the upcoming year
              </p>
              <div className="border-bni-grey-sterling/30 flex items-center justify-between border-t pt-4">
                <span className="text-bni-grey-granite text-sm">👥 300+ Expected</span>
                <span className="text-bni-red font-bold transition group-hover:translate-x-1">View Details →</span>
              </div>
            </div>
            <div className="card-bni group hover:shadow-bni-hover cursor-pointer transition-all">
              <div className="text-bni-red mb-2 text-sm font-bold">January 2026</div>
              <h3 className="text-bni-grey-granite group-hover:text-bni-red mb-3 text-2xl font-bold transition">
                Business Growth Summit
              </h3>
              <p className="text-bni-grey-granite mb-4 leading-relaxed">
                Learn strategies to scale your business through referrals
              </p>
              <div className="border-bni-grey-sterling/30 flex items-center justify-between border-t pt-4">
                <span className="text-bni-grey-granite text-sm">👥 500+ Expected</span>
                <span className="text-bni-red font-bold transition group-hover:translate-x-1">View Details →</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link
              href="/events"
              className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover shadow-bni inline-block px-8 py-4 font-bold transition"
            >
              Browse All Events
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-bni-white border-bni-grey-sterling/30 border-y py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-bni-grey-granite mb-4 text-4xl font-bold">Member Success Stories</h2>
            <p className="text-bni-grey-granite text-xl">Real results from real BNI members</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-bni">
              <div className="mb-6 flex gap-4">
                <div className="bg-bni-red/10 flex h-16 w-16 items-center justify-center rounded-full text-3xl">👤</div>
                <div>
                  <p className="text-bni-grey-granite text-lg font-bold">Sarah Mitchell</p>
                  <p className="text-bni-grey-granite text-sm">Marketing Consultant • BNI Phoenix Chapter</p>
                </div>
              </div>
              <p className="text-bni-grey-granite leading-relaxed italic">
                &quot;BNI has transformed my business. In just one year, I&apos;ve received over $250K in qualified
                referrals. The structured approach to networking really works!&quot;
              </p>
              <div className="text-bni-red mt-4 flex gap-1">⭐⭐⭐⭐⭐</div>
            </div>
            <div className="card-bni">
              <div className="mb-6 flex gap-4">
                <div className="bg-bni-red/10 flex h-16 w-16 items-center justify-center rounded-full text-3xl">👤</div>
                <div>
                  <p className="text-bni-grey-granite text-lg font-bold">James Rodriguez</p>
                  <p className="text-bni-grey-granite text-sm">Financial Advisor • BNI Denver Chapter</p>
                </div>
              </div>
              <p className="text-bni-grey-granite leading-relaxed italic">
                &quot;The relationships I&apos;ve built through BNI are invaluable. It&apos;s not just about
                business—it&apos;s about building a community of trusted professionals.&quot;
              </p>
              <div className="text-bni-red mt-4 flex gap-1">⭐⭐⭐⭐⭐</div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="bg-bni-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-bni-grey-granite mb-4 text-4xl font-bold">Flexible Membership Plans</h2>
            <p className="text-bni-grey-granite mx-auto max-w-3xl text-xl">
              Choose the membership level that works best for your business needs
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {/* Starter Plan */}
            <div className="card-bni hover:shadow-bni-hover flex flex-col transition">
              <div className="mb-6">
                <h3 className="text-bni-grey-granite mb-2 text-2xl font-bold">Starter</h3>
                <p className="text-bni-grey-sterling mb-4">Perfect for solo entrepreneurs</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-bni-red text-4xl font-bold">$99</span>
                  <span className="text-bni-grey-granite">/month</span>
                </div>
              </div>
              <ul className="mb-8 flex-grow space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Weekly networking meetings</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Access to member directory</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Referral tracking system</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Basic training materials</span>
                </li>
              </ul>
              <Link
                href="/auth/signup"
                className="rounded-bni border-bni-red text-bni-red hover:bg-bni-red/5 w-full border-2 px-6 py-3 text-center font-bold transition"
              >
                Get Started
              </Link>
            </div>

            {/* Professional Plan */}
            <div className="card-bni hover:shadow-bni-hover ring-bni-red relative flex flex-col ring-2 transition">
              <div className="bg-bni-red text-bni-white absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full px-4 py-1 text-sm font-bold">
                MOST POPULAR
              </div>
              <div className="mt-4 mb-6">
                <h3 className="text-bni-grey-granite mb-2 text-2xl font-bold">Professional</h3>
                <p className="text-bni-grey-sterling mb-4">For growing businesses</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-bni-red text-4xl font-bold">$199</span>
                  <span className="text-bni-grey-granite">/month</span>
                </div>
              </div>
              <ul className="mb-8 flex-grow space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Everything in Starter</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Advanced analytics dashboard</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Priority support</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">1-on-1 networking coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Exclusive webinars</span>
                </li>
              </ul>
              <Link
                href="/auth/signup"
                className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover w-full px-6 py-3 text-center font-bold transition"
              >
                Start Free Trial
              </Link>
            </div>

            {/* Enterprise Plan */}
            <div className="card-bni hover:shadow-bni-hover flex flex-col transition">
              <div className="mb-6">
                <h3 className="text-bni-grey-granite mb-2 text-2xl font-bold">Enterprise</h3>
                <p className="text-bni-grey-sterling mb-4">For established organizations</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-bni-red text-4xl font-bold">$499</span>
                  <span className="text-bni-grey-granite">/month</span>
                </div>
              </div>
              <ul className="mb-8 flex-grow space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Everything in Professional</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Multi-user access</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Custom reporting</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">Dedicated account manager</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-bni-red font-bold">✓</span>
                  <span className="text-bni-grey-granite">API access</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="rounded-bni border-bni-red text-bni-red hover:bg-bni-red/5 w-full border-2 px-6 py-3 text-center font-bold transition"
              >
                Contact Sales
              </Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mx-auto mt-20 max-w-3xl">
            <h3 className="text-bni-grey-granite mb-8 text-center text-2xl font-bold">Frequently Asked Questions</h3>
            <div className="space-y-6">
              <div className="card-bni">
                <h4 className="text-bni-grey-granite mb-2 text-lg font-bold">Can I change my plan anytime?</h4>
                <p className="text-bni-grey-granite">
                  Yes! You can upgrade or downgrade your plan at any time. Changes take effect at the start of your next
                  billing cycle.
                </p>
              </div>
              <div className="card-bni">
                <h4 className="text-bni-grey-granite mb-2 text-lg font-bold">Is there a setup fee?</h4>
                <p className="text-bni-grey-granite">
                  No setup fees. You only pay your monthly membership fee. Some chapters may have additional local
                  chapter fees.
                </p>
              </div>
              <div className="card-bni">
                <h4 className="text-bni-grey-granite mb-2 text-lg font-bold">What payment methods do you accept?</h4>
                <p className="text-bni-grey-granite">
                  We accept all major credit cards, bank transfers, and ACH payments. Contact our support team for
                  custom payment arrangements.
                </p>
              </div>
              <div className="card-bni">
                <h4 className="text-bni-grey-granite mb-2 text-lg font-bold">Do you offer refunds?</h4>
                <p className="text-bni-grey-granite">
                  We offer a 30-day money-back guarantee if you&apos;re not satisfied with your membership.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="from-bni-red to-bni-red-hover bg-gradient-to-br py-20">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-bni-white mb-6 text-4xl font-bold md:text-5xl">Ready to Change Your Business?</h2>
          <p className="text-bni-white/90 mx-auto mb-12 max-w-3xl text-xl leading-relaxed">
            Join thousands of successful business professionals who are growing their business through BNI&apos;s proven
            referral marketing system.
          </p>
          <div className="mb-12 flex flex-col justify-center gap-6 sm:flex-row">
            <Link
              href="/auth/signup"
              className="rounded-bni bg-bni-white text-bni-red hover:bg-bni-grey-light shadow-bni-hover transform px-10 py-5 text-lg font-bold transition hover:-translate-y-0.5"
            >
              Join BNI Today
            </Link>
            <Link
              href="/events"
              className="rounded-bni border-bni-white text-bni-white hover:bg-bni-white/10 border-2 px-10 py-5 text-lg font-bold transition"
            >
              Find a Chapter
            </Link>
          </div>
          <p className="text-bni-white/80 text-sm">🌍 Over 305,000 members in 10,700+ chapters worldwide</p>
        </div>
      </section>

      <footer className="bg-bni-grey-granite text-bni-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="text-2xl">🤝</span>
                <span className="text-bni-red text-xl font-bold">BNI Event Hub</span>
              </div>
              <p className="text-bni-grey-sterling text-sm leading-relaxed">
                Changing the way the world does business through a structured, positive, and professional referral
                program.
              </p>
            </div>
            <div>
              <h4 className="text-bni-white mb-4 font-bold">Quick Links</h4>
              <ul className="text-bni-grey-sterling space-y-2 text-sm">
                <li>
                  <Link href="#vision" className="hover:text-bni-red transition">
                    Our Vision
                  </Link>
                </li>
                <li>
                  <Link href="#events" className="hover:text-bni-red transition">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/membership" className="hover:text-bni-red transition">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link href="/calendar" className="hover:text-bni-red transition">
                    Calendar
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-bni-white mb-4 font-bold">Resources</h4>
              <ul className="text-bni-grey-sterling space-y-2 text-sm">
                <li>
                  <a href="#" className="hover:text-bni-red transition">
                    About BNI
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bni-red transition">
                    Core Values
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bni-red transition">
                    Success Stories
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-bni-red transition">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-bni-white mb-4 font-bold">Connect With Us</h4>
              <p className="text-bni-grey-sterling mb-4 text-sm">
                Join our community and start building meaningful business relationships today.
              </p>
              <Link
                href="/auth/signup"
                className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover inline-block px-6 py-3 text-sm font-bold transition"
              >
                Get Started
              </Link>
            </div>
          </div>
          <div className="border-bni-grey-sterling/30 text-bni-grey-sterling border-t pt-8 text-center text-sm">
            <p>© 2025 BNI Event Hub. All Rights Reserved. | Givers Gain® is a registered trademark of BNI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
