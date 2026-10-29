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
    <section
      id="why-us"
      className="bg-white py-16 transition-colors duration-300 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Top Content */}
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
              <span className="h-px w-7 bg-blue-700 dark:bg-blue-400" />
              Why Brilliancy
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-gray-950 sm:text-4xl lg:text-5xl dark:text-white">
              Expertise that moves from advice to impact.
            </h2>
          </div>

          <div className="md:flex md:justify-end">
            <p className="max-w-md text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-slate-400">
              A fast, flexible and client-centric delivery model focused on
              measurable outcomes and long-term partnership.
            </p>
          </div>
        </div>

        {/* Benefits Cards */}
        <div className="mt-9 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:gap-4">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-xl hover:shadow-black/[0.04] sm:p-6 dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20 dark:hover:shadow-black/20"
            >
              {/* Subtle top accent */}
              <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-blue-700 transition-transform duration-300 group-hover:scale-x-100 dark:bg-blue-400" />

              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.15em] text-blue-700 dark:text-blue-400">
                  {benefit.number}
                </span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-xs text-gray-500 transition-all duration-300 group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:text-white dark:border-white/10 dark:text-slate-400 dark:group-hover:border-blue-500 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="text-base font-semibold leading-snug tracking-tight text-gray-950 sm:text-lg dark:text-white">
                {benefit.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
