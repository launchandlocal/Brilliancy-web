import React from "react";
import { Phone, Mail, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-slate-950 text-white transition-colors duration-300"
    >
      {/* Subtle background accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-blue-500/[0.07] blur-3xl"
      />

      {/* Upper Section */}
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 sm:py-16 md:py-20 lg:grid-cols-[1.4fr_0.8fr] lg:items-center lg:gap-16 lg:px-12">
        {/* Left Content */}
        <div>
          <p className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-blue-400">
            <span className="h-px w-7 bg-blue-400" />
            Get in touch
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl">
            Ready to build a stronger, more competitive organisation?
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400 sm:text-base sm:leading-8">
            Connect with Brilliancy to explore how talent, technology and
            consulting can drive sustainable growth.
          </p>
        </div>

        {/* Contact Actions */}
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href="tel:+919266280909"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl bg-white px-5 py-3.5 text-sm font-semibold text-slate-950 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Phone
              size={17}
              className="text-blue-700 transition-transform duration-300 group-hover:scale-110"
            />
            Call +91 9266280909
          </a>

          <a
            href="mailto:pankaj510chauhan@gmail.com"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.03] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-white/35 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <Mail
              size={17}
              className="text-blue-300 transition-transform duration-300 group-hover:scale-110"
            />
            Email Us
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>
      </div>

      {/* Full-width Divider */}
      <div aria-hidden="true" className="h-px w-full bg-white/10" />

      {/* Lower Section */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-5 px-5 py-7 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        {/* Brand */}
        <a
          href="#home"
          className="w-fit text-xs font-medium text-slate-400 transition-colors hover:text-white"
        >
          <span className="text-base font-extrabold tracking-tight text-white">
            brilliancy<span className="text-blue-400">.</span>
          </span>
          <span className="ml-2">— Global HR Consulting</span>
        </a>

        {/* Contact Details */}
        <div className="flex flex-col gap-3 text-xs font-medium text-slate-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-2">
          <a
            href="mailto:crm@brilliancy.in"
            className="w-fit transition-colors hover:text-white"
          >
            crm@brilliancy.in
          </a>

          <span aria-hidden="true" className="hidden text-slate-600 sm:inline">
            ·
          </span>

          <a
            href="tel:+919266280909"
            className="w-fit transition-colors hover:text-white"
          >
            +91 9266280909
          </a>

          <span aria-hidden="true" className="hidden text-slate-600 sm:inline">
            ·
          </span>

          <a
            href="https://www.brilliancy.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit transition-colors hover:text-white"
          >
            www.brilliancy.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
