
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
    <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-8 lg:px-12"
      >
        {/* Brand */}
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight text-black"
        >
          brilliancy<span className="text-blue-700">.</span>
        </a>

        {/* Desktop navigation */}

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-neutral-600 transition-colors hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-neutral-800"
          >
            Contact
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
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
          className="rounded-lg p-2 text-black transition-colors hover:bg-neutral-100 md:hidden"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile navigation */}

      <div
        id="mobile-menu"
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out md:hidden ${
          menuOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
        inert={!menuOpen}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="space-y-1 border-t border-neutral-100 px-5 py-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50 hover:text-black"
              >
                {link.name}
                <ArrowUpRight size={16} className="text-neutral-400" />
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-black px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
            >
              Contact us <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
