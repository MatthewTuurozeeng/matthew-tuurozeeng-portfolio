import type { Profile } from '../services/api';

const profileData: Profile = {
  name: 'Matthew Tuurozeeng',
  title: 'Software Engineer | Product Builder | Full-Stack Developer',
  bio: `I design software products that combine engineering rigor with user-centered design. 
I enjoy building platforms that empower communities, streamline workflows, and scale with modern cloud tooling.`,  
  profileImage: '/assets/images/profileImage/profile-photo.jpg',
  skills: {
    languages: ['Python', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'C++'],
    frontend: ['React', 'React Native', 'Next.js', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Node.js', 'Express', 'REST APIs', 'Supabase', 'Firebase', 'PHP'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'ChromaDB'],
    ai: ['Machine Learning', 'NLP', 'RAG', 'Streamlit', 'Teachable Machine'],
    tools: ['Git & GitHub', 'GitHub Actions', 'Vercel', 'Figma', 'PlantUML', 'Trello'],
  },
  careerGoals: `I'm a Computer Science student at Ashesi University and a Mastercard Foundation Scholar, driven by social impact and Africa's economic transformation. I love building full-stack products that balance a polished frontend with a reliable backend.

I co-founded Sensorba LTD, where I pair software thinking with entrepreneurship, and I often build web tools that help small teams work better. I'm also passionate about mentoring young learners, designing inclusive technology, and data storytelling. Away from the keyboard, I unwind with listening to tech news and political talk shows.`,
  principles: [
    {
      title: 'People-first Engineering',
      description: 'I build with empathy, translating user challenges into thoughtful technical solutions.',
    },
    {
      title: 'Craft + Scalability',
      description: 'I treat design details with as much care as system reliability and performance.',
    },
    {
      title: 'Continuously Learning',
      description: 'I invest in learning new languages, frameworks, and leadership practices.',
    },
  ],
};

export default profileData;