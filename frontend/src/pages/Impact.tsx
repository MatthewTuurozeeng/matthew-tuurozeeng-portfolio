import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner, Badge } from 'react-bootstrap';
import ImageWithFallback from '../components/ImageWithFallback';
import ImageGallery from '../components/ImageGallery';
import { getImpactInitiatives, ImpactInitiative } from '../services/api';

const Impact: React.FC = () => {
  const [initiatives, setInitiatives] = useState<ImpactInitiative[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImpacts = async () => {
      try {
        setInitiatives(await getImpactInitiatives());
      } finally {
        setLoading(false);
      }
    };
    fetchImpacts();
  }, []);

  if (loading) {
    return (
      <Container className="py-5 text-center">
        <Spinner animation="border" style={{ color: '#994545' }}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p className="mt-3">Loading impact initiatives...</p>
      </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="section-title">Impact & Leadership</h2>
      <p className="lead mb-4">Community engagement, fellowships, and social initiatives</p>


      <Row>
        {initiatives.map((initiative) => (
          <Col key={initiative.id} lg={6} className="mb-4">
            <Card className="card-custom h-100">
              {initiative.image && (
                <ImageWithFallback
                  src={initiative.image}
                  alt={initiative.title}
                  style={{ height: '200px', objectFit: 'cover', width: '100%' }}
                />
              )}
              <Card.Body>
                {initiative.category && (
                  <Badge bg="secondary" className="mb-2">{initiative.category}</Badge>
                )}
                <h4 style={{ color: initiative.color || '#994545' }}>{initiative.title}</h4>
                {initiative.period && (
                  <p className="text-muted mb-3">{initiative.period}</p>
                )}
                <p>{initiative.description}</p>

                {/* achievements from DB or fallback */}
                {initiative.achievements && initiative.achievements.length > 0 && (
                  <ul>
                    {initiative.achievements.map((achievement, idx) => (
                      <li key={idx}>{achievement}</li>
                    ))}
                  </ul>
                )}

                {/* stats from DB */}
                {initiative.stats && initiative.stats.length > 0 && (
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {initiative.stats.map((s, i) => (
                      <div key={i} className="text-center p-2 bg-light rounded">
                        <div style={{ color: '#994545', fontWeight: 'bold' }}>{s.value}</div>
                        <small className="text-muted">{s.label}</small>
                      </div>
                    ))}
                  </div>
                )}

                {/* tags from DB */}
                {initiative.tags && initiative.tags.length > 0 && (
                  <div className="d-flex flex-wrap gap-1 mt-2">
                    {initiative.tags.map(tag => (
                      <Badge key={tag} bg="light" text="dark" className="border">{tag}</Badge>
                    ))}
                  </div>
                )}

                {/* gallery from fallback or DB */}
                {initiative.gallery && initiative.gallery.length > 0 && (
                  <div className="mt-3">
                    <h6 style={{ color: initiative.color || '#994545', fontSize: '0.9rem' }}>Gallery:</h6>
                    <ImageGallery images={initiative.gallery} title={initiative.title} />
                  </div>
                )}

                {initiative.link && (
                  <div className="mt-3">
                    <a
                      href={initiative.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-sm btn-primary-custom"
                    >
                      Learn More
                    </a>
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Impact;