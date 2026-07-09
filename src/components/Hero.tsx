import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm text-gray-500 mb-4">Trusted by 10,000+ educators worldwide</p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-black leading-[1.1]">
            Where knowledge meets innovation
          </h1>
          <p className="mt-5 text-lg text-gray-600 max-w-xl leading-relaxed">
            TeachX connects passionate teachers with eager students. Create courses, manage classrooms, and track progress in one place.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
            <Link
              to="/register"
              className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Start teaching free
            </Link>
            <Link
              to="/register"
              className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
            >
              Join as student
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-5 text-sm text-gray-500">
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Free forever
            </span>
            <span className="flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              No credit card
            </span>
            <span className="hidden sm:flex items-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              Cancel anytime
            </span>
          </div>
        </div>

        <div className="mt-16 border border-gray-200 rounded-lg overflow-hidden">
          <div className="bg-white p-6 sm:p-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2 border border-gray-200 rounded-md p-5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-gray-100 rounded-md flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-black">Introduction to React</p>
                    <p className="text-xs text-gray-500">24 lessons</p>
                  </div>
                </div>
                <div className="space-y-1.5">
                  <div className="h-1.5 bg-gray-100 rounded-full">
                    <div className="h-1.5 bg-black rounded-full w-3/4" />
                  </div>
                  <p className="text-xs text-gray-500">75% completed</p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-md p-3">
                  <p className="text-xl font-bold text-black">A+</p>
                  <p className="text-xs text-gray-500">Latest grade</p>
                </div>
                <div className="border border-gray-200 rounded-md p-3">
                  <p className="text-xl font-bold text-black">92%</p>
                  <p className="text-xs text-gray-500">Avg. score</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
