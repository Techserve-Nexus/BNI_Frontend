import Link from 'next/link';
import { eventsData } from '../data/events';

/**
 * EventsList Component
 * Displays a grid of upcoming and recent events
 */
interface EventsListProps {
  limit?: number;
}

interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  expectedAttendees: number;
}

export default function EventsList({ limit = 6 }: EventsListProps) {
  const items = eventsData.slice(0, limit);

  return (
    <section id="events" className="bg-bni-grey-light py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-bni-grey-granite">Upcoming BNI Events</h2>
          <p className="text-xl text-bni-grey-granite">Join us for networking, education, and growth opportunities</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {items.map((e: Event) => (
            <div key={e.id} className="card-bni group cursor-pointer hover:shadow-bni-hover transition-all">
              <div className="text-sm text-bni-red font-bold mb-2">{new Date(e.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}</div>
              <h3 className="text-2xl font-bold mb-3 text-bni-grey-granite group-hover:text-bni-red transition">{e.title}</h3>
              <p className="text-bni-grey-granite mb-4 leading-relaxed">{e.description}</p>
              <div className="flex items-center justify-between pt-4 border-t border-bni-grey-sterling/30">
                <span className="text-sm text-bni-grey-granite">👥 {e.expectedAttendees}+ Expected</span>
                <Link href={`/events/${e.id}`} className="text-bni-red font-bold group-hover:translate-x-1 transition">
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <Link 
            href="/events" 
            className="inline-block px-8 py-4 rounded-bni bg-bni-red text-bni-white font-bold hover:bg-bni-red-hover transition shadow-bni"
          >
            Browse All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
