import { useState } from "react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "0",
    description: "Perfect for getting started",
    features: [
      "Up to 5 courses",
      "50 students per course",
      "Basic assignments",
      "Email support",
      "1GB storage",
      "Standard analytics",
    ],
    cta: "Get started",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "19",
    period: "/month",
    description: "Best for growing educators",
    features: [
      "Unlimited courses",
      "500 students per course",
      "Advanced assignments & grading",
      "Live classes",
      "Priority support",
      "50GB storage",
      "Custom branding",
      "Advanced analytics",
    ],
    cta: "Start free trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "49",
    period: "/month",
    description: "For schools and institutions",
    features: [
      "Everything in Pro",
      "Unlimited students",
      "SSO & SAML integration",
      "Dedicated account manager",
      "API access",
      "Unlimited storage",
      "Custom integrations",
      "SLA guarantee",
      "On-premise option",
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const faqs = [
  {
    q: "Can I switch plans later?",
    a: "Yes, you can upgrade or downgrade at any time. Changes take effect immediately and we'll prorate the difference.",
  },
  {
    q: "Is there a free trial?",
    a: "Yes, the Pro plan comes with a 14-day free trial. No credit card required to start.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards, PayPal, and wire transfers for Enterprise plans.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.",
  },
  {
    q: "Do you offer discounts for nonprofits?",
    a: "Yes, we offer 50% off for qualified nonprofit organizations and educational institutions. Contact us for details.",
  },
  {
    q: "What happens to my data if I cancel?",
    a: "Your data is yours. You can export everything before canceling. We keep backups for 30 days after cancellation.",
  },
];

const PricingPage = () => {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm text-gray-500 mb-3">Pricing</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-black leading-tight">
            Simple, transparent pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

        {/* Toggle */}
        <div className="flex items-center gap-3 mb-10">
          <span className={`text-sm ${!annual ? "text-black font-medium" : "text-gray-500"}`}>
            Monthly
          </span>
          <button
            onClick={() => setAnnual(!annual)}
            className={`relative w-10 h-5 rounded-full transition-colors ${annual ? "bg-black" : "bg-gray-300"}`}
          >
            <div
              className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${annual ? "left-5.5 translate-x-0" : "left-0.5"}`}
              style={{ left: annual ? "22px" : "2px" }}
            />
          </button>
          <span className={`text-sm ${annual ? "text-black font-medium" : "text-gray-500"}`}>
            Annual
            <span className="ml-1.5 text-xs text-gray-400">Save 20%</span>
          </span>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-lg p-6 ${
                plan.highlighted
                  ? "bg-black text-white"
                  : "bg-white border border-gray-200"
              }`}
            >
              <p className={`text-sm font-medium ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                {plan.name}
              </p>
              <div className="mt-3 flex items-baseline gap-1">
                <span className="text-4xl font-bold">
                  ${annual && plan.price !== "0"
                    ? Math.round(Number(plan.price) * 0.8)
                    : plan.price}
                </span>
                {plan.period && (
                  <span className={`text-sm ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.period}
                  </span>
                )}
              </div>
              <p className={`mt-1 text-sm ${plan.highlighted ? "text-gray-400" : "text-gray-500"}`}>
                {plan.description}
              </p>
              <ul className="mt-6 space-y-2.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className={`text-sm ${plan.highlighted ? "text-gray-300" : "text-gray-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                to="/register"
                className={`mt-6 block w-full py-2 text-sm text-center rounded-md font-medium transition-colors ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-gray-100"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="mt-24">
          <h2 className="text-2xl font-bold text-black mb-8">Compare plans</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 pr-4 font-medium text-gray-500">Feature</th>
                  <th className="text-center py-3 px-4 font-medium text-gray-500">Free</th>
                  <th className="text-center py-3 px-4 font-medium text-black">Pro</th>
                  <th className="text-center py-3 pl-4 font-medium text-gray-500">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Courses</td>
                  <td className="py-3 px-4 text-center text-gray-500">5</td>
                  <td className="py-3 px-4 text-center text-black">Unlimited</td>
                  <td className="py-3 pl-4 text-center text-gray-500">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Students per course</td>
                  <td className="py-3 px-4 text-center text-gray-500">50</td>
                  <td className="py-3 px-4 text-center text-black">500</td>
                  <td className="py-3 pl-4 text-center text-gray-500">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Live classes</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center text-black">Included</td>
                  <td className="py-3 pl-4 text-center text-gray-500">Included</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Storage</td>
                  <td className="py-3 px-4 text-center text-gray-500">1GB</td>
                  <td className="py-3 px-4 text-center text-black">50GB</td>
                  <td className="py-3 pl-4 text-center text-gray-500">Unlimited</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">Support</td>
                  <td className="py-3 px-4 text-center text-gray-500">Email</td>
                  <td className="py-3 px-4 text-center text-black">Priority</td>
                  <td className="py-3 pl-4 text-center text-gray-500">Dedicated</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">SSO / SAML</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 pl-4 text-center text-gray-500">Included</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-600">API access</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 px-4 text-center text-gray-400">-</td>
                  <td className="py-3 pl-4 text-center text-gray-500">Included</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* FAQs */}
        <div className="mt-24 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-black mb-8 text-center">Frequently asked questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="border border-gray-200 rounded-lg p-5">
                <p className="text-sm font-medium text-black mb-2">{faq.q}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 border border-gray-200 rounded-lg p-8 sm:p-12 text-center">
          <h2 className="text-2xl font-bold text-black mb-2">Still have questions?</h2>
          <p className="text-gray-600 mb-6">Our team is here to help you find the right plan.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/register"
              className="px-5 py-2.5 text-sm font-medium bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
            >
              Create free account
            </Link>
            <a
              href="#"
              className="px-5 py-2.5 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:border-gray-400 transition-colors"
            >
              Contact sales
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
