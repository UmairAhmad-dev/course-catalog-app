import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  return (
    <header className="navbar-header">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">
          <BookOpen size={24} className="logo-icon" />
          <span>Edu<strong className="logo-accent">Catalog</strong></span>
        </Link>
      </div>
    </header>
  );
}