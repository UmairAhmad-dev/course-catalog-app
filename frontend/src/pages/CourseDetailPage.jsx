import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import { ArrowLeft, Clock, BookOpen, Layers, CheckCircle } from 'lucide-react';
import './CourseDetailPage.css';

export default function CourseDetailPage() {
  const { id } = useParams(); // Retrieves the MongoDB _id from the URL string
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchCourseDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/courses/${id}`);
        setCourse(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching course detail profile:", err);
        setError(true);
        setLoading(false);
      }
    };
    fetchCourseDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="status-message">
        <div className="spinner"></div>
        <p>Loading course dashboard profile...</p>
      </div>
    );
  }

  if (error || !course) {
    return (
      <div className="error-detail-container">
        <h2>Course Profile Not Found</h2>
        <p>The course identifier requested does not exist or has been removed from our database records.</p>
        <Link to="/" className="back-home-btn">
          <ArrowLeft size={18} /> Back to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="detail-container">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} /> Back to Catalog
      </Link>

      <div className="detail-card">
        {/* Dynamic Image Header Block */}
        <div className="detail-hero-banner">
          <img src={course.imageUrl} alt={course.title} className="hero-img" />
          <div className="hero-overlay">
            <span className="detail-badge">{course.category}</span>
            <h1 className="detail-title">{course.title}</h1>
          </div>
        </div>

        {/* Dynamic Specs Row */}
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

        {/* Content Layout Body */}
        <div className="detail-body">
          <div className="content-left">
            <h2>About this Course</h2>
            <p className="description-text">{course.description}</p>

            <h3 className="syllabus-heading">What you will achieve:</h3>
            <ul className="benefits-list">
              {course.syllabus && course.syllabus.map((item, idx) => (
                <li key={idx}>
                  <CheckCircle size={16} className="check-icon" /> 
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Instructor Profile Card Module */}
          <div className="content-right">
            <div className="instructor-profile-box">
              <h4>Assigned Instructor</h4>
              <img src={course.instructor.avatar} alt={course.instructor.name} className="instructor-avatar" />
              <strong className="instructor-name">{course.instructor.name}</strong>
              <span className="instructor-title">Subject Matter Expert</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}