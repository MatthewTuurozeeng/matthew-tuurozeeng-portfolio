import type { IconType } from 'react-icons';
import {
  SiReact, SiTypescript, SiJavascript, SiPython, SiOpenjdk, SiNodedotjs, SiExpress,
  SiNextdotjs, SiTailwindcss, SiSupabase, SiFirebase, SiPostgresql, SiMysql, SiMongodb,
  SiGit, SiGithubactions, SiVercel, SiFigma, SiStreamlit, SiVite,
} from 'react-icons/si';

export interface TechItem {
  name: string;
  icon: IconType;
}

/** Shown in the scrolling "Technologies I work with" strip on the Home page */
export const techStack: TechItem[] = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Python', icon: SiPython },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Supabase', icon: SiSupabase },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'Java', icon: SiOpenjdk },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'MySQL', icon: SiMysql },
  { name: 'Firebase', icon: SiFirebase },
  { name: 'Streamlit', icon: SiStreamlit },
  { name: 'Vite', icon: SiVite },
  { name: 'Git', icon: SiGit },
  { name: 'GitHub Actions', icon: SiGithubactions },
  { name: 'Vercel', icon: SiVercel },
  { name: 'Figma', icon: SiFigma },
];

export interface Organization {
  name: string;
  role: string;
  /** Path under /public; cards without a logo show the name only */
  logo?: string;
}

const LOGOS = '/assets/images/logos';

/** Shown in the scrolling "Where I've worked & been selected" strip on the Home page */
export const organizations: Organization[] = [
  { name: 'CalBank PLC', role: 'Automation & Development Intern', logo: `${LOGOS}/calbank.png` },
  { name: 'Mastercard Foundation', role: 'Scholar', logo: `${LOGOS}/mastercard-foundation.png` },
  { name: 'Ashesi University', role: 'BSc Computer Science', logo: `${LOGOS}/ashesi.svg` },
  { name: 'Millennium Campus Network', role: 'Millennium Fellow, Class of 2025', logo: `${LOGOS}/millennium-campus-network.png` },
  { name: 'For Youth, By Youth', role: 'Inaugural Cohort Fellow', logo: `${LOGOS}/fyby.png` },
  { name: 'Talloires Network', role: 'Social Media Design Consultant', logo: `${LOGOS}/talloires-network.png` },
  { name: 'paNhari', role: 'Design Consultant via FYBY & Talloires partnership', logo: `${LOGOS}/panhari.png` },
  { name: 'African Leadership Academy', role: 'Public Policy Research Intern', logo: `${LOGOS}/african-leadership-academy.png` },
  { name: 'Future Interns', role: 'Machine Learning & AI Intern', logo: `${LOGOS}/future-interns.png` },
  { name: 'Extern', role: 'SEO Optimization Intern', logo: `${LOGOS}/extern.svg` },
];
