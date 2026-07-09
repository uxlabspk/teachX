import { Link } from "react-router-dom";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mathematics teacher at Lincoln High",
    avatar: "SJ",
    content: "TeachX transformed how I manage my classes. Creating assignments and tracking student progress has never been easier. My students are more engaged than ever, and I spend less time on admin work.",
  },
  {
    name: "Alex Chen",
    role: "Computer science student at MIT",
    avatar: "AC",
    content: "The platform is incredibly intuitive. I love being able to access all my courses, submit assignments, and chat with my teachers in one place. It's become essential for my studies.",
  },
  {
    name: "Maria Rodriguez",
    role: "High school principal at Westfield Academy",
    avatar: "MR",
    content: "We adopted TeachX across our entire school last year. The analytics dashboard gives us real-time insights into student performance and teacher effectiveness. It's been a game-changer.",
  },
  {
    name: "James Wilson",
    role: "Physics teacher at Community College",
    avatar: "JW",
    content: "The live class feature is seamless. I can share my screen, use the whiteboard, and students can ask questions in real-time. It's like being in the classroom, even when teaching remotely.",
  },
  {
    name: "Emily Park",
    role: "University student at Stanford",
    avatar: "EP",
    content: "I've tried many platforms, but TeachX is by far the best. The interface is clean, fast, and everything just works. I recommend it to everyone at my university.",
  },
  {
    name: "David Kim",
    role: "Online tutor and course creator",
    avatar: "DK",
    content: "TeachX helped me scale my tutoring business from 10 to 50+ students. The automated grading and scheduling features save me hours every week.",
  },
  {
    name: "Rachel Green",
    role: "English teacher at Oakridge School",
    avatar: "RG",
    content: "My students love the messaging feature. They can ask questions anytime, and I can respond when it's convenient. It's improved our communication dramatically.",
  },
  {
    name: "Michael Brown",
    role: "Parent of two students",
    avatar: "MB",
    content: "As a parent, I appreciate being able to track my children's progress. The reports are clear and I always know how they're doing in each class.",
  },
  {
    name: "Lisa Thompson",
    role: "Department head at Riverside University",
    avatar: "LT",
    content: "TeachX's reporting tools are excellent. I can see how my entire department is performing and identify areas where students need extra support.",
  },
];

const stats = [
  { value: "4.9/5", label: "Average rating" },
  { value: "10,000+", label: "Happy users" },
  { value: "98%", label: "Would recommend" },
  { value: "24/7", label: "Support available" },
];

const TestimonialsPage = () => {
  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm text-gray-500 mb-3">Testimonials</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Loved by educators and students
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            See what teachers, students, and administrators are saying about their experience with TeachX.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white p-6 text-center">
              <p className="text-2xl font-bold text-black">{stat.value}</p>
              <p className="text-sm text-gray-500 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8">
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-black">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="text-sm font-medium text-black">{testimonial.name}</p>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured testimonial */}
        <div className="mt-16 border border-gray-200 rounded-lg bg-white p-8 sm:p-12">
          <div className="max-w-3xl">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              "TeachX has completely changed how I approach teaching. The platform is intuitive, the features are exactly what I need, and the support team is incredibly responsive. I can't imagine going back to the old way of doing things."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-sm font-medium text-black">
                SJ
              </div>
              <div>
                <p className="text-sm font-medium text-black">Sarah Johnson</p>
                <p className="text-xs text-gray-500">Mathematics teacher at Lincoln High</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-black mb-2">Join our community</h2>
          <p className="text-gray-600 mb-6">Start your journey with TeachX today.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/register"
              className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Create free account
            </Link>
            <Link
              to="/login"
              className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
