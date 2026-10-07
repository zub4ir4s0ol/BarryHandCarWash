import { Clock, MapPin, Phone, Navigation, Star, Banknote, CreditCard } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { BUSINESS, tel, reviewUrl } from "../constants/site";

const Visit = () => (
  <section id="visit" data-testid="visit-section" className="bg-navy py-20 lg:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        kicker="Find us"
        title={<>Roll in — no booking needed</>}
        sub="Right on Barry Road, open 7 days a week. No booking needed — just turn up and see us."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="grid gap-6">
          <Reveal>
            <div className="rounded-3xl border border-line bg-ink p-8">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-7 w-7 shrink-0 text-glow" />
                <div>
                  <p className="font-cond text-xl font-bold uppercase tracking-wide text-snow">
                    {BUSINESS.street}
                  </p>
                  <p className="mt-1 text-mist">
                    {BUSINESS.city}, {BUSINESS.postcode}
                  </p>
                </div>
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={tel()}
                  data-testid="visit-call-button"
                  className="flex items-center gap-2 rounded-full bg-crimson px-6 py-3 font-cond font-bold uppercase tracking-widest text-snow transition-all hover:bg-crimsonlight hover:scale-[1.03]"
                >
                  <Phone className="h-4 w-4" /> {BUSINESS.phone}
                </a>                <a
                  href={reviewUrl}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="visit-review-button"
                  className="flex items-center gap-2 rounded-full border border-gold/60 px-6 py-3 font-cond font-bold uppercase tracking-widest text-gold transition-all hover:bg-gold hover:text-ink"
                >
                  <Star className="h-4 w-4 fill-gold" /> 4.7 · Leave a Review
                </a>
                <a
                  href={BUSINESS.mapDirections}
                  target="_blank"
                  rel="noreferrer"
                  data-testid="visit-directions-button"
                  className="flex items-center gap-2 rounded-full border border-snow/25 px-6 py-3 font-cond font-bold uppercase tracking-widest text-snow transition-colors hover:border-glow hover:text-glow"
                >
                  <Navigation className="h-4 w-4" /> Get Directions
                </a>
              </div>
              <div className="mt-6 flex items-center gap-3 border-t border-line/70 pt-5" data-testid="payment-info">
                <Banknote className="h-5 w-5 text-gold" />
                <CreditCard className="h-5 w-5 text-mist" />
                <p className="font-cond text-sm font-semibold uppercase tracking-widest text-snow">
                  Cash &amp; card accepted <span className="text-gold">— cash preferred</span>
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-ink p-8">
              <div className="flex items-center gap-3">
                <Clock className="h-6 w-6 text-glow" />
                <h3 className="font-cond text-xl font-bold uppercase tracking-wide text-snow">
                  Opening Hours
                </h3>
                <span className="ml-auto rounded-full border border-glow/40 bg-royal/20 px-3 py-1 font-cond text-xs font-bold uppercase tracking-[0.2em] text-glow">
                  Open 7 days
                </span>
              </div>
              <table className="mt-5 w-full" data-testid="opening-hours-table">
                <tbody>
                  {BUSINESS.hours.map((h) => (
                    <tr key={h.days} className="border-t border-line/70">
                      <td className="py-4 pr-4 font-cond text-base font-semibold uppercase tracking-widest text-mist">
                        {h.days}
                      </td>
                      <td className="py-4 text-right font-mono text-base font-bold text-snow">
                        {h.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="min-h-[360px]">
          <div className="h-full overflow-hidden rounded-3xl border border-line">
            <iframe
              title="Barry Hand Car Wash location map"
              src={BUSINESS.mapEmbed}
              data-testid="visit-map-embed"
              className="map-dark h-full min-h-[360px] w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Visit;
