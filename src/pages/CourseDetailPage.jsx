import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, BookOpen, Layers, CheckCircle } from 'lucide-react';
import coursesData from '../data/courses.json';
import './CourseDetailPage.css';

export default function CourseDetailPage() {
  // Grab the unique id parameter from the URL address bar
  const { id } = useParams();
  
  // Find the exact matching course from our local data array
  const course = coursesData.find((item) => item.id === parseInt(id));

  // If the course ID is completely invalid or doesn't exist, show an error shell
  if (!course) {
    return (
      <div className="error-detail-container">
        <h2>Course Not Found</h2>
        <p>The course profile you are looking for does not exist or has been moved.</p>
        <Link to="/" className="back-home-btn">
          <ArrowLeft size={18} /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      {/* Navigation Return Button */}
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back to Catalog
      </Link>

      {/* Main Detail Display Card */}
      <div className="detail-card">
        <div className="detail-header">
          <span className="detail-badge">{course.category}</span>
          <h1 className="detail-title">{course.title}</h1>
        </div>

        <div className="detail-specs-grid">
          <div className="spec-box">
            <Layers className="spec-icon" size={20} />
            <div>
              <span className="spec-label">Skill Level</span>
              <strong className="spec-value">{course.level}</strong>
            </div>
          </div>

          <div className="spec-box">
            <Clock className="spec-icon" size={20} />
            <div>
              <span className="spec-label">Duration</span>
              <strong className="spec-value">{course.duration}</strong>
            </div>
          </div>

          <div className="spec-box">
            <BookOpen className="spec-icon" size={20} />
            <div>
              <span className="spec-label">Access Style</span>
              <strong className="spec-value">Full Lifetime Access</strong>
            </div>
          </div>
        </div>

        <div className="detail-body">
          <h2>About this Course</h2>
          <p>
            Master the core concepts of <strong>{course.title}</strong> through guided practical tracking, real-world case building templates, and curated professional workflows mapped by industry experts.
          </p>

          <h3 className="syllabus-heading">What you will achieve:</h3>
          <ul className="benefits-list">
            <li><CheckCircle size={16} className="check-icon" /> Gain industry-vetted core understanding of {course.category} architectures.</li>
            <li><CheckCircle size={16} className="check-icon" /> Build real-world workspace production models.</li>
            <li><CheckCircle size={16} className="check-icon" /> Complete milestone exercises evaluated over {course.duration}.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}