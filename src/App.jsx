import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CourseDetailPage from './pages/CourseDetailPage';
import PlacementsPage from './pages/PlacementsPage'; // <-- 1. Naya Import
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* Route for the main landing page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Route for the dynamic course detail pages */}
        <Route path="/courses/:courseTitle" element={<CourseDetailPage />} />

        {/* --- 2. NAYA ROUTE ADD KAREIN --- */}
        <Route path="/placements" element={<PlacementsPage />} />
      </Routes>
      </BrowserRouter>
    </>
  );
}
export default App;