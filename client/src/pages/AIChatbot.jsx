// src/pages/AIChatbot.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AIChatbot = () => {
  const [messages, setMessages] = useState([
    { text: "Hi! 👋 How can I help you generate project ideas today?", sender: "bot" },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setLoading(true); // Start loading spinner (optional)

    try {
      const response = await axios.post('/api/ai/generate', { prompt: input });

      const botReply = response.data.bot?.trim() || "Sorry, no response received.";
      const botMessage = { text: botReply, sender: "bot" };
      setMessages(prev => [...prev, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
      const errorMessage = { text: "❗ Sorry, something went wrong. Please try again.", sender: "bot" };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setLoading(false); // Always stop loading
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-yellow-100">
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === "user" ? "bg-pink-400 text-white" : "bg-white text-gray-700 shadow"}`}>
              {msg.text}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="px-4 py-2 rounded-lg max-w-xs bg-white text-gray-400 shadow">
              Typing...
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white flex items-center gap-2 border-t">
        <input
          className="flex-1 border rounded-full px-4 py-2 outline-none focus:ring-2 focus:ring-pink-300"
          type="text"
          value={input}
          placeholder="Type your idea prompt..."
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-pink-400 hover:bg-pink-500 text-white px-4 py-2 rounded-full font-semibold transition disabled:opacity-50"
        >
          {loading ? 'Sending...' : 'Send'}
        </button>
      </div>
    </div>
  );
};

export default AIChatbot;
