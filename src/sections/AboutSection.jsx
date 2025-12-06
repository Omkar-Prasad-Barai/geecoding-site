import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./AboutSection.css";
import { aboutFeatures } from "../constants";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section 
      id="about" 
      className="about-section"
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="about-container container">
        <div className="about-left">
          <h2 className="section-heading" style={{ textAlign: "left" }}>
            Why Geecoding is Different
          </h2>
          <p className="section-subheading">
            We go beyond traditional teaching to ensure every student's success.
            Our focus is on personalized understanding, where every learner
            receives dedicated attention at every step.
          </p>
        </div>
        <div className="about-right">
          <div className="bento-grid">
            {aboutFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="bento-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                <div className="bento-icon">
                  <feature.icon />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default AboutSection;