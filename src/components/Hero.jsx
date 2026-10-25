
import React from "react";
import { ArrowUpRight, Users, Cpu, ShieldCheck } from "lucide-react";

const pillars = [
  { number: "01", title: "Talent", icon: Users },
  { number: "02", title: "Technology", icon: Cpu },
  { number: "03", title: "Trust", icon: ShieldCheck },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-tr from-white via-white to-violet-100/80"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 py-8 sm:px-10 sm:py-12 lg:grid-cols-2 lg:gap-20 lg:px-12 lg:py-16 bg ">

         {/* Left content  */}
        <div className="relative z-10">
          <div className="mb-2 inline-flex items-center gap-3 px-4 py-2">
            <span className="h-[2px] w-8 bg-blue-700" />
            <span className="text-xs font-extrabold tracking-[0.18em] text-blue-700">
              A Global HR Consulting Company
            </span>
          </div>

          <h1 className="max-w-2xl text-4xl leading-[1.08] tracking-[-0.055em] text-slate-950 sm:text-6xl lg:text-7xl">
            Redefining HR with{" "}
            <span className="text-blue-700">
              talent, technology & trust.
            </span>
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            Brilliancy helps organisations strengthen people
            strategy by integrating talent, processes and
            technology—creating sustainable growth and
            long-term success.
          </p>

          {/* CTA buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-black px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-black-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 hover:shadow-xl"
            >
              Transform Your HR
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#services"
              className="group inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-6 py-4 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-slate-400 hover:bg-slate-50"
            >
              Explore Services
            </a>
          </div>

          {/* Optional Supporting note */}
          {/* <div className="mt-12 flex items-center gap-4 border-t border-slate-100 pt-6">
            <div className="flex -space-x-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-indigo-100 text-xs font-bold text-indigo-700">
                B
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-slate-200 text-xs font-bold text-slate-700">
                HR
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white bg-violet-100 text-xs font-bold text-violet-700">
                +
              </span>
            </div>
            
            <p className="text-sm leading-6 text-slate-500">
              <span className="block font-semibold text-slate-800">
                People-first. Future-ready.
              </span>
              Strategy designed around your organisation.
            </p>
          </div> */}
        </div>

        {/* Right feature card */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          {/* Decorative background */}
          <div className="absolute -right-5 -top-5 h-32 w-32 rounded-full bg-indigo-100/80 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-36 w-36 rounded-full bg-violet-100/80 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-900/15 sm:p-10 lg:p-11">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/[0.3]" />
            <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full border border-white/[0.3]" />

            <div className="relative">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-indigo-300">
                  What We Bring
                </span>
              </div>

              <h2 className="mt-9 max-w-md text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
                People strategy built for the{" "}
                <span className="text-indigo-300">
                  real world.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                Experienced consultants, proprietary search
                methodology and technology-driven solutions
                across India and international markets.
              </p>

              {/* Three pillars */}
              <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;

                  return (
                    <div
                      key={pillar.number}
                      className="group rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-400/50 hover:bg-indigo-500/10"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-medium text-slate-500">
                          {pillar.number}
                        </span>
                        <Icon
                          size={19}
                          className="text-indigo-300 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <p className="mt-5 text-sm font-semibold text-white sm:text-base">
                        {pillar.title}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
