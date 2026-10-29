import React from "react";

const steps = [
  {
    number: "01",
    title: "Diagnose",
    subtitle: "Understand",
    description: "Assess the current HR landscape, gaps and risks.",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Shape",
    description:
      "Create tailored HR strategies aligned with business priorities.",
  },
  {
    number: "03",
    title: "Deliver",
    subtitle: "Implement",
    description: "Implement frameworks, policies and systems seamlessly.",
  },
  {
    number: "04",
    title: "Enable",
    subtitle: "Build Capability",
    description: "Training and stakeholder alignment to make change stick.",
  },
  {
    number: "05",
    title: "Sustain",
    subtitle: "Optimise",
    description: "Monitor, analyse and refine processes for long-term success.",
  },
];

const Approach = () => {
  return (
    <section
      id="approach"
      className="bg-white py-16 transition-colors duration-300 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
              <span className="h-px w-7 bg-blue-700 dark:bg-blue-400" />
              Our Engagement Model
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-gray-950 sm:text-4xl lg:text-5xl dark:text-white">
              A clear process. Measurable progress.
            </h2>
          </div>

          <div className="md:flex md:justify-end">
            <p className="max-w-md text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-slate-400">
              A structured five-stage engagement model taking organisations from
              initial assessment through implementation and continuous
              optimisation.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-0 sm:grid-cols-2 sm:gap-x-5 lg:grid-cols-5 lg:gap-6">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative border-l border-gray-200 py-2 pl-6 pb-8 transition-colors duration-300 last:pb-0 sm:border-l-0 sm:pl-0 sm:pb-0 dark:border-white/10"
            >
              <div className="relative mb-6 flex items-center">
                <span className="absolute -left-[calc(1.5rem+5px)] h-2.5 w-2.5 rounded-full border-2 border-blue-700 bg-white transition-colors duration-300 group-hover:bg-blue-700 sm:hidden dark:border-blue-400 dark:bg-slate-950 dark:group-hover:bg-blue-400" />

                <span className="text-sm font-semibold tabular-nums text-blue-700 dark:text-blue-400">
                  {step.number}
                </span>

                <div className="ml-4 hidden h-px flex-1 bg-gray-200 lg:block dark:bg-white/10" />
              </div>

              <h3 className="text-xl font-semibold tracking-tight text-gray-950 transition-colors duration-300 group-hover:text-blue-800 sm:text-lg xl:text-xl dark:text-white dark:group-hover:text-blue-300">
                {step.title}
              </h3>

              <p className="mt-2 text-sm font-medium text-gray-700 dark:text-slate-300">
                {step.subtitle}
              </p>

              <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-slate-400">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
