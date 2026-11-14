import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner, Alert, Button } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { getProjects, Project } from '../services/api';

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setProjects(await getProjects());
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const categories = ['All', ...Array.from(new Set(projects.map(p => p.category).filter(Boolean)))];
  const filtered = filter === 'All' ? projects : projects.filter(p => p.category === filter);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" role="status" style={{ color: '#994545' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading projects...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="section-title">Projects</h2>
      <p className="lead mb-4">A showcase of my technical work and creative solutions</p>


      {/* Category filter */}
      <div className="d-flex gap-2 flex-wrap mb-4">
        {categories.map(cat => (
          <Button
            key={cat}
            size="sm"
            onClick={() => setFilter(cat)}
            className={filter === cat ? 'btn-primary-custom' : ''}
            variant={filter === cat ? undefined : 'outline-secondary'}
          >
            {cat}
          </Button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <Alert variant="info">No projects available in this category.</Alert>
      ) : (
        <Row>
          {filtered.map((project) => (
            <Col key={project.id} lg={4} md={6} className="mb-4">
              <ProjectCard project={project} />
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default Projects;