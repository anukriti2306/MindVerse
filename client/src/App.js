// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import ShareProjectForm from './components/ShareProjectForm';
import Forum from './components/Forum';
import Login from './components/Auth/Login';
import SignUp from './components/Auth/SignUp';
import Home from './components/Home';
import ProjectsPage from './pages/ProjectsPage';
import AIMatchPage from './pages/AIMatchPage';
import AIChatbot from './pages/AIChatbot'; // <-- ADD THIS IMPORT

const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/share-project" element={<ShareProjectForm />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/match-profiles" element={<AIMatchPage />} />
        
        {/* 🚀 Add this new route for your Chatbot */}
        <Route path="/ai-idea-generator" element={<AIChatbot />} />
      </Routes>
    </Router>
  );
};

export default App;
