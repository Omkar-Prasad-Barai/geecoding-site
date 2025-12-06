import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import PlacementsSection from '../sections/PlacementsSection';
import { STUDENT_DATA, COMPANY_LOGOS } from '../constants';

import './PlacementsPage.css';
import '../sections/PlacementsSection.css'; 
import '../components/magic-ui/MagicUI.css';

import { AuroraText } from '../components/magic-ui/AuroraText';
import { MagicCard } from '../components/magic-ui/MagicCard';

const groupStudentsByBatch = (students) => {
  const placedStudents = students.filter(s => s.isPlaced);
  return placedStudents.reduce((acc, student) => {
    const batch = student.batch || "Miscellaneous";
    if (!acc[batch]) {
      acc[batch] = [];
    }
    acc[batch].push(student);
    return acc;
  }, {});
};

const PlacementsPage = () => {
  const groupedStudents = groupStudentsByBatch(STUDENT_DATA);
  const batches = Object.keys(groupedStudents).sort().reverse();

  return (
    <>
      <Navbar />
      <div className="placements-page-wrapper">
        
        <AuroraText>
          GeeCoding Hall of Fame
        </AuroraText>

        <main className="placements-page-container">
          {batches.map(batch => (
            <section key={batch} className="batch-section">
              <h2 className="batch-heading">{batch}</h2>
              <div className="students-grid">
                {groupedStudents[batch].map(student => (
                  <MagicCard key={student.id} className="student-card">
                    {student.image && (
                      <img
                        src={student.image}
                        alt={student.name}
                        className="student-image"
                      />
                    )}

                    <h3 className="student-name">{student.name}</h3>

                    <div className="placement-info">
                      <span className="placement-label">Placed at:</span>
                      <img 
                        src={COMPANY_LOGOS[student.placedAt.toLowerCase()]} 
                        alt={student.placedAt}
                        className="company-logo"
                      />
                      <span className="company-name">{student.placedAt}</span>
                    </div>
                    {student.cracked && student.cracked.length > 0 && (
                      <div className="cracked-section">
                        <span className="cracked-label">Also Cracked:</span>
                        <div className="cracked-logos">
                          {student.cracked.map(companyName => (
                            <img
                              key={companyName}
                              src={COMPANY_LOGOS[companyName.toLowerCase()]}
                              alt={companyName}
                              title={companyName} // Tooltip ke liye
                              className="cracked-logo-img"
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </MagicCard>
                ))}
              </div>
            </section>
          ))}
        </main>
        <PlacementsSection />
      </div>
      <Footer />
    </>
  );
};

export default PlacementsPage;