import React from 'react';
import { motion } from 'framer-motion';
import './MagicUI.css';

const TextHighlighter = ({ text, color }) => {
  return (
    <span className="highlighter-wrapper">
      <motion.span
        className="highlighter-stroke"
        style={{ backgroundColor: color || '#FFD700' }} // Default color
        initial={{ width: 0 }}
        whileInView={{ width: '100%' }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.25, 1, 0.5, 1] }}
        viewport={{ once: false, amount: 0.8 }}
      />
      <span className="highlighter-text">{text}</span>
    </span>
  );
};

export default TextHighlighter;