import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faComment } from '@fortawesome/free-solid-svg-icons';
import ChatForm from './ChatForm';
import ChatMessage from './ChatMessage';
import CompanyLogo from '../src/Images/logo1.png';

const Chatbot = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const [showChatbot, setShowChatbot] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);
  const chatBodyRef = useRef();
  const popupRef = useRef();

  const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyDjyXtMbzpuT0Hflor4TIOux5tUC47Xbg0';

  useEffect(() => {
    if (chatBodyRef.current) {
      chatBodyRef.current.scrollTo({
        top: chatBodyRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [chatHistory]);

  const generateBotResponse = async (history) => {
    const updateHistory = (text) => {
      setChatHistory((prev) => [
        ...prev.filter((msg) => msg.text !== 'Thinking...'),
        {
          role: 'model',
          text,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
    };
    updateHistory('Thinking...');
    try {
      history = history.map(({ role, text }) => ({ role, parts: [{ text }] }));
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: history }),
      };
      const response = await fetch(API_URL, requestOptions);
      if (!response.ok) throw new Error(`API request failed with status ${response.status}`);
      const data = await response.json();
      if (!data.candidates || !data.candidates[0]?.content?.parts[0]?.text) throw new Error('Invalid response format from API');
      const apiResponseText = data.candidates[0].content.parts[0].text.replace(/\*\*(.*?)\*\*/g, '$1').trim();
      updateHistory(apiResponseText);
    } catch (error) {
      console.error('Chatbot API Error:', error);
      updateHistory("Sorry, I'm having trouble connecting. Please try again later.");
    }
  };

  // Modern glassmorphism chat window
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-lg md:max-w-2xl h-[80vh] flex flex-col rounded-3xl shadow-2xl border border-white/20 bg-white/10 backdrop-blur-lg relative">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-white/20 backdrop-blur-md rounded-t-3xl border-b border-white/20">
          <div className="flex items-center gap-3">
            <img src={CompanyLogo} alt="Logo" className="h-10 w-10 rounded-full border-2 border-white/40 shadow" />
            <div>
              <h2 className="text-lg font-bold text-white drop-shadow">AI Assistant</h2>
              <span className="text-xs text-green-300">Online</span>
            </div>
          </div>
          <button
            className="h-9 w-9 flex items-center justify-center rounded-full hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/30"
            onClick={() => setShowChatbot(false)}
            aria-label="Close chat"
          >
            <FontAwesomeIcon icon={faTimes} className="text-white text-lg" />
          </button>
        </div>
        {/* Messages */}
        <div
          ref={chatBodyRef}
          className="flex-1 overflow-y-auto p-6 flex flex-col gap-4 bg-transparent scrollbar-thin scrollbar-thumb-white/30 scrollbar-track-transparent"
        >
          <div className="flex gap-3 items-start">
            <div className="flex-shrink-0 h-10 w-10 flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full shadow-sm">
              <img src={CompanyLogo} alt="Company Logo" className="h-8 w-8 rounded-full object-cover" />
            </div>
            <div className="max-w-[80%]">
              <div className="px-4 py-3 bg-white/80 rounded-2xl shadow-md text-sm text-gray-800">
                Hello! I'm your AI assistant. How can I help you today?
              </div>
              <div className="text-xs text-gray-400 mt-1 ml-1">Just now</div>
            </div>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        {/* Input */}
        <div className="bg-white/30 p-4 border-t border-white/20 rounded-b-3xl backdrop-blur-md">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default Chatbot;