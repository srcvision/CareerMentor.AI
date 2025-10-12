import React, { useContext, useState, useEffect } from 'react'
import axios from 'axios'
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../context/AuthContext'
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaRobot, FaUserTie } from "react-icons/fa";

const InterviewBot = () => {
  const [role, setRole] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.fromDashboard) {
      // Optionally clear the state if you want
      // navigate(location.pathname, { replace: true, state: {} });
    } else {
      navigate("/dashboard", { replace: true });
    }
  }, [location, navigate]);

  const generator = async () => {
  setLoading(true);
  setResponse("");
  try {
    if (!role) {
      setResponse("❌ Error: Role value is missing");
      setLoading(false);
      return;
    }

    const res = await axios.post(
      "http://localhost:5000/api/interview/generate",
      { role },
      {
        headers: {
          Authorization: `Bearer ${user?.token}`,
          "Content-Type": "application/json",
        },
      }
    );

    setResponse(res.data.feedback || "No response from AI");
  } catch (err) {
    console.error("Request failed with error:", err);
    setResponse(
      "❌ Error: " +
        (err.response?.data?.message ||
          err.response?.data?.error ||
          JSON.stringify(err.response?.data) ||
          err.message)
    );
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-purple-300 to-pink-200 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-[36rem] h-[36rem] bg-pink-300 opacity-30 rounded-full -top-40 -left-40 blur-3xl z-0"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-blue-300 opacity-30 rounded-full -bottom-32 -right-32 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      {/* Main AI Interview Card */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row bg-white/95 rounded-3xl shadow-2xl w-full max-w-5xl min-h-[36rem] backdrop-blur-md overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Left: Input & Button */}
        <div className="flex-1 flex flex-col items-center justify-center p-12 bg-gradient-to-br from-white/80 via-purple-50 to-pink-50">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-tight flex items-center gap-3"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaRobot className="text-purple-500" /> InterviewBot
            <span className="inline-block animate-bounce">🧠</span>
          </motion.h2>
          <div className="w-full flex flex-col items-center gap-10">
            <div className="relative w-full">
              <FaUserTie className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Enter job role (e.g. Frontend Developer)"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white/80 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-purple-400 transition-all duration-300 shadow"
                disabled={loading}
              />
            </div>
            <motion.button
              onClick={generator}
              disabled={loading}
              className={`w-full bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 rounded-xl font-semibold shadow-md hover:from-pink-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              whileHover={{ scale: loading ? 1 : 1.04 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-6 w-6 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"></path>
                  </svg>
                  Interviewing...
                </>
              ) : (
                <>
                  Start Interview <span className="animate-pulse">🤖</span>
                </>
              )}
            </motion.button>
          </div>
        </div>

        {/* Right: AI Feedback */}
        <div className="flex-1 flex flex-col bg-gradient-to-br from-purple-50 via-pink-50 to-white/80 p-0 md:p-0 border-l border-purple-100 min-h-[36rem]">
          <div className="flex items-center gap-2 px-10 pt-10 pb-4">
            <FaRobot className="text-2xl text-pink-500" />
            <span className="text-2xl font-bold text-gray-700">AI Interview</span>
            <span className="ml-2 animate-pulse">💬</span>
          </div>
          <div className="flex-1 px-10 pb-10 flex items-center">
            <div
              className="relative w-full min-h-[22rem] max-h-[28rem] rounded-2xl bg-white/95 border border-purple-200 shadow-xl transition-all duration-300 flex items-start justify-center overflow-auto"
              style={{
                boxShadow:
                  "0 4px 32px 0 rgba(168,85,247,0.08), 0 1.5px 6px 0 rgba(236,72,153,0.07)",
              }}
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center w-full h-full text-center py-8">
                  <svg
                    className="animate-spin h-12 w-12 text-purple-400 mb-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    ></path>
                  </svg>
                  <span className="text-lg font-semibold text-purple-500">
                    InterviewBot is preparing your questions...
                  </span>
                  <span className="text-gray-400 text-sm mt-2">
                    Please wait a moment.
                  </span>
                </div>
              ) : response ? (
                <motion.div
                  className="whitespace-pre-wrap text-gray-800 text-base leading-relaxed w-full text-left px-2 break-words"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {response}
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-center py-8">
                  <FaRobot className="text-4xl text-purple-200 mb-2 animate-bounce" />
                  <span className="text-lg font-medium text-gray-400">
                    Your AI interview will appear here!
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InterviewBot;