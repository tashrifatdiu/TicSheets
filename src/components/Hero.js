import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Hero.css';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="hero" className="hero" ref={ref}>
      <div className="hero-background">
        <div className="grid-pattern"></div>
        <div className="floating-elements">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-element"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + i * 10}%`,
                animationDelay: `${i * 0.5}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="hero-announcement" variants={itemVariants}>
            <div className="announcement-badge ai-badge">
              <span className="announcement-icon">🤖</span>
              <span className="announcement-text">NEW: AI Voice Task Creation</span>
            </div>
            <div className="announcement-badge wishlist-badge">
              <span className="announcement-icon">✦</span>
              <span className="announcement-text">Wishlist Now Open</span>
            </div>
            <div className="hero-badge">
              <span className="badge-text">Android Ready</span>
              <span className="badge-version">Build 28</span>
            </div>
          </motion.div>

          <motion.div className="ai-highlight-banner" variants={itemVariants}>
            <div className="ai-banner-content">
              <span className="ai-icon">🎤</span>
              <div className="ai-banner-text">
                <span className="ai-title">AI-Powered Task Creation</span>
                <span className="ai-subtitle">Just speak or type - AI adds tasks automatically</span>
              </div>
            </div>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            TicSheets
            <span className="title-accent">Productivity Redefined</span>
          </motion.h1>

          <motion.p className="hero-description" variants={itemVariants}>
            Experience the future of task management on Android with our Nothing OS inspired design. 
            <strong> Now featuring AI-powered voice and text commands</strong> - just speak or type naturally, 
            and TicSheets automatically creates tasks for you. Combined with intelligent notifications, 
            offline-first architecture, and seamless synchronization in a beautifully minimalist interface.
          </motion.p>

          <motion.div className="hero-stats" variants={itemVariants}>
            <div className="stat">
              <span className="stat-number">100%</span>
              <span className="stat-label">Offline Ready</span>
            </div>
            <div className="stat">
              <span className="stat-number">15K+</span>
              <span className="stat-label">Lines of Code</span>
            </div>
            <div className="stat">
              <span className="stat-number">85+</span>
              <span className="stat-label">Components</span>
            </div>
          </motion.div>

          <motion.div className="hero-actions" variants={itemVariants}>
            <motion.a 
              href="#wishlist" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Wishlist
            </motion.a>
            <motion.a 
              href="#features" 
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Features
            </motion.a>
          </motion.div>

          <motion.div className="hero-features-preview" variants={itemVariants}>
            <div className="feature-pill ai-pill">
              <span className="feature-icon">🤖</span>
              <span>AI Voice Commands</span>
            </div>
            <div className="feature-pill">
              <span className="feature-icon">⬢</span>
              <span>Android Native</span>
            </div>
            <div className="feature-pill">
              <span className="feature-icon">⟲</span>
              <span>Real-time Sync</span>
            </div>
            <div className="feature-pill">
              <span className="feature-icon">◈</span>
              <span>Nothing OS Design</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="scroll-arrow"></div>
        <span>Scroll to explore</span>
      </motion.div>
    </section>
  );
};

export default Hero;