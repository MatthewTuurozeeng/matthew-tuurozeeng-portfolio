import projectsData from '../data/Projects';
import impactData from '../data/Impact';

export interface Project {
  id: string;
  _id?: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  category: string;
  status?: string;
  image: string;
  images?: string[];
  screenshots?: string[];
  demoVideo?: string;
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  featured: boolean;
  published: boolean;
  order: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface ImpactInitiative {
  id: string;
  _id?: string;
  title: string;
  period?: string;
  color?: string;
  description: string;
  category: string;
  achievements?: string[];
  stats?: { label: string; value: string }[];
  tags?: string[];
  image?: string;
  imagePosition?: string;
  gallery?: string[];
  link?: string;
  featured: boolean;
  published: boolean;
  order: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  /** Spam honeypot; real visitors leave it empty */
  botcheck?: boolean | string;
}

export interface Profile {
  name: string;
  title: string;
  bio: string;
  profileImage: string;
  skills: {
    languages: string[];
    frontend: string[];
    backend: string[];
    databases: string[];
    ai: string[];
    tools: string[];
  };
  careerGoals: string;
  principles: Array<{ title: string; description: string }>;
}

const clone = <T>(data: T): T => JSON.parse(JSON.stringify(data));
const simulateDelay = <T>(data: T, delay = 250) =>
  new Promise<T>((resolve) => setTimeout(() => resolve(clone(data)), delay));

export const getProjects = async (): Promise<Project[]> => simulateDelay(projectsData);
export const getImpactInitiatives = async (): Promise<ImpactInitiative[]> => simulateDelay(impactData);
