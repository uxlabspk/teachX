import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-black">
            Ready to transform your classroom?
          </h2>
          <p className="mt-3 text-gray-600">
            Join thousands of educators and students already using TeachX. Start for free, no credit card required.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-start gap-3">
            <Link
              to="/register"
              className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Create free account
            </Link>
            <a
              href="#features"
              className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
