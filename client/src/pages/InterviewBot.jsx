import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaUserTie,
  FaArrowLeft,
  FaCircleNotch,
} from "react-icons/fa";

export default function InterviewBot() {
  const [role, setRole] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (!location.state?.fromDashboard) {
      navigate("/dashboard", { replace: true });
    }
  }, [location, navigate]);

  const handleBack = () => navigate(-1);

  const startInterview = async () => {
    if (!role.trim()) {
      return setResponse("❌ Please enter a job role.");
    }
    setLoading(true);
    setResponse("");
    try {
      const res = await axios.post(
        `${process.env.API_URL}api/interview/generate`,
        { role },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "application/json",
          },
        }
      );
      setResponse(res.data.feedback || "No response from AI.");
    } catch (err) {
      setResponse(
        "❌ Error: " +
          (err.response?.data?.message || err.message)
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full -top-48 -left-48 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 20 }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full -bottom-40 -right-40 blur-3xl"
        animate={{ rotate: [0, -360] }}
        transition={{ repeat: Infinity, duration: 25 }}
      />
      

      <motion.div
        className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl bg-slate-800/50 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 flex items-center gap-2 text-white/80 hover:text-white"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Input Section */}
        <div className="flex-1 p-12 bg-gradient-to-br from-white/10 to-white/20 flex flex-col items-center justify-center gap-8">
          <motion.h2
            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center gap-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaRobot /> AI Interview Bot
          </motion.h2>
          <div className="w-full max-w-md flex flex-col gap-6">
            <div className="relative">
              <FaUserTie className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Enter job role, e.g. Frontend Developer"
                className="w-full pl-10 pr-4 py-3 bg-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
                disabled={loading}
              />
            </div>
            <motion.button
              onClick={startInterview}
              disabled={loading}
              className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              }`}
              whileTap={{ scale: loading ? 1 : 0.97 }}
            >
              {loading ? (
                <>
                  <FaCircleNotch className="animate-spin" /> Thinking...
                </>
              ) : (
                "Start Interview"
              )}
            </motion.button>
          </div>
        </div>

        {/* Feedback Section */}
        <div className="flex-1 p-8 bg-gradient-to-br max-h-[600px] from-white/20 to-white/10 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <FaRobot className="text-2xl text-pink-400" />
            <h3 className="text-2xl font-bold text-white">AI Feedback</h3>
          </div>
          <div className="flex-1 bg-slate-900/70 rounded-2xl p-4 overflow-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-300">
                <FaCircleNotch className="animate-spin text-4xl mb-2" />
                <p>Generating questions...</p>
              </div>
            ) : response ? (
              <pre className="whitespace-pre-wrap text-gray-100">{response}</pre>
            ) : (
              <p className="text-gray-400 text-center mt-40">
                Your AI interview will appear here.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
