import { motion } from "framer-motion";
import { FaRobot, FaFileAlt, FaUserTie, FaRoad, FaBriefcase, FaComments, FaMicrophoneAlt } from "react-icons/fa";

const steps = [
  {
    icon: <FaFileAlt className="text-fuchsia-400 text-3xl" />,
    title: "Upload & Analyze Resume",
    desc: "Easily upload your resume. Our AI instantly analyzes it for structure, keywords, and formatting, providing actionable feedback to boost your chances."
  },
  {
    icon: <FaRobot className="text-indigo-400 text-3xl" />,
    title: "AI-Powered Interview Practice",
    desc: "Select your desired job role and practice with AI-driven mock interviews. Get real-time, personalized feedback and tips to improve your responses."
  },
  {
    icon: <FaRoad className="text-purple-400 text-3xl" />,
    title: "Personalized Career Roadmap",
    desc: "Receive a dynamic, AI-generated learning and career path tailored to your goals, including skill assessments and milestone tracking."
  },
  {
    icon: <FaBriefcase className="text-cyan-400 text-3xl" />,
    title: "Smart Job Tracker",
    desc: "Organize and track all your job applications in one place. Get analytics, reminders, and insights to stay ahead in your job search."
  },
  {
    icon: <FaUserTie className="text-orange-400 text-3xl" />,
    title: "24/7 AI Career Mentor",
    desc: "Ask career questions anytime and get instant, expert advice powered by Perplexity AI."
  },
  {
    icon: <FaComments className="text-pink-400 text-3xl" />,
    title: "Community Forum & AI Suggestions",
    desc: "Engage with peers, post questions, and receive AI-generated suggestions and support from the community."
  },
  {
    icon: <FaMicrophoneAlt className="text-green-400 text-3xl" />,
    title: "Voice Interaction (Optional)",
    desc: "Use voice input for hands-free interaction with AI features, making your experience even more seamless."
  }
];

export default function Howwork() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 text-white flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated Background Blobs */}
      <motion.div
        className="absolute w-[32rem] h-[32rem] bg-gradient-to-tr from-fuchsia-500 via-purple-500 to-indigo-500 opacity-25 rounded-full -top-60 -left-60 blur-3xl animate-pulse"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30 }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-500 opacity-20 rounded-full -bottom-48 -right-48 blur-3xl animate-pulse"
        animate={{ rotate: [0, -360] }}
        transition={{ repeat: Infinity, duration: 35 }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-gradient-to-br from-pink-400 via-fuchsia-500 to-purple-500 opacity-10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-2xl animate-pulse"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 18 }}
      />

      <motion.div
        className="relative z-10 w-full max-w-5xl mx-auto text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
          How CareerMentor.AI Works
        </h1>
        <p className="text-xl md:text-2xl text-fuchsia-100 mb-12 max-w-3xl mx-auto">
          CareerMentor.AI combines advanced AI (powered by Perplexity) and a modern, animated interface to supercharge your career journey. Here’s how you can make the most of every feature:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="group bg-white/10 backdrop-blur-xl rounded-2xl p-8 flex flex-col items-center shadow-xl border border-fuchsia-500/20 hover:scale-105 hover:shadow-fuchsia-500/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-fuchsia-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-x">
                {step.title}
              </h3>
              <p className="text-fuchsia-100 text-lg">{step.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16 text-fuchsia-200/80 text-lg max-w-2xl mx-auto">
          <strong>CareerMentor.AI</strong> is your all-in-one, AI-powered career companion. Whether you’re optimizing your resume, preparing for interviews, tracking jobs, or seeking advice, our platform ensures you’re always a step ahead in your professional journey.
        </div>
      </motion.div>
    </div>
  );
}
