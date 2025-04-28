// src/pages/AIMatchPage.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AIMatchPage = () => {
  const [projectArea, setProjectArea] = useState('');
  const [matchedUsers, setMatchedUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleMatch = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/api/ai/match', { projectArea });
      setMatchedUsers(response.data);
    } catch (error) {
      console.error('Error fetching matches:', error);
    }
    setLoading(false);
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Find Your Matches</h1>

      <div className="flex gap-4 mb-6">
        <input
          type="text"
          placeholder="Enter your project area"
          value={projectArea}
          onChange={(e) => setProjectArea(e.target.value)}
          className="border p-2 rounded w-64"
        />
        <button
          onClick={handleMatch}
          className="bg-purple-500 hover:bg-purple-600 text-white font-semibold px-4 py-2 rounded"
        >
          Find Matches
        </button>
      </div>

      {loading ? (
        <p>Loading matches...</p>
      ) : (
        <div className="grid gap-4">
          {matchedUsers.length === 0 ? (
            <p>No matches found.</p>
          ) : (
            matchedUsers.map((user) => (
              <div key={user._id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-bold">{user.username}</h2>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-gray-700">Project Area: {user.projectArea}</p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default AIMatchPage;
