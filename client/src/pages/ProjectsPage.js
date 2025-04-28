// src/pages/ProjectsPage.js
import React from 'react';
import ProjectsList from '../components/ProjectsList';

const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 p-8">
      <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Explore Projects</h2>
      <ProjectsList />
    </div>
  );
};

export default ProjectsPage;
