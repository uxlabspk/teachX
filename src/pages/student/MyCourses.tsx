import { useState } from "react";
import DashboardLayout from "../../components/dashboard/Layout";

interface EnrolledCourse {
  id: number;
  title: string;
  teacher: string;
  subject: string;
  duration: string;
  nextSession: string;
  progress: number;
  totalSessions: number;
  completedSessions: number;
}

const initialCourses: EnrolledCourse[] = [
  { id: 1, title: "React Fundamentals", teacher: "John Doe", subject: "Web Development", duration: "60 min", nextSession: "Today, 3:00 PM", progress: 75, totalSessions: 12, completedSessions: 9 },
  { id: 2, title: "TypeScript Basics", teacher: "Sarah Smith", subject: "Programming", duration: "45 min", nextSession: "Tomorrow, 11:00 AM", progress: 40, totalSessions: 8, completedSessions: 3 },
  { id: 3, title: "Node.js Advanced", teacher: "John Doe", subject: "Backend Development", duration: "90 min", nextSession: "Thu, 2:00 PM", progress: 20, totalSessions: 10, completedSessions: 2 },
  { id: 4, title: "Python for Data Science", teacher: "Emily Chen", subject: "Data Science", duration: "60 min", nextSession: "Fri, 10:00 AM", progress: 60, totalSessions: 10, completedSessions: 6 },
];

const MyCourses = () => {
  const [courses, setCourses] = useState<EnrolledCourse[]>(initialCourses);
  const [showConfirmUnenroll, setShowConfirmUnenroll] = useState<number | null>(null);

  const handleUnenroll = (courseId: number) => {
    setCourses(courses.filter((c) => c.id !== courseId));
    setShowConfirmUnenroll(null);
  };

  return (
    <DashboardLayout role="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">My Courses</h1>
        <p className="text-sm text-gray-500">Manage your enrolled courses and view progress.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Active Courses</p>
          <p className="text-2xl font-bold text-black">{courses.length}</p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Total Sessions</p>
          <p className="text-2xl font-bold text-black">
            {courses.reduce((acc, c) => acc + c.completedSessions, 0)}
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg p-4">
          <p className="text-xs text-gray-500 mb-1">Avg. Progress</p>
          <p className="text-2xl font-bold text-black">
            {courses.length > 0
              ? Math.round(courses.reduce((acc, c) => acc + c.progress, 0) / courses.length)
              : 0}%
          </p>
        </div>
      </div>

      {/* Courses */}
      <div className="space-y-4">
        {courses.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <div className="flex items-center gap-3 flex-1 min-w-0">
                <div className="w-10 h-10 bg-gray-100 rounded-md flex items-center justify-center text-xs font-medium text-black flex-shrink-0">
                  {course.teacher.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-black truncate">{course.title}</h3>
                  <p className="text-xs text-gray-500">{course.teacher} · {course.subject}</p>
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-gray-500">
                <div className="text-right">
                  <p className="text-black font-medium">Next session</p>
                  <p>{course.nextSession}</p>
                </div>
                <div className="text-right">
                  <p className="text-black font-medium">Duration</p>
                  <p>{course.duration}</p>
                </div>
                <div className="text-right">
                  <p className="text-black font-medium">Progress</p>
                  <p>{course.completedSessions}/{course.totalSessions} sessions</p>
                </div>
              </div>

              <div className="flex items-center gap-2 flex-shrink-0">
                {showConfirmUnenroll === course.id ? (
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-500">Unenroll?</span>
                    <button
                      onClick={() => handleUnenroll(course.id)}
                      className="px-2.5 py-1 text-xs font-medium bg-black text-white rounded-md hover:bg-gray-800"
                    >
                      Yes
                    </button>
                    <button
                      onClick={() => setShowConfirmUnenroll(null)}
                      className="px-2.5 py-1 text-xs font-medium border border-gray-300 rounded-md hover:bg-gray-50"
                    >
                      No
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setShowConfirmUnenroll(course.id)}
                    className="px-3 py-1.5 text-xs font-medium text-gray-500 border border-gray-200 rounded-md hover:border-gray-300 hover:text-black transition-colors"
                  >
                    Unenroll
                  </button>
                )}
              </div>
            </div>

            {/* Progress bar */}
            <div className="mt-4">
              <div className="h-1 bg-gray-100 rounded-full">
                <div
                  className="h-1 bg-black rounded-full transition-all"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}

        {courses.length === 0 && (
          <div className="bg-white border border-gray-200 rounded-lg p-12 text-center">
            <p className="text-sm text-gray-500 mb-4">You haven't enrolled in any courses yet.</p>
            <a
              href="/student/explore"
              className="inline-block px-4 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Explore courses
            </a>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default MyCourses;
