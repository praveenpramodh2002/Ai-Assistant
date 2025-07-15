import React, { useState, useRef } from 'react';

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef(null);

  // Handle image selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  // Handle voice input
  const handleVoiceInput = () => {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
      alert('Speech recognition is not supported in this browser.');
      return;
    }
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!recognitionRef.current) {
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = false;
      recognitionRef.current.interimResults = false;
      recognitionRef.current.lang = 'en-US';
      recognitionRef.current.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setMessage(transcript);
        setIsListening(false);
      };
      recognitionRef.current.onerror = () => {
        setIsListening(false);
      };
      recognitionRef.current.onend = () => {
        setIsListening(false);
      };
    }
    setIsListening(true);
    recognitionRef.current.start();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message.trim() && !image) return;

    let userMessage;
    if (image) {
      // Show image as a user message (base64 preview)
      const reader = new FileReader();
      reader.onload = (ev) => {
        userMessage = {
          role: 'user',
          text: message,
          image: ev.target.result,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };
        const thinkingMessage = { role: 'model', text: 'Thinking...' };
        setChatHistory(prev => [...prev, userMessage, thinkingMessage]);
        setMessage('');
        setImage(null);
        // If your API supports image, send it here. Otherwise, just send the text.
        generateBotResponse([...chatHistory, { role: 'user', text: message }]);
      };
      reader.readAsDataURL(image);
    } else {
      userMessage = {
        role: 'user',
        text: message,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      const thinkingMessage = { role: 'model', text: 'Thinking...' };
      setChatHistory(prev => [...prev, userMessage, thinkingMessage]);
      setMessage('');
      generateBotResponse([...chatHistory, userMessage]);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="px-2 pb-2">
      <div className="relative flex items-center gap-2">
        {/* Image upload button */}
        <label className="cursor-pointer flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-pink-400 to-purple-500 text-white hover:from-pink-500 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg">
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 16V8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2zm3-1l2.293-2.293a1 1 0 011.414 0L13 15l3.293-3.293a1 1 0 011.414 0L21 17" />
          </svg>
        </label>
        {/* Voice input button */}
        <button
          type="button"
          onClick={handleVoiceInput}
          className={`flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 text-white hover:from-blue-500 hover:to-purple-600 transition-all duration-200 shadow-md hover:shadow-lg ${isListening ? 'animate-pulse' : ''}`}
          aria-label="Voice input"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18v2m0 0a4 4 0 004-4h-8a4 4 0 004 4zm0-14a4 4 0 00-4 4v4a4 4 0 008 0V8a4 4 0 00-4-4z" />
          </svg>
        </button>
        <input
          type="text"
          className="w-full py-3 pl-4 pr-14 rounded-full border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all duration-200 shadow-sm hover:shadow-md"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required={!image}
          aria-label="Type your message"
        />
        <button
          type="submit"
          disabled={!message.trim() && !image}
          className="absolute right-2 flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 disabled:from-gray-300 disabled:to-gray-400 disabled:cursor-not-allowed transition-all duration-200 shadow-md hover:shadow-lg disabled:shadow-sm"
          aria-label="Send message"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 transform rotate-45"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
          </svg>
        </button>
      </div>
      {/* Image preview */}
      {image && (
        <div className="mt-2 flex items-center gap-2">
          <img
            src={URL.createObjectURL(image)}
            alt="Preview"
            className="h-16 w-16 object-cover rounded-lg border border-gray-200 shadow"
          />
          <button
            type="button"
            onClick={() => setImage(null)}
            className="text-xs text-red-500 hover:underline"
          >
            Remove
          </button>
        </div>
      )}
    </form>
  );
}

export default ChatForm;