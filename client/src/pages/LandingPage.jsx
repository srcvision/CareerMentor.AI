import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaStar,
  FaFileAlt,
  FaRobot,
  FaRoad,
  FaUserTie,
  FaBriefcase,
  FaArrowRight,
  FaLightbulb,
  FaUser,
  FaUserPlus,
} from "react-icons/fa";
import { Sparkles } from "lucide-react";
import logo from "../assets/generated-image.png";

const features = [
  {
    icon: <FaFileAlt className="text-blue-500" />,
    emoji: "📝",
    title: "AI Resume Optimizer",
    desc: "Transform your resume with intelligent analysis and actionable insights.",
    detail:
      "Advanced AI algorithms scan for ATS optimization, keyword density, and format improvements to maximize your interview potential.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <FaRobot className="text-emerald-500" />,
    emoji: "🎤",
    title: "Smart Interview Coach",
    desc: "Practice with AI-powered mock interviews tailored to your industry.",
    detail:
      "Real-time feedback on your responses, body language analysis, and personalized coaching to boost your confidence.",
    color: "from-emerald-500 to-green-500",
  },
  {
    icon: <FaRoad className="text-purple-500" />,
    emoji: "🗺️",
    title: "Career Roadmap AI",
    desc: "Get a personalized learning path crafted by artificial intelligence.",
    detail:
      "Dynamic roadmaps with skills assessment, resource recommendations, and milestone tracking for career advancement.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <FaUserTie className="text-orange-500" />,
    emoji: "👔",
    title: "24/7 Career Mentor",
    desc: "Access expert career guidance powered by advanced AI models.",
    detail:
      "Instant answers to career questions, strategic advice, and personalized recommendations available round the clock.",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: <FaBriefcase className="text-cyan-500" />,
    emoji: "📋",
    title: "Smart Job Tracker",
    desc: "Organize applications with intelligent tracking and insights.",
    detail:
      "AI-powered analytics on application success rates, follow-up reminders, and market trend insights.",
    color: "from-cyan-500 to-teal-500",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between">
            {/* Left: Sign In + Sign Up */}
            <div className="flex items-center gap-3">
              <Link
                to="/login"
                className="flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium px-4 py-2 rounded-xl border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 transition-all duration-300"
              >
                <FaUser className="text-xs" />
                Sign In
              </Link>
              <Link
                to="/register"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium px-4 py-2 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300 shadow-lg"
              >
                <FaUserPlus className="text-xs" />
                Sign Up
              </Link>
            </div>

            {/* Center: Logo/Brand */}
            <div className="hidden md:flex items-center mr-28 gap-2">
              <FaStar className="text-purple-400 text-lg" />
              <span className="font-bold text-white/90 tracking-wide">
                CareerMentor.AI
              </span>
            </div>

            {/* Right: About Link */}
            <div className="flex items-center">
              <Link
                to="/about"
                className="group flex items-center gap-2 text-white/90 hover:text-white text-sm font-medium px-5 py-2 rounded-full bg-slate-800/40 hover:bg-gradient-to-r hover:from-purple-500/20 hover:to-pink-500/20 border border-slate-600/30 hover:border-purple-400/50 transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                <span className="w-2 h-2 rounded-full bg-purple-400 group-hover:bg-pink-400 transition-colors duration-300"></span>
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced animated background elements */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full -top-48 -left-48 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 20,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full -bottom-40 -right-40 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, -180, -360],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 25,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-64 h-64 bg-gradient-to-r from-green-400 to-emerald-400 opacity-15 rounded-full top-1/3 right-1/4 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{
          repeat: Infinity,
          duration: 30,
          ease: "linear",
        }}
      />

      {/* Hero Section */}
      <div className="relative z-10 min-h-screen flex flex-col justify-center items-center text-center px-4 pt-25">
        {/* Brand Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          className="mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
            <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-1 shadow-2xl">
              <img src={logo} alt="logo" className="w-30 h-30 rounded-full " />
            </div>
          </div>
        </motion.div>

        {/* Main Heading with Enhanced Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6"
        >
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-4 leading-tight">
            <span className="block">Welcome to</span>
            <motion.span
              className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              CareerMentor.AI
            </motion.span>
            <motion.span
              className="ml-4 text-5xl"
              animate={{ rotate: [0, 10, -10, 10, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 1,
              }}
            >
              🚀
            </motion.span>
          </h1>
        </motion.div>

        {/* Enhanced Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12"
        >
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 max-w-4xl leading-relaxed">
            Supercharge your career with{" "}
            <span className="text-purple-400 font-semibold">
              next-generation AI technology
            </span>{" "}
            — from intelligent resume optimization to personalized career
            roadmaps.
            <br />
            <span className="text-lg text-gray-400 mt-2 block">
              Join thousands of professionals accelerating their career growth
              with AI.
            </span>
          </p>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 mb-16"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/login"
              className="group relative bg-gradient-to-r from-purple-500 to-pink-500 px-10 py-4 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                Start Your AI Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
            to="/seehowwork"
            className="group border-2 border-purple-400 px-10 py-4 rounded-2xl font-bold text-xl text-purple-400 hover:bg-purple-400 hover:text-white transition-all duration-300">
              <span className="flex items-center gap-3">
                <FaLightbulb className="group-hover:animate-pulse" />
                See How It Works
              </span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400"
        >
          <p className="text-sm mb-2">Discover Our AI-Powered Features</p>
          <div className="w-px h-8 bg-gradient-to-b from-purple-400 to-transparent mx-auto"></div>
        </motion.div>
      </div>

      {/* Features Section with Enhanced Design */}
      <div className="relative z-10 py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-black mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Powered by Advanced AI
            </span>
            <motion.span
              className="ml-3 text-3xl"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              ✨
            </motion.span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the future of career development with our comprehensive
            AI toolkit
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {features.map(({ icon, emoji, title, desc, detail, color }) => (
            <motion.div
              key={title}
              className="group relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-500"
              variants={{
                hidden: { opacity: 0, y: 50, scale: 0.9 },
                show: { opacity: 1, y: 0, scale: 1 },
              }}
              whileHover={{
                scale: 1.02,
                y: -5,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.15)",
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Gradient overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`}
              ></div>

              <div className="relative z-10">
                {/* Icon and Emoji */}
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl"
                  >
                    {emoji}
                  </motion.div>
                  <div className="text-3xl">{icon}</div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  <span
                    className={`bg-gradient-to-r ${color} bg-clip-text text-transparent`}
                  >
                    {title}
                  </span>
                </h3>

                {/* Description */}
                <p className="text-gray-300 text-lg mb-4 leading-relaxed">
                  {desc}
                </p>

                {/* Detail */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {detail}
                </p>

                {/* Hover effect sparkles */}
                <motion.div
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="text-purple-400 text-lg" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Enhanced Footer */}
      <footer className="relative z-10 py-16 text-center border-t border-slate-800/50">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="mb-6">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>
          </div>

          <p className="text-slate-400 text-lg">
            &copy; {new Date().getFullYear()}{" "}
            <motion.span
              className="font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
            >
              CareerMentor.AI
            </motion.span>{" "}
            — Empowering careers with{" "}
            <motion.span
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-yellow-400"
            >
              ✨
            </motion.span>{" "}
            artificial intelligence
          </p>

          <div className="mt-4 text-sm text-slate-500">
            Built with React, Tailwind CSS & Framer Motion
          </div>
        </motion.div>
      </footer>
    </div>
  );
}
