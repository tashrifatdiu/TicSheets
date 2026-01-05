import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Client, Databases, ID } from 'appwrite';
import './Wishlist.css';

const Wishlist = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [countrySearch, setCountrySearch] = useState('');
  const [isCountryDropdownOpen, setIsCountryDropdownOpen] = useState(false);
  const countryRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (countryRef.current && !countryRef.current.contains(event.target)) {
        setIsCountryDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Initialize Appwrite
  const client = new Client()
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT)
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);

  const databases = new Databases(client);

  const countries = [
    { name: 'Afghanistan', flag: '🇦🇫' },
    { name: 'Albania', flag: '🇦🇱' },
    { name: 'Algeria', flag: '🇩🇿' },
    { name: 'Argentina', flag: '🇦🇷' },
    { name: 'Armenia', flag: '🇦🇲' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'Austria', flag: '🇦🇹' },
    { name: 'Azerbaijan', flag: '🇦🇿' },
    { name: 'Bahrain', flag: '🇧🇭' },
    { name: 'Bangladesh', flag: '🇧🇩' },
    { name: 'Belarus', flag: '🇧🇾' },
    { name: 'Belgium', flag: '🇧🇪' },
    { name: 'Bolivia', flag: '🇧🇴' },
    { name: 'Bosnia and Herzegovina', flag: '🇧🇦' },
    { name: 'Brazil', flag: '🇧🇷' },
    { name: 'Bulgaria', flag: '🇧🇬' },
    { name: 'Cambodia', flag: '🇰🇭' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Chile', flag: '🇨🇱' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Colombia', flag: '🇨🇴' },
    { name: 'Croatia', flag: '🇭🇷' },
    { name: 'Czech Republic', flag: '🇨🇿' },
    { name: 'Denmark', flag: '🇩🇰' },
    { name: 'Ecuador', flag: '🇪🇨' },
    { name: 'Egypt', flag: '🇪🇬' },
    { name: 'Estonia', flag: '🇪🇪' },
    { name: 'Finland', flag: '🇫🇮' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Georgia', flag: '🇬🇪' },
    { name: 'Germany', flag: '🇩🇪' },
    { name: 'Ghana', flag: '🇬🇭' },
    { name: 'Greece', flag: '🇬🇷' },
    { name: 'Hungary', flag: '🇭🇺' },
    { name: 'Iceland', flag: '🇮🇸' },
    { name: 'India', flag: '🇮🇳' },
    { name: 'Indonesia', flag: '🇮🇩' },
    { name: 'Iran', flag: '🇮🇷' },
    { name: 'Iraq', flag: '🇮🇶' },
    { name: 'Ireland', flag: '🇮🇪' },
    { name: 'Israel', flag: '🇮🇱' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Japan', flag: '🇯🇵' },
    { name: 'Jordan', flag: '🇯🇴' },
    { name: 'Kazakhstan', flag: '🇰🇿' },
    { name: 'Kenya', flag: '🇰🇪' },
    { name: 'Kuwait', flag: '🇰🇼' },
    { name: 'Latvia', flag: '🇱🇻' },
    { name: 'Lebanon', flag: '🇱🇧' },
    { name: 'Lithuania', flag: '🇱🇹' },
    { name: 'Luxembourg', flag: '🇱🇺' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Mexico', flag: '🇲🇽' },
    { name: 'Morocco', flag: '🇲🇦' },
    { name: 'Netherlands', flag: '🇳🇱' },
    { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'Nigeria', flag: '🇳🇬' },
    { name: 'Norway', flag: '🇳🇴' },
    { name: 'Pakistan', flag: '🇵🇰' },
    { name: 'Peru', flag: '🇵🇪' },
    { name: 'Philippines', flag: '🇵🇭' },
    { name: 'Poland', flag: '🇵🇱' },
    { name: 'Portugal', flag: '🇵🇹' },
    { name: 'Qatar', flag: '🇶🇦' },
    { name: 'Romania', flag: '🇷🇴' },
    { name: 'Russia', flag: '🇷🇺' },
    { name: 'Saudi Arabia', flag: '🇸🇦' },
    { name: 'Singapore', flag: '🇸🇬' },
    { name: 'Slovakia', flag: '🇸🇰' },
    { name: 'Slovenia', flag: '🇸🇮' },
    { name: 'South Africa', flag: '🇿🇦' },
    { name: 'South Korea', flag: '🇰🇷' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Sri Lanka', flag: '🇱🇰' },
    { name: 'Sweden', flag: '🇸🇪' },
    { name: 'Switzerland', flag: '🇨🇭' },
    { name: 'Thailand', flag: '🇹🇭' },
    { name: 'Turkey', flag: '🇹🇷' },
    { name: 'Ukraine', flag: '🇺🇦' },
    { name: 'United Arab Emirates', flag: '🇦🇪' },
    { name: 'United Kingdom', flag: '🇬🇧' },
    { name: 'United States', flag: '🇺🇸' },
    { name: 'Uruguay', flag: '🇺🇾' },
    { name: 'Venezuela', flag: '🇻🇪' },
    { name: 'Vietnam', flag: '🇻🇳' }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCountrySelect = (country) => {
    setFormData(prev => ({
      ...prev,
      country: country.name
    }));
    setCountrySearch('');
    setIsCountryDropdownOpen(false);
  };

  const filteredCountries = countries.filter(country =>
    country.name.toLowerCase().includes(countrySearch.toLowerCase())
  );

  const selectedCountry = countries.find(country => country.name === formData.country);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      await databases.createDocument(
        process.env.REACT_APP_APPWRITE_DATABASE_ID,
        process.env.REACT_APP_APPWRITE_COLLECTION_ID,
        ID.unique(),
        {
          name: formData.name,
          email: formData.email,
          country: formData.country,
          timestamp: new Date().toISOString()
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', country: '' });
    } catch (error) {
      console.error('Error submitting to wishlist:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

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
    hidden: { y: 30, opacity: 0 },
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
    <section id="wishlist" className="wishlist" ref={ref}>
      <div className="wishlist-background">
        <div className="floating-particles">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="particle"
              animate={{
                y: [0, -30, 0],
                x: [0, 15, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                left: `${10 + i * 12}%`,
                top: `${20 + (i % 3) * 20}%`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container">
        <motion.div 
          className="wishlist-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <motion.div className="wishlist-header" variants={itemVariants}>
            <div className="wishlist-announcement">
              <span className="announcement-pulse">✦</span>
              <span className="announcement-title">Wishlist is Now Open!</span>
            </div>
            <h2>Join the Android Revolution</h2>
            <p>
              Be among the first to experience TicSheets on Android when it launches. 
              Get early access, exclusive updates, and special launch pricing for Android users.
            </p>
          </motion.div>

          <motion.div className="wishlist-form-container" variants={itemVariants}>
            <form onSubmit={handleSubmit} className="wishlist-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Enter your email address"
                />
              </div>

              <div className="form-group">
                <label htmlFor="country">Country</label>
                <div className="country-selector" ref={countryRef}>
                  <div 
                    className="country-input-wrapper"
                    onClick={() => setIsCountryDropdownOpen(!isCountryDropdownOpen)}
                  >
                    <div className="country-display">
                      {selectedCountry ? (
                        <>
                          <span className="country-flag">{selectedCountry.flag}</span>
                          <span className="country-name">{selectedCountry.name}</span>
                        </>
                      ) : (
                        <span className="country-placeholder">Select your country</span>
                      )}
                    </div>
                    <span className={`dropdown-arrow ${isCountryDropdownOpen ? 'open' : ''}`}>▼</span>
                  </div>
                  
                  {isCountryDropdownOpen && (
                    <div className="country-dropdown">
                      <div className="country-search">
                        <input
                          type="text"
                          placeholder="Search countries..."
                          value={countrySearch}
                          onChange={(e) => setCountrySearch(e.target.value)}
                          className="country-search-input"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>
                      <div className="country-list">
                        {filteredCountries.map((country) => (
                          <div
                            key={country.name}
                            className="country-option"
                            onClick={() => handleCountrySelect(country)}
                          >
                            <span className="country-flag">{country.flag}</span>
                            <span className="country-name">{country.name}</span>
                          </div>
                        ))}
                        {filteredCountries.length === 0 && (
                          <div className="no-countries">No countries found</div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              <motion.button
                type="submit"
                className="submit-btn"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <span className="loading">
                    <span className="loading-spinner"></span>
                    Adding to Wishlist...
                  </span>
                ) : (
                  'Join Wishlist'
                )}
              </motion.button>

              {submitStatus === 'success' && (
                <motion.div 
                  className="success-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ✅ Successfully added to wishlist! We'll notify you when TicSheets launches.
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div 
                  className="error-message"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  ❌ Something went wrong. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>

          <motion.div className="wishlist-benefits" variants={itemVariants}>
            <h3>What You'll Get</h3>
            <div className="benefits-grid">
              <div className="benefit-item">
                <span className="benefit-icon">◈</span>
                <div>
                  <h4>Early Access</h4>
                  <p>Be the first to download and use TicSheets</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">◯</span>
                <div>
                  <h4>Special Pricing</h4>
                  <p>Exclusive launch discount for wishlist members</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">◢</span>
                <div>
                  <h4>Updates</h4>
                  <p>Regular development updates and feature previews</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="benefit-icon">⬟</span>
                <div>
                  <h4>Beta Access</h4>
                  <p>Test new features before public release</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Wishlist;