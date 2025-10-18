import Link from "next/link"
import { eventsData } from "../data/events"

/**
 * EventsList Component
 * Displays a grid of upcoming and recent events
 */
interface EventsListProps {
  limit?: number
}

interface Event {
  id: string
  title: string
  description: string
  date: string
  expectedAttendees: number
}

export default function EventsList({ limit = 6 }: EventsListProps) {
  const items = eventsData.slice(0, limit)

  return (
    <section id="events" className="bg-bni-grey-light py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-bni-grey-granite mb-4 text-4xl font-bold">Upcoming BNI Events</h2>
          <p className="text-bni-grey-granite text-xl">Join us for networking, education, and growth opportunities</p>
        </div>
        <div className="mb-12 grid gap-8 md:grid-cols-3">
          {items.map((e: Event) => (
            <div key={e.id} className="card-bni group hover:shadow-bni-hover cursor-pointer transition-all">
              <div className="text-bni-red mb-2 text-sm font-bold">
                {new Date(e.date).toLocaleDateString("en-US", { year: "numeric", month: "long" })}
              </div>
              <h3 className="text-bni-grey-granite group-hover:text-bni-red mb-3 text-2xl font-bold transition">
                {e.title}
              </h3>
              <p className="text-bni-grey-granite mb-4 leading-relaxed">{e.description}</p>
              <div className="border-bni-grey-sterling/30 flex items-center justify-between border-t pt-4">
                <span className="text-bni-grey-granite text-sm">👥 {e.expectedAttendees}+ Expected</span>
                <Link href={`/events/${e.id}`} className="text-bni-red font-bold transition group-hover:translate-x-1">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
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
  )
}
