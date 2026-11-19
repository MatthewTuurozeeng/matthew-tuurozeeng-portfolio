import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { BsGeoAlt, BsMortarboard, BsAward, BsBriefcase } from 'react-icons/bs';
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
    { category: 'Languages', skills: skills.languages },
    { category: 'Frontend', skills: skills.frontend },
    { category: 'Backend & Cloud', skills: skills.backend },
    { category: 'Databases', skills: skills.databases },
    { category: 'AI / ML', skills: skills.ai },
    { category: 'Tools', skills: skills.tools },
  ];

  const quickFacts = [
    { icon: <BsGeoAlt />, text: 'Ghana' },
    { icon: <BsMortarboard />, text: "BSc Computer Science, Ashesi '27" },
    { icon: <BsAward />, text: 'Mastercard Foundation Scholar' },
    { icon: <BsBriefcase />, text: 'Open to internships' },
  ];

  const sections = [
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
  ];

  const educationTimeline: TimelineItem[] = [
    {
      title: 'Ashesi University',
      subtitle: 'BSc. Computer Science',
      duration: '2023 - May 2027 (Expected)',
      description: 'Focused on full-stack development, AI Automation, and building scalable software systems.',
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

      <Row className="align-items-center g-5 about-intro">
        <Col lg={5} className="text-center">
          <div className="about-photo-frame">
            <img src={profileImage} alt={name} className="about-profile-image" />
            <span className="about-photo-badge">CS @ Ashesi '27</span>
          </div>
        </Col>

        <Col lg={7}>
          <p className="about-eyebrow">{title}</p>
          <h3 className="about-heading">Hi, I'm {name.split(' ')[0]}.</h3>
          <p className="lead">{bio}</p>
          {careerGoals.split('\n\n').map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="about-text">{paragraph}</p>
          ))}

          <ul className="about-facts">
            {quickFacts.map((fact) => (
              <li key={fact.text}>
                <span className="about-fact-icon">{fact.icon}</span>
                {fact.text}
              </li>
            ))}
          </ul>

          <div className="d-flex flex-wrap gap-3 mt-4">
            <a href="/documents/Matthew_Tuurozeeng_Resume.pdf" download className="btn btn-primary-custom">
              Download Resume
            </a>
            <Link to="/contact" className="btn btn-secondary-custom">
              Contact Me
            </Link>
          </div>
        </Col>
      </Row>

      <nav className="about-section-nav" aria-label="About page sections">
        {sections.map((section) => (
          <button key={section.id} type="button" onClick={() => scrollTo(section.id)}>
            {section.label}
          </button>
        ))}
      </nav>

      <div id="skills" className="about-section">
        <h3 className="about-section-title">Technical Skills</h3>
        <Row>
          {skillGroups.map((group) => (
            <Col key={group.category} md={6} lg={4} className="mb-4">
              <h5 className="about-skill-group">{group.category}</h5>
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

      <div className="about-section">
        <h3 className="about-section-title">Core Principles</h3>
        <Row>
          {principles.map((principle: Principle) => (
            <Col key={principle.title} md={4} className="mb-3 reveal">
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

      <div id="education" className="about-section">
        <h3 className="about-section-title">Education</h3>
        <Timeline items={educationTimeline} variant="education" />
      </div>

      <div id="experience" className="about-section">
        <h3 className="about-section-title">Work Experience</h3>
        <Timeline items={experienceTimeline} variant="experience" />
      </div>

      <div id="certifications" className="about-section">
        <h3 className="about-section-title">Certifications & Programs</h3>
        <Row className="g-4">
          {certificates.map((certificate) => (
            <Col key={certificate.id} md={6} lg={4} className="reveal">
              <CertificateCard certificate={certificate} />
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );

};

export default About;