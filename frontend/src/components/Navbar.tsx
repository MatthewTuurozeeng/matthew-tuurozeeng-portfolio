import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar as BSNavbar } from 'react-bootstrap';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/impact', label: 'Impact' },
  { to: '/cv', label: 'CV' },
  { to: '/contact', label: 'Contact' },
];

const Navbar: React.FC = () => {
  return (
    <BSNavbar expand="lg" className="navbar-custom" sticky="top" collapseOnSelect>
      <Container>
        <BSNavbar.Brand as={Link} to="/">
          Matthew Tuurozeeng
        </BSNavbar.Brand>
        <BSNavbar.Toggle aria-controls="navbar-nav" />
        <BSNavbar.Collapse id="navbar-nav">
          <Nav className="ms-auto">
            {links.map(({ to, label }) => (
              <Nav.Link key={to} as={NavLink} to={to} eventKey={to} end={to === '/'}>
                {label}
              </Nav.Link>
            ))}
          </Nav>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
};

export default Navbar;
