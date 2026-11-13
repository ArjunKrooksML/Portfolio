import React, { useState } from 'react';
import { Check, Copy, FileText, Github as GitHub, Linkedin, Mail } from 'lucide-react';
import { profile } from '../data';
import { Reveal, SectionHeading } from './ui';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  const links = [
    { label: 'LinkedIn', href: profile.linkedin, icon: Linkedin },
    { label: 'GitHub', href: profile.github, icon: GitHub },
    { label: 'Resume', href: profile.resume, icon: FileText },
  ];

  return (
    <section id="contact" className="border-t border-zinc-200 py-20 dark:border-zinc-900 md:py-28">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
        <SectionHeading index="05" eyebrow="Contact" title="Let’s build something that ships." />

        <Reveal delay={0.1}>
          <p className="mx-auto -mt-6 max-w-xl text-lg text-zinc-600 dark:text-zinc-400">
            I’m looking for a Summer 2027 AI/ML engineering internship: multi-agent systems, RAG, fine-tuning, or backend
            infrastructure. If it involves getting AI into production, I’d like to hear about it.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3 font-semibold text-zinc-950 transition hover:bg-emerald-400"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-300 px-4 py-3 font-medium transition hover:border-emerald-500 dark:border-zinc-700"
              aria-label="Copy email address"
            >
              {copied ? <Check className="h-4 w-4 text-emerald-500" /> : <Copy className="h-4 w-4" />}
              <span aria-live="polite">{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-zinc-600 transition hover:text-emerald-600 dark:text-zinc-400 dark:hover:text-emerald-400"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
