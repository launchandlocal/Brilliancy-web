import React from "react";

const services = [
  {
    number: "01",
    title: "Permanent Recruitment",
    description:
      "Build long-term teams with qualified professionals aligned to your business goals, culture and role requirements.",
  },
  {
    number: "02",
    title: "Contract-To-Hire",
    description:
      "Evaluate talent before a permanent commitment, with sourcing, onboarding, payroll and compliance managed for you.",
  },
  {
    number: "03",
    title: "Recruiter as a Service",
    description:
      "On-demand recruiting support that scales with your hiring needs, without the overhead of full-time hiring.",
  },
  {
    number: "04",
    title: "HR Consulting",
    description:
      "Strategic support across policy, compliance, performance frameworks and employee engagement.",
  },
  {
    number: "05",
    title: "HR Technology",
    description:
      "Software selection, implementation, customisation and integration to modernise HR operations.",
  },
  {
    number: "06",
    title: "Business Setup in India",
    description:
      "Company registration, HR setup, payroll, workforce planning and compliance support for market entry.",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-gray-50 py-12 sm:py-8 lg:py-16">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-12">
        {/* Top Content */}
        <div className="grid gap-6 md:grid-cols-2 md:items-end md:gap-12">
          <div>
            <p className="mb-2 flex items-center gap-3 text-xs font-extrabold text-blue-700">
              OUR SERVICES
            </p>

            <h2 className="max-w-xl text-3xl leading-tight tracking-[-0.04em] text-gray-950 sm:text-5xl">
              One partner. End-to-end HR capabilities.
            </h2>
          </div>

          <div className="flex md:justify-end">
            <p className="max-w-md text-xs font-semibold leading-7 text-gray-500 sm:text-sm">
              From talent acquisition to HR transformation and business setup in
              India, our solutions are designed around your organisation's
              needs.
            </p>
          </div>
        </div>

        {/* Bottom Conten */}
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-8 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.number}
              className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gray-200 hover:bg-white hover:shadow-lg hover:shadow-gray-900/[0.04] sm:p-7"
            >
              <p className="inline-block w-fit rounded-lg bg-blue-100 px-2 py-2 text-sm font-bold tracking-[0.15em] text-blue-700">
                {service.number}
              </p>
              <h3 className="mt-2 text-lg tracking-tight text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-xs leading-6 text-gray-500 ">
                {service.description}
              </p>{" "}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
