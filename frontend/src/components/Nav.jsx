import { useState } from "react";
import { Phone } from "lucide-react";
import LogoMark from "./LogoMark";
import { BUSINESS, NAV_LINKS, tel } from "../constants/site";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <header
      data-testid="nav-header"
      className="fixed top-0 inset-x-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur-xl"
    >
      <div className="mx-auto flex h-16 lg:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="flex items-center gap-3" data-testid="nav-logo-link">
          <LogoMark className="h-9 w-9 lg:h-11 lg:w-11" />
          <span className="font-display text-xl sm:text-2xl lg:text-3xl tracking-wide text-snow whitespace-nowrap">
            Barry <span className="text-glow">Hand Car Wash</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="font-cond text-sm font-semibold uppercase tracking-[0.2em] text-mist transition-colors hover:text-snow"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={tel()}
            data-testid="nav-call-button"
            className="group relative flex items-center gap-2 whitespace-nowrap rounded-full bg-crimson px-3.5 py-2 sm:px-5 sm:py-2.5 font-cond text-sm lg:text-base font-bold uppercase tracking-widest text-snow transition-transform hover:scale-105"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-snow opacity-75 animate-ping-slow" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-snow" />
            </span>
            <Phone className="h-4 w-4" />
            <span className="hidden sm:inline">{BUSINESS.phone}</span>
            <span className="sm:hidden">Call Us</span>
          </a>
          <button
            data-testid="nav-mobile-toggle"
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-full border border-line p-2.5 text-snow"
            aria-label="Toggle menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="lg:hidden border-t border-line/70 bg-ink/95 backdrop-blur-xl px-6 py-4">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              data-testid={`nav-mobile-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
              className="block py-3 font-cond text-lg font-semibold uppercase tracking-[0.2em] text-mist hover:text-snow border-b border-line/40 last:border-0"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Nav;
