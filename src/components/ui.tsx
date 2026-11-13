import React, { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
};

/** Fades and lifts its children into place the first time they scroll into view. */
export const Reveal: React.FC<RevealProps> = ({ children, delay = 0, y = 24, className }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, delay, ease: EASE }}
  >
    {children}
  </motion.div>
);

type SectionHeadingProps = {
  index: string;
  eyebrow: string;
  title: string;
  lead?: string;
};

export const SectionHeading: React.FC<SectionHeadingProps> = ({ index, eyebrow, title, lead }) => (
  <Reveal className="mb-12 max-w-2xl">
    <p className="eyebrow">
      <span className="text-zinc-400 dark:text-zinc-600">{index} /</span> {eyebrow}
    </p>
    <h2 className="mt-3 text-3xl font-bold tracking-tight text-balance md:text-4xl">{title}</h2>
    {lead && <p className="mt-4 text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">{lead}</p>}
  </Reveal>
);

type CountUpProps = {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
};

/** Counts from `from` to `to` once it scrolls into view. Jumps straight to `to` for reduced motion. */
export const CountUp: React.FC<CountUpProps> = ({ from = 0, to, prefix = '', suffix = '', duration = 1.6 }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [value, setValue] = useState(reduced ? to : from);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setValue(to);
      return;
    }
    const controls = animate(from, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (latest) => setValue(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, reduced, from, to, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
};

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: 'div' | 'article';
};

/** A card with a soft highlight that follows the cursor. */
export const SpotlightCard: React.FC<SpotlightCardProps> = ({ className = '', children, as = 'div', ...rest }) => {
  const onMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    e.currentTarget.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };
  const Tag = as;
  return (
    <Tag className={`spotlight ${className}`} onMouseMove={onMove} {...rest}>
      {children}
    </Tag>
  );
};

/** Tracks which of the given section ids is currently nearest the middle of the viewport. */
export const useActiveSection = (ids: string[]) => {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ids.join('|')]);

  return active;
};
