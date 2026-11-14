import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Projects from '../pages/Projects';
import Impact from '../pages/Impact';
import Contact from '../pages/Contact';
import CV from '../pages/CV';

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/impact" element={<Impact />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cv" element={<CV />} />
    </Routes>
  );
};

export default AppRoutes;
