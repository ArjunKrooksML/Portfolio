import React, { useId, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ExternalLink, Github as GitHub } from 'lucide-react';
import { projectsData } from '../data';
import { FourW, Project } from '../types';
import { Reveal, SectionHeading, SpotlightCard } from './ui';

const W_TABS: { key: keyof FourW; label: string; question: string }[] = [
  { key: 'what', label: 'What', question: 'What is it?' },
  { key: 'where', label: 'Where', question: 'Where does it run?' },
  { key: 'when', label: 'When', question: 'When does it decide?' },
  { key: 'how', label: 'How', question: 'How is it built?' },
];

const FourWTabs: React.FC<{ fourW: FourW }> = ({ fourW }) => {
  const [active, setActive] = useState<keyof FourW>('what');
  const baseId = useId();

  const onKeyDown = (e: React.KeyboardEvent, index: number) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    e.preventDefault();
    const next = (index + (e.key === 'ArrowRight' ? 1 : W_TABS.length - 1)) % W_TABS.length;
    setActive(W_TABS[next].key);
    document.getElementById(`${baseId}-tab-${W_TABS[next].key}`)?.focus();
  };

  const current = W_TABS.find((t) => t.key === active)!;

  return (
    <div>
      <div role="tablist" aria-label="Project overview" className="flex gap-1 rounded-xl bg-zinc-100 p-1 dark:bg-zinc-800/60">
        {W_TABS.map((tab, i) => {
          const selected = tab.key === active;
          return (
            <button
              key={tab.key}
              id={`${baseId}-tab-${tab.key}`}
              role="tab"
              aria-selected={selected}
              aria-controls={`${baseId}-panel`}
              tabIndex={selected ? 0 : -1}
              onClick={() => setActive(tab.key)}
              onKeyDown={(e) => onKeyDown(e, i)}
              className={`relative flex-1 rounded-lg px-3 py-2 font-mono text-sm font-medium transition-colors ${
                selected ? 'text-zinc-950 dark:text-white' : 'text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200'
              }`}
            >
              {selected && (
                <motion.span
                  layoutId={`${baseId}-pill`}
                  className="absolute inset-0 rounded-lg bg-white shadow-sm dark:bg-zinc-700"
                  transition={{ type: 'spring', stiffness: 400, damping: 32 }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div
        id={`${baseId}-panel`}
        role="tabpanel"
        aria-labelledby={`${baseId}-tab-${active}`}
        className="mt-5 min-h-[9.5rem]"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            <p className="font-mono text-xs uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
              {current.question}
            </p>
            <p className="mt-2 leading-relaxed text-zinc-700 dark:text-zinc-300">{fourW[active]}</p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

const MetricRow: React.FC<{ metrics: Project['metrics'] }> = ({ metrics }) => (
  <dl className="flex flex-wrap gap-x-8 gap-y-4">
    {metrics.map((m) => (
      <div key={m.label} className="flex flex-col">
        <dd className="order-1 font-mono text-2xl font-semibold text-emerald-600 dark:text-emerald-400">{m.value}</dd>
        <dt className="order-2 text-xs text-zinc-500">{m.label}</dt>
      </div>
    ))}
  </dl>
);

const ProjectLinks: React.FC<{ project: Project }> = ({ project }) => (
  <div className="flex gap-2">
    {project.githubUrl && (
      <a
        href={project.githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:hover:text-emerald-400"
      >
        <GitHub className="h-4 w-4" /> Code
      </a>
    )}
    {project.liveUrl && (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-zinc-300 px-3 py-1.5 text-sm font-medium transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:hover:text-emerald-400"
      >
        <ExternalLink className="h-4 w-4" /> Live
      </a>
    )}
  </div>
);

const StackChips: React.FC<{ stack: string[] }> = ({ stack }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Tech stack">
    {stack.map((s) => (
      <li key={s} className="chip">
        {s}
      </li>
    ))}
  </ul>
);

const CaseStudy: React.FC<{ project: Project; number: string }> = ({ project, number }) => {
  const featured = project.featured;

  return (
    <Reveal>
      <SpotlightCard
        as="article"
        className={`card overflow-hidden p-6 sm:p-8 ${
          featured ? 'border-emerald-500/40 shadow-xl shadow-emerald-500/5 dark:border-emerald-500/30' : ''
        }`}
      >
        <header className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="font-mono text-xs text-zinc-500">
              {number} · <span className="text-emerald-600 dark:text-emerald-400">{project.status}</span>
            </p>
            <h3 className={`mt-2 font-bold tracking-tight ${featured ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
              {project.title}
            </h3>
            <p className="mt-1 text-zinc-500">{project.subtitle}</p>
          </div>
          <ProjectLinks project={project} />
        </header>

        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{project.summary}</p>

        <div className="mt-6">
          <MetricRow metrics={project.metrics} />
        </div>

        <div className={`mt-8 grid gap-8 ${project.image ? 'lg:grid-cols-2' : ''}`}>
          <FourWTabs fourW={project.fourW} />
          {project.image && (
            <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800">
              <div className="flex items-center gap-1.5 border-b border-zinc-200 bg-zinc-100 px-3 py-2 dark:border-zinc-800 dark:bg-zinc-900">
                <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
                <span className="ml-2 truncate font-mono text-[11px] text-zinc-500">admin.svaasinfra.in</span>
              </div>
              <img src={project.image} alt={`${project.title} screenshot`} loading="lazy" className="block w-full" />
            </div>
          )}
        </div>

        <div className="mt-8 border-t border-zinc-200 pt-8 dark:border-zinc-800">
          <p className="eyebrow mb-4">{featured ? 'Architectural highlights' : 'Highlights'}</p>
          <div className={`grid gap-4 ${featured ? 'sm:grid-cols-2 lg:grid-cols-4' : 'md:grid-cols-3'}`}>
            {project.highlights.map((h, i) => (
              <div
                key={h.title}
                className="rounded-xl border border-zinc-200 bg-zinc-50/60 p-4 dark:border-zinc-800 dark:bg-zinc-900/40"
              >
                <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">{String(i + 1).padStart(2, '0')}</p>
                <h4 className="mt-1 font-semibold">{h.title}</h4>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">{h.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <StackChips stack={project.stack} />
        </div>
      </SpotlightCard>
    </Reveal>
  );
};

const Projects: React.FC = () => (
  <section id="projects" className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        index="01"
        eyebrow="Projects"
        title="Built to be run, not just demoed."
        lead="Each project is a case study: what it is, where it runs, when it makes decisions, and how it is built."
      />
      <div className="space-y-8">
        {projectsData.map((project, i) => (
          <CaseStudy key={project.id} project={project} number={String(i + 1).padStart(2, '0')} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
