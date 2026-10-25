import React from "react";

const benefits = [
  {
    number: "01",
    title: "Deep Domain Expertise",
    description: "Seasoned consultants with multi-industry exposure.",
  },
  {
    number: "02",
    title: "Outcome-Oriented Execution",
    description: "Focused on measurable business impact.",
  },
  {
    number: "03",
    title: "End-to-End Capabilities",
    description: "Strategy through execution and optimisation.",
  },
  {
    number: "04",
    title: "Agility & Responsiveness",
    description: "Fast, flexible and client-centric delivery.",
  },
  {
    number: "05",
    title: "Trusted Partnership",
    description: "Long-term engagement focused on value creation.",
  },
];

const WhyUs = () => {
  return (
    <section id="why-us" className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Top Content */}
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <p className="mb-2 flex items-center gap-3 text-xs font-extrabold text-blue-700">
              WHY BRILLIANCY
            </p>

            <h2 className="max-w-xl text-3xl leading-tight tracking-[-0.04em] text-gray-950 sm:text-5xl">
              Expertise that moves from advice to impact.
            </h2>
          </div>

          <div className="flex md:justify-end">
            <p className="max-w-md text-xs font-semibold leading-7 text-gray-500 sm:text-sm">
              A fast, flexible and client-centric delivery model focused on
              measurable outcomes and long-term partnership.
            </p>
          </div>
        </div>

        {/* Bottom Conten */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-5">
          {benefits.map((benefit) => (
            <div
              key={benefit.number}
              className="group rounded-2xl border border-gray-100 bg-gray-900 text-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:shadow-lg hover:shadow-gray-900/[0.04] sm:p-7"
            >
              <h3 className="font-bold tracking-tight">
                {benefit.title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-100">
                {benefit.description}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
