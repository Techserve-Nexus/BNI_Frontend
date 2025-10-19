"use client"

import { useEffect, useState } from "react"

/**
 * Upcoming Meetings & Reminders Page
 * Display upcoming events and task reminders for members
 */
interface UpcomingMeeting {
  id: string
  eventName: string
  date: string
  time: string
  location: string
  type: "meeting" | "training" | "social"
  daysUntil: number
}

interface Reminder {
  id: string
  title: string
  description: string
  dueDate: string
  priority: "high" | "medium" | "low"
  completed: boolean
}

export default function UpcomingPage() {
  const [upcomingMeetings, setUpcomingMeetings] = useState<UpcomingMeeting[]>([])
  const [reminders, setReminders] = useState<Reminder[]>([])

  useEffect(() => {
    // Mock upcoming meetings
    const mockMeetings: UpcomingMeeting[] = [
      {
        id: "1",
        eventName: "Weekly Chapter Meeting",
        date: "2025-10-22",
        time: "7:30 AM - 9:00 AM",
        location: "Downtown Conference Center",
        type: "meeting",
        daysUntil: 3,
      },
      {
        id: "2",
        eventName: "Leadership Excellence Workshop",
        date: "2025-10-25",
        time: "2:00 PM - 5:00 PM",
        location: "Virtual (Zoom)",
        type: "training",
        daysUntil: 6,
      },
      {
        id: "3",
        eventName: "Business Networking Social",
        date: "2025-10-28",
        time: "6:00 PM - 8:00 PM",
        location: "Riverside Restaurant",
        type: "social",
        daysUntil: 9,
      },
      {
        id: "4",
        eventName: "Regional Director Meeting",
        date: "2025-11-01",
        time: "10:00 AM - 12:00 PM",
        location: "Main Office Building",
        type: "meeting",
        daysUntil: 13,
      },
      {
        id: "5",
        eventName: "Referral Marketing Training",
        date: "2025-11-05",
        time: "1:00 PM - 4:00 PM",
        location: "Virtual (Zoom)",
        type: "training",
        daysUntil: 17,
      },
    ]

    setUpcomingMeetings(mockMeetings)

    // Mock reminders
    const mockReminders: Reminder[] = [
      {
        id: "1",
        title: "Submit Referrals",
        description: "Submit at least 2 quality referrals before next week's meeting",
        dueDate: "2025-10-21",
        priority: "high",
        completed: false,
      },
      {
        id: "2",
        title: "Prepare 60-Second Pitch",
        description: "Update your elevator pitch for the upcoming chapter meeting",
        dueDate: "2025-10-22",
        priority: "medium",
        completed: false,
      },
      {
        id: "3",
        title: "RSVP for Workshop",
        description: "Confirm attendance for the Leadership Excellence Workshop",
        dueDate: "2025-10-23",
        priority: "medium",
        completed: false,
      },
      {
        id: "4",
        title: "Update Business Cards",
        description: "Bring updated business cards to distribute at meetings",
        dueDate: "2025-10-24",
        priority: "low",
        completed: false,
      },
      {
        id: "5",
        title: "Review Chapter Goals",
        description: "Review and update your personal chapter goals for Q4",
        dueDate: "2025-10-26",
        priority: "medium",
        completed: false,
      },
      {
        id: "6",
        title: "Schedule One-to-Ones",
        description: "Schedule one-to-one meetings with 3 chapter members",
        dueDate: "2025-10-28",
        priority: "high",
        completed: false,
      },
    ]

    setReminders(mockReminders)
  }, [])

  const getMeetingTypeIcon = (type: string) => {
    switch (type) {
      case "meeting":
        return "📋"
      case "training":
        return "📚"
      case "social":
        return "🎉"
      default:
        return "📅"
    }
  }

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "high":
        return (
          <span className="inline-block rounded-full bg-red-100 px-2 py-1 text-xs font-semibold text-red-700">
            High
          </span>
        )
      case "medium":
        return (
          <span className="inline-block rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-700">
            Medium
          </span>
        )
      case "low":
        return (
          <span className="inline-block rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-700">
            Low
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <h2 className="text-bni-grey-granite mb-6 text-2xl font-bold">Upcoming Meetings & Reminders</h2>

      {/* Quick Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-bni-grey-granite mb-2 text-sm">Upcoming Events</p>
          <p className="text-bni-red text-3xl font-bold">{upcomingMeetings.length}</p>
        </div>
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-bni-grey-granite mb-2 text-sm">Active Reminders</p>
          <p className="text-bni-red text-3xl font-bold">{reminders.filter((r) => !r.completed).length}</p>
        </div>
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-bni-grey-granite mb-2 text-sm">High Priority Tasks</p>
          <p className="text-bni-red text-3xl font-bold">
            {reminders.filter((r) => r.priority === "high" && !r.completed).length}
          </p>
        </div>
      </div>

      {/* Upcoming Meetings & Reminders Section */}
      <div className="grid gap-6 md:grid-cols-2">
        {/* Upcoming Meetings Card */}
        <div className="border-bni-grey-sterling rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-bni-grey-granite flex items-center gap-2 text-xl font-bold">
              <span>📅</span>
              <span>Upcoming Meetings</span>
            </h3>
            <span className="text-bni-red rounded-full bg-red-50 px-3 py-1 text-xs font-semibold">
              {upcomingMeetings.length} Events
            </span>
          </div>

          <div className="space-y-4">
            {upcomingMeetings.length === 0 ? (
              <p className="text-bni-grey-granite text-center text-sm">No upcoming meetings scheduled</p>
            ) : (
              upcomingMeetings.map((meeting) => (
                <div
                  key={meeting.id}
                  className="border-bni-grey-sterling/50 hover:bg-bni-grey-light rounded-lg border p-4 transition"
                >
                  <div className="mb-2 flex items-start justify-between">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">{getMeetingTypeIcon(meeting.type)}</span>
                      <div>
                        <h4 className="text-bni-grey-granite mb-1 font-semibold">{meeting.eventName}</h4>
                        <div className="text-bni-grey-granite space-y-1 text-xs">
                          <p className="flex items-center gap-1">
                            <span>📆</span>
                            <span>
                              {new Date(meeting.date).toLocaleDateString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                          </p>
                          <p className="flex items-center gap-1">
                            <span>🕐</span>
                            <span>{meeting.time}</span>
                          </p>
                          <p className="flex items-center gap-1">
                            <span>📍</span>
                            <span>{meeting.location}</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <span
                      className={`rounded-full px-2 py-1 text-xs font-semibold ${
                        meeting.daysUntil <= 3
                          ? "bg-red-100 text-red-700"
                          : meeting.daysUntil <= 7
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-green-100 text-green-700"
                      }`}
                    >
                      {meeting.daysUntil}d
                    </span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="bg-bni-red hover:bg-bni-red/90 flex-1 rounded px-3 py-1.5 text-xs font-semibold text-white transition">
                      Add to Calendar
                    </button>
                    <button className="border-bni-grey-sterling text-bni-grey-granite hover:bg-bni-grey-light flex-1 rounded border px-3 py-1.5 text-xs font-semibold transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <button className="text-bni-red hover:text-bni-red/80 mt-4 w-full text-center text-sm font-semibold transition">
            View Calendar →
          </button>
        </div>

        {/* Reminders Card */}
        <div className="border-bni-grey-sterling rounded-lg border bg-white p-6 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-bni-grey-granite flex items-center gap-2 text-xl font-bold">
              <span>🔔</span>
              <span>Reminders</span>
            </h3>
            <span className="text-bni-red rounded-full bg-red-50 px-3 py-1 text-xs font-semibold">
              {reminders.filter((r) => !r.completed).length} Active
            </span>
          </div>

          <div className="space-y-3">
            {reminders.length === 0 ? (
              <p className="text-bni-grey-granite text-center text-sm">No reminders set</p>
            ) : (
              reminders
                .filter((reminder) => !reminder.completed)
                .map((reminder) => (
                  <div
                    key={reminder.id}
                    className="border-bni-grey-sterling/50 hover:bg-bni-grey-light rounded-lg border p-3 transition"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          className="border-bni-grey-sterling mt-1 h-4 w-4 cursor-pointer rounded"
                        />
                        <div className="flex-1">
                          <h4 className="text-bni-grey-granite mb-1 text-sm font-semibold">{reminder.title}</h4>
                          <p className="text-bni-grey-granite mb-2 text-xs">{reminder.description}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-bni-grey-granite text-xs">
                              📅 Due:{" "}
                              {new Date(reminder.dueDate).toLocaleDateString("en-US", {
                                month: "short",
                                day: "numeric",
                              })}
                            </span>
                            {getPriorityBadge(reminder.priority)}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
            )}
          </div>

          <button className="border-bni-grey-sterling text-bni-grey-granite hover:bg-bni-grey-light mt-4 w-full rounded border px-4 py-2 text-sm font-semibold transition">
            + Add New Reminder
          </button>
        </div>
      </div>

      {/* Tips */}
      <div className="bg-bni-red/10 border-bni-red/20 mt-8 rounded-lg border p-6">
        <h3 className="text-bni-grey-granite mb-2 font-bold">💡 Productivity Tips</h3>
        <ul className="text-bni-grey-granite space-y-1 text-sm">
          <li>• Check your upcoming meetings daily to stay prepared</li>
          <li>• Set reminders for important tasks and deadlines</li>
          <li>• Add events to your calendar to avoid conflicts</li>
          <li>• Review high-priority tasks first thing in the morning</li>
          <li>• Complete reminders promptly to maintain strong relationships</li>
        </ul>
      </div>
    </div>
  )
}
