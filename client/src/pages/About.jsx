import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 flex items-center justify-center py-10 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-3xl bg-white/80 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-14 text-center"
      >
        {/* Heading */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-extrabold mb-4 text-indigo-700 flex items-center justify-center gap-2"
        >
          👋 Saurav Chaudhari
        </motion.h1>

        {/* Subtitle */}
        <p className="text-gray-700 text-lg mb-6">
          MERN Stack Developer & AI Enthusiast<br />
          Creator of <span className="font-bold text-indigo-600">CareerMentor.AI</span>
        </p>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center gap-6 text-2xl mb-8"
        >
          <a href="https://github.com/YOUR_GITHUB_USERNAME" target="_blank" rel="noreferrer"
            className="hover:text-indigo-600 transition-transform hover:scale-110"
          ><FaGithub /></a>

          <a href="https://linkedin.com/in/YOUR_LINKEDIN_USERNAME" target="_blank" rel="noreferrer"
            className="hover:text-indigo-600 transition-transform hover:scale-110"
          ><FaLinkedin /></a>

          <a href="mailto:your.email@example.com"
            className="hover:text-indigo-600 transition-transform hover:scale-110"
          ><FaEnvelope /></a>

          <a href="/Saurav_Chaudhari.pdf" download="Saurav_Chaudhari_Resume.pdf"
            className="hover:text-indigo-600 transition-transform hover:scale-110 flex items-center gap-2"
          >
            <FaFileDownload /> Resume
          </a>
        </motion.div>

        {/* About Project */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mb-4 text-left"
        >
          <h2 className="text-xl font-semibold mb-3 text-indigo-700 text-center">About CareerMentor.AI</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            <span className="font-medium text-indigo-700">CareerMentor.AI</span> is a powerful full-stack MERN + AI platform built to empower job seekers and students.
            <br />
            <span className="inline-block mt-2 text-lg">
              📄 Resume Analyzer, 🤖 Interview Bot, 🧭 Roadmap Generator, 👨‍🏫 Career Mentor, 📌 Job Tracker.
            </span>
            <br />
            <span className="text-sm text-gray-600 mt-2 block">
              Built with React, Node.js, Express, MongoDB, Tailwind CSS, Framer Motion, and OpenRouter AI APIs.
            </span>
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
