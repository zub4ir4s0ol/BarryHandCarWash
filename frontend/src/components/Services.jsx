import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import services from "../constants/services.json";
import { tel } from "../constants/site";

const SIZES = [
  { key: "small", label: "Small" },
  { key: "medium", label: "Medium" },
  { key: "large", label: "Large" },
];

const ServiceCard = ({ svc, size, featured }) => (
  <div
    data-testid={`service-card-${svc.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
    className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border p-6 transition-all duration-300 sm:p-8 ${
      featured
        ? "border-royal/70 bg-gradient-to-b from-royal/25 via-navy to-navy shadow-[0_30px_90px_-30px_rgba(29,78,216,0.55)]"
        : "border-line bg-navy hover:border-mist/40"
    }`}
  >
    {featured && (
      <div className="absolute right-0 top-0 rounded-bl-2xl bg-crimson px-4 py-1.5 font-cond text-xs font-bold uppercase tracking-[0.25em] text-snow">
        {svc.tag}
      </div>
    )}
    <div className="flex items-baseline gap-3">
      <span className={`font-display text-3xl ${featured ? "text-glow" : "text-mist/50"}`}>
        0{svc.n}
      </span>
      <h3 className="font-cond text-2xl font-bold uppercase tracking-wide text-snow sm:text-3xl">
        {svc.name}
      </h3>
    </div>
    <p className="mt-1 font-mono text-xs uppercase tracking-widest text-mist/70">
      Small · Medium · Large
    </p>
    <p className="mt-4 flex-1 text-sm leading-relaxed text-mist">{svc.desc}</p>

    <div className="mt-6 flex items-end justify-between gap-4 border-t border-line/70 pt-5">
      <div>
        <AnimatePresence mode="wait">
          <motion.p
            key={size}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className={`font-mono text-4xl font-bold ${featured ? "text-gold" : "text-snow"}`}
          >
            £{svc.prices[size]}
          </motion.p>
        </AnimatePresence>
        <p className="mt-1 font-cond text-xs font-semibold uppercase tracking-[0.2em] text-mist">
          {size} car
        </p>
      </div>
      {!featured && (
        <div className="text-right">
          {SIZES.map((s) => (
            <p key={s.key} className="font-mono text-xs text-mist/70">
              <span className="hidden sm:inline">{s.label[0]} </span>£{svc.prices[s.key]}
            </p>
          ))}
        </div>
      )}
    </div>

    <div className="mt-5 flex items-center justify-between gap-3">
      <span className="flex items-center gap-1.5 font-cond text-xs font-semibold uppercase tracking-widest text-gold">
        <Sparkles className="h-3.5 w-3.5" /> Free air freshener
      </span>
      <a
        href={tel()}
        data-testid={`service-call-${svc.n}`}
        className="flex items-center gap-2 rounded-full border border-snow/20 px-4 py-2 font-cond text-sm font-bold uppercase tracking-widest text-snow transition-colors hover:border-crimson hover:bg-crimson"
      >
        <Phone className="h-3.5 w-3.5" /> Call Us
      </a>
    </div>
  </div>
);

const Services = () => {
  const [size, setSize] = useState("medium");
  const featured = services.filter((s) => s.featured);
  const rest = services.filter((s) => !s.featured);

  return (
    <section id="prices" data-testid="services-section" className="relative bg-ink py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <SectionHeading
            kicker="Wash menu · Option 1–6"
            title={<>Pick your wash</>}
            sub="Mini valet and full valet are our most-loved options. Tap a size to see your price — then just turn up or call."
          />
          <Reveal className="mb-12 lg:mb-16">
            <div className="flex rounded-full border border-line bg-navy p-1.5">
              {SIZES.map((s) => (
                <button
                  key={s.key}
                  data-testid={`size-toggle-${s.key}`}
                  onClick={() => setSize(s.key)}
                  className={`relative rounded-full px-5 py-2.5 font-cond text-sm font-bold uppercase tracking-widest transition-colors sm:px-7 ${
                    size === s.key ? "text-snow" : "text-mist hover:text-snow"
                  }`}
                >
                  {size === s.key && (
                    <motion.span
                      layoutId="size-pill"
                      className="absolute inset-0 rounded-full bg-royal"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative">{s.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {featured.map((svc, i) => (
            <Reveal key={svc.n} delay={i * 0.1} className="h-full">
              <ServiceCard svc={svc} size={size} featured />
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {rest.map((svc, i) => (
            <Reveal key={svc.n} delay={i * 0.07} className="h-full">
              <ServiceCard svc={svc} size={size} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-8 text-center font-cond text-sm uppercase tracking-[0.25em] text-mist">
            Not sure what size your car is? Just ask when you call — we&amp;ll sort you out.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-3 text-center font-cond text-sm font-bold uppercase tracking-[0.25em] text-gold" data-testid="services-payment-note">
            Cash &amp; card accepted — cash preferred
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default Services;
