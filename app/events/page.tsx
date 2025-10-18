'use client';

import Link from 'next/link';
import { eventsData } from '../../data/events';

/**
 * Events Listing Page
 * Display all upcoming and past events
 */
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  expectedAttendees: number;
  venue: string;
  location: string;
  status: string;
}

export default function EventsPage() {
  const upcomingEvents = eventsData.filter((e) => new Date(e.date) >= new Date());
  const pastEvents = eventsData.filter((e) => new Date(e.date) < new Date());

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
          <Link
            href="/"
            className="px-4 py-2 rounded-bni border border-bni-grey-sterling text-bni-grey-granite hover:bg-bni-grey-light transition"
          >
            ← Back Home
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-bni-grey-granite mb-4">
            BNI Events Calendar
          </h1>
          <p className="text-xl text-bni-grey-granite max-w-3xl mx-auto">
            Join us for networking, education, and growth opportunities throughout the year
          </p>
        </div>

        {/* Upcoming Events */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-bni-grey-granite mb-8">
            📅 Upcoming Events ({upcomingEvents.length})
          </h2>
          {upcomingEvents.length === 0 ? (
            <div className="bg-bni-white rounded-lg shadow-bni p-12 text-center">
              <p className="text-bni-grey-granite text-lg">No upcoming events scheduled</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 gap-8">
              {upcomingEvents.map((event: Event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="card-bni group hover:shadow-bni-hover transition"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-bni-red font-bold mb-2">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      <h3 className="text-2xl font-bold text-bni-grey-granite group-hover:text-bni-red transition">
                        {event.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">
                      UPCOMING
                    </span>
                  </div>
                  <p className="text-bni-grey-granite mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="space-y-2 text-sm text-bni-grey-granite mb-4">
                    <p>🕐 {event.time}</p>
                    <p>📍 {event.venue} • {event.location}</p>
                    <p>👥 {event.expectedAttendees}+ Expected Attendees</p>
                  </div>
                  <div className="text-bni-red font-bold group-hover:translate-x-1 transition">
                    View Details →
                  </div>
                </Link>
              ))}
            </div>
          )}
        </section>

        {/* Past Events */}
        {pastEvents.length > 0 && (
          <section>
            <h2 className="text-3xl font-bold text-bni-grey-granite mb-8">
              📸 Past Events ({pastEvents.length})
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {pastEvents.map((event: Event) => (
                <Link
                  key={event.id}
                  href={`/events/${event.id}`}
                  className="card-bni group hover:shadow-bni-hover transition opacity-75"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-sm text-bni-grey-granite font-bold mb-2">
                        {new Date(event.date).toLocaleDateString('en-US', {
                          month: 'long',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </p>
                      <h3 className="text-2xl font-bold text-bni-grey-granite group-hover:text-bni-red transition">
                        {event.title}
                      </h3>
                    </div>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-bold rounded-full">
                      PAST
                    </span>
                  </div>
                  <p className="text-bni-grey-granite mb-4 leading-relaxed">
                    {event.description}
                  </p>
                  <div className="text-bni-red font-bold group-hover:translate-x-1 transition">
                    View Memories →
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* CTA */}
        <div className="mt-16 p-8 md:p-12 bg-gradient-to-br from-bni-red to-bni-red-hover rounded-lg text-center text-bni-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Join BNI?</h3>
          <p className="mb-6 text-bni-white/90">
            Be part of our thriving community of business professionals
          </p>
          <Link
            href="/auth/signup"
            className="inline-block px-8 py-4 rounded-bni bg-bni-white text-bni-red font-bold hover:bg-bni-grey-light transition"
          >
            Join Today
          </Link>
        </div>
      </div>
    </div>
  );
}
