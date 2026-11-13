import React from 'react';
import { Award, GraduationCap, MapPin } from 'lucide-react';
import { certifications, profile } from '../data';
import { Reveal, SectionHeading } from './ui';
import secondary from '../assets/Secondary.jpg';

const About: React.FC = () => (
  <section id="about" className="border-t border-zinc-200 py-20 dark:border-zinc-900 md:py-28">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <SectionHeading index="04" eyebrow="About" title="The person behind the pipelines." />

      <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-2xl border border-emerald-500/40" aria-hidden />
            <img
              src={secondary}
              alt="Arjunaa Seshadri"
              loading="lazy"
              decoding="async"
              className="relative aspect-square w-full rounded-2xl object-cover"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">{profile.summary}</p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Focus areas">
            {profile.focus.map((f) => (
              <li key={f} className="chip">
                {f}
              </li>
            ))}
          </ul>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="card p-5">
              <GraduationCap className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <p className="mt-3 font-semibold">M.S. in Data Science</p>
              <p className="text-sm text-zinc-500">Stony Brook University · 2026 – 2028</p>
            </div>
            <div className="card p-5">
              <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <p className="mt-3 font-semibold">{profile.location}</p>
              <p className="text-sm text-zinc-500">Currently based</p>
            </div>
          </div>

          <div className="mt-4 card p-5">
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
              <p className="font-semibold">Certifications</p>
            </div>
            <ul className="mt-3 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
              {certifications.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  </section>
);

export default About;
