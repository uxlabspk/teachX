import { useState } from "react";
import DashboardLayout from "../../components/dashboard/Layout";

interface Course {
  id: number;
  title: string;
  subject: string;
  duration: string;
  price: string;
  students: number;
  status: "active" | "draft";
}

const initialCourses: Course[] = [
  { id: 1, title: "React Fundamentals", subject: "Web Development", duration: "60 min", price: "50", students: 45, status: "active" },
  { id: 2, title: "TypeScript Basics", subject: "Programming", duration: "45 min", price: "40", students: 32, status: "active" },
  { id: 3, title: "Node.js Advanced", subject: "Backend Development", duration: "90 min", price: "65", students: 28, status: "active" },
  { id: 4, title: "System Design", subject: "Architecture", duration: "60 min", price: "55", students: 19, status: "draft" },
];

const TeacherCourses = () => {
  const [courses, setCourses] = useState<Course[]>(initialCourses);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newCourse, setNewCourse] = useState({
    title: "",
    subject: "",
    duration: "60 min",
    price: "",
  });

  const handleAddCourse = () => {
    if (newCourse.title && newCourse.subject && newCourse.price) {
      setCourses([
        ...courses,
        {
          id: Date.now(),
          ...newCourse,
          students: 0,
          status: "draft",
        },
      ]);
      setNewCourse({ title: "", subject: "", duration: "60 min", price: "" });
      setShowAddForm(false);
    }
  };

  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  const handleToggleStatus = (id: number) => {
    setCourses(
      courses.map((c) =>
        c.id === id ? { ...c, status: c.status === "active" ? "draft" : "active" } : c
      )
    );
  };

  return (
    <DashboardLayout role="teacher">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-black">My Courses</h1>
          <p className="text-sm text-gray-500">Manage your courses and offerings.</p>
        </div>
        <button
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          {showAddForm ? "Cancel" : "Add course"}
        </button>
      </div>

      {/* Add Course Form */}
      {showAddForm && (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
          <h2 className="text-sm font-semibold text-black mb-4">New Course</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Course title</label>
              <input
                type="text"
                value={newCourse.title}
                onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
                placeholder="e.g. React Fundamentals"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input
                type="text"
                value={newCourse.subject}
                onChange={(e) => setNewCourse({ ...newCourse, subject: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
                placeholder="e.g. Web Development"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Session duration</label>
              <select
                value={newCourse.duration}
                onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
              >
                <option value="30 min">30 min</option>
                <option value="45 min">45 min</option>
                <option value="60 min">60 min</option>
                <option value="90 min">90 min</option>
                <option value="120 min">120 min</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Price per session ($)</label>
              <input
                type="number"
                value={newCourse.price}
                onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
                className="w-full px-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:border-black focus:ring-0"
                placeholder="50"
              />
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={handleAddCourse}
              className="px-4 py-2 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Add course
            </button>
          </div>
        </div>
      )}

      {/* Courses List */}
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 gap-4 px-4 py-3 bg-gray-50 border-b border-gray-200 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <div className="col-span-4">Course</div>
          <div className="col-span-2 hidden sm:block">Duration</div>
          <div className="col-span-2 hidden sm:block">Price</div>
          <div className="col-span-1 hidden sm:block">Students</div>
          <div className="col-span-1">Status</div>
          <div className="col-span-2 text-right">Actions</div>
        </div>
        <div className="divide-y divide-gray-100">
          {courses.map((course) => (
            <div key={course.id} className="grid grid-cols-12 gap-4 px-4 py-3 items-center">
              <div className="col-span-4 min-w-0">
                <p className="text-sm font-medium text-black truncate">{course.title}</p>
                <p className="text-xs text-gray-500 truncate">{course.subject}</p>
              </div>
              <div className="col-span-2 text-sm text-gray-600 hidden sm:block">{course.duration}</div>
              <div className="col-span-2 text-sm text-gray-600 hidden sm:block">${course.price}/session</div>
              <div className="col-span-1 text-sm text-gray-600 hidden sm:block">{course.students}</div>
              <div className="col-span-1">
                <button
                  onClick={() => handleToggleStatus(course.id)}
                  className={`text-xs px-2 py-0.5 rounded-full ${
                    course.status === "active"
                      ? "bg-gray-100 text-black"
                      : "bg-gray-50 text-gray-400"
                  }`}
                >
                  {course.status}
                </button>
              </div>
              <div className="col-span-2 flex items-center justify-end gap-2">
                <button className="text-xs text-gray-500 hover:text-black px-2 py-1">
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteCourse(course.id)}
                  className="text-xs text-gray-400 hover:text-black px-2 py-1"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        {courses.length === 0 && (
          <div className="px-4 py-12 text-center">
            <p className="text-sm text-gray-500">No courses yet. Add your first course to get started.</p>
          </div>
        )}
      </div>
    </DashboardLayout>
  );
};

export default TeacherCourses;
