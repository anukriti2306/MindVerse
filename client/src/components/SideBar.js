import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons for open and close

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage sidebar visibility

  const toggleSidebar = () => setIsOpen(!isOpen); // Function to toggle the sidebar

  return (
    <div>
      {/* Button to open/close sidebar */}
      <button
        onClick={toggleSidebar}
        className="md:hidden p-4 text-white bg-purple-600 fixed top-4 left-4 z-10 rounded-full"
      >
        {isOpen ? <FaTimes /> : <FaBars />} {/* Show either open or close icon */}
      </button>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'w-64' : 'w-0'
        } md:w-64 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-white shadow-lg fixed top-0 left-0 h-full transition-all duration-300 overflow-hidden`}
      >
        <div className="p-6 text-2xl font-bold">MindVerse</div>
        <nav className="mt-8">
          <ul>
            <li className="mb-6">
              <Link to="/" className="hover:text-gray-200 text-lg">Home</Link>
            </li>
            <li className="mb-6">
              <Link to="/projects" className="hover:text-gray-200 text-lg">Projects</Link>
            </li>
            <li className="mb-6">
              <Link to="/share" className="hover:text-gray-200 text-lg">Share Project</Link>
            </li>
            <li className="mb-6">
              <Link to="/forum" className="hover:text-gray-200 text-lg">Forum</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default SideBar;
