import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoggedIn(true);
      navigate('/chat');
    } else {
      setError('Please enter email and password.');
    }
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
    navigate('/chat');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-700 via-blue-800 to-fuchsia-900">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 w-full max-w-md flex flex-col gap-4 relative">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-2">
          <div className="bg-gradient-to-br from-cyan-400 via-fuchsia-400 to-blue-400 p-2 rounded-full shadow-lg">
            <FcGoogle className="text-4xl bg-white rounded-full p-1" />
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-center text-white tracking-wide mb-2 drop-shadow">Sign in to your account</h2>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center gap-3 w-full py-2 bg-white text-gray-800 rounded-full font-semibold shadow hover:bg-gray-100 transition mb-2 mt-2 border border-gray-200"
        >
          <FcGoogle className="text-2xl" /> Continue with Google
        </button>
        <div className="flex items-center gap-2 my-2">
          <div className="flex-1 h-px bg-gray-300/30" />
          <span className="text-gray-200 text-sm">or</span>
          <div className="flex-1 h-px bg-gray-300/30" />
        </div>
        {error && <div className="mb-2 text-red-400 text-center">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          className="w-full px-4 py-2 rounded-xl bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/20 mb-2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full px-4 py-2 rounded-xl bg-white/30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400 border border-white/20 mb-2"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full py-2 bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-full text-white font-bold mt-2 mb-2 shadow-lg transition text-lg tracking-wide"
        >
          Login
        </button>
        <div className="text-center text-gray-200 mt-2">
          Don't have an account?{' '}
          <Link to="/signup" className="text-cyan-200 hover:underline">Register</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
