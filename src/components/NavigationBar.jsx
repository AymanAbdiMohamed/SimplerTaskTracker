import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

/**
 * NavigationBar - Responsive navigation bar with route highlighting
 * Includes mobile menu functionality
 */
function NavigationBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Helper function to check if route is active
  const isActive = (path) => location.pathname === path;

  // Style for active and inactive links
  const getLinkClass = (path) => {
    const baseClass = 'px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200';
    if (isActive(path)) {
      return `${baseClass} bg-gradient-to-r from-orange-300 to-rose-300 text-gray-800 shadow-md`;
    }
    return `${baseClass} text-gray-700 hover:bg-sky-50 hover:text-sky-600`;
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo / Title */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-300 to-rose-300 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
              <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Task Tracker
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-2">
            <Link to="/" className={getLinkClass('/')}>
              Dashboard
            </Link>
            <Link to="/add" className={getLinkClass('/add')}>
              Add Task
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 pt-2 space-y-2">
            <Link
              to="/"
              className={`block ${getLinkClass('/')}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/add"
              className={`block ${getLinkClass('/add')}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Add Task
            </Link>
            <Link
              to="/about"
              className={`block ${getLinkClass('/about')}`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
