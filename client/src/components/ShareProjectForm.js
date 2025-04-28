// src/components/ShareProjectForm.js
import React, { useState } from 'react';

const ShareProjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const projectData = { title, description, tags: tags.split(',').map(tag => tag.trim()) };

    try {
      const response = await fetch('http://localhost:5000/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(projectData),
      });

      if (response.ok) {
        alert('Project shared successfully!');
        setTitle('');
        setDescription('');
        setTags('');
      } else {
        alert('Failed to share project.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error sharing project.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100 flex items-center justify-center p-4">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-pink-600 mb-6 text-center">Share Your Project</h2>

        <input
          type="text"
          placeholder="Project Title"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <textarea
          placeholder="Project Description"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Tags (comma separated)"
          className="w-full mb-4 p-2 border border-gray-300 rounded"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-600 transition"
        >
          Share Project
        </button>
      </form>
    </div>
  );
};

export default ShareProjectForm;
