const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Mathematics teacher",
    avatar: "SJ",
    content: "TeachX transformed how I manage my classes. Creating assignments and tracking student progress has never been easier.",
  },
  {
    name: "Alex Chen",
    role: "Computer science student",
    avatar: "AC",
    content: "The platform is incredibly intuitive. I love being able to access all my courses, submit assignments, and chat with teachers in one place.",
  },
  {
    name: "Maria Rodriguez",
    role: "High school principal",
    avatar: "MR",
    content: "We adopted TeachX across our entire school. The analytics dashboard gives us real-time insights into student performance.",
  },
  {
    name: "James Wilson",
    role: "Physics teacher",
    avatar: "JW",
    content: "The live class feature is seamless. I can share my screen, use the whiteboard, and students can ask questions in real-time.",
  },
  {
    name: "Emily Park",
    role: "University student",
    avatar: "EP",
    content: "I've tried many platforms, but TeachX is by far the best. The interface is clean, fast, and everything just works.",
  },
  {
    name: "David Kim",
    role: "Online tutor",
    avatar: "DK",
    content: "TeachX helped me scale my tutoring business. I can now manage 50+ students efficiently with automated grading and scheduling.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Loved by educators and students
          </h2>
          <p className="mt-3 text-gray-600">
            See what teachers and students are saying about their experience with TeachX.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 rounded-lg overflow-hidden">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="bg-white p-8">
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-medium text-black">
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
      </div>
    </section>
  );
};

export default Testimonials;
