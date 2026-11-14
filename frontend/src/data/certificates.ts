export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  summary: string;
  keyLearnings: string[];
  credentialUrl?: string;
  assetUrl?: string;
  assetType?: 'image' | 'pdf';
}

const certificates: Certificate[] = [
  {
    id: 'cert-react-typescript',
    title: 'React and TypeScript, v3',
    issuer: 'Frontend Masters',
    date: 'Mar 2026',
    summary: 'Building type-safe React apps with modern TypeScript patterns.',
    keyLearnings: ['Typed components', 'Hooks & state management', 'Scalable architecture'],
    assetUrl: '/documents/Matthew-Tuurozeeng-react-typescript-v3-cert.pdf',
    assetType: 'pdf',
  },
  {
    id: 'cert-web-development',
    title: 'Complete Intro to Web Development, v3',
    issuer: 'Frontend Masters',
    date: 'Mar 2026',
    summary: 'Foundations of building responsive, interactive web applications.',
    keyLearnings: ['HTML, CSS & JavaScript', 'Browser fundamentals', 'Debugging'],
    assetUrl: '/documents/Matthew-Tuurozeeng-web-dev-cert.pdf',
    assetType: 'pdf',
  },
  {
    id: 'cert-databases',
    title: 'Complete Intro to Databases',
    issuer: 'Frontend Masters',
    date: 'Mar 2026',
    summary: 'Relational database design and SQL for real-world applications.',
    keyLearnings: ['SQL querying', 'Schema design & normalization', 'App integration'],
    assetUrl: '/documents/Matthew_Tuurozeeng-databases-cert.pdf',
    assetType: 'pdf',
  },
  {
    id: 'cert-ml-ai',
    title: 'Machine Learning & AI Fundamentals',
    issuer: 'Future Interns',
    date: 'Aug 2025',
    summary: 'Supervised learning for forecasting and classification tasks.',
    keyLearnings: ['Regression & classification', '85%+ model accuracy', 'Product-focused insights'],
    assetUrl: '/documents/Matthew_Tuurozeeng_ML_Internship_cert.pdf',
    assetType: 'pdf',
  },
  {
    id: 'cert-bloomberg-finance',
    title: 'Bloomberg Finance Fundamentals',
    issuer: 'Bloomberg',
    date: 'Oct 2024',
    summary: 'Foundations of financial markets, investing, and business analysis.',
    keyLearnings: ['Financial markets', 'Investment fundamentals', 'Case-study analysis'],
    assetUrl: '/documents/Matthew-Tuurozeeng-Blomberg-Finance-Fundmentals-Cert.pdf',
    assetType: 'pdf',
  },
  {
    id: 'cert-digital-economy',
    title: 'Digital Economy and Work',
    issuer: 'Atingi Learning Platform',
    date: 'Sep 2024',
    summary: 'How technology is reshaping work and the global economy.',
    keyLearnings: ['Digital transformation', 'Remote collaboration', 'Future of work'],
    assetUrl: '/documents/Matthew-Tuurozeeng-Digital-Economy-and-Work-cert.pdf',
    assetType: 'pdf',
  },
];

export default certificates;
