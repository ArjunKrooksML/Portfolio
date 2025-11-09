import { ReactNode } from 'react';

export interface Skill {
  id: number;
  title: string;
  icon: ReactNode;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  period: string;
  role: string;
  organization: string;
  description: string;
  achievements?: string[];
}