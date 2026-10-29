import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="bg-white py-16 transition-colors duration-300 sm:py-20 lg:py-24 dark:bg-slate-950"
    >
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-5 sm:px-8 md:grid-cols-2 md:gap-12 lg:gap-20 lg:px-12">
        {/* Left Content */}
        <div className="md:sticky md:top-28">
          <p className="mb-4 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-700 dark:text-blue-400">
            <span className="h-px w-7 bg-blue-700 dark:bg-blue-400" />
            The Company
          </p>

          <h2 className="max-w-md text-3xl font-semibold leading-tight tracking-tight text-black sm:text-4xl lg:text-5xl dark:text-white">
            A partner for modern HR.
          </h2>

          <div className="mt-6 h-1 w-12 rounded-full bg-blue-700 dark:bg-blue-400" />
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm leading-7 text-gray-700 sm:text-base sm:leading-8 dark:text-slate-300">
            We enable organizations to modernize their HR operations through
            innovative AI-powered technology solutions. Our services include HR
            software selection, implementation, customization, and integration.
            By leveraging the right tools, we help streamline recruitment,
            payroll, performance management, and employee data systems,
            enhancing efficiency, accuracy, and decision making.
          </p>

          {/* Capability Cards */}
          <div className="mt-8 grid grid-cols-1 gap-3 sm:mt-10 sm:grid-cols-2 sm:gap-4">
            <div className="group rounded-xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.04] dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20 dark:hover:shadow-black/20">
              <div className="mb-4 h-7 w-1 rounded-full bg-blue-700/80 transition-all duration-300 group-hover:h-9 dark:bg-blue-400" />
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">
                Talent Identification
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm dark:text-slate-400">
                Identify and hire the right talent.
              </p>
            </div>

            <div className="group rounded-xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.04] dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20 dark:hover:shadow-black/20">
              <div className="mb-4 h-7 w-1 rounded-full bg-blue-700/80 transition-all duration-300 group-hover:h-9 dark:bg-blue-400" />
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">
                HR Best Practices
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm dark:text-slate-400">
                Design and implement strong HR practices.
              </p>
            </div>

            <div className="group rounded-xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.04] dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20 dark:hover:shadow-black/20">
              <div className="mb-4 h-7 w-1 rounded-full bg-blue-700/80 transition-all duration-300 group-hover:h-9 dark:bg-blue-400" />
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">
                HR Technology
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm dark:text-slate-400">
                Improve recruitment, analytics and workforce management.
              </p>
            </div>

            <div className="group rounded-xl border border-gray-200/80 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg hover:shadow-black/[0.04] dark:border-white/10 dark:bg-slate-900 dark:hover:border-white/20 dark:hover:shadow-black/20">
              <div className="mb-4 h-7 w-1 rounded-full bg-blue-700/80 transition-all duration-300 group-hover:h-9 dark:bg-blue-400" />
              <h3 className="text-sm font-semibold text-gray-950 dark:text-white">
                Transparency &amp; Ethics
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-600 sm:text-sm dark:text-slate-400">
                Integrity and ethical business practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
