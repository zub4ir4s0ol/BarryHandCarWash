import { Reveal, SectionHeading } from "./Reveal";

const SLOTS = [
  { src: "/images/gallery/g1.jpg", label: "Showroom shine" },
  { src: "/images/gallery/g2.jpg", label: "Inside & out" },
  { src: "/images/gallery/g3.jpg", label: "Fresh every time" },
  { src: "/images/gallery/g4.jpg", label: "Hand dried finish" },
  { src: "/images/gallery/g5.jpg", label: "SUVs & 4x4s" },
];

const Gallery = () => (
  <section id="gallery" data-testid="gallery-section" className="bg-ink py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="The results"
        title={<>Fresh from the bay</>}
        sub="Real cars, real results — straight from our wash on Barry Road."
      />
      <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
        {SLOTS.map((s, i) => (
          <Reveal key={s.src} delay={(i % 3) * 0.08}>
            <div
              data-testid={`gallery-slot-${i + 1}`}
              className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-line"
            >
              <img
                src={s.src}
                alt={s.label}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-transparent to-transparent opacity-80" />
              <p className="absolute bottom-4 left-4 font-cond text-sm font-bold uppercase tracking-[0.2em] text-snow">
                {s.label}
              </p>
            </div>
          </Reveal>
        ))}
        <Reveal delay={0.16} className="col-span-2 lg:col-span-1">
          <a
            href="#visit"
            data-testid="gallery-visit-cta"
            className="flex aspect-[4/3] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-glow/50 bg-royal/10 text-center transition-colors hover:bg-royal/20"
          >
            <p className="font-display text-3xl tracking-wide text-snow">YOUR CAR</p>
            <p className="font-cond text-sm font-semibold uppercase tracking-[0.25em] text-glow">
              Could be next — just roll in
            </p>
          </a>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Gallery;
