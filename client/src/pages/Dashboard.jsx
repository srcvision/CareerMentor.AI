import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaRoad,
  FaUserTie,
  FaBriefcase,
  FaSignOutAlt,
  FaUserCircle,
  FaHandshake,
  FaShieldAlt,
  FaGlobe,
} from "react-icons/fa";
import logo from "../assets/generated-image.png"

const navLinks = [
  {
    to: "/resume",
    label: "AI Resume Optimizer",
    emoji: "📝",
    icon: <FaFileAlt />,
    color: "from-blue-500 to-cyan-500",
    desc: "Optimize your resume with ATS-friendly keywords and formatting.",
  },
  {
    to: "/interview",
    label: "Smart Interview Coach",
    emoji: "🎤",
    icon: <FaRobot />,
    color: "from-emerald-500 to-green-500",
    desc: "Mock interviews with real-time AI feedback on your responses.",
  },
  {
    to: "/roadmap",
    label: "Career Roadmap AI",
    emoji: "🗺️",
    icon: <FaRoad />,
    color: "from-purple-500 to-violet-500",
    desc: "Personalized learning paths with milestones and resources.",
  },
  {
    to: "/mentor",
    label: "24/7 Career Mentor",
    emoji: "👔",
    icon: <FaUserTie />,
    color: "from-orange-500 to-red-500",
    desc: "Ask any career question and get expert AI guidance instantly.",
  },
  {
    to: "/jobs",
    label: "Smart Job Tracker",
    emoji: "📋",
    icon: <FaBriefcase />,
    color: "from-cyan-500 to-teal-500",
    desc: "Track applications, deadlines, and follow-ups in one place.",
  },
];

const trustedPartners = [
  { name: "OpenAI", icon: <FaShieldAlt />, url: "https://openai.com" },
  { name: "LinkedIn Learning", icon: <FaGlobe />, url: "https://linkedin.com/learning" },
  { name: "Coursera", icon: <FaHandshake />, url: "https://coursera.org" },
];

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate(); // ← initialize navigate

  const handleLogout = () => {
    logout();
    navigate("/dashboard");
  };

  const handleNav = (path) => {
    navigate(path, { state: { fromDashboard: true } });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background Blobs */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full -top-48 -left-48 blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full -bottom-40 -right-40 blur-3xl"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -180, -360] }}
        transition={{ repeat: Infinity, duration: 25, ease: "easeInOut" }}
      />

      {/* Header */}
      <header className="relative z-10 flex items-center justify-between max-w-6xl mx-auto py-6 px-4">

        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-2xl " />
          <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            CareerMentor.AI
          </span>
        </div>
        <motion.button
          onClick={handleLogout}
          className="flex items-center gap-2 cursor-pointer bg-gradient-to-r from-red-500 to-pink-500 px-4 py-2 rounded-xl font-semibold shadow-lg hover:scale-105 transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaSignOutAlt /> Logout
        </motion.button>
      </header>

      {/* Welcome Section */}
      <section className="relative z-10 mt-8 mb-12 max-w-6xl mx-auto bg-slate-800/50 backdrop-blur-md rounded-3xl p-8 flex flex-col md:flex-row items-center gap-6">
        <motion.div
          className="p-1 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20 }}
        >
          <img src={logo} alt="logo" className="w-15 h-15 rounded-full " />
        </motion.div>
        <div>
          <h2 className="text-3xl font-bold">
            Welcome, {user?.name || "User"} <span className="animate-bounce text-xl">👋</span>
          </h2>
          <p className="text-gray-300 mt-2">
            Explore AI-powered tools for resume optimization, interview practice, personalized roadmaps, 24/7 mentorship, and job tracking.
          </p>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
        {navLinks.map(({ to, label, emoji, icon, color, desc }) => (
          <motion.div
            key={to}
            onClick={() => handleNav(to)}
            className={`group bg-gradient-to-r ${color} rounded-3xl p-1 shadow-xl hover:shadow-2xl transition cursor-pointer`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <div className="bg-slate-900/80 backdrop-blur-md rounded-3xl p-6 flex flex-col gap-4 h-full">
              <div className="flex items-center gap-3">
                <span className="text-3xl animate-bounce">{emoji}</span>
                <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  {label}
                </h3>
              </div>
              <p className="text-gray-300">{desc}</p>
              <span className="mt-auto text-sm text-purple-300">→ Click to explore</span>
            </div>
          </motion.div>
        ))}
      </section>

         {/* About Section */}
      <section className="relative z-10 mt-16 mb-12 max-w-7xl mx-auto bg-slate-800/60 backdrop-blur-lg rounded-3xl p-10 text-gray-300">
        <h2 className="text-3xl font-bold text-white mb-4">About CareerMentor.AI</h2>
        <p>CareerMentor.AI is powered by cutting-edge AI models to help you:</p>
        <ul className="list-disc pl-8 mt-4 space-y-2">
          <li>Optimize resumes with smart keyword analysis</li>
          <li>Practice interviews with real-time feedback</li>
          <li>Generate personalized career roadmaps</li>
          <li>Receive 24/7 expert AI mentorship</li>
          <li>Track jobs, deadlines, and follow-ups easily</li>
        </ul>
      </section>

      {/* Trusted Partners */}
      <section className="relative z-10 mb-16 max-w-7xl mx-auto px-4">
        <h3 className="text-2xl font-semibold text-white mb-6 text-center">Trusted By</h3>
        <div className="flex justify-center gap-12">
          {trustedPartners.map(({ name, icon, url }) => (
            <a key={name} href={url} target="_blank" rel="noreferrer" className="flex flex-col items-center gap-2 text-gray-300 hover:text-white transition">
              <div className="text-4xl">{icon}</div>
              <span>{name}</span>
            </a>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-slate-900 py-8 mt-12">
        <div className="max-w-7xl mx-auto text-center text-gray-400 text-sm space-y-2">
          <p>&copy; {new Date().getFullYear()} CareerMentor.AI. All rights reserved.</p>
          <div className="flex justify-center gap-4">
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
          </div>
          <p>Designed & built by Saurav Chaudhari with React, Tailwind CSS & Framer Motion.</p>
        </div>
      </footer>
    </div>
  );
}
