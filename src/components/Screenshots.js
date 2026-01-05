import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './Screenshots.css';

const Screenshots = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const screenshots = [
    {
      title: 'Dashboard & Activity Calendar',
      description: 'Clean dashboard with GitHub-style contribution calendar showing your productivity patterns and task completion streaks.',
      image: '/images/dashboardandactivitycalendar.jpeg'
    },
    {
      title: 'Task Management Interface',
      description: 'Intuitive task creation and management with smart time selection, categories, and real-time status updates.',
      image: '/images/taskmanagement.jpeg'
    },
    {
      title: 'Calendar & Timeline View',
      description: 'Advanced calendar system with multiple views, task density indicators, and seamless navigation.',
      image: '/images/calendarview.jpeg'
    },
    {
      title: 'Group Management System',
      description: 'Comprehensive group management with custom organization, filtering, and advanced grouping capabilities.',
      image: '/images/groupmanagement.jpeg'
    },
    {
      title: 'Link Management - Main Interface',
      description: 'Organize your links with custom groups, categories, and powerful search functionality for efficient link organization.',
      image: '/images/linkmanagement1.jpeg'
    },
    {
      title: 'YouTube Player with Timestamps',
      description: 'Built-in YouTube player with custom timestamp support, allowing precise video navigation and bookmark creation.',
      image: '/images/linkmanagement2(inbuild_youtubeplayer_with_timestamps).jpeg'
    },
    {
      title: 'Advanced Web View Integration',
      description: 'Advanced in-app web browser with full functionality, seamless navigation, and integrated link management tools.',
      image: '/images/linkmanagement3(advance_web_view_inside_app).jpeg'
    },
    {
      title: 'Category Management',
      description: 'Comprehensive category system with custom colors, icons, and organization tools.',
      image: '/images/categorymanagement.jpeg'
    },
    {
      title: 'Task Groups & Organization',
      description: 'Advanced task grouping with filtering, sorting, and bulk management capabilities.',
      image: '/images/taskgroups.jpeg'
    },
    {
      title: 'Settings & Customization',
      description: 'Comprehensive settings panel with notification preferences, theme customization, and account management.',
      image: '/images/settings.jpeg'
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
    <section id="screenshots" className="screenshots" ref={ref}>
      <div className="container">
        <motion.div 
          className="screenshots-header"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          <h2>App Screenshots</h2>
          <p>Explore the beautiful, minimalist interface inspired by Nothing OS design philosophy.</p>
        </motion.div>

        <motion.div 
          className="screenshots-scroll-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="screenshots-scroll">
            {screenshots.map((screenshot, index) => (
              <motion.div 
                key={index}
                className="screenshot-item"
                variants={itemVariants}
              >
                <div className="phone-mockup">
                  <div className="phone-frame">
                    <div className="phone-notch"></div>
                    <div className="phone-screen">
                      <img 
                        src={screenshot.image} 
                        alt={screenshot.title}
                        className="screenshot-image"
                      />
                    </div>
                  </div>
                </div>
                <div className="screenshot-info">
                  <h3>{screenshot.title}</h3>
                  <p>{screenshot.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          className="screenshots-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">App Screens</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">15+</span>
            <span className="stat-label">Components</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Android Optimized</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Screenshots;