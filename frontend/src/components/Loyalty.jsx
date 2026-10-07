import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Stamp } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import LogoMark from "./LogoMark";
import { tel } from "../constants/site";

const Loyalty = () => {
  const [stamps, setStamps] = useState(4);

  return (
    <section
      id="loyalty"
      data-testid="loyalty-section"
      className="relative overflow-hidden border-y border-line bg-navy py-20 lg:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(29,78,216,0.18) 0%, rgba(11,17,30,0) 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              kicker="Loyalty scheme"
              title={<>4 stamps in,<br />5th wash free</>}
              sub="Grab a loyalty card in person — collect 4 stamps and your 5th wash & dry is on us. Tap the card to see how it fills up."
            />
            <Reveal delay={0.1}>
              <a
                href={tel()}
                data-testid="loyalty-call-cta"
                className="inline-flex items-center gap-3 rounded-full bg-crimson px-8 py-4 font-cond text-lg font-bold uppercase tracking-widest text-snow transition-all hover:bg-crimsonlight hover:scale-[1.03]"
              >
                <Phone className="h-5 w-5" />
                Call 07518199557
              </a>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <button
              data-testid="loyalty-stamp-card"
              onClick={() => setStamps((s) => (s % 5) + 1)}
              className="relative block w-full rounded-3xl border border-line bg-gradient-to-br from-ink to-royal/20 p-8 text-left shadow-[0_30px_90px_-30px_rgba(29,78,216,0.5)] transition-transform hover:scale-[1.02] sm:p-10"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-display text-2xl tracking-wide text-snow">BARRY</p>
                  <p className="font-cond text-sm font-semibold uppercase tracking-[0.3em] text-glow">
                    Loyalty Card
                  </p>
                </div>
                <LogoMark className="h-12 w-12" />
              </div>

              <div className="mt-8 grid grid-cols-5 gap-3 sm:gap-4">
                {[1, 2, 3, 4, 5].map((n) => {
                  const filled = n <= stamps;
                  const isFree = n === 5;
                  return (
                    <motion.div
                      key={n}
                      data-testid={`loyalty-stamp-${n}`}
                      animate={filled ? { scale: [0.7, 1.15, 1] } : { scale: 1 }}
                      transition={{ duration: 0.4 }}
                      className={`flex aspect-square items-center justify-center rounded-full border-2 ${
                        filled
                          ? isFree
                            ? "border-gold bg-gold/25 shadow-[0_0_30px_rgba(245,158,11,0.5)]"
                            : "border-glow bg-royal/40"
                          : "border-dashed border-mist/40"
                      }`}
                    >
                      {isFree ? (
                        <span
                          className={`font-display text-sm tracking-wide sm:text-lg ${
                            filled ? "text-gold" : "text-mist/50"
                          }`}
                        >
                          FREE
                        </span>
                      ) : filled ? (
                        <Stamp className="h-6 w-6 text-snow sm:h-7 sm:w-7" />
                      ) : (
                        <span className="font-mono text-sm text-mist/50">{n}</span>
                      )}
                    </motion.div>
                  );
                })}
              </div>

              <p className="mt-8 font-cond text-sm font-semibold uppercase tracking-[0.25em] text-mist">
                Receive 4 stamps &amp; 5th wash &amp; dry is free on us
                <span className="ml-2 text-glow">— tap to try</span>
              </p>
            </button>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Loyalty;
