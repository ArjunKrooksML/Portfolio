import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import { experienceData } from '../data';
import { Reveal, SectionHeading } from './ui';

const Experience: React.FC = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 60%'] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section id="experience" className="border-y border-zinc-200 bg-zinc-100/50 py-20 dark:border-zinc-900 dark:bg-zinc-900/30 md:py-28">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          index="02"
          eyebrow="Experience & education"
          title="From drone footage to production agents."
          lead="Three roles since 2024, moving from computer vision to LLM systems that real teams depend on."
        />

        <div ref={ref} className="relative pl-8 sm:pl-10">
          <div className="absolute bottom-0 left-[11px] top-2 w-px bg-zinc-300 dark:bg-zinc-800 sm:left-[15px]" aria-hidden />
          <motion.div
            style={{ scaleY, transformOrigin: 'top' }}
            className="absolute bottom-0 left-[11px] top-2 w-px bg-emerald-500 sm:left-[15px]"
            aria-hidden
          />

          <ol className="space-y-10">
            {experienceData.map((item) => {
              const Icon = item.kind === 'work' ? Briefcase : GraduationCap;
              return (
                <li key={`${item.organization}-${item.period}`} className="relative">
                  <span
                    className={`absolute -left-8 top-1 flex h-6 w-6 items-center justify-center rounded-full border-2 bg-zinc-50 dark:bg-zinc-950 sm:-left-10 sm:h-8 sm:w-8 ${
                      item.current ? 'border-emerald-500' : 'border-zinc-300 dark:border-zinc-700'
                    }`}
                  >
                    <Icon
                      className={`h-3 w-3 sm:h-4 sm:w-4 ${
                        item.current ? 'text-emerald-600 dark:text-emerald-400' : 'text-zinc-500'
                      }`}
                    />
                  </span>

                  <Reveal y={20}>
                    <div className="card p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <span className="font-mono text-xs text-zinc-500">{item.period}</span>
                        {item.current && (
                          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300">
                            Now
                          </span>
                        )}
                      </div>
                      <h3 className="mt-2 text-xl font-semibold">{item.role}</h3>
                      <p className="text-emerald-700 dark:text-emerald-400">
                        {item.organization} <span className="text-zinc-400 dark:text-zinc-600">·</span>{' '}
                        <span className="text-zinc-500">{item.location}</span>
                      </p>
                      {item.note && <p className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">{item.note}</p>}

                      {item.coursework && (
                        <div className="mt-4">
                          <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">Coursework</p>
                          <ul className="mt-2 flex flex-wrap gap-2" aria-label="Coursework">
                            {item.coursework.map((c) => (
                              <li key={c} className="chip">
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item.bullets && (
                        <ul className="mt-4 space-y-3">
                          {item.bullets.map((b) => (
                            <li key={b.text} className="flex gap-3 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300">
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
                              <span>
                                {b.text}
                                {b.metric && (
                                  <span className="ml-2 inline-block whitespace-nowrap rounded-md bg-emerald-500/10 px-2 py-0.5 font-mono text-xs font-medium text-emerald-700 dark:text-emerald-300">
                                    {b.metric}
                                  </span>
                                )}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
};

export default Experience;
