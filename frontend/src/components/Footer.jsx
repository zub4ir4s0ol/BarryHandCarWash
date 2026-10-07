import { Phone, MapPin } from "lucide-react";
import LogoMark from "./LogoMark";
import { BUSINESS, tel } from "../constants/site";

const Footer = () => (
  <footer data-testid="footer-section" className="relative overflow-hidden bg-ink pt-16">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col items-start justify-between gap-10 border-b border-line pb-12 md:flex-row md:items-center">
        <div className="flex items-center gap-4">
          <LogoMark className="h-14 w-14" />
          <div>
            <p className="font-display text-3xl tracking-wide text-snow">Barry Hand Car Wash</p>
            <p className="font-cond text-sm font-semibold uppercase tracking-[0.3em] text-mist">
              Under new management
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row sm:gap-8">
          <a
            href={tel()}
            data-testid="footer-call-button"
            className="flex items-center gap-2 font-mono text-lg font-bold text-snow transition-colors hover:text-glow"
          >
            <Phone className="h-5 w-5 text-crimsonlight" /> {BUSINESS.phone}
          </a>
          <p className="flex items-center gap-2 text-sm text-mist">
            <MapPin className="h-5 w-5 text-crimsonlight" /> {BUSINESS.address}
          </p>
        </div>
      </div>

      <p
        data-testid="footer-giant-wordmark"
        className="text-stroke select-none py-8 text-center font-display text-[16vw] leading-none tracking-wide"
      >
        BARRY
      </p>

      <div className="flex flex-col items-center justify-between gap-3 border-t border-line py-8 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-mist">
          © {new Date().getFullYear()} {BUSINESS.name} · {BUSINESS.address}
        </p>
        <p className="font-cond text-xs font-semibold uppercase tracking-[0.25em] text-mist">
          Mon–Sat 8:30am–6pm · Sun 9am–5pm
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
