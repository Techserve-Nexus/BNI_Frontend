'use client';

import { useEffect, useState } from 'react';

/**
 * Attendance Tab
 * Display event attendance history and points
 */
interface AttendanceRecord {
  id: string;
  eventName: string;
  date: string;
  status: 'attended' | 'missed' | 'excused';
  points: number;
}

export default function AttendancePage() {
  const [records, setRecords] = useState<AttendanceRecord[]>([]);

  useEffect(() => {
    // Stub: In production, fetch from API
    const mockRecords: AttendanceRecord[] = [
      {
        id: '1',
        eventName: 'Weekly Networking Meeting',
        date: '2025-10-20',
        status: 'attended',
        points: 10,
      },
      {
        id: '2',
        eventName: 'Leadership Training',
        date: '2025-10-18',
        status: 'attended',
        points: 15,
      },
      {
        id: '3',
        eventName: 'Monthly Breakfast',
        date: '2025-10-15',
        status: 'missed',
        points: 0,
      },
      {
        id: '4',
        eventName: 'Chapter Meeting',
        date: '2025-10-13',
        status: 'attended',
        points: 10,
      },
    ];

    setRecords(mockRecords);
  }, []);

  const totalPoints = records.reduce((sum, record) => sum + record.points, 0);
  const attendedCount = records.filter((r) => r.status === 'attended').length;

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'attended':
        return <span className="inline-block px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">✓ Attended</span>;
      case 'missed':
        return <span className="inline-block px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">✗ Missed</span>;
      case 'excused':
        return <span className="inline-block px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-semibold">~ Excused</span>;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-bni-grey-granite mb-6">Event Attendance</h2>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-sm text-bni-grey-granite mb-2">Total Points</p>
          <p className="text-3xl font-bold text-bni-red">{totalPoints}</p>
        </div>
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-sm text-bni-grey-granite mb-2">Events Attended</p>
          <p className="text-3xl font-bold text-bni-red">{attendedCount}</p>
        </div>
        <div className="bg-bni-grey-light rounded-lg p-6 text-center">
          <p className="text-sm text-bni-grey-granite mb-2">Attendance Rate</p>
          <p className="text-3xl font-bold text-bni-red">
            {records.length > 0 ? Math.round((attendedCount / records.length) * 100) : 0}%
          </p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-bni-grey-sterling">
              <th className="px-4 py-3 text-left text-sm font-semibold text-bni-grey-granite">Event</th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-bni-grey-granite">Date</th>
              <th className="px-4 py-3 text-center text-sm font-semibold text-bni-grey-granite">Status</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-bni-grey-granite">Points</th>
            </tr>
          </thead>
          <tbody>
            {records.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-6 text-center text-bni-grey-granite">
                  No attendance records yet
                </td>
              </tr>
            ) : (
              records.map((record) => (
                <tr key={record.id} className="border-b border-bni-grey-sterling/50 hover:bg-bni-grey-light">
                  <td className="px-4 py-3 text-bni-grey-granite">{record.eventName}</td>
                  <td className="px-4 py-3 text-bni-grey-granite">{new Date(record.date).toLocaleDateString()}</td>
                  <td className="px-4 py-3 text-center">{getStatusBadge(record.status)}</td>
                  <td className="px-4 py-3 text-right font-semibold text-bni-red">{record.points}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Tips */}
      <div className="mt-8 p-6 bg-bni-red/10 border border-bni-red/20 rounded-lg">
        <h3 className="font-bold text-bni-grey-granite mb-2">💡 Attendance Tips</h3>
        <ul className="text-sm text-bni-grey-granite space-y-1">
          <li>• Attend weekly meetings for consistent networking</li>
          <li>• Earn bonus points for special events and training sessions</li>
          <li>• Regular attendance strengthens your professional relationships</li>
        </ul>
      </div>
    </div>
  );
}
