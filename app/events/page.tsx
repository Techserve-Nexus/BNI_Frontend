"use client"

import Link from "next/link"
import { eventsData } from "../../data/events"

/**
 * Events Listing Page
 * Display all upcoming and past events
 */
interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  expectedAttendees: number
  venue: string
  location: string
  status: string
}

export default function EventsPage() {
  const upcomingEvents = eventsData.filter((e) => new Date(e.date) >= new Date())
  const pastEvents = eventsData.filter((e) => new Date(e.date) < new Date())

  return (
    <div className="bg-bni-grey-light min-h-screen">
      {/* Header */}
      <nav className="bg-bni-white shadow-bni border-bni-grey-sterling/30 sticky top-0 z-40 border-b">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🤝</span>
            <Link href="/" className="text-bni-red text-2xl font-bold">
              BNI Event Hub
            </Link>
          </div>
          <Link
            href="/"
            className="rounded-bni border-bni-grey-sterling text-bni-grey-granite hover:bg-bni-grey-light border px-4 py-2 transition"
          >
            ← Back Home
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-bni-grey-granite mb-4 text-4xl font-bold md:text-5xl">BNI Events Calendar</h1>
          <p className="text-bni-grey-granite mx-auto max-w-3xl text-xl">
            Join us for networking, education, and growth opportunities throughout the year
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-bni-grey-granite mb-8 text-3xl font-bold">
            📅 Upcoming Events ({upcomingEvents.length})
          </h2>
          {upcomingEvents.length === 0 ? (
            <div className="bg-bni-white shadow-bni rounded-lg p-12 text-center">
              <p className="text-bni-grey-granite text-lg">No upcoming events scheduled</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {upcomingEvents.map((event: Event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="card-bni group hover:shadow-bni-hover transition"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="text-bni-red mb-2 text-sm font-bold">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <h3 className="text-bni-grey-granite group-hover:text-bni-red text-2xl font-bold transition">
                        {event.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold text-green-700">
                      UPCOMING
                    </span>
                  </div>
                  <p className="text-bni-grey-granite mb-4 leading-relaxed">{event.description}</p>
                  <div className="text-bni-grey-granite mb-4 space-y-2 text-sm">
                    <p>🕐 {event.time}</p>
                    <p>
                      📍 {event.venue} • {event.location}
                    </p>
                    <p>👥 {event.expectedAttendees}+ Expected Attendees</p>
                  </div>
                  <div className="text-bni-red font-bold transition group-hover:translate-x-1">View Details →</div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-bni-grey-granite mb-8 text-3xl font-bold">📸 Past Events ({pastEvents.length})</h2>
            <div className="grid gap-8 md:grid-cols-2">
              {pastEvents.map((event: Event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="card-bni group hover:shadow-bni-hover opacity-75 transition"
                >
                  <div className="mb-4 flex items-start justify-between">
                    <div>
                      <p className="text-bni-grey-granite mb-2 text-sm font-bold">
                        {new Date(event.date).toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </p>
                      <h3 className="text-bni-grey-granite group-hover:text-bni-red text-2xl font-bold transition">
                        {event.title}
                      </h3>
                    </div>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold text-gray-700">PAST</span>
                  </div>
                  <p className="text-bni-grey-granite mb-4 leading-relaxed">{event.description}</p>
                  <div className="text-bni-red font-bold transition group-hover:translate-x-1">View Memories →</div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="from-bni-red to-bni-red-hover text-bni-white mt-16 rounded-lg bg-gradient-to-br p-8 text-center md:p-12">
          <h3 className="text-bni-white mb-4 text-2xl font-bold md:text-3xl">Ready to Join BNI?</h3>
          <p className="text-bni-white/90 mb-6">Be part of our thriving community of business professionals</p>
          <Link
            href="/auth/signup"
            className="rounded-bni bg-bni-white text-bni-red hover:bg-bni-grey-light inline-block px-8 py-4 font-bold transition"
          >
            Join Today
          </Link>
        </div>
      </div>
    </div>
  )
}
