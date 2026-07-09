import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link to="/" className="flex items-center gap-2">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="text-base font-semibold tracking-tight">TeachX</span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/features"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Features
            </Link>
            <Link
              to="/testimonials"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Pricing
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="text-sm text-gray-600 hover:text-black transition-colors"
            >
              Log in
            </Link>
            <Link
              to="/register"
              className="text-sm px-4 py-1.5 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Get started
            </Link>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-1.5 rounded-md text-gray-600 hover:bg-gray-100"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            <Link
              to="/features"
              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Features
            </Link>
            <Link
              to="/testimonials"
              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              to="/pricing"
              className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
              onClick={() => setMobileOpen(false)}
            >
              Pricing
            </Link>
            <div className="pt-2 border-t border-gray-100 space-y-1">
              <Link
                to="/login"
                className="block px-3 py-2 text-sm text-gray-600 hover:bg-gray-50 rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 text-sm text-center bg-black text-white rounded-md"
                onClick={() => setMobileOpen(false)}
              >
                Get started
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
