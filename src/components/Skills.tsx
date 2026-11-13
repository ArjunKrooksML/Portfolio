import React from 'react';
import { motion } from 'framer-motion';
import { skillGroups } from '../data';
import { Reveal, SectionHeading } from './ui';

const listVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.035 } },
};
const chipVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

const Skills: React.FC = () => (
  <section id="skills" className="py-20 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading
        index="03"
        eyebrow="Toolkit"
        title="The stack behind the systems."
        lead="The tools I reach for to orchestrate agents, serve models, and keep them running."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {skillGroups.map((group, gi) => (
          <Reveal key={group.title} delay={gi * 0.08}>
            <div className="card h-full p-6">
              <h3 className="font-mono text-sm font-semibold text-emerald-600 dark:text-emerald-400">{group.title}</h3>
              <motion.ul
                variants={listVariants}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-60px' }}
                className="mt-5 flex flex-wrap gap-2"
              >
                {group.items.map((skill) => (
                  <motion.li
                    key={skill}
                    variants={chipVariants}
                    className="chip transition-colors hover:border-emerald-500 hover:text-emerald-700 dark:hover:text-emerald-300"
                  >
                    {skill}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
