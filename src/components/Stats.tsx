const stats = [
  { value: "10K+", label: "Active students" },
  { value: "500+", label: "Expert teachers" },
  { value: "2K+", label: "Courses available" },
  { value: "98%", label: "Satisfaction rate" },
];

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50 border-y border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl sm:text-4xl font-bold text-black mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
