"use client"

import Link from "next/link"
import { useParams } from "next/navigation"
import { eventsData } from "../../../data/events"

/**
 * Event Details Page
 * Dynamic route for individual event information
 */
interface Event {
  id: string
  title: string
  description: string
  date: string
  time: string
  venue: string
  location: string
  image: string
  expectedAttendees: number
  status: string
  memories: string[]
}

export default function EventPage() {
  const params = useParams()
  const id = params?.id as string

  const event = eventsData.find((e) => e.id === id) as Event | undefined

  if (!event) {
    return (
      <div className="bg-bni-grey-light flex min-h-screen flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-bni-grey-granite mb-4 text-4xl font-bold">Event Not Found</h1>
          <p className="text-bni-grey-granite mb-6">The event you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/events"
            className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover inline-block px-8 py-4 font-bold transition"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    )
  }

  const isPast = new Date(event.date) < new Date()
  const eventDate = new Date(event.date)
  const formattedDate = eventDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="bg-bni-grey-light min-h-screen">
      {/* Header */}
      <nav className="bg-bni-white shadow-bni border-bni-grey-sterling/30 sticky top-0 z-40 border-b">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/events" className="text-bni-red hover:text-bni-red-hover font-bold">
            ← Back to Events
          </Link>
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Content */}
        <article className="bg-bni-white shadow-bni-hover overflow-hidden rounded-lg">
          {/* Event Image */}
          <div className="bg-bni-grey-light border-bni-grey-sterling/30 flex h-96 w-full items-center justify-center border-b">
            <div className="text-center">
              <p className="mb-4 text-6xl">🎪</p>
              <p className="text-bni-grey-granite">Event image would appear here</p>
            </div>
          </div>

          {/* Event Details */}
          <div className="p-8 md:p-12">
            <div className="mb-4 flex items-center gap-4">
              <span
                className={`rounded-full px-4 py-2 text-sm font-bold ${
                  isPast ? "bg-gray-100 text-gray-700" : "bg-green-100 text-green-700"
                }`}
              >
                {isPast ? "📅 Past Event" : "🎯 Upcoming"}
              </span>
            </div>

            <h1 className="text-bni-grey-granite mb-4 text-4xl font-bold md:text-5xl">{event.title}</h1>

            {/* Quick Info */}
            <div className="bg-bni-grey-light mb-8 grid gap-6 rounded-lg p-6 md:grid-cols-3">
              <div>
                <p className="text-bni-grey-granite mb-1 text-sm">📅 Date & Time</p>
                <p className="text-bni-red font-bold">{formattedDate}</p>
                <p className="text-bni-grey-granite text-sm">{event.time}</p>
              </div>
              <div>
                <p className="text-bni-grey-granite mb-1 text-sm">📍 Location</p>
                <p className="text-bni-red font-bold">{event.venue}</p>
                <p className="text-bni-grey-granite text-sm">{event.location}</p>
              </div>
              <div>
                <p className="text-bni-grey-granite mb-1 text-sm">👥 Expected Attendees</p>
                <p className="text-bni-red font-bold">{event.expectedAttendees}+</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-bni-grey-granite mb-4 text-2xl font-bold">About This Event</h2>
              <p className="text-bni-grey-granite text-lg leading-relaxed">{event.description}</p>
            </div>

            {/* Event Details */}
            <div className="bg-bni-red/5 border-bni-red/20 mb-8 rounded-lg border p-6">
              <h2 className="text-bni-grey-granite mb-4 text-2xl font-bold">Event Details</h2>
              <div className="text-bni-grey-granite space-y-3">
                <p>
                  <strong>Format:</strong> In-person networking and professional development event
                </p>
                <p>
                  <strong>Who Should Attend:</strong> Business professionals, entrepreneurs, and BNI members
                </p>
                <p>
                  <strong>What to Expect:</strong> Networking opportunities, business referrals, educational sessions,
                  and professional connections
                </p>
              </div>
            </div>

            {/* Call to Action */}
            {!isPast && (
              <div className="mb-8">
                <button className="rounded-bni bg-bni-red text-bni-white hover:bg-bni-red-hover shadow-bni-hover px-8 py-4 text-lg font-bold transition">
                  Register Now
                </button>
              </div>
            )}

            {/* Memories Section */}
            {isPast && event.memories && event.memories.length > 0 && (
              <div className="mb-8">
                <h2 className="text-bni-grey-granite mb-6 text-2xl font-bold">Event Memories</h2>
                <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                  {event.memories.map((memory, idx) => (
                    <div
                      key={idx}
                      className="bg-bni-grey-light border-bni-grey-sterling flex aspect-square items-center justify-center rounded-lg border-2"
                    >
                      <p className="text-bni-grey-granite text-sm">Photo {idx + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Events */}
            <div className="border-bni-grey-sterling border-t pt-8">
              <h2 className="text-bni-grey-granite mb-6 text-2xl font-bold">More Events</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {eventsData
                  .filter((e) => e.id !== id)
                  .slice(0, 2)
                  .map((relatedEvent: Event) => (
                    <Link
                      key={relatedEvent.id}
                      href={`/events/${relatedEvent.id}`}
                      className="bg-bni-grey-light hover:shadow-bni-hover group rounded-lg p-6 transition"
                    >
                      <p className="text-bni-red mb-2 text-sm font-bold">
                        {new Date(relatedEvent.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                      </p>
                      <h3 className="text-bni-grey-granite group-hover:text-bni-red font-bold transition">
                        {relatedEvent.title}
                      </h3>
                      <p className="text-bni-grey-granite mt-2 text-sm">{relatedEvent.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  )
}
