import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 32, className = "", ...rest }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    {...rest}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ kicker, title, sub }) => (
  <div className="mb-12 lg:mb-16">
    <Reveal>
      <p className="font-mono text-xs uppercase tracking-[0.3em] text-crimsonlight mb-4">
        {kicker}
      </p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl uppercase leading-[0.95] tracking-wide text-snow">
        {title}
      </h2>
    </Reveal>
    {sub && (
      <Reveal delay={0.16}>
        <p className="mt-4 max-w-xl text-base text-mist">{sub}</p>
      </Reveal>
    )}
  </div>
);

export default Reveal;
