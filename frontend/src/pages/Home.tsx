import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PROFILE_IMAGE, HERO_BACKGROUND } from '../constants/media';
import profileData from '../data/Profile';
import projectsData from '../data/Projects';
import impactData from '../data/Impact';
import ProjectCard from '../components/ProjectCard';
import CountUp from '../components/CountUp';
import fullstackImg from "/assets/images/homeImages/full-stack.jpg";
import learningImg from "/assets/images/homeImages/learning.jpg";
import innovationImg from "/assets/images/homeImages/innovate.jpg";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const { name, title, bio, profileImage } = profileData;
  const stats = [
    { label: 'Projects Built', value: projectsData.length },
    { label: 'Impact Initiatives', value: impactData.length },
    { label: 'Technologies Used', value: Object.values(profileData.skills).flat().length },
  ];

  const featuredProjects = projectsData
    .filter((project) => project.published && project.featured)
    .sort((a, b) => a.order - b.order)
    .slice(0, 3);

  const openTo = [
    { title: 'Internships', focus: 'Full-Stack, Product Engineering', timing: 'Available now' },
    { title: 'Research & Impact Collaborations', focus: 'Civic tech, education, youth leadership', timing: 'Ongoing' },
    { title: 'Full-Time Roles', focus: 'Software Engineer / Product Builder', timing: 'From May 2027' },
  ];

  return (
    <>
      <div
        className="hero-section text-center"
        style={{
          backgroundImage: `
              linear-gradient(
                rgba(0, 0, 0, 0.45),
                rgba(0, 0, 0, 0.45)
              ),
              url(${HERO_BACKGROUND})
            `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        <Container>
          <div className="mb-4 hero-anim">
            <img
              src={profileImage || PROFILE_IMAGE}
              alt={name}
              style={{
                width: '180px',
                height: '180px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '5px solid white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
              }}
              onError={(e) => {
                e.currentTarget.src = PROFILE_IMAGE;
              }}
            />
          </div>

          <h1 className="display-3 fw-bold mb-2 hero-anim hero-anim-1">{name}</h1>
          <h3 className="fw-semibold mb-4 hero-anim hero-anim-2">{title}</h3>
          <p className="lead mb-5 hero-anim hero-anim-3">{bio}</p>

          <div className="d-flex gap-3 justify-content-center flex-wrap hero-anim hero-anim-4">
            <Button onClick={() => navigate('/projects')} className="btn-primary-custom" size="lg">
              View Projects
            </Button>
            <Button
              as="a"
              href="/documents/Matthew_Tuurozeeng_Resume.pdf"
              download
              variant="outline-light"
              size="lg"
            >
              Download Resume
            </Button>
            <Button onClick={() => navigate('/contact')} variant="outline-light" size="lg">
              Contact Me
            </Button>
          </div>
        </Container>
      </div>

      <Container className="py-5">
        <div className="d-flex justify-content-between align-items-end flex-wrap gap-2 mb-4">
          <h2 className="section-title mb-0">Featured Projects</h2>
          <Button onClick={() => navigate('/projects')} className="btn-secondary-custom">
            View all projects
          </Button>
        </div>
        <Row className="g-4">
          {featuredProjects.map((project) => (
            <Col key={project.id} md={6} lg={4} className="reveal">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="pb-5">
        <div className="availability-section mb-5">
          <div className="availability-header">
            <h3>Open To</h3>
          </div>
          <Row className="g-3">
            {openTo.map((item) => (
              <Col key={item.title} md={4} className="reveal">
                <div className="open-to-card">
                  <h4>{item.title}</h4>
                  <p>{item.focus}</p>
                  <span>{item.timing}</span>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <Row className="text-center mb-5">
          {stats.map((stat) => (
            <Col key={stat.label} md={4} className="mb-4 reveal">
              <div className="p-4 shadow-sm rounded" style={{ background: '#fff5f5' }}>
                <div style={{ fontSize: '3rem', color: '#994545', fontWeight: 700 }}>
                  <CountUp value={`${stat.value}+`} />
                </div>
                <p className="fw-semibold mb-0">{stat.label}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      <Container className="py-5">
  <Row className="text-center">

    <Col md={4} className="mb-4 reveal">
      <div className="feature-card">
        <img
          src={fullstackImg}
          alt="Full-Stack Development"
          className="feature-image"
        />

        <h4 className="feature-title">
          Full-Stack Development
        </h4>

        <p className="feature-text">
          Building scalable web applications with modern technologies
        </p>
      </div>
    </Col>

    <Col md={4} className="mb-4 reveal">
      <div className="feature-card">
        <img
          src={learningImg}
          alt="Continuous Learning"
          className="feature-image"
          
        />

        <h4 className="feature-title">
          Continuous Learning
        </h4>

        <p className="feature-text">
          Passionate about staying current with industry trends
        </p>
      </div>
    </Col>

    <Col md={4} className="mb-4 reveal">
      <div className="feature-card">
        <img
          src={innovationImg}
          alt="Innovation"
          className="feature-image"
        />

        <h4 className="feature-title">
          Innovation
        </h4>

        <p className="feature-text">
          Creating solutions that make a real-world impact
        </p>
      </div>
    </Col>

  </Row>
</Container>
    </>
  );
};

export default Home;