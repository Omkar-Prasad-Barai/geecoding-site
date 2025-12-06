import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom'; // useNavigate Import karein
import './Navbar.css';
import { navLinks } from '../../constants';
import geeCodingLogo from '../../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [click, setClick] = useState(false);
  const navigate = useNavigate(); // Hook ko initialize karein

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // NAYA FUNCTION: Smart scrolling ke liye
  const handleNavClick = (id) => {
    closeMobileMenu(); // Mobile menu band karein
    if (id === 'placements') {
      navigate('/placements'); // Placements page par direct navigate karein
    } else {
      // Baki links ke liye, homepage par jaakar scroll karein
      navigate(`/#${id}`);
      
      // Chhota sa delay dekar ensure karein ki page navigate ho gaya hai
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) setScrolled(true);
    else setScrolled(false);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  let navbarClasses = ['navbar-new'];
  if (scrolled) navbarClasses.push('scrolled');

  return (
    <div className="navbar-wrapper">
      <nav className={navbarClasses.join(' ')}>
        <div className="navbar-content-container">
          {/* Logo links back to home */}
          <Link to="/" className="navbar-logo-new" onClick={closeMobileMenu}>
            <img src={geeCodingLogo} alt="Geecoding Logo" className="logo-image" />
            <div className="logo-text-container">
              <span className="logo-text-orange">GEE</span>
              <span className="logo-text-black">CODING</span>
            </div>
          </Link>

          {/* --- DESKTOP MENU (Updated) --- */}
          <ul className="nav-menu-desktop">
            {navLinks.map(link => (
              <li key={link.id} className="nav-item-new">
                <span 
                  className="nav-links-new" 
                  onClick={() => handleNavClick(link.id)} // Naya handler use karein
                  style={{ cursor: 'pointer' }} // Clickable dikhane ke liye
                >
                  {link.title}
                </span>
              </li>
            ))}
          </ul>
          
          <a href="#contact" className="btn-inquire-new">
            Inquire Now
          </a>

          <div className="hamburger" onClick={handleClick}>
            {click ? <FaTimes size={25} /> : <FaBars size={25} />}
          </div>
        </div>

        {/* --- MOBILE MENU (Updated) --- */}
        <ul className={click ? 'nav-menu-mobile active' : 'nav-menu-mobile'}>
          {navLinks.map(link => (
            <li key={link.id} className="nav-item-mobile">
              <span 
                className="nav-links-mobile" 
                onClick={() => handleNavClick(link.id)} // Naya handler use karein
              >
                {link.title}
              </span>
            </li>
          ))}
          <li className="nav-item-mobile">
            <a href="#contact" className="btn-inquire-mobile" onClick={closeMobileMenu}>
              Inquire Now
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;