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
    ],
    cta: "Contact sales",
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            Simple, transparent pricing
          </h2>
          <p className="mt-3 text-gray-600">
            Start free and scale as you grow. No hidden fees, no surprises.
          </p>
        </div>

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
                <span className="text-4xl font-bold">${plan.price}</span>
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
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-gray-400" : "text-gray-400"}`}
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
      </div>
    </section>
  );
};

export default Pricing;
