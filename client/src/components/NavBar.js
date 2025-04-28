// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gradient-to-r from-pink-400 via-red-400 to-yellow-300 shadow-md">
      {/* Logo or Brand Name */}
      <div className="text-3xl font-extrabold text-white tracking-wide">
        <Link to="/">MindVerse</Link>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link to="/" className="text-white font-medium hover:text-yellow-100 transition">
          Home
        </Link>

        <Link to="/projects" className="text-white font-medium hover:text-yellow-100 transition">
          Projects
        </Link>

        <Link to="/share-project" className="text-white font-medium hover:text-yellow-100 transition">
          Share Project
        </Link>

        <Link to="/forum" className="text-white font-medium hover:text-yellow-100 transition">
          Forum
        </Link>

        {/* New AI Match Button */}
        <Link to="/match-profiles">
          <button className="bg-white text-purple-500 hover:bg-purple-100 font-semibold px-4 py-2 rounded-full transition">
            AI Match
          </button>
        </Link>

        <Link to="/ai-idea-generator">
  <button className="bg-white text-green-500 hover:bg-green-100 font-semibold px-4 py-2 rounded-full transition">
    Chat
  </button>
</Link>


        {/* Login and Sign Up Buttons */}
        <Link to="/login">
          <button className="bg-white text-pink-500 hover:bg-pink-100 font-semibold px-4 py-2 rounded-full transition">
            Login
          </button>
        </Link>

        <Link to="/signup">
          <button className="bg-white text-red-400 hover:bg-red-100 font-semibold px-4 py-2 rounded-full transition">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
