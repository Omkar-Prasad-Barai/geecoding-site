import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import DailyPopup from '../components/layout/DailyPopup'; // 1. Import karein
import HeroSection from '../sections/HeroSection';
import CoursesSection from '../sections/CoursesSection';
import MentorsSection from '../sections/MentorsSection';
import PlacementsSection from '../sections/PlacementsSection';
import AboutSection from '../sections/AboutSection';
import ContactSection from '../sections/ContactSection';

const HomePage = () => {
  return (
    <>
      <DailyPopup /> {/* 2. Yahan add karein */}
      <Navbar />
      <main>
        <HeroSection />
        <CoursesSection />
        <MentorsSection />
        <PlacementsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;