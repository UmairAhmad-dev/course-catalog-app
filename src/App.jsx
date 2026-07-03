import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import CatalogPage from './pages/CatalogPage.jsx';
import CourseDetailPage from './pages/CourseDetailPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<CatalogPage />} />
            <Route path="/course/:id" element={<CourseDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;