
import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 px-6 md:grid-cols-2 lg:gap-20 lg:px-12">

        {/* Left Content */}
        <div>
          <p className="mb-2 flex items-center gap-3 text-xs font-extrabold text-blue-700">
              THE COMPANY
            </p>

          <h2 className="max-w-md text-3xl leading-tight tracking-tight text-black sm:text-5xl">
            A partner for modern HR.
          </h2>
        </div>

        {/* Right Content */}
        <div>
          <p className="text-sm font-semibold text-gray-700 transition-colors duration-300 group-hover:text-gray-700">
            Brilliancy is an HR consulting firm delivering high-quality talent
            and human capital solutions across India and international markets.
            What began as a specialised recruitment firm for mid-to-senior
            hiring has evolved into a comprehensive HR solutions partner.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="group rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gray-200 hover:bg-white hover:shadow-md hover:shadow-gray-900/5">
              <h3 className="text-sm font-bold text-gray-950">
                Talent Identification
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-600">
                Identify and hire the right talent.
              </p>
            </div>

            <div className="group rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gray-200 hover:bg-white hover:shadow-md hover:shadow-gray-900/5">
              <h3 className="text-sm font-bold text-gray-950">
                HR Best Practices
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-600">
                Design and implement strong HR practices.
              </p>
            </div>

            <div className="group rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gray-200 hover:bg-white hover:shadow-md hover:shadow-gray-900/5">
              <h3 className="text-sm font-bold text-gray-950">
                HR Technology
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-600">
                Improve recruitment, analytics and workforce management.
              </p>
            </div>

            <div className="group rounded-xl border border-gray-100 bg-gray-50/80 px-5 py-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-gray-200 hover:bg-white hover:shadow-md hover:shadow-gray-900/5">
              <h3 className="text-sm font-bold text-gray-950">
                Transparency & Ethics
              </h3>
              <p className="mt-2 text-xs leading-5 text-gray-600">
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
