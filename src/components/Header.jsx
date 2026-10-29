import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Approach", href: "#approach" },
  { name: "Why Brilliancy", href: "#why-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white transition-colors duration-300 dark:border-white/10 dark:bg-slate-950">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12"
      >
        {/* Brand */}
        <a
          href="#home"
          className="shrink-0 text-2xl font-extrabold tracking-tight text-black transition-colors dark:text-white"
        >
          brilliancy<span className="text-blue-700 dark:text-blue-400">.</span>
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-7 md:flex lg:gap-9">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="relative py-2 text-sm font-medium text-neutral-600 transition-colors duration-200 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-blue-700 after:transition-all after:duration-300 hover:text-black hover:after:w-full dark:text-slate-300 dark:after:bg-blue-400 dark:hover:text-white"
            >
              {link.name}
            </a>
          ))}

          {/* Contact CTA */}
          <a
            href="#contact"
            className="group inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-black px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100 dark:focus-visible:ring-offset-slate-950"
          >
            Contact
            <ArrowUpRight
              size={16}
              className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center justify-center rounded-lg border border-black/10 p-2 text-black transition-colors hover:bg-neutral-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 md:hidden dark:border-white/15 dark:text-white dark:hover:bg-white/10"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>

      {/* Mobile navigation */}
      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          menuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!menuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="border-t border-black/5 bg-white px-5 py-4 sm:px-8 dark:border-white/10 dark:bg-slate-950">
            <div className="mx-auto max-w-7xl space-y-1">
              {links.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="group flex min-h-11 items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-blue-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 dark:text-slate-200 dark:hover:bg-white/[0.06] dark:hover:text-blue-300"
                >
                  {link.name}
                  <ArrowUpRight
                    size={16}
                    className="text-neutral-400 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 dark:text-slate-500"
                  />
                </a>
              ))}

              {/* Mobile contact CTA */}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 flex min-h-11 items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 dark:bg-white dark:text-slate-950 dark:hover:bg-blue-100 dark:focus-visible:ring-offset-slate-950"
              >
                Contact us
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
