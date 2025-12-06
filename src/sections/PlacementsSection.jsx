/* eslint-disable no-unused-vars */
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import './PlacementsSection.css';
import { placementCompanies } from '../constants';

const PlacementsSection = () => {
  const extendedCompanies = [...placementCompanies, ...placementCompanies];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section 
      id="placements" 
      className="placements-section"
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <h2 className="section-heading">Our Students Work At</h2>
        <div className="marquee">
          <div className="marquee-content">
            {extendedCompanies.map((company, index) => (
              <div key={index} className="company-logo-wrapper">
                <img src={company.logo} alt={`${company.name} Logo`} className="company-logo" />
                <p className="company-name">{company.name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hall-of-fame-cta">
          <Link to="/placements" className="btn-secondary hall-of-fame-btn">
            Visit Our Hall of Fame →
          </Link>
        </div>
        
      </div>
    </motion.section>
  );
};
export default PlacementsSection;