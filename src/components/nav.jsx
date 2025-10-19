import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Nav({ user, setUser }) {
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.href = '/';
  };
  return (
    <nav className="py-4 px-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between">
        <motion.div whileHover={{ scale: 1.05 }} className="text-2xl font-bold">EduReuse</motion.div>
        <div className="flex items-center gap-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/upload" className="bg-white/20 px-3 py-2 rounded-lg hover:bg-white/30">Upload</Link>
          {user ? (
            <button onClick={logout} className="bg-white/20 px-3 py-2 rounded-lg">Logout</button>
          ) : (
            <>
              <Link to="/login" className="px-3 py-2">Login</Link>
              <Link to="/signup" className="px-3 py-2 bg-white/20 rounded-lg">Signup</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
