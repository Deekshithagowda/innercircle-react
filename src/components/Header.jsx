import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo/innercircle-logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-900 text-white px-4 py-3 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <img src={logo} alt="Inner Circle Softech Logo" className="h-12 w-50"/>


        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Nav Links */}
        <nav className={`sm:flex space-x-6 items-center ${menuOpen ? "block" : "hidden"} sm:block`}>
          <Link to="/" className="block mt-2 sm:mt-0 hover:text-blue-300">Home</Link>
          <Link to="/about" className="block mt-2 sm:mt-0 hover:text-blue-300">About</Link>
          <Link to="/services" className="block mt-2 sm:mt-0 hover:text-blue-300">Services</Link>
          <Link to="/careers" className="block mt-2 sm:mt-0 hover:text-blue-300">Careers</Link>
          <Link to="/leadership" className="block mt-2 sm:mt-0 hover:text-blue-300">Leadership</Link>
          <Link to="/contactus" className="block mt-2 sm:mt-0 hover:text-blue-300">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
