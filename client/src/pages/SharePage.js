// src/pages/ShareProjectPage.js
import React from 'react';
import ShareProjectForm from '../components/ShareProjectForm';

const ShareProjectPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 flex flex-col items-center p-8">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">Share Your Project</h2>
      <ShareProjectForm />
    </div>
  );
};

export default ShareProjectPage;
