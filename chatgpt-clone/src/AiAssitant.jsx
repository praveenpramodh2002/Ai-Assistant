import React from 'react';

const GameWebsite = () => {
  // AI feature data
  const aiFeatures = [
    {
      id: 1,
      icon: (
        <svg className="w-10 h-10 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
      ),
      title: 'Natural Conversations',
      desc: 'Engage in human-like, context-aware dialogue with advanced AI.'
    },
    {
      id: 2,
      icon: (
        <svg className="w-10 h-10 text-fuchsia-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h4l2 2" /></svg>
      ),
      title: '24/7 Availability',
      desc: 'Get instant answers and support any time, day or night.'
    },
    {
      id: 3,
      icon: (
        <svg className="w-10 h-10 text-blue-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="10" rx="2" /><path strokeLinecap="round" strokeLinejoin="round" d="M7 11V7a5 5 0 0110 0v4" /></svg>
      ),
      title: 'Secure & Private',
      desc: 'Your conversations are encrypted and never shared.'
    },
    {
      id: 4,
      icon: (
        <svg className="w-10 h-10 text-green-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" /></svg>
      ),
      title: 'Customizable',
      desc: 'Personalize your AI assistant to fit your needs and style.'
    },
    {
      id: 5,
      icon: (
        <svg className="w-10 h-10 text-yellow-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 20v-6m0 0V4m0 10l-3-3m3 3l3-3" /></svg>
      ),
      title: 'Multilingual',
      desc: 'Communicate in multiple languages with seamless translation.'
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section - Cyber World Design */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-blue-950 overflow-hidden">
        {/* Animated Neon Grid */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Vertical grid lines */}
            {[...Array(15)].map((_, i) => (
              <line
                key={`v-${i}`}
                x1={(i * 96)}
                y1="0"
                x2={(i * 96)}
                y2="900"
                stroke="#00fff7"
                strokeWidth="1"
                opacity="0.08"
              />
            ))}
            {/* Horizontal grid lines */}
            {[...Array(10)].map((_, i) => (
              <line
                key={`h-${i}`}
                x1="0"
                y1={(i * 90)}
                x2="1440"
                y2={(i * 90)}
                stroke="#00fff7"
                strokeWidth="1"
                opacity="0.08"
              />
            ))}
            {/* Circuit/Network lines */}
            <polyline points="100,800 300,700 500,750 700,600 900,650 1200,500" fill="none" stroke="#ff00ea" strokeWidth="3" opacity="0.25" strokeDasharray="12 8"/>
            <polyline points="200,200 400,300 600,250 800,400 1000,350 1300,200" fill="none" stroke="#00fff7" strokeWidth="2" opacity="0.18" strokeDasharray="10 6"/>
          </svg>
          {/* Neon glow overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-blue-700/10 blur-2xl" />
        </div>
        <div className="text-center px-4 z-10">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-widest animate-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00fff7] font-mono uppercase">
            Enter the Cyber World
          </h1>
          <p className="text-2xl md:text-3xl mb-8 max-w-2xl mx-auto text-cyan-200 font-mono drop-shadow-[0_0_8px_#00fff7]">
            Where AI and humans connect in a neon digital universe.
          </p>
        </div>
        {/* Animated Neon Orbs */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-cyan-400 opacity-30 blur-2xl animate-pulse"></div>
          <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-fuchsia-500 opacity-20 blur-3xl animate-ping"></div>
          <div className="absolute bottom-1/4 right-1/4 w-24 h-24 rounded-full bg-blue-400 opacity-30 blur-2xl animate-bounce"></div>
        </div>
        {/* Robot SVG Illustration */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
          <style>{`
            @keyframes robot-bob {
              0%, 100% { transform: translateY(0); }
              50% { transform: translateY(-12px); }
            }
            @keyframes robot-blink {
              0%, 92%, 100% { transform: scaleY(1); }
              95% { transform: scaleY(0.1); }
              97% { transform: scaleY(1); }
            }
            @keyframes robot-antenna-pulse {
              0%, 100% { opacity: 0.7; r: 6; }
              50% { opacity: 1; r: 10; }
            }
          `}</style>
          <svg width="160" height="180" viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg"
            style={{ animation: 'robot-bob 3s ease-in-out infinite' }}>
            {/* Head */}
            <ellipse cx="80" cy="60" rx="45" ry="40" fill="#18181b" stroke="#00fff7" strokeWidth="4"/>
            {/* Eyes (with blink) */}
            <g style={{ transformOrigin: '65px 60px', animation: 'robot-blink 4s infinite' }}>
              <ellipse cx="65" cy="60" rx="7" ry="10" fill="#00fff7" opacity="0.85"/>
            </g>
            <g style={{ transformOrigin: '95px 60px', animation: 'robot-blink 4s infinite', animationDelay: '0.2s' }}>
              <ellipse cx="95" cy="60" rx="7" ry="10" fill="#00fff7" opacity="0.85"/>
            </g>
            {/* Mouth */}
            <rect x="70" y="80" width="20" height="6" rx="3" fill="#00fff7" opacity="0.5"/>
            {/* Antenna */}
            <rect x="77" y="18" width="6" height="20" rx="3" fill="#00fff7"/>
            <circle cx="80" cy="16" r="6" fill="#00fff7" opacity="0.7"
              style={{ transformOrigin: '80px 16px', animation: 'robot-antenna-pulse 1.5s infinite' }}
            />
            {/* Body */}
            <rect x="45" y="100" width="70" height="50" rx="18" fill="#18181b" stroke="#00fff7" strokeWidth="4"/>
            {/* Arms */}
            <rect x="20" y="110" width="20" height="10" rx="5" fill="#00fff7" opacity="0.3"/>
            <rect x="120" y="110" width="20" height="10" rx="5" fill="#00fff7" opacity="0.3"/>
            {/* Body lights */}
            <circle cx="80" cy="125" r="6" fill="#00fff7" opacity="0.7"/>
            <rect x="65" y="140" width="30" height="8" rx="4" fill="#00fff7" opacity="0.2"/>
          </svg>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">
          AI Features
        </h2>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Discover what makes our AI assistant unique in the cyber world.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {aiFeatures.map(feature => (
            <div key={feature.id} className="bg-gray-800 rounded-lg overflow-hidden transition-all hover:transform hover:scale-105 hover:shadow-2xl border border-cyan-900/30">
              <div className="flex items-center justify-center pt-8">
                {feature.icon}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold mb-2 text-cyan-300">{feature.title}</h3>
                <p className="text-gray-400 mb-2">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className="relative py-20 px-4 flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-blue-950">
        <div className="w-full max-w-2xl bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-400/20 p-10">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">Contact Us</h2>
          <p className="text-center text-gray-300 mb-8">Have a question, suggestion, or want to collaborate? Fill out the form below and we’ll get back to you soon!</p>
          <form className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <input type="text" placeholder="Your Name" className="flex-1 px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400" required />
              <input type="email" placeholder="Your Email" className="flex-1 px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400" required />
            </div>
            <textarea placeholder="Your Message" rows="5" className="w-full px-4 py-3 rounded-lg bg-gray-900/80 text-white border border-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 resize-none" required></textarea>
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-r from-gray-900/80 via-black/80 to-blue-950/80 py-14 px-4 text-gray-300 border-t border-cyan-900/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-between md:items-center gap-10 md:gap-8">
          {/* Left: Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-bold text-cyan-400 tracking-widest font-mono drop-shadow-[0_0_8px_#00fff7]">AI Assistant</span>
            <span className="text-sm opacity-80">© {new Date().getFullYear()} Praveen. All rights reserved.</span>
          </div>
          {/* Center: Quick Links */}
          <div className="flex flex-col items-center gap-2">
            <span className="font-semibold text-cyan-300 mb-1">Quick Links</span>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition font-medium">Home</a>
              <a href="#features" className="hover:text-fuchsia-400 transition font-medium">Features</a>
              <a href="#contact" className="hover:text-blue-400 transition font-medium">Contact</a>
            </div>
          </div>
          {/* Right: Social & Contact */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <span className="font-semibold text-cyan-300 mb-1">Connect</span>
            <div className="flex gap-5 mb-2">
              <a href="https://github.com/praveen" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-cyan-400 transition">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.36 9.36 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.7.63.72 1.01 1.63 1.01 2.75 0 3.94-2.34 4.81-4.57 5.07.36.32.68.94.68 1.9 0 1.37-.01 2.47-.01 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg>
              </a>
              <a href="https://twitter.com/praveen" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="hover:text-fuchsia-400 transition">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.97-4.29 4.4 0 .34.04.67.11.98-3.57-.18-6.74-1.98-8.86-4.7-.37.66-.58 1.43-.58 2.25 0 1.55.76 2.92 1.92 3.72-.7-.02-1.36-.22-1.94-.54v.05c0 2.16 1.47 3.97 3.42 4.38-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.77 2.11 3.06 3.97 3.1A8.6 8.6 0 0 1 2 19.54c-.63 0-1.25-.04-1.86-.11A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.5 11.68-12.13 0-.18-.01-.36-.02-.54A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg>
              </a>
              <a href="https://linkedin.com/in/praveen" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-blue-400 transition">
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
              </a>
            </div>
            <span className="text-sm opacity-80">praveen@example.com</span>
          </div>
        </div>
        {/* Glassy effect overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-blue-700/10 blur-2xl" />
      </footer>
    </div>
  );
};

export default GameWebsite;