import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './ContactSection.css';
import { contactInfo, socialMedia, GOOGLE_FORM_LINK } from '../constants';

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section 
      id="contact" 
      className="contact-section"
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <h2 className="section-heading">Get In Touch</h2>
        <div className="contact-grid">
          <div className="contact-form-area">
             <h3>Have a Question or Idea? Let's Talk!</h3>
             <p>Click the button below to open our inquiry form. Fill it out, and our team will get back to you as soon as possible.</p>
             <a 
                href={GOOGLE_FORM_LINK}
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-primary form-btn"
             >
                Open Inquiry Form
            </a>
          </div>
          <div className="contact-info-area">
            <h3>Contact Information</h3>
            {contactInfo.map((info, index) => (
                <a key={index} href={info.link} className="info-item">
                    <info.icon size={20}/>
                    <span>{info.text}</span>
                </a>
            ))}
            <h3 className="follow-us">Follow Us On</h3>
            <div className="social-icons">
               {socialMedia.map((social, index) => (
                   <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                       <social.icon size={30}/>
                   </a>
               ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
export default ContactSection;