import React, { useState } from 'react';

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState({
    username: 'John Doe',
    bio: 'Passionate about AI and healthcare.',
    interests: ['AI', 'Healthcare', 'Machine Learning'],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
      <h2 className="text-2xl font-semibold text-purple-700 mb-4">User Profile</h2>

      <div className="mb-4">
        <label className="block text-gray-700">Username</label>
        <input
          type="text"
          name="username"
          value={userInfo.username}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Bio</label>
        <textarea
          name="bio"
          value={userInfo.bio}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Interests</label>
        <input
          type="text"
          name="interests"
          value={userInfo.interests.join(', ')}
          onChange={handleInputChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <button className="bg-purple-700 text-white p-2 rounded-lg">
        Save Changes
      </button>
    </div>
  );
};

export default UserProfile;
