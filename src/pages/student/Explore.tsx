import { useState } from "react";
import DashboardLayout from "../../components/dashboard/Layout";

interface Course {
  id: number;
  title: string;
  teacher: string;
  subject: string;
  duration: string;
  price: string;
  rating: number;
  students: number;
}

const allCourses: Course[] = [
  { id: 1, title: "React Fundamentals", teacher: "John Doe", subject: "Web Development", duration: "60 min", price: "50", rating: 4.9, students: 124 },
  { id: 2, title: "TypeScript Basics", teacher: "Sarah Smith", subject: "Programming", duration: "45 min", price: "40", rating: 4.8, students: 98 },
  { id: 3, title: "Node.js Advanced", teacher: "John Doe", subject: "Backend Development", duration: "90 min", price: "65", rating: 4.7, students: 87 },
  { id: 4, title: "Python for Data Science", teacher: "Emily Chen", subject: "Data Science", duration: "60 min", price: "55", rating: 4.9, students: 156 },
  { id: 5, title: "UI/UX Design Principles", teacher: "Maria Garcia", subject: "Design", duration: "45 min", price: "45", rating: 4.6, students: 72 },
  { id: 6, title: "System Design", teacher: "James Wilson", subject: "Architecture", duration: "60 min", price: "55", rating: 4.8, students: 64 },
  { id: 7, title: "JavaScript ES6+", teacher: "Sarah Smith", subject: "Programming", duration: "45 min", price: "35", rating: 4.7, students: 143 },
  { id: 8, title: "React Native Mobile", teacher: "John Doe", subject: "Mobile Development", duration: "60 min", price: "60", rating: 4.8, students: 56 },
  { id: 9, title: "AWS Cloud Basics", teacher: "David Brown", subject: "Cloud Computing", duration: "90 min", price: "70", rating: 4.5, students: 41 },
];

const subjects = ["All", "Web Development", "Programming", "Backend Development", "Data Science", "Design", "Architecture", "Mobile Development", "Cloud Computing"];

const ExploreCourses = () => {
  const [search, setSearch] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("All");
  const [enrolledIds, setEnrolledIds] = useState<number[]>([]);

  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.teacher.toLowerCase().includes(search.toLowerCase());
    const matchesSubject = selectedSubject === "All" || course.subject === selectedSubject;
    return matchesSearch && matchesSubject;
  });

  const handleEnroll = (courseId: number) => {
    if (!enrolledIds.includes(courseId)) {
      setEnrolledIds([...enrolledIds, courseId]);
    }
  };

  return (
    <DashboardLayout role="student">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-black">Explore Courses</h1>
        <p className="text-sm text-gray-500">Find and book 1-on-1 sessions with expert teachers.</p>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search courses or teachers..."
            className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
          />
        </div>
        <select
          value={selectedSubject}
          onChange={(e) => setSelectedSubject(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
        >
          {subjects.map((subject) => (
            <option key={subject} value={subject}>{subject}</option>
          ))}
        </select>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCourses.map((course) => (
          <div key={course.id} className="bg-white border border-gray-200 rounded-lg p-5">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-sm font-semibold text-black">{course.title}</h3>
                <p className="text-xs text-gray-500 mt-0.5">{course.subject}</p>
              </div>
              <span className="text-sm font-semibold text-black">${course.price}</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-[10px] font-medium text-black">
                {course.teacher.split(" ").map((n) => n[0]).join("")}
              </div>
              <span className="text-xs text-gray-600">{course.teacher}</span>
            </div>
            <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
              <span>{course.duration} sessions</span>
              <span className="flex items-center gap-1">
                <svg className="w-3 h-3 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                {course.rating}
              </span>
              <span>{course.students} students</span>
            </div>
            <button
              onClick={() => handleEnroll(course.id)}
              disabled={enrolledIds.includes(course.id)}
              className={`w-full py-2 text-sm font-medium rounded-md transition-colors ${
                enrolledIds.includes(course.id)
                  ? "bg-gray-100 text-gray-400 cursor-default"
                  : "bg-black text-white hover:bg-gray-800"
              }`}
            >
              {enrolledIds.includes(course.id) ? "Enrolled" : "Book session"}
            </button>
          </div>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-sm text-gray-500">No courses found matching your search.</p>
        </div>
      )}
    </DashboardLayout>
  );
};

export default ExploreCourses;
