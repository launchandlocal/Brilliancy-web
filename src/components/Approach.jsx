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
    <section id="approach" className="py-12 bg-white sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Top Content */}
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <p className="mb-2 flex items-center gap-3 text-xs font-extrabold text-blue-700">
              OUR ENGAGEMENT MODEL
            </p>

            <h2 className="max-w-xl text-3xl leading-tight tracking-[-0.04em] text-gray-950 sm:text-5xl">
              Diagnose. Design. Deliver. Enable. Sustain.
            </h2>
          </div>

          <div className="flex md:justify-end">
            <p className="max-w-md text-xs font-semibold leading-7 text-gray-500 sm:text-sm">
              A structured five-stage engagement model taking organisations from
              diagnosis through implementation and continuous optimisation.
            </p>
          </div>
        </div>

        {/* Bottom Conten */}
        <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-5">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-gray-900/[0.04] sm:p-7"
            >
              <p className="inline-block w-fit rounded-lg px-2 py-2 text-xs font-bold tracking-[0.15em] text-blue-700">
                {step.number} - {step.title}
              </p>
              <h3 className="mt-2 tracking-tight text-gray-900">
                {step.subtitle}
              </h3>
              <p className="mt-1 text-xs leading-6 text-gray-500 ">
                {step.description}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
