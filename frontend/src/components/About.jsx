import { Hand, Droplets, CarFront, MapPin, Star, Sparkles, ArrowUpRight } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { reviewUrl } from "../constants/site";

const PILLARS = [
  {
    icon: Hand,
    title: "Hand Wash Only",
    desc: "No spinning brushes, no drive-thru rollers. Just mitts, microfibre and proper technique that respects your paintwork.",
  },
  {
    icon: Droplets,
    title: "High-Pressure Rinse",
    desc: "Snow foam and a proper pressure rinse lift the dirt off before a sponge ever touches the body.",
  },
  {
    icon: CarFront,
    title: "Inside & Out",
    desc: "From a quick wash and dry to a full valet — vacuumed, wiped and finished like we'd do our own cars.",
  },
  {
    icon: MapPin,
    title: "Proudly Local",
    desc: "Right here on Barry Road. Pop in while you shop, walk into town, or just sit and watch the shine happen.",
  },
];

const STARS = [0, 1, 2, 3, 4];

const About = () => (
  <section id="about" data-testid="about-section" className="relative bg-ink py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <SectionHeading
            kicker="The craft"
            title={<>A proper wash,<br />the way it should be</>}
            sub="Under new management and washing cars the right way — every car done by hand, every time. No tunnels, no shortcuts, no swirl marks."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.08}>
                <div className="group h-full rounded-2xl border border-line bg-navy p-6 transition-all hover:border-royal/60 hover:shadow-[0_20px_60px_-20px_rgba(29,78,216,0.4)]">
                  <p.icon className="mb-4 h-8 w-8 text-glow transition-transform group-hover:scale-110" />
                  <h3 className="font-cond text-xl font-bold uppercase tracking-wide text-snow">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          <Reveal>
            <a
              href={reviewUrl}
              target="_blank"
              rel="noreferrer"
              data-testid="about-review-card"
              className="group relative block overflow-hidden rounded-3xl border border-gold/40 bg-gradient-to-br from-navy via-ink to-royal/20 p-8 transition-all hover:border-gold sm:p-10"
            >
              <div className="flex flex-wrap items-center justify-between gap-6">
                <div>
                  <p className="font-mono text-xs uppercase tracking-[0.3em] text-mist">
                    Google reviews
                  </p>
                  <p className="mt-2 font-display text-7xl leading-none tracking-wide text-snow sm:text-8xl">
                    4.7
                  </p>
                  <div className="mt-3 flex items-center gap-1">
                    {STARS.map((i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${i < 4 ? "fill-gold text-gold" : "fill-gold/50 text-gold/50"}`}
                      />
                    ))}
                  </div>
                  <p className="mt-3 font-cond text-base font-semibold uppercase tracking-[0.2em] text-mist">
                    Rated by our customers
                  </p>
                </div>
                <div className="flex items-center gap-2 rounded-full border border-snow/25 px-6 py-3 font-cond font-bold uppercase tracking-widest text-snow transition-colors group-hover:border-gold group-hover:text-gold">
                  Read our reviews
                  <ArrowUpRight className="h-4 w-4" />
                </div>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex items-center justify-between gap-6 rounded-3xl border border-crimson/40 bg-gradient-to-br from-crimson/20 to-navy p-8">
              <Sparkles className="h-9 w-9 shrink-0 text-crimsonlight" />
              <div className="text-right">
                <p className="font-display text-4xl tracking-wide text-snow sm:text-5xl">
                  FREE
                </p>
                <p className="font-cond text-sm font-semibold uppercase tracking-[0.2em] text-snow/80">
                  Air freshener with every wash
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
