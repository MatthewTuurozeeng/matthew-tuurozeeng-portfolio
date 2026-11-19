import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Spinner } from 'react-bootstrap';
import ImageWithFallback from '../components/ImageWithFallback';
import ImageGallery from '../components/ImageGallery';
import { getImpactInitiatives, ImpactInitiative } from '../services/api';
import CountUp from '../components/CountUp';

const Impact: React.FC = () => {
  const [initiatives, setInitiatives] = useState<ImpactInitiative[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImpacts = async () => {
      try {
        const data = await getImpactInitiatives();
        setInitiatives(data.filter((i) => i.published).sort((a, b) => a.order - b.order));
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

  const summary = [
    { value: '140+', label: 'Young people reached' },
    { value: String(initiatives.length), label: 'Initiatives & programs' },
    { value: '2', label: 'Global fellowships' },
    { value: '20+', label: 'Countries in my networks' },
  ];

  return (
    <Container className="py-5">
      <h2 className="section-title">Impact & Leadership</h2>
      <p className="lead mb-4">Community engagement, fellowships, and social initiatives</p>

      <div className="impact-summary mb-5">
        {summary.map((s) => (
          <div key={s.label} className="impact-summary-item reveal">
            <div className="impact-summary-value"><CountUp value={s.value} /></div>
            <div className="impact-summary-label">{s.label}</div>
          </div>
        ))}
      </div>

      <Row>
        {initiatives.map((initiative) => (
          <Col key={initiative.id} lg={6} className="mb-4 reveal">
            <Card className="card-custom impact-card h-100">
              {initiative.image ? (
                <div className="card-media" style={{ height: '200px', overflow: 'hidden' }}>
                  <ImageWithFallback
                    src={initiative.image}
                    alt={initiative.title}
                    style={{ height: '200px', objectFit: 'cover', width: '100%', objectPosition: initiative.imagePosition || 'center' }}
                  />
                </div>
              ) : (
                <div className="impact-cover impact-cover-placeholder">
                  <span>{initiative.title}</span>
                </div>
              )}

              <Card.Body>
                <div className="impact-header">
                  <h4 className="impact-title">{initiative.title}</h4>
                  {initiative.period && <span className="impact-period">{initiative.period}</span>}
                </div>

                {initiative.stats && initiative.stats.length > 0 && (
                  <div className="impact-stats">
                    {initiative.stats.map((s) => (
                      <div key={s.label} className="impact-stat">
                        <div className="impact-stat-value"><CountUp value={s.value} /></div>
                        <div className="impact-stat-label">{s.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                <p className="impact-description">{initiative.description}</p>

                {initiative.achievements && initiative.achievements.length > 0 && (
                  <>
                    <h6 className="impact-subheading">What I did</h6>
                    <ul className="impact-list">
                      {initiative.achievements.map((achievement) => (
                        <li key={achievement}>{achievement}</li>
                      ))}
                    </ul>
                  </>
                )}

                {initiative.gallery && initiative.gallery.length > 0 && (
                  <div className="mt-3">
                    <h6 className="impact-subheading">Gallery</h6>
                    <ImageGallery images={initiative.gallery} title={initiative.title} />
                  </div>
                )}

                {initiative.tags && initiative.tags.length > 0 && (
                  <div className="impact-tags">
                    {initiative.tags.map((tag) => (
                      <span key={tag} className="impact-tag">{tag}</span>
                    ))}
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
