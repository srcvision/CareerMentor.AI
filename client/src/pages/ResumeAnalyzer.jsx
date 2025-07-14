import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { FaFileUpload, FaRobot } from "react-icons/fa";

const ResumeAnalyzer = () => {
  const [file, setfile] = useState(null);
  const [feedback, setFeedback] = useState("");
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      alert("Please upload a resume file.");
      return;
    }
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
      console.log("resume ", res);
      setFeedback(res.data.feedback);
    } catch (err) {
      alert("Error: " + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-blue-300 to-green-200 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-[36rem] h-[36rem] bg-green-300 opacity-30 rounded-full -top-40 -left-40 blur-3xl z-0"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-indigo-300 opacity-30 rounded-full -bottom-32 -right-32 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />

      {/* Main AI App Card */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row bg-white/95 rounded-3xl shadow-2xl w-full max-w-5xl min-h-[36rem] backdrop-blur-md overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Left: Upload & Form */}
        <div className="flex-1 flex flex-col items-center justify-center p-12 bg-gradient-to-br from-white/80 via-blue-50 to-green-50">
          <motion.h2
            className="text-4xl font-extrabold text-center mb-10 text-gray-800 tracking-tight flex items-center gap-3"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <FaRobot className="text-indigo-500" /> Resume Analyzer
            <span className="inline-block animate-bounce">🤖</span>
          </motion.h2>
          <form
            onSubmit={handleSubmit}
            className="w-full flex flex-col items-center gap-10"
          >
            <label className="w-full flex flex-col items-center cursor-pointer">
              <motion.div
                className="flex flex-col items-center justify-center border-4 border-dashed border-indigo-400 rounded-2xl p-10 bg-indigo-50 hover:bg-indigo-100 transition-colors shadow-xl"
                whileHover={{ scale: 1.04 }}
              >
                <FaFileUpload className="text-5xl text-indigo-400 mb-3 animate-bounce" />
                <span className="text-gray-700 font-semibold text-lg">
                  Drag & drop or click to upload your resume
                </span>
                <span className="text-xs text-gray-500 mt-1">
                  (PDF, DOC, DOCX)
                </span>
                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setfile(e.target.files[0])}
                  required
                  className="hidden"
                />
                {file && (
                  <span className="mt-3 text-green-600 font-bold text-base">
                    {file.name}
                  </span>
                )}
              </motion.div>
            </label>
            <motion.button
              type="submit"
              className={`w-full bg-gradient-to-r from-indigo-500 to-green-400 text-white py-3 rounded-xl font-semibold shadow-md hover:from-green-400 hover:to-indigo-500 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg ${
                loading ? "opacity-60 cursor-not-allowed" : ""
              }`}
              whileHover={{ scale: loading ? 1 : 1.04 }}
              whileTap={{ scale: loading ? 1 : 0.97 }}
              disabled={loading}
            >
              {loading ? (
                <>
                  <svg
                    className="animate-spin h-6 w-6 mr-2 text-white"
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
                  Analyzing...
                </>
              ) : (
                <>
                  Analyze Resume <span className="animate-pulse">🤖</span>
                </>
              )}
            </motion.button>
          </form>
        </div>

        {/* Right: AI Feedback */}
        <div className="flex-1 flex flex-col bg-gradient-to-br from-indigo-50 via-green-50 to-white/80 p-0 md:p-0 border-l border-indigo-100 min-h-[36rem]">
          <div className="flex items-center gap-2 px-10 pt-10 pb-4">
            <FaRobot className="text-2xl text-green-500" />
            <span className="text-2xl font-bold text-gray-700">AI Feedback</span>
            <span className="ml-2 animate-pulse">💡</span>
          </div>
          <div className="flex-1 px-10 pb-10 flex items-center">
            <div
              className={`relative w-full min-h-[22rem] max-h-[28rem] rounded-2xl bg-white/95 border border-green-200 shadow-xl transition-all duration-300 flex items-center justify-center`}
              style={{
                boxShadow:
                  "0 4px 32px 0 rgba(34,197,94,0.08), 0 1.5px 6px 0 rgba(99,102,241,0.07)",
              }}
            >
              {loading ? (
                <div className="flex flex-col items-center justify-center w-full h-full text-center py-8">
                  <svg
                    className="animate-spin h-12 w-12 text-green-400 mb-4"
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
                  <span className="text-lg font-semibold text-green-500">
                    Analyzing your resume...
                  </span>
                  <span className="text-gray-400 text-sm mt-2">
                    This may take a few seconds.
                  </span>
                </div>
              ) : feedback ? (
                <motion.div
                  className="whitespace-pre-wrap text-gray-800 text-base leading-relaxed w-full text-left px-2 overflow-y-auto break-words max-h-[22rem]"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  {feedback}
                </motion.div>
              ) : (
                <div className="flex flex-col items-center justify-center w-full h-full text-center py-8">
                  <FaRobot className="text-4xl text-indigo-200 mb-2 animate-bounce" />
                  <span className="text-lg font-medium text-gray-400">
                    AI feedback will appear here after analysis.
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

export default ResumeAnalyzer;
