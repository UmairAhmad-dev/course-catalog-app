import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Layers } from 'lucide-react';
import './CourseCard.css';

export default function CourseCard({ course }) {
  return (
    // ⚠️ CRITICAL FIX: Changed course.id to course._id to match MongoDB's unique keys
    <Link to={`/course/${course._id}`} className="card-link">
      <div className="course-card">
        
        {/* 📸 NEW FEATURE: Dynamic Subject Image from Database */}
        <div className="card-image-wrapper">
          <img src={course.imageUrl} alt={course.title} className="card-image" />
        </div>
        
        <div className="card-content">
          <span className="card-badge">{course.category}</span>
          <h3 className="card-title">{course.title}</h3>
          
          <div className="card-meta">
            <div className="meta-item">
              <Layers size={16} />
              <span>{course.level}</span>
            </div>
            <div className="meta-item">
              <Clock size={16} />
              <span>{course.duration}</span>
            </div>
          </div>
          
          <div className="card-footer">
            <span className="footer-text">View details →</span>
          </div>
        </div>

      </div>
    </Link>
  );
}