import { Link } from "react-router-dom";

const features = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Course management",
    description: "Create, organize, and manage courses with rich content. Upload materials, set deadlines, and structure your curriculum.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
      </svg>
    ),
    title: "Assignments & grading",
    description: "Distribute assignments, collect submissions, and grade with built-in rubrics. Students receive instant feedback.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Progress tracking",
    description: "Real-time analytics for both teachers and students. Track performance, attendance, and learning outcomes.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
    title: "Real-time messaging",
    description: "Built-in chat for teacher-student communication. Ask questions, share resources, and collaborate.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: "Live classes",
    description: "Host live video sessions with integrated whiteboard, screen sharing, and recording.",
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Secure & private",
    description: "Enterprise-grade security with role-based access control. Your data stays protected.",
  },
];

const featuresPage = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-gray-500 mb-3">Features</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Everything you need to teach and learn
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A complete platform designed for modern education. Tools that empower teachers and inspire students.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          {features.map((feature) => (
            <div key={feature.title} className="bg-white p-8">
              <div className="w-9 h-9 bg-gray-100 rounded-md flex items-center justify-center mb-4 text-black">
                {feature.icon}
              </div>
              <h3 className="text-base font-semibold text-black mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Detailed sections */}
        <div className="mt-24 space-y-24">
          {/* Course Management */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-500 mb-2">01</p>
              <h2 className="text-2xl font-bold text-black mb-3">Course management</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Create structured courses with modules, lessons, and resources. Upload documents, videos, and interactive content. Set deadlines and automate enrollment.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Unlimited course creation
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Drag-and-drop content builder
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  File uploads up to 500MB
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg bg-white p-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                  <div className="w-8 h-8 bg-gray-200 rounded-md" />
                  <div className="flex-1">
                    <div className="h-2.5 bg-gray-200 rounded w-32 mb-1.5" />
                    <div className="h-2 bg-gray-100 rounded w-20" />
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                  <div className="w-8 h-8 bg-gray-200 rounded-md" />
                  <div className="flex-1">
                    <div className="h-2.5 bg-gray-200 rounded w-40 mb-1.5" />
                    <div className="h-2 bg-gray-100 rounded w-24" />
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-md">
                  <div className="w-8 h-8 bg-gray-200 rounded-md" />
                  <div className="flex-1">
                    <div className="h-2.5 bg-gray-200 rounded w-28 mb-1.5" />
                    <div className="h-2 bg-gray-100 rounded w-16" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assignments & Grading */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 border border-gray-200 rounded-lg bg-white p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                  <div className="h-2.5 bg-gray-200 rounded w-24" />
                  <div className="h-2 bg-gray-100 rounded w-12" />
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full" />
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded w-48 mb-1" />
                    <div className="h-1.5 bg-gray-100 rounded w-32" />
                  </div>
                  <div className="h-5 bg-black text-white text-[10px] px-2 rounded flex items-center">A</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full" />
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded w-40 mb-1" />
                    <div className="h-1.5 bg-gray-100 rounded w-28" />
                  </div>
                  <div className="h-5 bg-gray-200 text-gray-600 text-[10px] px-2 rounded flex items-center">B+</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-100 rounded-full" />
                  <div className="flex-1">
                    <div className="h-2 bg-gray-200 rounded w-44 mb-1" />
                    <div className="h-1.5 bg-gray-100 rounded w-36" />
                  </div>
                  <div className="h-5 bg-gray-200 text-gray-600 text-[10px] px-2 rounded flex items-center">B</div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm text-gray-500 mb-2">02</p>
              <h2 className="text-2xl font-bold text-black mb-3">Assignments & grading</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Create assignments with due dates, rubrics, and attachments. Collect submissions online and grade efficiently with our intuitive interface.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Custom rubric builder
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Plagiarism detection
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Batch grading & comments
                </li>
              </ul>
            </div>
          </div>

          {/* Progress Tracking */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm text-gray-500 mb-2">03</p>
              <h2 className="text-2xl font-bold text-black mb-3">Progress tracking</h2>
              <p className="text-gray-600 leading-relaxed mb-6">
                Monitor student performance with real-time dashboards. Track grades, attendance, engagement, and learning outcomes in one place.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Real-time grade analytics
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Attendance tracking
                </li>
                <li className="flex items-center gap-2 text-sm text-gray-600">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Exportable reports
                </li>
              </ul>
            </div>
            <div className="border border-gray-200 rounded-lg bg-white p-6">
              <div className="space-y-4">
                <div className="flex items-end gap-1 h-24">
                  <div className="flex-1 bg-gray-100 rounded-t" style={{ height: "40%" }} />
                  <div className="flex-1 bg-gray-200 rounded-t" style={{ height: "65%" }} />
                  <div className="flex-1 bg-gray-100 rounded-t" style={{ height: "50%" }} />
                  <div className="flex-1 bg-gray-300 rounded-t" style={{ height: "80%" }} />
                  <div className="flex-1 bg-gray-200 rounded-t" style={{ height: "70%" }} />
                  <div className="flex-1 bg-gray-100 rounded-t" style={{ height: "55%" }} />
                  <div className="flex-1 bg-black rounded-t" style={{ height: "90%" }} />
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 border border-gray-200 rounded-lg p-8 sm:p-12">
          <h2 className="text-2xl font-bold text-black mb-2">Ready to get started?</h2>
          <p className="text-gray-600 mb-6">Join thousands of educators already using TeachX.</p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/register"
              className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-center"
            >
              Create free account
            </Link>
            <Link
              to="/pricing"
              className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 transition-colors text-center"
            >
              View pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default featuresPage;
