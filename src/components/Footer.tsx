import React from 'react';
import { profile } from '../data';

const Footer: React.FC = () => (
  <footer className="border-t border-zinc-200 py-8 dark:border-zinc-900">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-zinc-500 sm:flex-row sm:px-6 lg:px-8">
      <p>
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="font-mono text-xs">AI Engineer · {profile.location}</p>
    </div>
  </footer>
);

export default Footer;
