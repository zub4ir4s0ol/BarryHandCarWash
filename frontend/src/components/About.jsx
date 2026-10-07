import { Hand, Droplets, CarFront, MapPin, Sparkles } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

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

        <div className="grid grid-cols-2 gap-4">
          <Reveal className="col-span-2">
            <div className="overflow-hidden rounded-3xl border border-line">
              <img
                src="/images/suds.jpg"
                alt="Car covered in snow foam suds"
                className="h-64 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-80"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="overflow-hidden rounded-3xl border border-line">
              <img
                src="/images/craft.jpg"
                alt="Hand washing a wheel with a brush"
                className="h-48 w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-56"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex h-48 flex-col justify-between rounded-3xl border border-crimson/40 bg-gradient-to-br from-crimson/20 to-navy p-6 sm:h-56">
              <Sparkles className="h-7 w-7 text-crimsonlight" />
              <div>
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
