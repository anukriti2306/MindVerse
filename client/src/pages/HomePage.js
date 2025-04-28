// src/components/pages/HomePage.js
import React from 'react';
import ProjectsList from '../ProjectsList';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-pink-500">Discover Amazing Projects!</h1>
      <ProjectsList />
    </div>
  );
};

export default HomePage;
