import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './MentorsSection.css';
import { mentors } from '../constants';

const MentorsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section 
      id="mentors" 
      className="mentors-section"
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <h2 className="section-heading">Meet Your Mentors</h2>
        <div className="mentors-grid">
          {mentors.map((mentor, index) => (
            <div key={index} className="mentor-card" style={{ backgroundColor: mentor.bgColor }}>
              <div className="mentor-image-wrapper">
                <img src={mentor.image} alt={mentor.name} className="mentor-image" />
              </div>
              <h3>{mentor.name}</h3>
              <p className="mentor-title">{mentor.title}</p>
              <div className="mentor-socials">
                {mentor.socials.map((social, i) => (
                    <a key={i} href={social.link} target="_blank" rel="noopener noreferrer">
                        <social.icon size={24}/>
                    </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
export default MentorsSection;