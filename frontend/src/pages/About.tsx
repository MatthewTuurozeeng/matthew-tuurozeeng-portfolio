import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import profileData from '../data/Profile';
import Timeline, { TimelineItem } from '../components/Timeline';
import certificates from '../data/certificates';
import CertificateCard from '../components/CertificateCard';

interface Skill {
  category: string;
  skills: string[];
}

interface Principle {
  title: string;
  description: string;
  color?: string;
}

const About: React.FC = () => {
  const { name, title, bio, profileImage, careerGoals, skills, principles } = profileData;

  const skillGroups: Skill[] = [
    { category: 'Frontend', skills: skills.frontend },
    { category: 'Backend', skills: skills.backend },
    { category: 'Databases', skills: skills.databases },
    { category: 'Tools & Others', skills: skills.tools },
  ];

  const educationTimeline: TimelineItem[] = [
    {
      title: 'Ashesi University',
      subtitle: 'BSc. Computer Science',
      duration: '2023 - May 2027 (Expected)',
      description: 'Focused on full-stack development, data analysis, and building scalable software systems.',
      details: [
        "Dean's List, Spring Semester (2025/2026)",
        'Mastercard Foundation Scholar',
      ],
      coursework: [
        'Data Structures',
        'Algorithm Design & Analysis',
        'Artificial Intelligence',
        'Machine Learning',
        'Software Engineering',
        'Web Development',
        'Databases',
        'Operating Systems (In Progress)',
        'Information & Systems Security (In Progress)',
      ],
    },
    {

  title: "Nandom Senior High School (St. Michael's Boys)",

  subtitle: "General Science",

  duration: "Aug 2019  - Sep 2022",

  description: "Completed secondary education in General Science, developing a strong foundation in analytical reasoning and problem-solving.",

  details: [

    "Studied core science subjects: Physics, Chemistry, Biology, and Mathematics",
    "Awarded West African Senior School Certificate Examination (WASSCE)",

  ]

}
  ];

  const experienceTimeline: TimelineItem[] = [
    {
      title: 'CCAPS Peer Coach (Volunteer)',
      subtitle: 'Counselling, Coaching & Academic Advising Unit, Ashesi University',
      duration: 'Sep 2026 - Present',
      description: 'Provide peer-level support to fellow students through listening, coaching, academic support, and referrals.',
      achievements: [
        'Guiding students to plan their academic goals and personal welfare',
        'Connecting students to counselling and advising services when they need more support',
      ],
    },

    {
      title: 'Automation & Development Intern',
      subtitle: 'CalBank PLC, Accra',
      duration: 'Jun 2026',
      description: 'Built an AI-powered customer support chatbot prototype on top of the bank’s knowledge base.',
      achievements: [
        'Developed the chatbot with React, Node.js/Express, and a RAG pipeline using ChromaDB',
        'Identified accessibility and customer-experience improvements across CalBank’s digital platforms',
      ],
    },

    {
      title: 'Social Media Design Consultant (Volunteer)',
      subtitle: 'Talloires Network of Engaged Universities, Tufts University',
      duration: 'Feb 2026 - Present',
      description: 'Design social media content and provide creative guidance to enhance digital engagement and outreach.',
      challenges: ['Maintaining consistent visual identity across multiple campaigns', 'Balancing storytelling with limited time and resources'],
      achievements: ['Building reusable content templates to speed up production', 'Improving campaign clarity and engagement through improved layouts'],
    },

    {
      title: 'Founder & Program Lead',
      subtitle: 'Computing4All Initiative',
      duration: 'Dec 2025 - Present',
      description: 'Community digital literacy program teaching schoolchildren foundational computing skills.',
      challenges: ['Limited access to devices and stable internet', 'Designing lessons suitable for mixed learning levels'],
      achievements: ['Delivering hands-on sessions to 50+ learners', 'Building a repeatable curriculum for future cohorts'],
    },
    {
      title: 'Founder & CEO',
      subtitle: 'Sensorba LTD',
      duration: '2024  - Present',
      description: 'Leading an agribusiness venture focused on improving tiger nut production, value addition, and market access.',
      challenges: ['Coordinating production logistics across rural communities', 'Building a reliable supply chain with limited digital infrastructure'],
      achievements: ['Launched pilot production cycles and formalized farmer partnerships', 'Applying product/tech thinking to streamline operations'],
    },

    {
      title: 'Machris Christian Academy',
      subtitle: 'BECE Preparation & Alumni Service',
      duration: 'Oct 2022 - Dec 2023',
      description: 'Returned to mentor and tutor students, supporting two BECE cohorts with structured revision programs.',
      details: ['Delivered weekly tutoring and mock exams', 'Improved learner confidence and exam readiness'],
    },
  
  ];

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Container className="py-5">
      <h2 className="section-title">About Me</h2>

      <Row className="align-items-center justify-content-center">
        <Col lg={5} className="text-center mb-4 mb-lg-0">
          <img src={profileImage} alt={name} className="about-profile-image" />
        </Col>

        <Col lg={7}>
          <h3 style={{ color: '#994545' }}>{title}</h3>
          <p className="lead">{bio}</p>
          <p style={{ whiteSpace: 'pre-line' }}>{careerGoals}</p>
        </Col>
      </Row>

      {/* Anchor buttons below the profile section */}
      <div className="mt-5 flex flex-wrap gap-4">
        <button
          onClick={() => scrollTo('education')}
          className="px-4 py-2 rounded-full border border-[#994545] text-[#994545] hover:bg-[#994545] hover:text-white transition"
        >
          Education
        </button>
        <button
          onClick={() => scrollTo('experience')}
          className="px-4 py-2 rounded-full border border-[#994545] text-[#994545] hover:bg-[#994545] hover:text-white transition"
        >
          Experience
        </button>
      </div>

      <div className="mt-5">
        <h3 style={{ color: '#994545' }} className="mb-4">
          Technical Skills
        </h3>
        <Row>
          {skillGroups.map((group) => (
            <Col key={group.category} md={6} className="mb-4">
              <h5>{group.category}</h5>
              <div>
                {group.skills.map((skill) => (
                  <span key={skill} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </div>

      <div className="mt-5">
        <h3 style={{ color: '#994545' }}>Core Principles</h3>
        <Row className="mt-4">
          {principles.map((principle: Principle) => (
            <Col key={principle.title} md={4} className="mb-3">
              <Card className="card-custom">
                <Card.Body>
                  <h5 style={{ color: principle.color || '#994545' }}>{principle.title}</h5>
                  <p>{principle.description}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div id="education" className="mt-5">
        <h3 className="text-[#994545] text-2xl font-semibold mb-4">Education</h3>
        <Timeline items={educationTimeline} variant="education" />
      </div>

      <div id="experience" className="mt-5">
        <h3 className="text-[#994545] text-2xl font-semibold mb-4">Work Experience</h3>
        <Timeline items={experienceTimeline} variant="experience" />
      </div>

      <div className="mt-5">
        <h3 style={{ color: '#994545' }} className="mb-4">
          Certifications & Programs
        </h3>
        <Row className="g-4">
          {certificates.map((certificate) => (
            <Col key={certificate.id} md={6} lg={4}>
              <CertificateCard certificate={certificate} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );

};

export default About;