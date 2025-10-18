'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { eventsData } from '../../../data/events';

/**
 * Event Details Page
 * Dynamic route for individual event information
 */
interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  image: string;
  expectedAttendees: number;
  status: string;
  memories: string[];
}

export default function EventPage() {
  const params = useParams();
  const id = params?.id as string;

  const event = eventsData.find((e) => e.id === id) as Event | undefined;

  if (!event) {
    return (
      <div className="min-h-screen bg-bni-grey-light flex flex-col items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-bni-grey-granite mb-4">Event Not Found</h1>
          <p className="text-bni-grey-granite mb-6">The event you&apos;re looking for doesn&apos;t exist.</p>
          <Link
            href="/events"
            className="inline-block px-8 py-4 rounded-bni bg-bni-red text-bni-white font-bold hover:bg-bni-red-hover transition"
          >
            ← Back to Events
          </Link>
        </div>
      </div>
    );
  }

  const isPast = new Date(event.date) < new Date();
  const eventDate = new Date(event.date);
  const formattedDate = eventDate.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen bg-bni-grey-light">
      {/* Header */}
      <nav className="sticky top-0 z-40 bg-bni-white shadow-bni border-b border-bni-grey-sterling/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/events" className="text-bni-red font-bold hover:text-bni-red-hover">
            ← Back to Events
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Content */}
        <article className="bg-bni-white rounded-lg shadow-bni-hover overflow-hidden">
          {/* Event Image */}
          <div className="w-full h-96 bg-bni-grey-light flex items-center justify-center border-b border-bni-grey-sterling/30">
            <div className="text-center">
              <p className="text-6xl mb-4">🎪</p>
              <p className="text-bni-grey-granite">Event image would appear here</p>
            </div>
          </div>

          {/* Event Details */}
          <div className="p-8 md:p-12">
            <div className="flex items-center gap-4 mb-4">
              <span className={`px-4 py-2 rounded-full text-sm font-bold ${
                isPast
                  ? 'bg-gray-100 text-gray-700'
                  : 'bg-green-100 text-green-700'
              }`}>
                {isPast ? '📅 Past Event' : '🎯 Upcoming'}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-bni-grey-granite mb-4">
              {event.title}
            </h1>

            {/* Quick Info */}
            <div className="grid md:grid-cols-3 gap-6 mb-8 p-6 bg-bni-grey-light rounded-lg">
              <div>
                <p className="text-sm text-bni-grey-granite mb-1">📅 Date & Time</p>
                <p className="font-bold text-bni-red">{formattedDate}</p>
                <p className="text-sm text-bni-grey-granite">{event.time}</p>
              </div>
              <div>
                <p className="text-sm text-bni-grey-granite mb-1">📍 Location</p>
                <p className="font-bold text-bni-red">{event.venue}</p>
                <p className="text-sm text-bni-grey-granite">{event.location}</p>
              </div>
              <div>
                <p className="text-sm text-bni-grey-granite mb-1">👥 Expected Attendees</p>
                <p className="font-bold text-bni-red">{event.expectedAttendees}+</p>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-bni-grey-granite mb-4">About This Event</h2>
              <p className="text-lg text-bni-grey-granite leading-relaxed">
                {event.description}
              </p>
            </div>

            {/* Event Details */}
            <div className="mb-8 p-6 bg-bni-red/5 border border-bni-red/20 rounded-lg">
              <h2 className="text-2xl font-bold text-bni-grey-granite mb-4">Event Details</h2>
              <div className="space-y-3 text-bni-grey-granite">
                <p>
                  <strong>Format:</strong> In-person networking and professional development event
                </p>
                <p>
                  <strong>Who Should Attend:</strong> Business professionals, entrepreneurs, and BNI members
                </p>
                <p>
                  <strong>What to Expect:</strong> Networking opportunities, business referrals, educational sessions, and professional connections
                </p>
              </div>
            </div>

            {/* Call to Action */}
            {!isPast && (
              <div className="mb-8">
                <button className="px-8 py-4 rounded-bni bg-bni-red text-bni-white font-bold text-lg hover:bg-bni-red-hover transition shadow-bni-hover">
                  Register Now
                </button>
              </div>
            )}

            {/* Memories Section */}
            {isPast && event.memories && event.memories.length > 0 && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-bni-grey-granite mb-6">Event Memories</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {event.memories.map((memory, idx) => (
                    <div
                      key={idx}
                      className="aspect-square bg-bni-grey-light rounded-lg flex items-center justify-center border-2 border-bni-grey-sterling"
                    >
                      <p className="text-bni-grey-granite text-sm">Photo {idx + 1}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Events */}
            <div className="border-t border-bni-grey-sterling pt-8">
              <h2 className="text-2xl font-bold text-bni-grey-granite mb-6">More Events</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {eventsData
                  .filter((e) => e.id !== id)
                  .slice(0, 2)
                  .map((relatedEvent: Event) => (
                    <Link
                      key={relatedEvent.id}
                      href={`/events/${relatedEvent.id}`}
                      className="p-6 bg-bni-grey-light rounded-lg hover:shadow-bni-hover transition group"
                    >
                      <p className="text-sm text-bni-red font-bold mb-2">
                        {new Date(relatedEvent.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </p>
                      <h3 className="font-bold text-bni-grey-granite group-hover:text-bni-red transition">
                        {relatedEvent.title}
                      </h3>
                      <p className="text-sm text-bni-grey-granite mt-2">{relatedEvent.description}</p>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
