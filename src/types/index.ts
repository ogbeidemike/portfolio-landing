export interface SkillCard {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface CodeSnippet {
  id: number;
  title: string;
  description: string;
  language: string;
  code: string;
}

export interface ExperienceItem {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl?: string;
  demoUrl?: string;
}