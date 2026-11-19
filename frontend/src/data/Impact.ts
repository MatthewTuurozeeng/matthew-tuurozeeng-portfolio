import type { ImpactInitiative } from '../services/api';

const impactData: ImpactInitiative[] = [
  {
    id: 'impact-computing4all',
    title: 'Computing4All: Digital Literacy',
    period: 'Dec 2025 - Present',
    description:
      'Many schoolchildren in Nator have little or no access to computers. I founded Computing4All to give them foundational digital skills and confidence with technology.',
    category: 'education',
    achievements: [
      'Teach two-hour, hands-on classes three times a week, using my own resources',
      'Designed practical lessons on basic computer use, digital literacy, and safe technology practices',
      'Building a repeatable curriculum so future cohorts can follow',
    ],
    stats: [
      { label: 'Learners', value: '50+' },
      { label: 'Classes per week', value: '3' },
    ],
    tags: ['Education', 'Digital Literacy', 'Community'],
    image: '/assets/images/impactImages/impact1_1.jpeg',
    gallery: [
      '/assets/images/impactImages/impact2_2.jpeg',
      '/assets/images/impactImages/impact2_1.jpeg',
    ],
    link: '',
    featured: true,
    published: true,
    order: 1,
  },
  {
    id: 'impact-fyby',
    title: 'For Youth, By Youth (FYBY) Movement',
    period: 'Mar 2025 - Present',
    description:
      'Selected as one of 50 youth leaders worldwide for the inaugural cohort of a three-year global fellowship by the Talloires Network, focused on conscious leadership, participatory action research, ethical AI, and storytelling.',
    category: 'community',
    achievements: [
      'Collaborate with peers from 18+ countries on community transformation projects',
      'As volunteer Social Media Design Consultant, design 15+ graphics a month, raising average post reach by 28%',
      'Built reusable Canva and Figma templates that cut content turnaround from 3 days to under 24 hours',
      'Coordinated recruitment outreach for Cohort 2 (2026)',
    ],
    stats: [
      { label: 'Youth leaders selected', value: '50' },
      { label: 'Countries', value: '18+' },
      { label: 'Post reach', value: '+28%' },
    ],
    tags: ['Youth Leadership', 'Storytelling', 'Global'],
    image: '/assets/images/impactImages/day2_Onboarding_fyby.png',
    gallery: [
      '/assets/images/impactImages/fyby1.png',
      '/assets/images/impactImages/fyby2.png',
    ],
    link: '',
    featured: true,
    published: true,
    order: 2,
  },
  {
    id: 'impact-millennium',
    title: 'Millennium Fellowship',
    period: 'Aug 2025 - Nov 2025',
    description:
      'Selected for the Class of 2025 of the Millennium Fellowship, run by the United Nations Academic Impact and the Millennium Campus Network, which develops student leaders advancing the UN Sustainable Development Goals.',
    category: 'community',
    achievements: [
      'Chosen from 60,000+ applicants across 7,500+ campuses',
      'With my team, implemented EduGo, a community initiative for junior high school students',
      'Ran sessions for young girls on hygiene and welfare, and donated sanitary pads',
      'Ran sessions on sustainable environmental practices, including tree planting',
      'Served as program planner, contributed to the sanitary pad donation, and helped run the sessions',
    ],
    stats: [
      { label: 'Students reached', value: '30+' },
      { label: 'Acceptance rate', value: '~4%' },
      { label: 'Countries', value: '20+' },
    ],
    tags: ['SDGs', 'Girls\' Welfare', 'Environment'],
    image: '/assets/images/impactImages/millennium_graduation.jpg',
    imagePosition: 'center 30%',
    gallery: [
      '/assets/images/impactImages/millennium_certificate.jpg',
      '/assets/images/impactImages/millennium_graduation.jpg',
    ],
    link: '',
    featured: true,
    published: true,
    order: 3,
  },
  {
    id: 'impact-bece-tutoring',
    title: 'Alma Mater Tutoring & BECE Prep',
    period: 'Oct 2022 - Dec 2023',
    description:
      'Returned to Machris Christian Academy for a full academic year to tutor junior high students and prepare two cohorts for the Basic Education Certificate Examination (BECE).',
    category: 'education',
    achievements: [
      'Mentored 60+ students weekly across Math, Science, and ICT',
      'Designed revision timetables, mock exams, and remedial classes',
      'Improved exam performance by 20% for about 60% of students',
    ],
    stats: [
      { label: 'Students', value: '60+' },
      { label: 'BECE cohorts', value: '2' },
      { label: 'Performance gain', value: '20%' },
    ],
    tags: ['Education', 'Mentorship', 'Community'],
    image: '/assets/images/impactImages/impact1_2.jpeg',
    gallery: [
      '/assets/images/impactImages/impact1_3.jpeg',
      '/assets/images/impactImages/impact1_4.jpeg',
    ],
    link: '',
    featured: false,
    published: true,
    order: 4,
  },
  {
    id: 'impact-peer-coach',
    title: 'CCAPS Peer Coach',
    period: 'Sep 2026 - Present',
    description:
      "Volunteer peer coach with Ashesi University's Counselling, Coaching & Academic Advising (CCA) Unit, offering fellow students support from someone who shares their experience.",
    category: 'education',
    achievements: [
      'Support students through active listening, coaching, and academic support',
      'Help students plan their academic goals and personal welfare',
      'Refer students to professional counselling and advising services when needed',
    ],
    tags: ['Student Support', 'Coaching', 'Wellbeing'],
    link: '',
    featured: false,
    published: true,
    order: 5,
  },
];

export default impactData;
