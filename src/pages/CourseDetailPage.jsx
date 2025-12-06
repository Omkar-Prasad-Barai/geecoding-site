import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { courses, courseSyllabus, GOOGLE_FORM_LINK } from "../constants";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import "./CourseDetailPage.css";
import {
  FaCheckCircle,
  FaBook,
  FaProjectDiagram,
  FaCertificate,
  FaClock,
  FaSignal,
  FaWpforms,
} from "react-icons/fa";

const CourseDetailPage = () => {
  const { courseTitle: courseId } = useParams(); // Get the ID from the URL

  // Find the course and syllabus using the unique ID
  const course = courses.find((c) => c.id === courseId);
  const syllabus = course ? courseSyllabus[course.id] || [] : [];

  // Handle case where the course ID is invalid
  if (!course) {
    return (
      <>
        <Navbar />
        <div className="not-found-container">
          <h1>404 - Course Not Found</h1>
          <p>The course you are looking for does not exist.</p>
          <Link to="/" className="btn-primary">
            ← Back to Home
          </Link>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="course-detail-page">
        {/* Course Hero Section */}
        <header className="course-hero">
          <div className="container">
            <h1 className="course-main-title">{course.title}</h1>
            <p className="course-tagline">{course.description}</p>
          </div>
        </header>

        <div className="course-layout container">
          {/* Main Content (Left) */}
          <main className="course-content">
            <div className="content-section">
              <h2>What You'll Learn</h2>
              {/* --- UPDATED DYNAMIC LOGIC --- */}
              <ul className="learning-outcomes">
                {course.learningOutcomes && course.learningOutcomes.length > 0 ? (
                  course.learningOutcomes.map((outcome, index) => (
                    <li key={index}>
                      <FaCheckCircle /> {outcome}
                    </li>
                  ))
                ) : (
                  <li>
                    <FaCheckCircle /> Learning outcomes for this course will be
                    updated soon.
                  </li>
                )}
              </ul>
              {/* --- END UPDATED LOGIC --- */}
            </div>

            {course.technologies.length > 0 && (
              <div className="content-section">
                <h2>Technologies You'll Master</h2>
                <div className="tech-stack-detailed">
                  {course.technologies.map((tech) => (
                    <div key={tech.name} className="tech-item">
                      <tech.icon size={24} />
                      <span>{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="content-section">
              <h2>Detailed Syllabus</h2>
              <div className="syllabus-accordion">
                {syllabus.length > 0 ? (
                  syllabus.map((module, index) => (
                    <details
                      key={index}
                      className="module-item"
                      open={index === 0}
                    >
                      <summary>
                        <FaBook /> {module.title}
                      </summary>
                      <ul>
                        {module.topics.map((topic) => (
                          <li key={topic}>{topic}</li>
                        ))}
                      </ul>
                    </details>
                  ))
                ) : (
                  <p>Detailed syllabus for this course will be updated soon.</p>
                )}
              </div>
            </div>
            <div className="content-section">
              <h2>
                <FaCertificate /> Certificate of Completion
              </h2>
              <p>
                Upon successful completion of the course and all projects, you
                will receive a professional certificate from GeeCoding to
                validate your new skills and enhance your resume.
              </p>
            </div>
          </main>

          {/* Sticky Enrollment Card (Right) */}
          <aside className="sticky-card">
            <div className="card-image-placeholder">
              <h3>{course.title}</h3>
            </div>
            <div className="details-list">
              <p>
                <FaClock /> <strong>Duration:</strong> {course.duration}
              </p>
              <p>
                <FaSignal /> <strong>Level:</strong> {course.level}
              </p>
              <p>
                <FaProjectDiagram /> <strong>Projects:</strong> 3+ Real-World
              </p>
              <p>
                <FaWpforms /> <strong>Batch Type:</strong> {course.type}
              </p>
            </div>
            <a
              href={GOOGLE_FORM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary enroll-btn"
            >
              Inquire Now
            </a>
          </aside>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CourseDetailPage;