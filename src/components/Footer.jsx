
import React from "react";
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-950">
      {/* Upper Section */}
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.4fr_0.8fr] lg:items-center lg:gap-16 lg:px-12">

        {/* Left Content */}
        <div>
          <p className="flex items-center gap-3 text-xs font-bold tracking-[0.2em] text-blue-400">
            <span className="h-px w-8 bg-blue-400" />
            GET IN TOUCH
          </p>

          <h2 className="mt-5 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ready to build a stronger, more competitive organisation?
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Connect with Brilliancy to explore how talent, technology
            and consulting can drive sustainable growth.
          </p>
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
          <a
            href="tel:+919266280909"
            className="group inline-flex items-center justify-center gap-3 rounded-xl bg-white px-5 py-4 text-sm font-semibold text-gray-950 transition-all duration-300 hover:bg-gray-100"
          >
            <Phone size={17} />
            Call +91 9266280909
          </a>

          <a
            href="mailto:crm@brilliancy.in"
            className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 px-5 py-4 text-sm font-semibold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/[0.06]"
          >
            <Mail size={17} />
            Email Us
          </a>
        </div>
      </div>

      {/* Full-width Divider */}
      <div className="h-px w-full bg-white/10" />

      {/* Lower Section */}
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-7 sm:px-10 md:flex-row md:items-center md:justify-between lg:px-12">
        {/* Left Content */}
        <p className="text-xs font-medium text-gray-400">
          <span className="font-bold text-white">brilliancy.</span>
          {" "}— Global HR Consulting
        </p>

        {/* Right Content */}
        <div className="flex flex-col gap-2 text-xs font-medium text-gray-400 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
          <a
            href="mailto:crm@brilliancy.in"
            className="transition-colors hover:text-white"
          >
            crm@brilliancy.in
          </a>

          <span className="hidden text-gray-600 sm:inline">·</span>

          <a
            href="tel:+919266280909"
            className="transition-colors hover:text-white"
          >
            +91 9266280909
          </a>

          <span className="hidden text-gray-600 sm:inline">·</span>

          <a
            href="https://www.brilliancy.in"
            target="_blank"
            rel="noreferrer"
            className="transition-colors hover:text-white"
          >
            www.brilliancy.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
