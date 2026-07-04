import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 1. Switched out local JSON import for live HTTP network client
import FilterBar from '../components/FilterBar';
import CourseCard from '../components/CourseCard';
import './CatalogPage.css';

export default function CatalogPage() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('none');

  // 2. Fetch Live Data from your MERN Backend API instead of a mock timer
  useEffect(() => {
    const fetchCoursesFromDB = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/courses');
        setCourses(response.data); // Stores the live MongoDB document array in state
        setLoading(false);
      } catch (error) {
        console.error("API Connection Error on Frontend:", error);
        setLoading(false);
      }
    };
    fetchCoursesFromDB();
  }, []);

  // Helper function to extract numerical values from duration strings (e.g., "6 weeks" -> 6)
  const getDurationNumber = (durationStr) => {
    return parseInt(durationStr) || 0;
  };

  // 3. Process Live Filter Logic
  const filteredCourses = courses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // 4. Process Live Sorting Logic
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (sortBy === 'shortest') {
      return getDurationNumber(a.duration) - getDurationNumber(b.duration);
    }
    if (sortBy === 'longest') {
      return getDurationNumber(b.duration) - getDurationNumber(a.duration);
    }
    return 0;
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
          <p>Loading dynamic database directory...</p>
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
            // CRITICAL: Changed course.id to course._id to match MongoDB parameters
            <CourseCard key={course._id} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}