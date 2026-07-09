import { useState } from "react";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  const [resent, setResent] = useState(false);

  const handleResend = () => {
    setResent(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center gap-2 mb-8">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          <span className="text-sm font-semibold">TeachX</span>
        </Link>

        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-black mb-1">Verify your email</h1>
        <p className="text-sm text-gray-500 mb-6">
          We've sent a verification link to your email address. Click the link to verify your account.
        </p>

        <div className="space-y-3">
          <p className="text-sm text-gray-500">
            Didn't receive the email? Check your spam folder or{" "}
            <button
              onClick={handleResend}
              className="text-black font-medium hover:underline"
            >
              resend verification email
            </button>
            {resent && (
              <span className="block mt-1 text-xs text-gray-400">
                Verification email sent. Check your inbox.
              </span>
            )}
          </p>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 space-y-3">
          <Link
            to="/login"
            className="block w-full py-2 text-sm font-medium text-center text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
          >
            Back to sign in
          </Link>
          <p className="text-center text-sm text-gray-500">
            Need a different email?{" "}
            <Link to="/register" className="text-black font-medium hover:underline">
              Sign up again
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default VerifyEmail;
