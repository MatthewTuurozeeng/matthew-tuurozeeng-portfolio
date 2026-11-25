import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import {
  BsEnvelope, BsLinkedin, BsGithub, BsWhatsapp, BsGeoAlt, BsCheck2, BsClipboard,
  BsCheckCircleFill, BsDownload, BsFileEarmarkText,
} from 'react-icons/bs';
import { ContactFormData } from '../services/api';
import {
  EMAIL, LINKEDIN_URL, GITHUB_URL, WHATSAPP_URL, RESUME_URL, WEB3FORMS_ACCESS_KEY,
} from '../constants/contact';

type Status = 'idle' | 'sending' | 'sent' | 'error';

const contactLinks = [
  { icon: <BsLinkedin />, label: 'LinkedIn', value: 'in/matthewtuurozeeng', href: LINKEDIN_URL },
  { icon: <BsGithub />, label: 'GitHub', value: 'MatthewTuurozeeng', href: GITHUB_URL },
  { icon: <BsWhatsapp />, label: 'WhatsApp', value: 'Chat with me', href: WHATSAPP_URL },
];

const Contact: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormData>();
  const [status, setStatus] = useState<Status>('idle');
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  const onSubmit: SubmitHandler<ContactFormData> = async (data) => {
    // Without a Web3Forms key, hand the message to the visitor's email app instead
    if (!WEB3FORMS_ACCESS_KEY) {
      const body = encodeURIComponent(`${data.message}\n\n${data.name}\n${data.email}`);
      window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(data.subject)}&body=${body}`;
      return;
    }

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          from_name: 'Portfolio contact form',
          subject: `Portfolio: ${data.subject}`,
          name: data.name,
          email: data.email,
          message: data.message,
          botcheck: data.botcheck ?? '',
        }),
      });
      const result = await response.json();
      if (!result.success) throw new Error(result.message);
      setStatus('sent');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <Container className="py-5">
      <Row className="g-5">
        <Col lg={5}>
          <h2 className="section-title">Get In Touch</h2>
          <p className="lead mb-4">
            Hiring for an internship, working on something meaningful, or just want to talk tech?
            I'd love to hear from you.
          </p>

          <div className="contact-availability">
            <span className="contact-status-pill">
              <span className="contact-status-dot" aria-hidden="true" />
              Available now
            </span>
            <strong>Open to internships and any real world project engagements</strong>
            <span className="contact-availability-sub">Full-time roles from May 2027</span>
          </div>

          <div className="contact-card">
            <span className="contact-card-icon"><BsEnvelope /></span>
            <div className="contact-card-text">
              <span className="contact-card-label">Email</span>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <button type="button" className="contact-copy" onClick={copyEmail} aria-label="Copy email address">
              {copied
                ? <><BsCheck2 aria-hidden="true" /><span className="contact-copy-text">Copied</span></>
                : <><BsClipboard aria-hidden="true" /><span className="contact-copy-text">Copy</span></>}
            </button>
          </div>

          {contactLinks.map((link) => (
            <a key={link.label} className="contact-card contact-card-link" href={link.href} target="_blank" rel="noopener noreferrer">
              <span className="contact-card-icon">{link.icon}</span>
              <span className="contact-card-text">
                <span className="contact-card-label">{link.label}</span>
                <span>{link.value}</span>
              </span>
            </a>
          ))}

          <p className="contact-location">
            <BsGeoAlt aria-hidden="true" /> Based in Ghana · Open to remote, hybrid, or relocation
          </p>

          <div className="d-flex flex-wrap gap-3">
            <a href={RESUME_URL} download className="btn btn-primary-custom">
              <BsDownload className="me-2" aria-hidden="true" />Download Resume
            </a>
            <Link to="/cv" className="btn btn-secondary-custom">
              <BsFileEarmarkText className="me-2" aria-hidden="true" />View CV
            </Link>
          </div>
        </Col>

        <Col lg={7}>
          <Card className="card-custom contact-form-card">
            <Card.Body>
              {status === 'sent' ? (
                <div className="contact-success" role="status">
                  <BsCheckCircleFill aria-hidden="true" />
                  <h4>Thanks, your message is on its way!</h4>
                  <p>I'll get back to you by email within 24–48 hours.</p>
                  <Button className="btn-secondary-custom" onClick={() => setStatus('idle')}>
                    Send another message
                  </Button>
                </div>
              ) : (
                <>
                  <h4 className="contact-form-title">Send a Message</h4>
                  <p className="contact-form-subtitle">It goes to my inbox.</p>

                  {status === 'error' && (
                    <div className="alert alert-danger" role="alert">
                      Something went wrong sending your message. Please try again, or email me
                      directly at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
                    </div>
                  )}

                  <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                    {/* Honeypot field: hidden from people, filled in by spam bots */}
                    <input type="checkbox" className="d-none" tabIndex={-1} autoComplete="off" {...register('botcheck')} />

                    <Row>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="contact-name">
                          <Form.Label>Name</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Your full name"
                            autoComplete="name"
                            {...register('name', { required: 'Please enter your name' })}
                            isInvalid={!!errors.name}
                          />
                          <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                      <Col md={6}>
                        <Form.Group className="mb-3" controlId="contact-email">
                          <Form.Label>Email</Form.Label>
                          <Form.Control
                            type="email"
                            placeholder="you@example.com"
                            autoComplete="email"
                            {...register('email', {
                              required: 'Please enter your email',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Please enter a valid email address',
                              },
                            })}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="contact-subject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="e.g. Internship opportunity"
                        {...register('subject', { required: 'Please add a subject' })}
                        isInvalid={!!errors.subject}
                      />
                      <Form.Control.Feedback type="invalid">{errors.subject?.message}</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-4" controlId="contact-message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={6}
                        placeholder="Tell me a bit about the role or project…"
                        {...register('message', {
                          required: 'Please write a message',
                          minLength: { value: 10, message: 'Message must be at least 10 characters' },
                        })}
                        isInvalid={!!errors.message}
                      />
                      <Form.Control.Feedback type="invalid">{errors.message?.message}</Form.Control.Feedback>
                    </Form.Group>

                    <Button type="submit" className="btn-primary-custom w-100" size="lg" disabled={status === 'sending'}>
                      {status === 'sending' ? 'Sending…' : 'Send Message'}
                    </Button>
                  </Form>
                </>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
