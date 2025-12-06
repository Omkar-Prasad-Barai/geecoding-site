import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import confetti from 'canvas-confetti'; // UPDATED: Wapas add kar diya gaya hai
import './DailyPopup.css';
import { STUDENT_DATA, promoData } from '../../constants';
import AnimatedGradientText from '../magic-ui/AnimatedGradientText'; // UPDATED: Wapas add kar diya gaya hai
// TextHighlighter ki ab zaroorat nahi hai

const DailyPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [birthdayStudents, setBirthdayStudents] = useState([]);
  const popupRef = useRef(null);

  useEffect(() => {
    const today = new Date().toLocaleDateString('en-CA', { month: '2-digit', day: '2-digit' });
    const matchingStudents = STUDENT_DATA.filter(student => student.dob === today);
    setBirthdayStudents(matchingStudents);
    setIsOpen(true);
  }, []);

  // UPDATED: Confetti logic wapas add kar diya gaya hai
  useEffect(() => {
    if (isOpen && birthdayStudents.length > 0) {
      const end = Date.now() + 2 * 1000;
      const colors = ['#F97316', '#4b82c9', '#FFB900'];
      (function frame() {
        if (Date.now() > end) return;
        confetti({ particleCount: 2, angle: 60, spread: 55, startVelocity: 60, origin: { x: 0, y: 0.5 }, colors: colors, zIndex: 3000 });
        confetti({ particleCount: 2, angle: 120, spread: 55, startVelocity: 60, origin: { x: 1, y: 0.5 }, colors: colors, zIndex: 3000 });
        requestAnimationFrame(frame);
      }());
    }
  }, [isOpen, birthdayStudents]);

  const handleClose = () => setIsOpen(false);

  const handleOutsideClick = (e) => {
    if (popupRef.current && !popupRef.current.contains(e.target)) {
      handleClose();
    }
  };

  const birthdayCount = birthdayStudents.length;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          className="popup-overlay" 
          onClick={handleOutsideClick}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div 
            ref={popupRef} 
            className="popup-content"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1, transition: { delay: 0.2, duration: 0.3 } }}
            exit={{ opacity: 0, scale: 0.7 }}
          >
            <button className="popup-close-btn" onClick={handleClose}><FaTimes /></button>
            
            {birthdayCount > 0 ? (
              // --- Birthday Popup (Aapka original code - No Changes) ---
              <div className={`popup-body birthday-popup ${birthdayCount > 1 ? 'multiple-birthdays' : ''}`}>
                <h2>Happy Birthday!</h2>
                <div className="birthday-students-container">
                  {birthdayStudents.map(student => (
                    <div key={student.id} className="birthday-student-profile">
                      {student.image && (
                        <img src={student.image} alt={student.name} className="birthday-student-image" />
                      )}
                      <AnimatedGradientText text={student.name} />
                    </div>
                  ))}
                </div>
                <p>Wishing you a fantastic day from GeeCoding!</p>
              </div>
            ) : (
              // --- UPDATED Promotional Popup (Sirf images) ---
              <div className="popup-body promo-popup-new">
                {promoData.map((promo, index) => (
                    <img 
                        key={index} 
                        src={promo.image} 
                        alt={promo.alt} 
                        className="promo-image-new" 
                    />
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DailyPopup;