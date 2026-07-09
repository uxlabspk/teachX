import { Link } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/Layout";

const stats = [
  { label: "Total Students", value: "124", change: "+12 this month" },
  { label: "Active Courses", value: "8", change: "+2 new" },
  { label: "Sessions This Week", value: "23", change: "3 today" },
  { label: "Avg. Rating", value: "4.9", change: "Top 5%" },
];

const upcomingSessions = [
  { student: "Alex Chen", course: "React Fundamentals", time: "Today, 2:00 PM", duration: "60 min" },
  { student: "Maria Lopez", course: "TypeScript Basics", time: "Today, 4:30 PM", duration: "45 min" },
  { student: "James Wilson", course: "React Fundamentals", time: "Tomorrow, 10:00 AM", duration: "60 min" },
  { student: "Emily Park", course: "Node.js Advanced", time: "Tomorrow, 2:00 PM", duration: "90 min" },
];

const recentStudents = [
  { name: "Sarah Kim", course: "React Fundamentals", joined: "2 days ago" },
  { name: "David Brown", course: "TypeScript Basics", joined: "3 days ago" },
  { name: "Lisa Wang", course: "Node.js Advanced", joined: "1 week ago" },
];

const TeacherDashboard = () => {
  return (
    <DashboardLayout role="teacher">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back. Here's your teaching overview.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className="bg-white border border-gray-200 rounded-lg p-4">
            <p className="text-xs text-gray-500 mb-1">{stat.label}</p>
            <p className="text-2xl font-bold text-black">{stat.value}</p>
            <p className="text-xs text-gray-400 mt-1">{stat.change}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Upcoming Sessions */}
        <div className="lg:col-span-2 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-black">Upcoming Sessions</h2>
            <Link to="/teacher/schedule" className="text-xs text-gray-500 hover:text-black">
              View all
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {upcomingSessions.map((session, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-black flex-shrink-0">
                  {session.student.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black truncate">{session.student}</p>
                  <p className="text-xs text-gray-500 truncate">{session.course}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <p className="text-xs font-medium text-black">{session.time}</p>
                  <p className="text-xs text-gray-400">{session.duration}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Students */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-black">Recent Students</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {recentStudents.map((student, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-black flex-shrink-0">
                  {student.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black truncate">{student.name}</p>
                  <p className="text-xs text-gray-500 truncate">{student.course}</p>
                </div>
                <p className="text-xs text-gray-400 flex-shrink-0">{student.joined}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          to="/teacher/courses"
          className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
        >
          <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-black">Add Course</p>
            <p className="text-xs text-gray-500">Create a new course</p>
          </div>
        </Link>
        <Link
          to="/teacher/profile"
          className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
        >
          <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-black">Edit Profile</p>
            <p className="text-xs text-gray-500">Update your info</p>
          </div>
        </Link>
        <Link
          to="/teacher/schedule"
          className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
        >
          <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-black">Schedule</p>
            <p className="text-xs text-gray-500">Manage availability</p>
          </div>
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default TeacherDashboard;
