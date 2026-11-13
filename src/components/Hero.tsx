import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, FileText } from 'lucide-react';
import { profile, stats } from '../data';
import { CountUp } from './ui';
import PipelineGraphic from './PipelineGraphic';
import avatar from '../assets/portfolio.jpg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

const Hero: React.FC = () => {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative overflow-hidden pb-16 pt-28 md:pt-32">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div
        className="pointer-events-none absolute -top-40 left-1/2 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl dark:bg-emerald-500/10"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <motion.div variants={container} initial="hidden" animate="show">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-3 rounded-full border border-zinc-200 bg-white/70 py-1.5 pl-1.5 pr-4 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/60"
            >
              <img src={avatar} alt="Arjunaa Seshadri" className="h-8 w-8 rounded-full object-cover" />
              <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">
                M.S. Data Science @ Stony Brook · Seeking Summer 2027 AI/ML internships
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl"
            >
              I build AI agents that{' '}
              <span className="text-emerald-600 dark:text-emerald-400">hold up in production.</span>
            </motion.h1>

            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
              Multi-agent systems, RAG pipelines and fine-tuned models, deployed on AWS. Orchestration with LangGraph and
              CrewAI, serving with FastAPI, measured with real evals.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                onClick={scrollTo('#projects')}
                className="group inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-400"
              >
                See how I build
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-6 py-3 font-semibold transition hover:border-emerald-500 hover:text-emerald-600 dark:border-zinc-700 dark:hover:text-emerald-400"
              >
                <FileText className="h-4 w-4" />
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <PipelineGraphic />
          </motion.div>
        </div>

        <motion.dl
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 dark:border-zinc-800 dark:bg-zinc-800 lg:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col bg-zinc-50 p-5 dark:bg-zinc-950 sm:p-6">
              <dt className="order-2 mt-1 text-sm font-medium text-zinc-700 dark:text-zinc-300">{s.label}</dt>
              <dd className="order-1 font-mono text-3xl font-semibold tracking-tight text-emerald-600 dark:text-emerald-400 sm:text-4xl">
                <CountUp from={s.from} to={s.to} prefix={s.prefix} suffix={s.suffix} />
              </dd>
              <dd className="order-3 mt-1 text-xs text-zinc-500">{s.detail}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
};

export default Hero;
