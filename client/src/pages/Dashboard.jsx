import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaUserCircle, FaChartBar, FaSignOutAlt } from "react-icons/fa";

const Dashboard = () => {
  // Placeholder for user name, replace with real user data if available
  const userName = "John Doe";
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-yellow-400 via-pink-400 to-purple-500">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-400 opacity-30 rounded-full -top-32 -left-32 blur-3xl z-0"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-yellow-400 opacity-30 rounded-full -bottom-24 -right-24 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="relative z-10 bg-white/90 p-10 rounded-3xl shadow-2xl w-full max-w-2xl backdrop-blur-md flex flex-col items-center"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Animated avatar */}
        <motion.div
          className="mb-6"
          initial={{ scale: 0.7, rotate: -10 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
        >
          <FaUserCircle className="text-7xl text-purple-500 drop-shadow-lg animate-pulse" />
        </motion.div>
        <motion.h1
          className="text-3xl font-extrabold text-center mb-2 text-gray-800 tracking-tight flex items-center justify-center gap-2"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Hello,{" "}
          <span className="text-pink-500">{userName}</span>{" "}
          <span className="inline-block animate-bounce">👋</span>
        </motion.h1>
        <p className="text-center text-gray-500 mb-8">
          Welcome to your dashboard!{" "}
          <span className="animate-spin inline-block">🎉</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-8">
          <motion.div
            className="bg-gradient-to-r from-purple-400 to-pink-400 p-6 rounded-2xl shadow-lg flex items-center gap-4 text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.07, rotate: 2 }}
          >
            <FaChartBar className="text-3xl group-hover:animate-bounce" />
            <div>
              <div className="font-bold text-lg">Statistics 📈</div>
              <div className="text-sm">View your progress and stats</div>
            </div>
          </motion.div>
          <motion.div
            className="bg-gradient-to-r from-yellow-400 to-pink-400 p-6 rounded-2xl shadow-lg flex items-center gap-4 text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 cursor-pointer group"
            whileHover={{ scale: 1.07, rotate: -2 }}
          >
            <FaSignOutAlt className="text-3xl group-hover:animate-spin" />
            <div>
              <div className="font-bold text-lg">Logout 🔒</div>
              <div className="text-sm">Sign out of your account</div>
            </div>
          </motion.div>
        </div>
        <div className="text-center text-gray-500 text-sm">
          Have a wonderful day!{" "}
          <span className="ml-1 animate-bounce">🌈</span>
        </div>
      </motion.div>
    </div>
  );
};

export default Dashboard;