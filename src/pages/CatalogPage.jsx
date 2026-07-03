import React, { useState, useEffect } from 'react';
import FilterBar from '../components/FilterBar';
import CourseCard from '../components/CourseCard';
import coursesData from '../data/courses.json';
import './CatalogPage.css';

export default function CatalogPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('none');

  // Simulate a short loading delay for professional UI practice
  useEffect(() => {
    const timer = setTimeout(() => {
      setCourses(coursesData);
      setLoading(false);
    }, 800); // Less than 1 second loading feel
    return () => clearTimeout(timer);
  }, []);

  // Helper function to extract numerical number values from duration strings (e.g., "6 weeks" -> 6)
  const getDurationNumber = (durationStr) => {
    return parseInt(durationStr) || 0;
  };

  // 1. Process Filter Logic
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 2. Process Sorting Logic
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'shortest') {
      return getDurationNumber(a.duration) - getDurationNumber(b.duration);
    }
    if (sortBy === 'longest') {
      return getDurationNumber(b.duration) - getDurationNumber(a.duration);
    }
    return 0; // Return clean default position order
  });

  return (
    <div>
      <h1 className="page-title">Explore Professional Courses</h1>
      
      <FilterBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      {/* Loading States */}
      {loading && (
        <div className="status-message">
          <div className="spinner"></div>
          <p>Loading course directory...</p>
        </div>
      )}

      {/* Empty Search States */}
      {!loading && sortedCourses.length === 0 && (
        <div className="empty-state">
          <h3>No courses found</h3>
          <p>We couldn't find any courses matching your terms. Try adjusting your selections.</p>
          <button 
            className="reset-btn"
            onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSortBy('none'); }}
          >
            Clear All Filters
          </button>
        </div>
      )}

      {/* Course Cards Grid */}
      {!loading && sortedCourses.length > 0 && (
        <div className="courses-grid">
          {sortedCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}