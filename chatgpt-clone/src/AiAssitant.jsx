import React, { useState, useEffect } from 'react';

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

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Features', href: '#features' },
    { name: 'Mobile App', href: '#mobile-app' },
    { name: 'Contact', href: '#contact' },
  ];

  const [navOpen, setNavOpen] = useState(false);
  // Demo login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [language, setLanguage] = useState('en');
  const [muted, setMuted] = useState(false);
  const [dontShow, setDontShow] = useState(false);

  // Update <html lang> attribute when language changes
  

  
  const handleWelcome = () => {
    if (!muted) {
      const audio = new Audio(require('./audio/ai voice.mp3'));
      audio.play();
    }
    setShowWelcome(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Video Intro Overlay */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <video
            className="absolute inset-0 w-full h-full object-cover"
            src={require("./video/intro2.mp4")}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
            {/* Glassmorphism Enter Site Button */}
            <button
              onClick={handleWelcome}
              className="px-12 py-4 rounded-2xl font-orbitron font-bold text-lg text-white backdrop-blur-md bg-white/10 border border-cyan-400/30 shadow-[0_4px_32px_0_#00fff7cc] hover:bg-cyan-400/20 hover:text-cyan-100 transition-all duration-300 ring-2 ring-cyan-400/30 ring-offset-2 ring-offset-black animate-glow"
              style={{boxShadow: '0 0 32px 0 #00fff7cc, 0 2px 32px 0 #ff00ea33'}}
            >
              Enter Site
            </button>
          </div>
          <style>{`
            @keyframes glow { 0%,100%{box-shadow:0 0 16px #00fff7cc,0 2px 16px #ff00ea33;} 50%{box-shadow:0 0 32px #00fff7cc,0 2px 32px #ff00ea33;} }
            .animate-glow { animation: glow 2s infinite alternate; }
          `}</style>
        </div>
      )}
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/10 backdrop-blur-lg shadow-lg border-b border-cyan-400/10">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo/Title */}
          <a href="#" className="font-orbitron text-2xl font-extrabold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent tracking-widest drop-shadow-[0_0_8px_#00fff7]">
            AI Assistant
          </a>
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-2 py-1 font-orbitron font-semibold text-white/90 hover:text-cyan-400 transition group uppercase tracking-wider"
              >
                <span className="group-hover:underline group-hover:decoration-cyan-400 group-hover:underline-offset-4 transition">{link.name}</span>
              </a>
            ))}
          </div>
          {/* Right Side: Login/Profile */}
          <div className="flex items-center gap-4 ml-4">
            {!isLoggedIn ? (
              <button
                onClick={() => setIsLoggedIn(true)}
                className="px-5 py-2 rounded-lg font-orbitron font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 text-white shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all uppercase tracking-wider"
              >
                Login
              </button>
            ) : (
              <button
                onClick={() => setIsLoggedIn(false)}
                className="focus:outline-none"
                aria-label="Profile"
              >
                <span className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-400 via-fuchsia-500 to-blue-500 flex items-center justify-center shadow-lg border-2 border-cyan-400/40">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="8" r="4" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 20c0-2.21 3.58-4 8-4s8 1.79 8 4" />
                  </svg>
                </span>
              </button>
            )}
          </div>
          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2 rounded hover:bg-white/10 focus:outline-none"
            onClick={() => setNavOpen(!navOpen)}
            aria-label="Toggle navigation"
          >
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-transform ${navOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-opacity ${navOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-cyan-400 transition-transform ${navOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>
        {/* Mobile Nav Menu */}
        {navOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-cyan-400/10 px-4 py-4 flex flex-col gap-4 animate-fade-in-down">
            {navLinks.map(link => (
              <a
                key={link.name}
                href={link.href}
                className="font-orbitron font-semibold text-white/90 hover:text-cyan-400 transition uppercase tracking-wider"
                onClick={() => setNavOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        )}
      </nav>
      {/* Spacer for navbar */}
      <div className="h-16 md:h-[68px]" />
      {/* Hero Section - Cyber World Design */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          className="absolute inset-0 w-full h-full object-cover z-0"
          src={require('./video/i1.mp4')}
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        <div className="text-center px-4 z-20 w-full">
          <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-widest animate-text bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_20px_#00fff7] font-mono uppercase">
            Enter the Cyber World
          </h1>
          <p className="text-2xl md:text-3xl mb-8 max-w-2xl mx-auto text-cyan-200 font-mono drop-shadow-[0_0_8px_#00fff7]">
            Where AI and humans connect in a neon digital universe.
          </p>
        </div>
      </section>

     
      {/* About Us Section */}
      <section id="about" className="relative py-20 px-4 flex flex-col items-center" style={{ backgroundImage: `url(${require('./Images/banner.jpeg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 via-black/80 to-blue-950/80 pointer-events-none" />
        <div className="w-full max-w-3xl bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-cyan-400/20 p-10 text-center z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">About Us</h2>
          <p className="text-lg text-gray-300 mb-8">We are passionate about bridging the gap between humans and artificial intelligence. Our mission is to create a safe, innovative, and engaging digital universe where everyone can benefit from the power of AI.</p>
          <div className="flex flex-col md:flex-row justify-center gap-8 mt-6">
            <div className="flex-1 bg-gray-900/70 rounded-xl p-6 border border-cyan-400/10 shadow-md">
              <h3 className="text-xl font-semibold text-cyan-300 mb-2">Our Vision</h3>
              <p className="text-gray-400">Empowering people with accessible, ethical, and creative AI solutions for a better tomorrow.</p>
            </div>
            <div className="flex-1 bg-gray-900/70 rounded-xl p-6 border border-fuchsia-400/10 shadow-md">
              <h3 className="text-xl font-semibold text-fuchsia-300 mb-2">Our Values</h3>
              <ul className="text-gray-400 list-disc list-inside space-y-1 text-left">
                <li>Innovation & Curiosity</li>
                <li>Privacy & Security</li>
                <li>Inclusivity & Diversity</li>
                <li>Transparency & Trust</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mobile App Section */}
      <section id="mobile-app" className="relative py-20 px-4 flex justify-center items-center bg-gradient-to-br from-gray-900 via-black to-blue-950">
        <div className="w-full max-w-5xl flex flex-col md:flex-row items-center gap-12 bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl border border-cyan-400/20 p-10">
          <div className="flex-1 flex justify-center items-center">
            <img src={require('./Images/mobileapp.jpeg')} alt="Mobile App" className="w-64 h-96 object-cover rounded-2xl shadow-lg border-2 border-cyan-400/20" />
          </div>
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">Our Mobile App</h2>
            <p className="text-lg text-gray-300 mb-6">Experience the power of our AI assistant on the go! Our mobile app brings all the features you love right to your fingertips, with a sleek and intuitive interface designed for productivity and fun.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              {/* Apple App Store */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-black/80 hover:bg-black/90 border border-gray-700 shadow-lg transition">
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M17.564 13.222c.012-2.043 1.668-3.021 1.742-3.066-0.951-1.389-2.426-1.58-2.946-1.601-1.252-.127-2.444.735-3.081.735-.637 0-1.617-.717-2.664-.697-1.37.02-2.637.796-3.342 2.025-1.426 2.47-.364 6.116 1.025 8.12.68.98 1.486 2.08 2.547 2.04 1.03-.04 1.418-.66 2.664-.66 1.246 0 1.59.66 2.664.64 1.104-.02 1.797-1 2.473-1.98.78-1.13 1.104-2.23 1.114-2.29-.024-.012-2.14-.82-2.153-3.25zm-2.53-6.01c.56-.68.94-1.63.84-2.57-.81.03-1.78.54-2.36 1.22-.52.6-.98 1.56-.81 2.48.86.07 1.77-.44 2.33-1.13z"/></svg>
                <span className="text-white font-semibold text-base">App Store</span>
              </a>
              {/* Google Play Store */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-5 py-3 rounded-lg bg-black/80 hover:bg-black/90 border border-gray-700 shadow-lg transition">
                <svg className="w-6 h-6 text-green-400" viewBox="0 0 24 24" fill="currentColor"><path d="M3.6 1.8l12.7 7.3-3.8 3.8-8.9-5.1c-.5-.3-.5-1 0-1.3zm16.2 9.3c.5.3.5 1 0 1.3l-2.7 1.5-3.2-3.2 3.2-3.2 2.7 1.6zm-16.2 10.1c-.5-.3-.5-1 0-1.3l8.9-5.1 3.8 3.8-12.7 7.3zm14.2-7.3l-3.2 3.2-3.2-3.2 3.2-3.2 3.2 3.2z"/></svg>
                <span className="text-white font-semibold text-base">Google Play</span>
              </a>
            </div>
            <button className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 text-white font-bold text-lg shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all">Download Now</button>
          </div>
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

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-4 bg-gradient-to-br from-gray-900 via-black to-blue-950">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">What Our Users Say</h2>
          <p className="text-lg text-gray-300 mb-12">Real feedback from our amazing community.</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-cyan-400/10 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="User" className="w-16 h-16 rounded-full mb-4 border-2 border-cyan-400/30" />
              <p className="text-gray-200 mb-4">“This AI assistant is a game changer! The interface is beautiful and the responses are so human-like.”</p>
              <div className="flex gap-1 mb-2">{[...Array(5)].map((_,i) => <span key={i} className="text-yellow-400">★</span>)}</div>
              <span className="text-cyan-300 font-semibold">Alex Johnson</span>
            </div>
            {/* Testimonial 2 */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-fuchsia-400/10 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="User" className="w-16 h-16 rounded-full mb-4 border-2 border-fuchsia-400/30" />
              <p className="text-gray-200 mb-4">“I love the privacy and security features. I feel safe using this every day!”</p>
              <div className="flex gap-1 mb-2">{[...Array(5)].map((_,i) => <span key={i} className="text-yellow-400">★</span>)}</div>
              <span className="text-fuchsia-300 font-semibold">Priya Singh</span>
            </div>
            {/* Testimonial 3 */}
            <div className="bg-white/10 rounded-2xl p-8 shadow-xl border border-blue-400/10 flex flex-col items-center">
              <img src="https://randomuser.me/api/portraits/men/65.jpg" alt="User" className="w-16 h-16 rounded-full mb-4 border-2 border-blue-400/30" />
              <p className="text-gray-200 mb-4">“The multilingual support is fantastic. I can chat in my native language!”</p>
              <div className="flex gap-1 mb-2">{[...Array(5)].map((_,i) => <span key={i} className="text-yellow-400">★</span>)}</div>
              <span className="text-blue-300 font-semibold">Carlos Mendez</span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-4 bg-gradient-to-br from-blue-950 via-black to-gray-900">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 bg-clip-text text-transparent">Frequently Asked Questions</h2>
          <div className="mt-10 space-y-4">
            {/* FAQ 1 */}
            <details className="group bg-white/10 rounded-xl p-6 border border-cyan-400/10">
              <summary className="font-semibold text-cyan-300 cursor-pointer group-open:text-fuchsia-400 transition">Is my data safe with the AI assistant?</summary>
              <p className="mt-2 text-gray-300">Absolutely! All conversations are encrypted and never shared with third parties.</p>
            </details>
            {/* FAQ 2 */}
            <details className="group bg-white/10 rounded-xl p-6 border border-fuchsia-400/10">
              <summary className="font-semibold text-fuchsia-300 cursor-pointer group-open:text-cyan-400 transition">Can I use the assistant in different languages?</summary>
              <p className="mt-2 text-gray-300">Yes, our AI supports multiple languages and seamless translation.</p>
            </details>
            {/* FAQ 3 */}
            <details className="group bg-white/10 rounded-xl p-6 border border-blue-400/10">
              <summary className="font-semibold text-blue-300 cursor-pointer group-open:text-fuchsia-400 transition">How do I customize my AI assistant?</summary>
              <p className="mt-2 text-gray-300">You can personalize your assistant’s style and responses in the settings panel.</p>
            </details>
          </div>
        </div>
      </section>

      {/* Advanced Footer */}
      <footer className="relative bg-gradient-to-br from-gray-900 via-black to-blue-950 pt-16 pb-8 px-4 text-gray-300 border-t border-cyan-900/30 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold text-cyan-400 mb-4 font-orbitron">AI Assistant</h3>
            <p className="text-gray-400 mb-4">Connecting humans and AI in a secure, innovative, and engaging digital universe.</p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="hover:text-cyan-400 transition" aria-label="GitHub"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.49 2.87 8.3 6.84 9.64.5.09.68-.22.68-.48 0-.24-.01-.87-.01-1.7-2.78.62-3.37-1.36-3.37-1.36-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .07 1.53 1.05 1.53 1.05.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.07 0-1.12.38-2.03 1.01-2.75-.1-.26-.44-1.3.1-2.7 0 0 .83-.27 2.75 1.02A9.36 9.36 0 0 1 12 6.84c.84.004 1.68.11 2.47.32 1.92-1.29 2.75-1.02 2.75-1.02.54 1.4.2 2.44.1 2.81 0 .27.18.58.69.48A10.01 10.01 0 0 0 22 12.26C22 6.58 17.52 2 12 2z"/></svg></a>
              <a href="#" className="hover:text-fuchsia-400 transition" aria-label="Twitter"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.58-2.47.69a4.3 4.3 0 0 0 1.88-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.97-4.29 4.4 0 .34.04.67.11.98-3.57-.18-6.74-1.98-8.86-4.7-.37.66-.58 1.43-.58 2.25 0 1.55.76 2.92 1.92 3.72-.7-.02-1.36-.22-1.94-.54v.05c0 2.16 1.47 3.97 3.42 4.38-.36.1-.74.16-1.13.16-.28 0-.54-.03-.8-.08.54 1.77 2.11 3.06 3.97 3.1A8.6 8.6 0 0 1 2 19.54c-.63 0-1.25-.04-1.86-.11A12.13 12.13 0 0 0 8.29 21.5c7.55 0 11.68-6.5 11.68-12.13 0-.18-.01-.36-.02-.54A8.7 8.7 0 0 0 24 4.59a8.48 8.48 0 0 1-2.54.7z"/></svg></a>
              <a href="#" className="hover:text-blue-400 transition" aria-label="LinkedIn"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.88v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg></a>
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-cyan-300 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-cyan-400 transition">Home</a></li>
              <li><a href="#about" className="hover:text-fuchsia-400 transition">About</a></li>
              <li><a href="#features" className="hover:text-blue-400 transition">Features</a></li>
              <li><a href="#mobile-app" className="hover:text-cyan-400 transition">Mobile App</a></li>
              <li><a href="#contact" className="hover:text-fuchsia-400 transition">Contact</a></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h4 className="text-lg font-bold text-fuchsia-300 mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#faq" className="hover:text-cyan-400 transition">FAQ</a></li>
              <li><a href="#testimonials" className="hover:text-fuchsia-400 transition">Testimonials</a></li>
              <li><a href="#" className="hover:text-blue-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Support</a></li>
            </ul>
          </div>
          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-blue-300 mb-4">Newsletter</h4>
            <p className="text-gray-400 mb-4">Subscribe for updates and AI news.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input type="email" placeholder="Your email" className="px-4 py-2 rounded-lg bg-gray-900/80 text-white border border-cyan-400/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 placeholder-gray-400 flex-1" />
              <button type="submit" className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-blue-500 text-white font-bold shadow-lg hover:from-cyan-500 hover:to-blue-600 transition-all">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm border-t border-cyan-900/20 pt-6">
          © {new Date().getFullYear()} Praveen. All rights reserved.
        </div>
        {/* Glassy effect overlay */}
        <div className="pointer-events-none absolute inset-0 rounded-t-2xl bg-gradient-to-br from-cyan-400/10 via-fuchsia-500/10 to-blue-700/10 blur-2xl" />
      </footer>
    </div>
  );
};

export default GameWebsite;