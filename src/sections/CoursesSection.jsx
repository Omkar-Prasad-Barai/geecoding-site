import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "framer-motion";
import "./CoursesSection.css";
import { courses } from "../constants";

const categoryFilters = [
  "All",
  "Web Development",
  "Data Science",
  "Core Programming",
  "Mobile Development",
  "Foundation",
];
const levelFilters = ["All Levels", "Beginner", "Intermediate", "Advanced"];

const CoursesSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeLevel, setActiveLevel] = useState("All Levels");

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.1 });

  const filteredCourses = courses.filter((course) => {
    const categoryMatch =
      activeCategory === "All" || course.category === activeCategory;
    const levelMatch =
      activeLevel === "All Levels" || course.level === activeLevel;
    return categoryMatch && levelMatch;
  });

  const featuredPrograms = filteredCourses.filter(
    (c) => c.category !== "Foundation"
  );
  const foundationCourses = filteredCourses.filter(
    (c) => c.category === "Foundation"
  );

  return (
    <motion.section
      id="courses"
      className="courses-section"
      ref={ref}
      animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container">
        <h2 className="section-heading">Our Courses & Ecosystem</h2>

        {/* --- Filter Bars --- */}
        <div className="filter-container">
          <div className="filter-bar">
            {categoryFilters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${
                  activeCategory === filter ? "active" : ""
                }`}
                onClick={() => setActiveCategory(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <div className="filter-bar">
            {levelFilters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${
                  activeLevel === filter ? "active" : ""
                }`}
                onClick={() => setActiveLevel(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* --- Featured Programs Grid --- */}
        <motion.div layout className="courses-grid">
          <AnimatePresence>
            {featuredPrograms.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="course-card"
              >
                <div className="card-header">
                  <span
                    className={`tag ${
                      course.type.includes("ONLINE") ? "online" : "offline"
                    }`}
                  >
                    {course.type}
                  </span>
                </div>
                <h3>{course.title}</h3>

                <div className="tech-stack">
                  {course.technologies.map((tech) => (
                    <div key={tech.name} className="tech-icon">
                      <tech.icon />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>

                <p className="course-description">{course.description}</p>
                <div className="course-details">
                  <span>🕒 {course.duration}</span>
                  <span>📊 {course.level}</span>
                </div>
                <Link to={`/courses/${course.id}`} className="details-link">
                  View Details & Syllabus →
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* --- Foundation Courses Grid --- */}
        {foundationCourses.length > 0 && (
          <>
            <h3 className="sub-heading">Foundation Courses</h3>
            <motion.div layout className="foundation-grid">
              <AnimatePresence>
                {foundationCourses.map((course) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                    className="foundation-card"
                  >
                    <h4>{course.title}</h4>
                    <p>{course.level}</p>
                    <Link to={`/courses/${course.id}`} className="details-link">
                      View Syllabus →
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </>
        )}
      </div>
    </motion.section>
  );
};

export default CoursesSection;
