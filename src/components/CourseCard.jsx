import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, BookOpen, Layers } from 'lucide-react';
import './CourseCard.css';

export default function CourseCard({ course }) {
  return (
    <Link to={`/course/${course.id}`} className="card-link">
      <div className="course-card">
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
    </Link>
  );
}