import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AppRoutes from './routes/AppRoutes';
import useScrollReveal from './hooks/useScrollReveal';

const App: React.FC = () => {
  useScrollReveal();

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navbar />
        <div className="flex-grow-1">
          <AppRoutes />
        </div>
        <Footer />
      </div>
      <Analytics />
    </Router>
  );
};

export default App;
