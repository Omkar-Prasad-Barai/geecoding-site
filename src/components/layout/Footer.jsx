import React from "react";
import "./Footer.css";
import { socialMedia } from "../../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-col">
          <a href="#" className="footer-logo">
            <span className="logo-gc-footer">gc</span>
            <span className="logo-underscore-footer">_</span>
          </a>
          <p className="footer-tagline">
            Shaping the next generation of tech innovators.
          </p>
        </div>
        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#placements">Placements</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Learning Zone</h4>
          <ul>
            <li>
              <a href="#">Videos</a>
            </li>
            <li>
              <a href="#">Resources</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Get in Touch</h4>
          <p>Behind GM University, Railway Station Road, Malipara, Sambalpur</p>
          <p>geecoding.info@gmail.com</p>
          <div className="footer-socials">
            {socialMedia.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 GeeCoding. All Rights Reserved.</p>
      </div>
    </footer>
  );
};
export default Footer;
