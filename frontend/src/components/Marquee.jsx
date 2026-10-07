import { Sparkles } from "lucide-react";
import { MARQUEE_ITEMS } from "../constants/site";

const Marquee = () => (
  <div
    data-testid="trust-marquee"
    className="relative overflow-hidden border-y border-line bg-navy py-5"
  >
    <div className="flex w-max animate-marquee">
      <ul className="flex shrink-0 items-center">
        {MARQUEE_ITEMS.map((item) => (
          <li key={item} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-display text-xl uppercase tracking-widest text-snow/90 sm:text-2xl">
              {item}
            </span>
            <Sparkles className="h-5 w-5 shrink-0 text-crimsonlight" />
          </li>
        ))}
      </ul>
      <ul className="flex shrink-0 items-center" aria-hidden="true">
        {MARQUEE_ITEMS.map((item) => (
          <li key={item} className="flex items-center">
            <span className="whitespace-nowrap px-8 font-display text-xl uppercase tracking-widest text-snow/90 sm:text-2xl">
              {item}
            </span>
            <Sparkles className="h-5 w-5 shrink-0 text-crimsonlight" />
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Marquee;
