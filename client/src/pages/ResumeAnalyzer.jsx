import React, { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import {
  FaFileUpload,
  FaRobot,
  FaArrowLeft,
  FaCircleNotch,
  FaStar,
} from "react-icons/fa";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) return alert("Please upload a resume file.");

    const formData = new FormData();
    formData.append("resume", file);
    setLoading(true);
    setFeedback("");

    try {
      const res = await axios.post(
        "http://localhost:5000/api/resume/analyze",
        formData,
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFeedback(res.data.feedback);
    } catch (err) {
      alert(err.response?.data?.message || err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative overflow-hidden">
      {/* Background Animated Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-25 rounded-full -top-48 -left-48 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 25 }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-25 rounded-full -bottom-40 -right-40 blur-3xl"
        animate={{ rotate: [0, -360] }}
        transition={{ repeat: Infinity, duration: 30 }}
      />

      <motion.div
        className="relative z-10 flex flex-col md:flex-row w-full max-w-5xl min-h-[35rem] bg-slate-800/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10"
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

        {/* Upload Section */}
        <div className="flex-1 bg-gradient-to-br from-white/10 to-white/20 p-10 flex flex-col items-center justify-center gap-8 border-r border-white/10">
          <motion.h2
            className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center gap-3"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaRobot /> AI Resume Analyzer
          </motion.h2>

          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center gap-6"
          >
            <label className="w-full cursor-pointer">
              <motion.div
                className="border-4 border-dashed border-indigo-500 rounded-2xl p-8 text-center hover:bg-indigo-900/40 transition"
                whileHover={{ scale: 1.03 }}
              >
                <div className="flex justify-center">

                <FaFileUpload className="text-5xl text-indigo-400 mb-4 animate-bounce" />
                </div>
                <p className="text-lg text-gray-200">Drag & drop or click to upload</p>
                <p className="text-sm text-gray-400">(PDF, DOC, DOCX)</p>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setFile(e.target.files[0])}
                  className="hidden"
                  required
                />
                {file && (
                  <motion.p
                    className="mt-4 text-green-400 font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    {file.name}
                  </motion.p>
                )}
              </motion.div>
            </label>

            <motion.button
              type="submit"
              disabled={loading}
              className={`flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 rounded-xl font-semibold shadow-lg transition ${
                loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              }`}
              whileTap={{ scale: loading ? 1 : 0.97 }}
            >
              {loading ? (
                <>
                  <FaCircleNotch className="animate-spin" /> Analyzing...
                </>
              ) : (
                "Analyze Now"
              )}
            </motion.button>
          </form>
        </div>

        {/* Feedback Section */}
        <div className="flex-1 bg-gradient-to-br from-white/20 to-white/10 p-8 flex flex-col">
          <div className="flex items-center gap-2 mb-4">
            <FaStar className="text-2xl text-indigo-400" />
            <h3 className="text-2xl font-bold text-white">AI Feedback</h3>
          </div>

          {/* Scrollable output box with fixed height */}
          <div className="flex-1 bg-slate-900/70 rounded-2xl p-4 overflow-y-auto max-h-[600px] scrollbar-thin scrollbar-thumb-indigo-500 scrollbar-track-slate-800">
            {loading ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-300">
                <FaCircleNotch className="animate-spin text-4xl mb-2" />
                <p>Processing your resume...</p>
              </div>
            ) : feedback ? (
              <motion.pre
                className="whitespace-pre-wrap text-gray-100 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {feedback}
              </motion.pre>
            ) : (
              <p className="text-gray-400 text-center mt-50">
                AI feedback will appear here after analysis.
              </p>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
