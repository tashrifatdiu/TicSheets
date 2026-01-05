import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './TechStack.css';

const TechStack = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const techCategories = [
    {
      title: 'Android Excellence',
      technologies: [
        { name: 'Native Performance', description: 'Optimized for Android devices', icon: '⬢' },
        { name: 'Modern Framework', description: 'Built with latest mobile technologies', icon: '◈' },
        { name: 'Battery Optimized', description: 'Efficient power consumption', icon: '⚡' },
        { name: 'Material Design', description: 'Nothing OS inspired interface', icon: '◐' }
      ]
    },
    {
      title: 'Cloud Infrastructure',
      technologies: [
        { name: 'Scalable Backend', description: 'Enterprise-grade cloud services', icon: '☁' },
        { name: 'Secure Authentication', description: 'Advanced user security', icon: '⬟' },
        { name: 'Real-time Updates', description: 'Instant synchronization', icon: '⟲' },
        { name: 'Data Storage', description: 'Reliable and secure data management', icon: '◪' }
      ]
    },
    {
      title: 'Core Capabilities',
      technologies: [
        { name: 'Offline-First', description: 'Works without internet connection', icon: '⟐' },
        { name: 'Smart Notifications', description: 'Intelligent reminder system', icon: '◢' },
        { name: 'Activity Analytics', description: 'Comprehensive productivity insights', icon: '◯' },
        { name: 'Link Management', description: 'Advanced content organization', icon: '⬛' }
      ]
    },
    {
      title: 'Quality & Reliability',
      technologies: [
        { name: 'Production Ready', description: 'Thoroughly tested and optimized', icon: '✓' },
        { name: 'Error Handling', description: 'Robust error recovery systems', icon: '⬜' },
        { name: 'Performance Monitoring', description: 'Continuous optimization', icon: '⬝' },
        { name: 'Data Integrity', description: 'Reliable data synchronization', icon: '⟡' }
      ]
    }
  ];

  const stats = [
    { number: '15,000+', label: 'Lines of Code', icon: '⬢' },
    { number: '85+', label: 'Total Files', icon: '◯' },
    { number: '100%', label: 'Android Ready', icon: '⬛' },
    { number: '10+', label: 'Services', icon: '◪' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="tech-stack" className="tech-stack" ref={ref}>
      <div className="container">
        <motion.div 
          className="tech-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Built for Excellence</h2>
          <p>Engineered with modern technologies and best practices for performance, reliability, and user experience.</p>
        </motion.div>

        <motion.div 
          className="tech-stats"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              className="tech-stat"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-content">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="tech-categories"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {techCategories.map((category, categoryIndex) => (
            <motion.div 
              key={categoryIndex}
              className="tech-category"
              variants={itemVariants}
            >
              <h3>{category.title}</h3>
              <div className="tech-grid">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div 
                    key={techIndex}
                    className="tech-item"
                    whileHover={{ 
                      scale: 1.03,
                      transition: { duration: 0.2 }
                    }}
                  >
                    <div className="tech-icon">{tech.icon}</div>
                    <div className="tech-content">
                      <h4>{tech.name}</h4>
                      <p>{tech.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="tech-highlight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="highlight-content">
            <h3>Production Ready Architecture</h3>
            <div className="architecture-features">
              <div className="arch-feature">
                <span className="arch-icon">⬢</span>
                <div>
                  <h4>Modular Design</h4>
                  <p>Clean separation of concerns with reusable components</p>
                </div>
              </div>
              <div className="arch-feature">
                <span className="arch-icon">⟲</span>
                <div>
                  <h4>Real-time Sync</h4>
                  <p>Optimistic updates with conflict resolution</p>
                </div>
              </div>
              <div className="arch-feature">
                <span className="arch-icon">⟐</span>
                <div>
                  <h4>Offline First</h4>
                  <p>Complete functionality without internet connection</p>
                </div>
              </div>
              <div className="arch-feature">
                <span className="arch-icon">⚡</span>
                <div>
                  <h4>Performance</h4>
                  <p>Optimized for speed and memory efficiency</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;