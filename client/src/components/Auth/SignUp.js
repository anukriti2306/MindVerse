// src/components/Auth/SignUp.js
import React, { useState } from 'react';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // You can integrate API call here later
    console.log('Sign Up with:', name, email, password);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-pink-100 via-red-100 to-yellow-100">
      <form onSubmit={handleSignup} className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-pink-500 mb-6">Join MindVerse</h2>
        
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Name</label>
          <input 
            type="text" 
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            required 
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Email</label>
          <input 
            type="email" 
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required 
          />
        </div>
        
        <div className="mb-6">
          <label className="block text-gray-700 mb-2">Password</label>
          <input 
            type="password" 
            className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-pink-300" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required 
          />
        </div>
        
        <button type="submit" className="w-full bg-pink-500 text-white py-2 rounded-lg hover:bg-pink-600 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
