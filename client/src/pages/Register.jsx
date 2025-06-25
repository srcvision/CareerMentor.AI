import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaEnvelope, FaLock, FaUser } from "react-icons/fa";

const Register = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const navigate = useNavigate()

  const handleRegister = async (e)=> {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", { name, email, password });
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.error("Registration failed:", error);
      alert(error.response.data.message);
    }
  
  }
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-red-500 via-blue-400 to-purple-400">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-400 opacity-30 rounded-full -top-32 -left-32 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-green-400 opacity-30 rounded-full -bottom-24 -right-24 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.form 
        onSubmit={handleRegister}
        className="relative z-10 bg-white/30 p-10 rounded-3xl shadow-2xl w-full max-w-md backdrop-blur-md"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Animated logo/avatar */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ scale: 0.7, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
        >
          <span className="text-5xl">📝</span>
        </motion.div>
        <motion.h1 
          className="text-3xl font-extrabold text-center mb-2 text-gray-800 tracking-tight"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Create Account <span className="inline-block animate-bounce">🎉</span>
        </motion.h1>
        <p className="text-center text-gray-500 mb-8">Join us and start your journey 🚀</p>
        <div className="space-y-6">
          <div className="relative group">
            <FaUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Name"
              onChange={(e)=> setName(e.target.value)}
              value={name}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 text-gray-700 placeholder-gray-400 caret-pink-500 hover:shadow-lg"
              autoComplete="name"
              required
            />
          </div>
          <div className="relative group">
            <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="email"
              placeholder="Email"
              onChange={(e)=> setEmail(e.target.value)}
              value={email}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 text-gray-700 placeholder-gray-400 caret-pink-500 hover:shadow-lg"
              autoComplete="email"
              required
            />
          </div>
          <div className="relative group">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="password"
              placeholder="Password"
              onChange={(e)=> setPassword(e.target.value)}
              value={password}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 text-gray-700 placeholder-gray-400 caret-pink-500 hover:shadow-lg"
              autoComplete="new-password"
              required
            />
          </div>
          <div className="relative group">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="password"
              placeholder="Confirm Password"
              onChange={(e)=> setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-300 bg-white/80 text-gray-700 placeholder-gray-400 caret-pink-500 hover:shadow-lg"
              autoComplete="new-password"
              required
            />
          </div>
          <motion.button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold shadow-md hover:from-green-500 hover:to-blue-600 hover:shadow-xl transition ease-out duration-700 flex items-center justify-center gap-2 text-lg"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
          >
            <span>Register</span> <span className="animate-pulse">✨</span>
          </motion.button>
        </div>
        <div className="mt-8 text-center text-gray-500 text-sm">
          Already have an account? <a href="/login" className="text-blue-600 font-bold hover:underline hover:text-green-500 transition-colors">Login</a> <span className="ml-1">🔑</span>
        </div>
      </motion.form>
    </div>
  )
}

export default Register