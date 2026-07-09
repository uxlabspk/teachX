import { Link } from "react-router-dom";
import DashboardLayout from "../../components/dashboard/Layout";

const stats = [
  { label: "Enrolled Courses", value: "4", change: "Active" },
  { label: "Completed Sessions", value: "28", change: "+5 this week" },
  { label: "Hours Learned", value: "32", change: "This month" },
  { label: "Avg. Progress", value: "68%", change: "On track" },
];

const upcomingSessions = [
  { teacher: "John Doe", course: "React Fundamentals", time: "Today, 3:00 PM", duration: "60 min" },
  { teacher: "Sarah Smith", course: "TypeScript Basics", time: "Tomorrow, 11:00 AM", duration: "45 min" },
  { teacher: "John Doe", course: "React Fundamentals", time: "Wed, 3:00 PM", duration: "60 min" },
];

const recentActivity = [
  { action: "Completed session", course: "React Fundamentals", time: "2 hours ago" },
  { action: "Submitted assignment", course: "TypeScript Basics", time: "Yesterday" },
  { action: "Enrolled in course", course: "Node.js Advanced", time: "3 days ago" },
];

const StudentDashboard = () => {
  return (
    <DashboardLayout role="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">Dashboard</h1>
        <p className="text-sm text-gray-500">Welcome back. Here's your learning overview.</p>
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
            <Link to="/student/my-courses" className="text-xs text-gray-500 hover:text-black">
              View all
            </Link>
          </div>
          <div className="divide-y divide-gray-100">
            {upcomingSessions.map((session, i) => (
              <div key={i} className="flex items-center gap-4 px-4 py-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-black flex-shrink-0">
                  {session.teacher.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-black truncate">{session.teacher}</p>
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

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-lg">
          <div className="px-4 py-3 border-b border-gray-200">
            <h2 className="text-sm font-semibold text-black">Recent Activity</h2>
          </div>
          <div className="divide-y divide-gray-100">
            {recentActivity.map((activity, i) => (
              <div key={i} className="px-4 py-3">
                <p className="text-sm font-medium text-black">{activity.action}</p>
                <p className="text-xs text-gray-500">{activity.course}</p>
                <p className="text-xs text-gray-400 mt-1">{activity.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link
          to="/student/explore"
          className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
        >
          <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-black">Explore Courses</p>
            <p className="text-xs text-gray-500">Find new courses</p>
          </div>
        </Link>
        <Link
          to="/student/my-courses"
          className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
        >
          <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-black">My Courses</p>
            <p className="text-xs text-gray-500">View active courses</p>
          </div>
        </Link>
        <Link
          to="/student/profile"
          className="flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-4 hover:border-gray-300 transition-colors"
        >
          <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center">
            <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-medium text-black">Profile</p>
            <p className="text-xs text-gray-500">Update your info</p>
          </div>
        </Link>
      </div>
    </DashboardLayout>
  );
};

export default StudentDashboard;
