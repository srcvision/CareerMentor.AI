import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaUserGraduate, FaRobot, FaArrowLeft, FaCircleNotch } from "react-icons/fa";

export default function CareerMentor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
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

  const askMentor = async () => {
    if (!question.trim()) {
      setAnswer("❌ Please ask a question!");
      return;
    }
    setLoading(true);
    setAnswer("");
    try {
      const res = await axios.post(
        `${process.env.API_URL}api/mentor/ask`,
        { question },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );
      setAnswer(res.data.answer || "🤖 No response received.");
    } catch (err) {
      setAnswer("❌ Error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden p-4">
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
        className="relative z-10 flex flex-col md:flex-row w-full max-w-4xl bg-slate-800/50 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden"
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
        <div className="flex-1 p-8 bg-gradient-to-br from-white/10 to-white/20 flex flex-col items-center justify-center gap-6">
          <motion.h2
            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center gap-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaUserGraduate /> Career Mentor
          </motion.h2>
          <textarea
            rows="4"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="💡 Ask anything about your career..."
            disabled={loading}
            className="w-full max-w-md p-4 bg-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          />
          <motion.button
            onClick={askMentor}
            disabled={loading}
            className={`flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
            whileTap={{ scale: loading ? 1 : 0.97 }}
          >
            {loading ? (
              <>
                <FaCircleNotch className="animate-spin" /> Thinking...
              </>
            ) : (
              "Ask Mentor"
            )}
          </motion.button>
        </div>

        {/* Output Section */}
        <div className="flex-1 p-8 bg-gradient-to-br max-h-[600px] from-white/20 to-white/10 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <FaRobot className="text-2xl text-pink-400" />
            <h3 className="text-2xl font-bold text-white">AI Response</h3>
          </div>
          <div className="flex-1 bg-slate-900/70 rounded-2xl p-4 overflow-auto">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-300">
                <FaCircleNotch className="animate-spin text-4xl mb-2" />
                <p>Generating advice...</p>
              </div>
            ) : answer ? (
              <pre className="whitespace-pre-wrap text-gray-100">{answer}</pre>
            ) : (
              <p className="text-gray-400 text-center mt-40">
                Your mentor's insights will appear here.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
