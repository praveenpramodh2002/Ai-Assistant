import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Chatbot from './Chatbot';
import GameWebsite from '../src/AiAssitant';
import Login from './Login';
import SignUp from './SignUp';

function ProtectedRoute({ isLoggedIn, children }) {
  return isLoggedIn ? children : <Navigate to="/login" replace />;
}

function AppContent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Handles logout for demo
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-cyan-700 via-blue-800 to-fuchsia-900 flex flex-col">
      {/* Toggle Button */}
      <button
        onClick={() => {
          if (isLoggedIn) {
            navigate('/chat');
          } else {
            navigate('/login');
          }
        }}
        className="fixed bottom-4 right-4 z-50 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all"
      >
        Open Chat
      </button>
      {/* Optional logout button for demo */}
      {isLoggedIn && (
        <button
          onClick={handleLogout}
          className="fixed bottom-20 right-4 z-50 bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-full shadow-lg transition-all"
        >
          Logout
        </button>
      )}
      <Routes>
        <Route path="/" element={<GameWebsite />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/chat"
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Chatbot />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;