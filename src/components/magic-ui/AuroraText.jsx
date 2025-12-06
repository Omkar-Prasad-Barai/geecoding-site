// src/components/magic-ui/AuroraText.jsx
import React from "react";
import "./MagicUI.css"; // <-- YEH IMPORT SABSE ZAROORI HAI

export const AuroraText = ({ children, className }) => {
  return (
    <div className={`aurora-container ${className || ''}`}>
      <div className="aurora-background"></div>
      <div className="aurora-text-content">
        {children}
      </div>
    </div>
  );
};