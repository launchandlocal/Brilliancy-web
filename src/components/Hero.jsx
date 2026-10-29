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
      className="relative isolate overflow-hidden bg-gradient-to-br from-white via-white to-violet-100/70 transition-colors duration-300 dark:from-slate-950 dark:via-slate-950 dark:to-violet-950/30"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-violet-300/20 blur-3xl dark:bg-violet-500/10"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-8 sm:px-8 sm:py-12 md:gap-14 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">
        {/* Left content */}
        <div className="relative z-10">
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-px w-8 bg-blue-700 dark:bg-blue-400" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-800 dark:text-blue-300 sm:text-xs">
              A Global HR Consulting Company
            </span>
          </div>

          <h1 className="max-w-2xl text-[2.65rem] font-semibold leading-[1.08] tracking-[-0.045em] text-slate-950 dark:text-white sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            Redefining HR with{" "}
            <span className="text-blue-700 dark:text-blue-400">
              talent, technology &amp; trust.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-slate-600 dark:text-slate-300 sm:text-base sm:leading-8">
            We offer strategic HR consulting to help businesses optimize their
            workforce and HR processes. From policy development and compliance
            management to performance frameworks and employee engagement
            strategies, our solutions are tailored to your organization’s needs.
          </p>

          {/* CTA buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <a
              href="#contact"
              className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-950 dark:shadow-black/20 dark:hover:bg-blue-100 dark:focus-visible:ring-offset-slate-950"
            >
              Transform Your HR
              <ArrowUpRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href="#services"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 transition-all duration-300 hover:border-slate-300 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:border-white/15 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-white/25 dark:hover:bg-white/[0.08] dark:focus-visible:ring-offset-slate-950"
            >
              Explore Services
            </a>
          </div>
        </div>

        {/* Right feature card */}
        <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-5 -top-5 h-32 w-32 rounded-full bg-violet-300/30 blur-3xl dark:bg-violet-500/15"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-5 -left-5 h-32 w-32 rounded-full bg-blue-300/20 blur-3xl dark:bg-blue-500/10"
          />

          <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10 sm:p-8 md:p-10 dark:border-white/10 dark:shadow-black/30">
            {/* Decorative rings */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-white/[0.2]"
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/[0.2]"
            />

            <div className="relative">
              <div className="flex items-center gap-3">
                <span className="h-px w-6 bg-blue-400" />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300 sm:text-xs">
                  What We Bring
                </span>
              </div>

              <h2 className="mt-7 max-w-md text-2xl font-semibold leading-tight tracking-tight sm:text-3xl md:text-4xl">
                People strategy built for the{" "}
                <span className="text-blue-300">real world.</span>
              </h2>

              <p className="mt-4 max-w-md text-sm leading-7 text-slate-400 sm:text-base">
                Our goal is to align your human resources function with your
                business objectives, ensuring efficiency, compliance, and
                sustainable growth.
              </p>

              {/* Three pillars */}
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {pillars.map((pillar) => {
                  const Icon = pillar.icon;

                  return (
                    <div
                      key={pillar.number}
                      className="group rounded-xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.08]"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] font-medium text-slate-500">
                          {pillar.number}
                        </span>
                        <Icon
                          size={18}
                          className="text-blue-300 transition-transform duration-300 group-hover:scale-110"
                        />
                      </div>

                      <p className="mt-4 text-sm font-semibold text-white">
                        {pillar.title}
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="mt-8 flex items-center gap-3 border-t border-white/10 pt-6">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                <p className="text-xs font-medium tracking-wide text-slate-400 dark:text-white">
                  Aligned people. Stronger organisations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
