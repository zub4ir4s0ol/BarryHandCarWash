import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone, ChevronDown, Star } from "lucide-react";
import { tel, reviewUrl } from "../constants/site";

const line = {
  hidden: { y: "110%" },
  show: (i) => ({
    y: "0%",
    transition: { duration: 0.9, delay: 0.15 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
  }),
};

const BUBBLES = [
  { left: "6%", size: 26, dur: 11, delay: 0 },
  { left: "18%", size: 14, dur: 14, delay: 3 },
  { left: "38%", size: 34, dur: 12, delay: 6 },
  { left: "58%", size: 18, dur: 15, delay: 1.5 },
  { left: "76%", size: 24, dur: 10, delay: 4 },
  { left: "90%", size: 15, dur: 13, delay: 8 },
];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const badgeY = useTransform(scrollYProgress, [0, 1], ["0%", "-35%"]);

  return (
    <section
      id="top"
      data-testid="hero-section"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-ink grain"
    >
      <motion.div style={{ y: bgY }} className="absolute inset-0 scale-110">
        <img
          src="/images/hero.jpg"
          alt=""
          className="h-full w-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/80 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-ink/40 to-transparent" />
      </motion.div>

      {BUBBLES.map((b, i) => (
        <span
          key={i}
          className="bubble"
          style={{
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: `${b.dur}s`,
            animationDelay: `${b.delay}s`,
          }}
        />
      ))}

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-14 px-4 pt-28 pb-20 sm:px-6 lg:grid-cols-[1.25fr_1fr] lg:gap-8 lg:px-8 lg:pt-24">
        <div>
          <h1 className="font-display uppercase leading-[0.88] tracking-wide text-snow">
            {[
              { t: "Your Car,", c: "text-snow" },
              { t: "Hand Washed", c: "text-glow" },
              { t: "Properly.", c: "text-snow" },
            ].map((l, i) => (
              <span key={l.t} className="block overflow-hidden py-[0.06em]">
                <motion.span
                  className={`block text-[clamp(3.4rem,9.5vw,8.5rem)] ${l.c}`}
                  custom={i}
                  variants={line}
                  initial="hidden"
                  animate="show"
                >
                  {l.t}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.7 }}
            className="mt-6 max-w-md text-base text-mist sm:text-lg"
          >
            Professional hand car wash in Barry, providing quality cleaning inside
            and out to keep your car fresh — all done by hand, finished with a
            free air freshener.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <a
              href={tel()}
              data-testid="hero-call-cta"
              className="group flex items-center gap-3 rounded-full bg-crimson px-8 py-4 font-cond text-lg font-bold uppercase tracking-widest text-snow transition-all hover:bg-crimsonlight hover:scale-[1.03]"
            >
              <Phone className="h-5 w-5 transition-transform group-hover:rotate-12" />
              Call 07518199557
            </a>
            <a
              href="#prices"
              data-testid="hero-prices-cta"
              className="flex items-center gap-3 rounded-full border border-snow/25 px-8 py-4 font-cond text-lg font-bold uppercase tracking-widest text-snow transition-all hover:border-glow hover:text-glow"
            >
              See Prices
              <ChevronDown className="h-5 w-5" />
            </a>
          </motion.div>

          <motion.a
            href={reviewUrl}
            target="_blank"
            rel="noreferrer"
            data-testid="hero-rating-link"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.05, duration: 0.7 }}
            className="mt-8 inline-flex items-center gap-3 rounded-full border border-line bg-navy/80 py-2 pl-4 pr-5 transition-colors hover:border-gold"
          >
            <span className="flex items-center gap-0.5">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < 4 ? "fill-gold text-gold" : "fill-gold/50 text-gold/50"}`}
                />
              ))}
            </span>
            <span className="font-cond text-sm font-bold uppercase tracking-widest text-snow">
              4.7 · 22 Google Reviews
            </span>
          </motion.a>
        </div>

        <motion.div
          style={{ y: badgeY }}
          className="relative mx-auto hidden w-full max-w-sm md:block lg:max-w-none"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="animate-float"
          >
            <div className="relative rounded-3xl border border-line bg-navy/80 p-6 shadow-[0_40px_120px_-20px_rgba(29,78,216,0.35)] backdrop-blur">
              <div className="absolute -top-3 left-6 rounded-full bg-gold px-4 py-1 font-cond text-xs font-bold uppercase tracking-[0.25em] text-ink">
                Est. Barry · CF62
              </div>
              <img
                src="/images/logo.png"
                alt="Barry Hand Car Wash shield logo"
                data-testid="hero-logo-badge"
                className="mx-auto w-full max-w-[300px] rounded-2xl"
              />
              <div className="mt-4 flex items-center justify-center gap-3">
                <span className="h-px flex-1 bg-line" />
                <span className="font-cond text-sm font-semibold uppercase tracking-[0.3em] text-mist">
                  Hand wash only
                </span>
                <span className="h-px flex-1 bg-line" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#prices"
        aria-label="Scroll to prices"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-mist hover:text-snow"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </motion.a>
    </section>
  );
};

export default Hero;
