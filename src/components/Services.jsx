import { ArrowUpRight } from "lucide-react";
import React from "react";

const services = [
  {
    number: "01",
    title: "Permanent Recruitment",
    description:
      "We identify, screen, and place highly qualified professionals who match your role requirements, organizational culture, and long-term business objectives.",
  },
  {
    number: "02",
    title: "Contract-To-Hire",
    description:
      "We provide skilled professionals on a contractual basis. We manage sourcing, onboarding, payroll, and compliance throughout the contract period.",
  },
  {
    number: "03",
    title: "Recruiter as a Service (RaaS)",
    description:
      "We offer flexible, on-demand access to experienced recruiters through tailored recruitment support, helping businesses scale hiring efforts up or down without the overhead of maintaining a full-time recruitment team.",
  },
  {
    number: "04",
    title: "India Market Entry",
    description:
      "We assist global and domestic companies in establishing their presence in India with end to end business setup solutions. Our services cover company registration, compliance, HR setup, payroll systems, and workforce planning and other support functions. With deep knowledge of local regulations and market dynamics, we ensure a smooth, compliant, and efficient entry into the Indian market.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-white py-16 transition-colors duration-300 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="max-w-3xl">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            <span className="h-px w-7 bg-blue-700 dark:bg-blue-400" />
            Our Services
          </p>

          <h2 className="text-3xl font-semibold leading-tight tracking-[-0.04em] text-gray-950 sm:text-4xl lg:text-5xl dark:text-white">
            The right people. The right structure.{" "}
            <span className="text-blue-700 dark:text-blue-400">
              Built around your business.
            </span>
          </h2>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base sm:leading-8 dark:text-slate-400">
            We provide flexible talent supply solutions that help organizations
            build strong, high performing teams aligned with their business
            goals, culture, and workforce requirements.
          </p>
        </div>

        {/* Editorial Service List */}
        <div className="mt-12 border-t border-gray-200 dark:border-white/10">
          {services.map((service) => (
            <article
              key={service.number}
              className="group grid gap-4 border-b border-gray-200 py-7 transition-colors duration-300 sm:py-8 md:grid-cols-[72px_minmax(0,0.9fr)_minmax(0,1.1fr)_32px] md:items-start md:gap-6 lg:gap-10 dark:border-white/10"
            >
              {/* Number */}
              <span className="text-xs font-semibold tracking-widest text-blue-700 dark:text-blue-400">
                {service.number}
              </span>

              {/* Title */}
              <h3 className="max-w-sm text-xl font-semibold leading-snug tracking-tight text-gray-950 transition-colors duration-300 group-hover:text-blue-800 sm:text-2xl dark:text-white dark:group-hover:text-blue-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="max-w-2xl text-sm leading-7 text-gray-600 sm:text-[15px] sm:leading-7 dark:text-slate-400">
                {service.description}
              </p>

              {/* Arrow */}
              <span className="hidden h-8 w-8 items-center justify-center rounded-full border border-gray-200 text-gray-500 transition-all duration-300 group-hover:border-blue-700 group-hover:bg-blue-700 group-hover:text-white md:flex dark:border-white/10 dark:text-slate-400 dark:group-hover:border-blue-500 dark:group-hover:bg-blue-500">
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>

              {/* Mobile arrow */}
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-700 md:hidden dark:text-blue-400">
                Explore service
                <ArrowUpRight size={14} aria-hidden="true" />
              </div>
            </article>
          ))}
        </div>

        {/* Closing Note */}
        <div className="mt-8 flex flex-col gap-4 rounded-xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 dark:border-white/10 dark:bg-slate-900">
          <p className="max-w-xl text-sm leading-6 text-gray-600 dark:text-slate-300">
            Looking for a solution tailored to your organisation's needs? Let's
            discuss the right approach for your team.
          </p>

          <a
            href="#contact"
            className="group inline-flex min-h-11 shrink-0 items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100 dark:focus-visible:ring-offset-slate-950"
          >
            Discuss your needs
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
