import React, { useState, useEffect } from 'react';

const ChatHistory = ({ onSelectSession, onClose }) => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    // Get sessions from localStorage
    const stored = localStorage.getItem('chatSessions');
    if (stored) {
      setSessions(JSON.parse(stored));
    }
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-96 max-h-[80vh] overflow-y-auto relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">✕</button>
        <h2 className="text-lg font-semibold mb-4">Chat History</h2>
        {sessions.length === 0 ? (
          <div className="text-gray-500">No previous sessions found.</div>
        ) : (
          <ul className="space-y-3">
            {sessions.map((session, idx) => (
              <li key={idx}>
                <button
                  className="w-full text-left px-4 py-2 rounded bg-indigo-50 hover:bg-indigo-100 transition"
                  onClick={() => onSelectSession(session)}
                >
                  Session {idx + 1} ({session.length} messages)
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ChatHistory;
