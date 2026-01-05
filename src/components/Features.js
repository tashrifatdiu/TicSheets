import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Features.css';

const Features = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const features = [
    {
      icon: '⬛',
      title: 'Smart Task Management',
      description: 'Create tasks with intelligent time selection, categories, and status tracking. Support for general, timed start, and timed range tasks.',
      details: ['General Tasks', 'Timed Start Tasks', 'Timed Range Tasks', 'Smart Categories']
    },
    {
      icon: '◯',
      title: 'Advanced Calendar System',
      description: 'GitHub-style contribution calendar with activity tracking, date-based filtering, and task density indicators.',
      details: ['Today View', 'Active Tasks', 'History View', 'Activity Heatmap']
    },
    {
      icon: '◢',
      title: 'Intelligent Notifications',
      description: 'Smart notification system with pre-start reminders, quiet hours support, and battery optimization bypass.',
      details: ['Pre-start Reminders', 'End Warnings', 'Overdue Alerts', 'Achievement Notifications']
    },
    {
      icon: '⬟',
      title: 'Link Management & Playlists',
      description: 'Organize links with custom groups, YouTube integration with timestamps, and embedded preview system.',
      details: ['Custom Groups', 'YouTube Integration', 'Embedded Previews', 'Playlist Curation']
    },
    {
      icon: '◪',
      title: 'Activity Tracking & Analytics',
      description: 'Comprehensive analytics with completion rates, streaks, category performance, and productivity patterns.',
      details: ['Completion Rates', 'Streak Tracking', 'Category Analytics', 'Productivity Patterns']
    },
    {
      icon: '⟐',
      title: 'Offline-First Architecture',
      description: 'Complete offline functionality with real-time synchronization, conflict resolution, and optimistic updates.',
      details: ['Full Offline CRUD', 'Real-time Sync', 'Conflict Resolution', 'Background Sync']
    }
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
    <section id="features" className="features" ref={ref}>
      <div className="container">
        <motion.div 
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2>Powerful Features</h2>
          <p>Everything you need for productive task management, built with precision and attention to detail.</p>
        </motion.div>

        <motion.div 
          className="features-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <div className="feature-icon">
                <span>{feature.icon}</span>
              </div>
              <div className="feature-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex}>
                      <span className="detail-bullet">▸</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="features-highlight"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className="highlight-content">
            <h3>Nothing OS Inspired Design</h3>
            <p>
              TicSheets embodies the Nothing OS philosophy of "functional minimalism" through 
              geometric precision, typographic hierarchy, and a monochromatic palette with 
              strategic orange accents.
            </p>
            <div className="design-principles">
              <div className="principle">
                <span className="principle-icon">⬜</span>
                <span>Geometric Precision</span>
              </div>
              <div className="principle">
                <span className="principle-icon">⬝</span>
                <span>Typographic Hierarchy</span>
              </div>
              <div className="principle">
                <span className="principle-icon">◐</span>
                <span>Monochromatic Palette</span>
              </div>
              <div className="principle">
                <span className="principle-icon">⟡</span>
                <span>Functional Animation</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;