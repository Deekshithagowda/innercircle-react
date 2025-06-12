import React from 'react';
import logo from "../assets/logo/innercircle-logo.png";
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-blue-900 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <img src={logo} alt="Inner Circle Softech Logo" className="h-12 w-200" />
        <nav className="space-x-4">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/leadership">Leadership</Link>
          <Link to="/Contactus">Contactus</Link>

        </nav>
      </div>
    </header>
  );
}
