export interface Stat {
  from?: number;
  to: number;
  prefix?: string;
  suffix?: string;
  label: string;
  detail: string;
}

export interface Metric {
  value: string;
  label: string;
}

/** What / Where / When / How — the four questions every case study answers. */
export interface FourW {
  what: string;
  where: string;
  when: string;
  how: string;
}

export interface Highlight {
  title: string;
  detail: string;
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  status: string;
  featured?: boolean;
  summary: string;
  fourW: FourW;
  highlights: Highlight[];
  metrics: Metric[];
  stack: string[];
  image?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export interface Bullet {
  text: string;
  metric?: string;
}

export interface Experience {
  kind: 'work' | 'education';
  period: string;
  role: string;
  organization: string;
  location: string;
  current?: boolean;
  note?: string;
  bullets?: Bullet[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}
