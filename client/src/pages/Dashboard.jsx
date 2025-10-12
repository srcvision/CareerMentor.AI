import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaRobot,
  FaFileAlt,
  FaRoad,
  FaUserTie,
  FaBriefcase,
  FaSignOutAlt,
  FaUserCircle,
  FaStar,
} from "react-icons/fa";

const navLinks = [
  {
    to: "/resume",
    label: "Resume Analyzer",
    emoji: "📄",
    desc: "Upload your resume and get instant, AI-powered feedback to help you stand out.",
    icon: <FaFileAlt />,
    color: "from-blue-500 to-indigo-500",
    detail: "Our AI reviews your resume for keywords, structure, and impact. Receive actionable suggestions to improve your chances of landing interviews.",
  },
  {
    to: "/interview",
    label: "Interview Bot",
    emoji: "🤖",
    desc: "Practice mock interviews tailored to your role and experience.",
    icon: <FaRobot />,
    color: "from-green-500 to-teal-500",
    detail: "Simulate real interview scenarios and get instant feedback on your answers, confidence, and communication.",
  },
  {
    to: "/roadmap",
    label: "Roadmap Generator",
    emoji: "🧭",
    desc: "Generate a personalized learning path for your dream career.",
    icon: <FaRoad />,
    color: "from-purple-500 to-pink-500",
    detail: "Tell us your goal, and our AI will create a step-by-step roadmap with resources, skills, and milestones.",
  },
  {
    to: "/mentor",
    label: "Career Mentor",
    emoji: "👨‍🏫",
    desc: "Ask career questions and get expert AI advice anytime.",
    icon: <FaUserTie />,
    color: "from-orange-500 to-red-500",
    detail: "Stuck or confused? Get guidance on job search, growth, or switching fields—instantly.",
  },
  {
    to: "/jobs",
    label: "Job Tracker",
    emoji: "📌",
    desc: "Track your job applications and stay organized.",
    icon: <FaBriefcase />,
    color: "from-cyan-500 to-blue-500",
    detail: "Never lose track of your applications. Manage statuses, notes, and deadlines in one place.",
  },
];

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleNav = (to) => {
    navigate(to, { state: { fromDashboard: true } });
  };

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-[32rem] h-[32rem] bg-pink-300 opacity-30 rounded-full -top-24 -left-24 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 13, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-indigo-300 opacity-30 rounded-full -bottom-20 -right-20 blur-3xl z-0"
        animate={{ scale: [1, 1.15, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 15, ease: "easeInOut" }}
      />

      {/* Company Name and Logout */}
      <div className="relative w-full max-w-6xl flex items-center justify-between mt-8 mb-4 px-4 z-10">
        <div className="flex items-center gap-3">
          <FaStar className="text-3xl text-indigo-500" />
          <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500 tracking-tight">
            CareerMentor.AI
          </span>
        </div>
        <motion.button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-gradient-to-r from-red-500 to-pink-500 text-white px-5 py-2 rounded-xl font-bold shadow-lg hover:from-pink-500 hover:to-red-500 hover:scale-105 transition-all text-base"
          whileHover={{ scale: 1.07, rotate: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <FaSignOutAlt className="text-lg" />
          Logout
        </motion.button>
      </div>

      {/* Main Card */}
      <motion.div
        className="relative z-10 w-full max-w-6xl bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl p-8 md:p-14 mb-10"
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Welcome/User Info */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
          <div className="flex items-center gap-4">
            <motion.div
              className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-2 shadow-lg"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
            >
              <FaUserCircle className="text-5xl text-white drop-shadow" />
            </motion.div>
            <div>
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                Welcome, {user?.name || "User"}{" "}
                <span className="animate-bounce text-xl">👋</span>
              </h2>
              <p className="text-slate-500 text-base">
                Your AI-powered career toolkit is ready. Explore the features below
                to boost your journey!
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate="show"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.13 },
            },
          }}
        >
          {navLinks.map(({ to, label, emoji, desc, icon, color, detail }) => (
            <motion.button
              key={to}
              type="button"
              onClick={() => handleNav(to)}
              className={`block w-full text-left bg-gradient-to-r ${color} p-1 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300`}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.04, rotate: 1 }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="bg-white rounded-2xl h-full p-6 flex flex-col gap-2 items-start">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-3xl animate-bounce">{emoji}</span>
                  <span className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 font-bold">
                    {label}
                  </span>
                </div>
                <div className="text-gray-700 mb-1 flex items-center gap-2 font-semibold">
                  {icon}
                  <span>{desc}</span>
                </div>
                <div className="text-gray-500 text-sm mb-2">{detail}</div>
                <span className="text-xs text-purple-400 mt-auto">
                  Click to open{" "}
                  <span className="animate-pulse">➡️</span>
                </span>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="relative z-10 w-full max-w-6xl mx-auto text-center py-6 text-slate-500 text-sm">
        <span>
          &copy; {new Date().getFullYear()}{" "}
          <span className="font-bold text-indigo-600">CareerMentor.AI</span> —
          Empowering your future with{" "}
          <span className="animate-pulse">✨</span> AI.
        </span>
      </footer>
    </div>
  );
};


export default Dashboard;