import { useState } from "react";
import DashboardLayout from "../../components/dashboard/Layout";

interface TimeSlot {
  id: number;
  day: string;
  start: string;
  end: string;
  available: boolean;
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const initialSlots: TimeSlot[] = [
  { id: 1, day: "Monday", start: "09:00", end: "12:00", available: true },
  { id: 2, day: "Monday", start: "14:00", end: "17:00", available: true },
  { id: 3, day: "Tuesday", start: "10:00", end: "13:00", available: true },
  { id: 4, day: "Wednesday", start: "09:00", end: "12:00", available: true },
  { id: 5, day: "Wednesday", start: "15:00", end: "18:00", available: false },
  { id: 6, day: "Thursday", start: "11:00", end: "14:00", available: true },
  { id: 7, day: "Friday", start: "09:00", end: "12:00", available: true },
  { id: 8, day: "Saturday", start: "10:00", end: "14:00", available: true },
];

const upcomingBookings = [
  { student: "Alex Chen", course: "React Fundamentals", day: "Monday", time: "09:00 - 10:00" },
  { student: "Maria Lopez", course: "TypeScript Basics", day: "Tuesday", time: "10:00 - 10:45" },
  { student: "James Wilson", course: "React Fundamentals", day: "Wednesday", time: "09:00 - 10:00" },
  { student: "Emily Park", course: "Node.js Advanced", day: "Thursday", time: "11:00 - 12:30" },
];

const TeacherSchedule = () => {
  const [slots, setSlots] = useState<TimeSlot[]>(initialSlots);
  const [selectedDay, setSelectedDay] = useState("All");
  const [showAddForm, setShowAddForm] = useState(false);
  const [newSlot, setNewSlot] = useState({ day: "Monday", start: "09:00", end: "10:00" });

  const filteredSlots = selectedDay === "All" ? slots : slots.filter((s) => s.day === selectedDay);

  const handleAddSlot = () => {
    if (newSlot.start && newSlot.end) {
      setSlots([...slots, { id: Date.now(), ...newSlot, available: true }]);
      setNewSlot({ day: "Monday", start: "09:00", end: "10:00" });
      setShowAddForm(false);
    }
  };

  const handleDeleteSlot = (id: number) => {
    setSlots(slots.filter((s) => s.id !== id));
  };

  const handleToggleAvailable = (id: number) => {
    setSlots(slots.map((s) => (s.id === id ? { ...s, available: !s.available } : s)));
  };

  return (
    <DashboardLayout role="teacher">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">Schedule</h1>
          <p className="text-sm text-gray-500">Manage your availability and view bookings.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          {showAddForm ? "Cancel" : "Add slot"}
        </button>
      </div>

      {/* Add Slot Form */}
      {showAddForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-sm font-semibold text-black mb-4">New Time Slot</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Day</label>
              <select
                value={newSlot.day}
                onChange={(e) => setNewSlot({ ...newSlot, day: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
              >
                {days.map((d) => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Start time</label>
              <input
                type="time"
                value={newSlot.start}
                onChange={(e) => setNewSlot({ ...newSlot, start: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">End time</label>
              <input
                type="time"
                value={newSlot.end}
                onChange={(e) => setNewSlot({ ...newSlot, end: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleAddSlot}
              className="px-4 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Add slot
            </button>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Availability */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-black">Availability</h2>
            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="text-xs border border-gray-200 rounded-md px-2 py-1 focus:outline-none"
            >
              <option value="All">All days</option>
              {days.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>
          <div className="divide-y divide-gray-100">
            {filteredSlots.map((slot) => (
              <div key={slot.id} className="flex items-center gap-4 px-4 py-3">
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black">{slot.day}</p>
                  <p className="text-xs text-gray-500">{slot.start} - {slot.end}</p>
                </div>
                <button
                  onClick={() => handleToggleAvailable(slot.id)}
                  className={`text-xs px-2.5 py-1 rounded-full ${
                    slot.available ? "bg-gray-100 text-black" : "bg-gray-50 text-gray-400"
                  }`}
                >
                  {slot.available ? "Available" : "Unavailable"}
                </button>
                <button
                  onClick={() => handleDeleteSlot(slot.id)}
                  className="text-gray-400 hover:text-black p-1"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
            {filteredSlots.length === 0 && (
              <div className="px-4 py-8 text-center">
                <p className="text-sm text-gray-500">No time slots for this day.</p>
              </div>
            )}
          </div>
        </div>

        {/* Upcoming Bookings */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-black">Upcoming Bookings</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {upcomingBookings.map((booking, i) => (
              <div key={i} className="px-4 py-3">
                <div className="flex items-center gap-2 mb-1">
                  <div className="w-5 h-5 bg-gray-100 rounded-full flex items-center justify-center text-[9px] font-medium text-black">
                    {booking.student.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <p className="text-sm font-medium text-black">{booking.student}</p>
                </div>
                <p className="text-xs text-gray-500 ml-7">{booking.course}</p>
                <p className="text-xs text-gray-400 ml-7">{booking.day}, {booking.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TeacherSchedule;
