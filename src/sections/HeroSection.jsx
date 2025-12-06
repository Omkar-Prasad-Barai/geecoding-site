import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./HeroSection.css";
import { TypeAnimation } from "react-type-animation";
import { heroMarqueeTexts } from "../constants";
import heroIllustration from "../assets/hero-image.png";

const HeroSection = () => {
  const marqueeContent = [...heroMarqueeTexts, ...heroMarqueeTexts];
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  return (
    <motion.section
      id="hero"
      className="hero-section-new"
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 20 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="hero-container-new container">
        <div className="hero-left-new">
          <TypeAnimation
            sequence={[
              "/* We Teach You Coding */",
              2000,
              "/* Coding That Makes Your Career */",
              2000,
            ]}
            wrapper="h1"
            speed={300}
            cursor={true}
            className="hero-headline-new"
            repeat={Infinity}
          />
          <p className="hero-subheadline-new">
            Start Coding and Build Your Future: Learn to Create Websites, Apps,
            and Software from Scratch with Our Expert-Guided Courses.
          </p>
          <div className="hero-buttons-new">
            <a href="#courses" className="btn-primary">
              Explore Courses
            </a>
            <a href="#contact" className="btn-secondary">
              Book a Free Demo Class
            </a>
          </div>
        </div>
        <div className="hero-right-new">
          <img src={heroIllustration} alt="Person coding with floating UI" />
        </div>
      </div>

      <div className="hero-marquee">
        <div className="hero-marquee-content">
          {marqueeContent.map((text, index) => (
            <span key={index}>{text}</span>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;