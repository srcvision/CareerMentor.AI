import { useState, useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import { FaRobot, FaUserGraduate } from "react-icons/fa";

export default function CareerMentor() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
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

  const askMentor = async () => {
    if (!question.trim()) return alert("📝 Please ask a question first!");
    setLoading(true);
    setAnswer("");
    try {
      const res = await axios.post(
        "http://localhost:5000/api/mentor/ask",
        { question },
        {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        }
      );
      console.log("Mentor ",res)
      setAnswer(res.data.answer || "🤖 No response received.");
    } catch (err) {
      alert("Mentor Error: " + (err.response?.data?.message || err.message));
    }
    setLoading(false);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-100 overflow-hidden p-4">
      {/* Glowing animated background blobs */}
      <motion.div
        className="absolute w-[30rem] h-[30rem] bg-pink-300 opacity-30 rounded-full -top-20 -left-20 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[24rem] h-[24rem] bg-purple-300 opacity-30 rounded-full -bottom-20 -right-20 blur-3xl z-0"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 w-full max-w-4xl bg-white/90 backdrop-blur-md rounded-3xl shadow-xl p-10 md:p-16"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-extrabold text-center text-purple-700 mb-6 flex items-center justify-center gap-3">
          <FaUserGraduate className="text-purple-500" />
          Ask Career Mentor <span className="animate-bounce">💬</span>
        </h2>

        <textarea
          rows="4"
          className="w-full p-4 border-2 border-purple-300 rounded-xl bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 shadow-sm"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="💡 Ask anything about your career journey..."
          disabled={loading}
        />

        <motion.button
          onClick={askMentor}
          disabled={loading}
          className={`mt-6 w-full bg-gradient-to-r from-purple-500 to-pink-400 text-white py-3 rounded-xl font-semibold shadow-md hover:from-pink-400 hover:to-purple-500 hover:shadow-xl transition-all flex items-center justify-center gap-2 text-lg ${
            loading ? "opacity-60 cursor-not-allowed" : ""
          }`}
          whileTap={{ scale: loading ? 1 : 0.96 }}
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
              Thinking...
            </>
          ) : (
            <>
              Ask Mentor <span className="animate-pulse">🧠</span>
            </>
          )}
        </motion.button>

        <div className="mt-8">
          {loading ? (
            <div className="text-center text-purple-500 font-medium animate-pulse">
              <FaRobot className="text-3xl mx-auto mb-2 animate-bounce" />
              Your mentor is preparing the best advice for you...
            </div>
          ) : answer ? (
            <motion.div
              className="whitespace-pre-wrap bg-purple-50 border border-purple-200 text-gray-800 p-6 rounded-xl shadow-inner"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <strong className="block mb-2 text-purple-600 text-lg">🎯 Mentor's Advice:</strong>
              {answer}
            </motion.div>
          ) : (
            <div className="text-center text-gray-400 mt-4">
              <FaRobot className="text-2xl mx-auto mb-2 animate-bounce" />
              Ask your question above to receive personalized career guidance!
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
