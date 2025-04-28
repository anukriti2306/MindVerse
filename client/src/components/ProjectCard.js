// src/components/ProjectCard.js
import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-semibold text-pink-600 mb-2">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      <div className="mt-4">
        <span className="bg-pink-100 text-pink-500 px-3 py-1 rounded-full text-sm">{project.category}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
