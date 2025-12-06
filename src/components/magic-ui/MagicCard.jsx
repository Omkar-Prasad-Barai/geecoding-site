// src/components/magic-ui/MagicCard.jsx
import React, { useRef, useEffect } from "react";
import "./MagicUI.css"; // <-- YEH IMPORT SABSE ZAROORI HAI

export const MagicCard = ({ children, className, gradientColor = "#F97316" }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const onMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };

    card.addEventListener("mousemove", onMouseMove);
    return () => card.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <div
      ref={cardRef}
      style={{ "--gradient-color": gradientColor }}
      className={`magic-card ${className || ''}`}
    >
      <div className="magic-card-content">
        {children}
      </div>
    </div>
  );
};