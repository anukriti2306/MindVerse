// src/pages/HomePage.js
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold text-pink-600 mb-6 text-center">
        Welcome to MindVerse
      </h1>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Connect, collaborate, and share your academic project ideas with students across the country! 🚀
      </p>
    </div>
  );
};

export default HomePage;
