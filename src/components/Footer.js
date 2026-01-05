import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Footer.css';

const Footer = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer" ref={ref}>
      <div className="footer-background">
        <div className="footer-grid-pattern"></div>
      </div>

      <div className="container">
        <motion.div 
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <div className="footer-main">
            <div className="footer-brand">
              <motion.div 
                className="footer-logo"
                whileHover={{ scale: 1.05 }}
              >
                <span className="logo-text">TicSheets</span>
                <span className="logo-version">v1.5.1</span>
              </motion.div>
              <p className="footer-description">
                The future of productivity management on Android. Built with precision, 
                designed for excellence, and crafted with the Nothing OS philosophy 
                of functional minimalism.
              </p>
              <div className="footer-stats">
                <div className="footer-stat">
                  <span className="stat-number">Android</span>
                  <span className="stat-label">Ready</span>
                </div>
                <div className="footer-stat">
                  <span className="stat-number">Build 28</span>
                  <span className="stat-label">Latest</span>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <div className="footer-section">
                <h4>Navigation</h4>
                <ul>
                  <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
                  <li><button onClick={() => scrollToSection('features')}>Features</button></li>
                  <li><button onClick={() => scrollToSection('screenshots')}>Screenshots</button></li>
                  <li><button onClick={() => scrollToSection('tech-stack')}>Technology</button></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Product</h4>
                <ul>
                  <li><button onClick={() => scrollToSection('wishlist')}>Join Wishlist</button></li>
                  <li><span className="coming-soon">Download APK <small>(Coming Soon)</small></span></li>
                  <li><span className="coming-soon">Documentation <small>(Coming Soon)</small></span></li>
                  <li><span className="coming-soon">API Access <small>(Coming Soon)</small></span></li>
                </ul>
              </div>

              <div className="footer-section">
                <h4>Features</h4>
                <ul>
                  <li>Task Management</li>
                  <li>Smart Notifications</li>
                  <li>Offline Support</li>
                  <li>Real-time Sync</li>
                </ul>
              </div>
            </div>
          </div>

          <motion.div 
            className="footer-tech-highlight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="tech-badges">
              <div className="tech-badge">
                <span className="badge-icon">⬢</span>
                <span>Android Native</span>
              </div>
              <div className="tech-badge">
                <span className="badge-icon">☁</span>
                <span>Cloud Powered</span>
              </div>
              <div className="tech-badge">
                <span className="badge-icon">⚡</span>
                <span>High Performance</span>
              </div>
              <div className="tech-badge">
                <span className="badge-icon">◐</span>
                <span>Nothing OS Design</span>
              </div>
            </div>
          </motion.div>

          <div className="footer-bottom">
            <div className="footer-bottom-content">
              <div className="footer-copyright">
                <p>&copy; 2024 TicSheets. Built with precision and passion.</p>
                <p className="footer-subtitle">
                  Inspired by Nothing OS design philosophy - Functional Minimalism
                </p>
              </div>

              <motion.button 
                className="back-to-top"
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <span className="back-to-top-icon">↑</span>
                <span>Back to Top</span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;