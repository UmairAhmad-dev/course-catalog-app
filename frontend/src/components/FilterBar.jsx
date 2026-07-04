import React from 'react';
import './FilterBar.css';

export default function FilterBar({ 
  searchQuery, 
  setSearchQuery, 
  selectedCategory, 
  setSelectedCategory, 
  sortBy, 
  setSortBy 
}) {
  return (
    <div className="filter-container">
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search courses by title..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="filter-input"
      />

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="filter-select"
      >
        <option value="All">All Categories</option>
        <option value="Web">Web Development</option>
        <option value="Data & AI">Data & AI</option>
        <option value="Mobile">Mobile Apps</option>
        <option value="Design">Design</option>
      </select>

      {/* Sort Dropdown */}
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="filter-select"
      >
        <option value="none">Default Order</option>
        <option value="shortest">Duration: Shortest First</option>
        <option value="longest">Duration: Longest First</option>
      </select>
    </div>
  );
}