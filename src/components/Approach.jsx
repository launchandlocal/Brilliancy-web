import React from "react";

const steps = [
  {
    number: "01",
    title: "DIAGNOSE",
    subtitle: "Understand",
    description: "Assess the current HR landscape, gaps and risks.",
  },
  {
    number: "02",
    title: "DESIGN",
    subtitle: "Shape",
    description:
      "Create tailored HR strategies aligned with business priorities.",
  },
  {
    number: "03",
    title: "DELIVER",
    subtitle: "Implement",
    description: "Implement frameworks, policies and systems seamlessly.",
  },
  {
    number: "04",
    title: "ENABLE",
    subtitle: "Build Capability",
    description: "Training and stakeholder alignment to make change stick.",
  },
  {
    number: "05",
    title: "SUSTAIN",
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
        {/* Top Content */}
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
              <span className="h-px w-7 bg-blue-700 dark:bg-blue-400" />
              Our Engagement Model
            </p>

            <h2 className="max-w-xl text-3xl font-semibold leading-tight tracking-[-0.04em] text-gray-950 sm:text-4xl lg:text-5xl dark:text-white">
              Diagnose. Design. Deliver. Enable. Sustain.
            </h2>
          </div>

          <div className="md:flex md:justify-end">
            <p className="max-w-md text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-slate-400">
              A structured five-stage engagement model taking organisations from
              diagnosis through implementation and continuous optimisation.
            </p>
          </div>
        </div>

        {/* Engagement Stages */}
        <div className="mt-9 grid grid-cols-1 gap-3 sm:mt-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative rounded-2xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.04] sm:p-6 dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20 dark:hover:shadow-black/20"
            >
              {/* Stage number and connector */}
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-sm font-bold text-blue-800 transition-colors duration-300 group-hover:bg-blue-700 group-hover:text-white dark:bg-blue-400/10 dark:text-blue-300 dark:group-hover:bg-blue-500 dark:group-hover:text-white">
                  {step.number}
                </span>

                {index < steps.length - 1 && (
                  <div className="hidden h-px flex-1 bg-gray-200 lg:block dark:bg-white/10" />
                )}
              </div>

              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-blue-700 dark:text-blue-400">
                Stage {step.number}
              </p>

              <h3 className="mt-2 text-base font-semibold leading-snug tracking-tight text-gray-950 sm:text-lg dark:text-white">
                {step.title}
              </h3>

              <p className="mt-3 text-sm font-medium leading-6 text-gray-700 dark:text-slate-300">
                {step.subtitle}
              </p>

              <p className="mt-2 text-xs leading-6 text-gray-600 dark:text-slate-400">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
