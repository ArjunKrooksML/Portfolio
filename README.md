# Arjunaa Seshadri — Portfolio

Personal portfolio site built with React, TypeScript, and Tailwind CSS. Showcases projects, experience, and skills, with content driven from a single typed data file.

**Live site:** [arjunaaseshadriagentic.fun](https://www.arjunaaseshadriagentic.fun)

## Tech stack

- [React 18](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) for dev server and bundling
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Framer Motion](https://www.framer.com/motion/) for animation
- [Lucide React](https://lucide.dev/) for icons

## Getting started

```bash
npm install
npm run dev
```

The dev server starts on the port Vite assigns (prints to the terminal) with hot reload enabled.

### Available scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check and build for production (output in `dist/`) |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint over the project |

## Project structure

```
src/
├── components/   # Page sections (Hero, About, Projects, Experience, Skills, Contact, ...)
├── contexts/      # React context providers (e.g. theme)
├── hooks/         # Custom hooks
├── data.ts        # Single source of truth for profile, projects, experience, and skills content
├── types.ts        # Shared TypeScript types for the data model
└── App.tsx          # App shell / layout composition
public/
├── ArjunaaS_Resume.pdf
└── manifest.json, robots.txt, sitemap.xml
```

Most content updates (projects, bullet points, stats, skills) only require editing `src/data.ts` — the components render off that data model.

## Deployment

The `dist/` output from `npm run build` is a static site and can be deployed to any static host (Vercel, Netlify, GitHub Pages, etc.).

## License

This repository contains personal portfolio content and source code. All rights reserved unless otherwise noted.
