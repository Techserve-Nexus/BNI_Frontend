"use client"

import { useEffect, useState } from "react"

/**
 * Attendance Tab
 * Display event attendance history and points
 */
interface AttendanceRecord {
  id: string
  eventName: string
  date: string
  status: "attended" | "missed" | "excused"
  points: number
}

export default function AttendancePage() {
  const [records, setRecords] = useState<AttendanceRecord[]>([])

  useEffect(() => {
    // Stub: In production, fetch from API
    const mockRecords: AttendanceRecord[] = [
      {
        id: "1",
        eventName: "Weekly Networking Meeting",
        date: "2025-10-20",
        status: "attended",
        points: 10,
      },
      {
        id: "2",
        eventName: "Leadership Training",
        date: "2025-10-18",
        status: "attended",
        points: 15,
      },
      {
        id: "3",
        eventName: "Monthly Breakfast",
        date: "2025-10-15",
        status: "missed",
        points: 0,
      },
      {
        id: "4",
        eventName: "Chapter Meeting",
        date: "2025-10-13",
        status: "attended",
        points: 10,
      },
    ]

    setRecords(mockRecords)
  }, [])

  const totalPoints = records.reduce((sum, record) => sum + record.points, 0)
  const attendedCount = records.filter((r) => r.status === "attended").length

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "attended":
        return (
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            ✓ Attended
          </span>
        )
      case "missed":
        return (
          <span className="inline-block rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
            ✗ Missed
          </span>
        )
      case "excused":
        return (
          <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-700">
            ~ Excused
          </span>
        )
      default:
        return null
    }
  }

  return (
    <div>
      <h2 className="text-bni-grey-granite mb-6 text-2xl font-bold">Event Attendance</h2>

      {/* Stats */}
      <div className="mb-8 grid gap-6 md:grid-cols-3">
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-bni-grey-granite mb-2 text-sm">Total Points</p>
          <p className="text-bni-red text-3xl font-bold">{totalPoints}</p>
        </div>
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-bni-grey-granite mb-2 text-sm">Events Attended</p>
          <p className="text-bni-red text-3xl font-bold">{attendedCount}</p>
        </div>
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-bni-grey-granite mb-2 text-sm">Attendance Rate</p>
          <p className="text-bni-red text-3xl font-bold">
            {records.length > 0 ? Math.round((attendedCount / records.length) * 100) : 0}%
          </p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-bni-grey-sterling border-b">
              <th className="text-bni-grey-granite px-4 py-3 text-left text-sm font-semibold">Event</th>
              <th className="text-bni-grey-granite px-4 py-3 text-left text-sm font-semibold">Date</th>
              <th className="text-bni-grey-granite px-4 py-3 text-center text-sm font-semibold">Status</th>
              <th className="text-bni-grey-granite px-4 py-3 text-right text-sm font-semibold">Points</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <tr>
                <td colSpan={4} className="text-bni-grey-granite px-4 py-6 text-center">
                  No attendance records yet
                </td>
              </tr>
            ) : (
              records.map((record) => (
                <tr key={record.id} className="border-bni-grey-sterling/50 hover:bg-bni-grey-light border-b">
                  <td className="text-bni-grey-granite px-4 py-3">{record.eventName}</td>
                  <td className="text-bni-grey-granite px-4 py-3">{new Date(record.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-center">{getStatusBadge(record.status)}</td>
                  <td className="text-bni-red px-4 py-3 text-right font-semibold">{record.points}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <div className="bg-bni-red/10 border-bni-red/20 mt-8 rounded-lg border p-6">
        <h3 className="text-bni-grey-granite mb-2 font-bold">💡 Attendance Tips</h3>
        <ul className="text-bni-grey-granite space-y-1 text-sm">
          <li>• Attend weekly meetings for consistent networking</li>
          <li>• Earn bonus points for special events and training sessions</li>
          <li>• Regular attendance strengthens your professional relationships</li>
        </ul>
      </div>
    </div>
  )
}
