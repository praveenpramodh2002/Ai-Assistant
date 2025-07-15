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

      {/* Footer */}
      <footer className="bg-black py-8 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Praveen. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default GameWebsite;