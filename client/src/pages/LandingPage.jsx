import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FaUser,
  FaArrowRight,
  FaFileAlt,
  FaRobot,
  FaRoad,
  FaBriefcase,
  FaUserPlus,
  FaUserTie,
  FaLock,
  FaConnectdevelop,
} from "react-icons/fa";
import { Sparkles, CheckSquare, Zap, Clock, TrendingUp } from "lucide-react";

// Simplified data structure for a cleaner, minimal design
const features = [
  {
    icon: FaFileAlt,
    title: "AI Resume Optimization",
    desc: "Intelligent analysis for ATS compatibility and keyword density.",
  },
  {
    icon: FaRobot,
    title: "Smart Interview Coach",
    desc: "Real-time feedback on responses with industry-specific mock interviews.",
  },
  {
    icon: FaRoad,
    title: "Personalized Career Roadmap",
    desc: "Dynamic learning paths with skill assessment and resource recommendations.",
  },
  {
    icon: FaUserTie,
    title: "24/7 Expert Mentorship",
    desc: "Instant, strategic advice powered by advanced AI models.",
  },
  {
    icon: FaBriefcase,
    title: "Smart Job Tracker",
    desc: "Organize applications with success rate analytics and follow-up reminders.",
  },
  {
    icon: FaLock,
    title: "Privacy & Security",
    desc: "We ensure your career data is protected with industry-leading security.",
  },
];

const howItWorksSteps = [
  {
    step: 1,
    title: "Analyze & Upload",
    desc: "Securely upload your resume and career goals to our platform.",
    icon: CheckSquare,
  },
  {
    step: 2,
    title: "AI Optimization",
    desc: "Our AI models generate tailored improvements, coaching, and roadmaps.",
    icon: Zap,
  },
  {
    step: 3,
    title: "Apply & Grow",
    desc: "Utilize your optimized assets to land interviews and accelerate your growth.",
    icon: TrendingUp,
  },
];

// Animation variants for consistency
const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans antialiased">
      {/* --- Navigation Bar --- */}
      <nav className="sticky top-0 z-50 p-4 border-b border-gray-100 backdrop-blur-md bg-white/80 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo/Brand */}
          <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900">
            <FaConnectdevelop className="text-2xl text-gray-700" />
            <span className="hidden sm:inline">CareerMentor.AI</span>
          </Link>

          {/* Nav Links & CTA */}
          <div className="flex items-center gap-6">
            <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-200 hidden md:inline">
              About
            </Link>
            <Link to="/features" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition duration-200 hidden md:inline">
              Features
            </Link>
            
            <Link
              to="/login"
              className="flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 transition duration-200"
            >
              <FaUser className="text-xs" />
              Sign In
            </Link>
            <Link
              to="/register"
              className="flex items-center gap-2 bg-gray-900 text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-gray-700 transition duration-200 shadow-md"
            >
              <FaUserPlus className="text-xs" />
              Sign Up
            </Link>
          </div>
        </div>
      </nav>

      {/* --- Main Content Container --- */}
      <main className="max-w-7xl mx-auto">
        
        {/* --- Hero Section --- */}
        <section className="py-24 md:py-36 px-4 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.p
              variants={itemVariants}
              className="flex items-center justify-center gap-2 mb-4 text-sm font-semibold text-gray-600 uppercase tracking-widest"
            >
              <Sparkles className="w-4 h-4 text-gray-500" />
              AI-Powered Career Acceleration
            </motion.p>
            
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-8xl font-extrabold mb-6 leading-none tracking-tighter text-gray-900 max-w-5xl mx-auto"
            >
              <span className="block">Navigate Your Career</span> 
              <span className="block text-gray-700">with Intelligence.</span>
            </motion.h1>
            
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
            >
              CareerMentor.AI delivers intelligent resume optimization, mock interviews, and personalized roadmaps to secure your next opportunity faster.
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex justify-center"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link
                  to="/register"
                  className="group flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-xl hover:bg-gray-700 transition duration-300"
                >
                  Get Started for Free
                  <FaArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Minimalist Visual */}
            <motion.div
              variants={itemVariants}
              className="mt-16 w-full h-80 bg-gray-100 rounded-2xl border border-gray-200 shadow-inner flex items-center justify-center text-gray-500 text-xl font-medium"
            >
              
            </motion.div>
          </motion.div>
        </section>

        <hr className="border-gray-100" />

        {/* --- About / Mission Section --- */}
        <section id="mission" className="py-24 px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              Our Mission: Democratizing Career Success
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 mb-6 leading-relaxed">
              In today's competitive job market, getting noticed is tough. Our mission is to **level the playing field** by providing every professional with access to top-tier, AI-driven career mentorship and tools. We transform uncertainty into strategy.
            </motion.p>
            <motion.p variants={itemVariants} className="text-lg text-gray-600 leading-relaxed">
              We solve the problem of generic advice and outdated tools. With CareerMentor.AI, you receive **data-backed, personalized insights** that are constantly updated to reflect current industry trends and hiring practices.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full h-96 bg-gray-100 rounded-2xl border border-gray-200 shadow-lg flex items-center justify-center text-gray-500 text-xl font-medium"
          >
            
          </motion.div>
        </section>

        <hr className="border-gray-100" />

        {/* --- How It Works Section --- */}
        <section id="how-it-works" className="py-24 px-4 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              A Simple 3-Step Process
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto mb-16">
              Accelerating your career has never been this streamlined.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {howItWorksSteps.map(({ step, title, desc, icon: Icon }) => (
              <motion.div
                key={step}
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7, delay: step * 0.2 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-gray-900 rounded-full text-white text-xl font-bold shrink-0">
                    {step}
                  </div>
                  <div className="w-10 h-10 flex items-center justify-center border-2 border-gray-300 rounded-full text-gray-500 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
                {step < howItWorksSteps.length && (
                  <div className="hidden md:block absolute right-0 top-1/2 -mr-16 w-32 border-t border-dashed border-gray-300"></div>
                )}
              </motion.div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* --- Features Section --- */}
        <section id="features" className="py-24 px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-16"
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              The Comprehensive AI Toolkit
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-600 max-w-3xl mx-auto">
              All the tools you need for every stage of your job search and career development.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title}
                className="bg-gray-50 border border-gray-100 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <div className="mb-4 w-12 h-12 flex items-center justify-center bg-gray-900 rounded-lg text-white">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- Trusted By Section (Minimalist Carousel Simulation) --- */}
        <section id="trusted-by" className="py-16 px-4 border-t border-gray-100">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="text-center mb-10"
          >
            <motion.h3 variants={itemVariants} className="text-xl font-semibold text-gray-600 mb-8">
              Trusted by professionals at leading companies
            </motion.h3>
          </motion.div>
          
          <div className="overflow-hidden relative whitespace-nowrap py-4">
            <motion.div
              className="flex justify-between items-center"
              animate={{ x: ['0%', '-100%'] }}
              transition={{ x: { duration: 30, ease: 'linear', repeat: Infinity } }}
            >
              {[...Array(2)].map((_, i) => ( // Duplicate for seamless loop
                <div key={i} className="flex space-x-24 px-12 opacity-50">
                  <span className="text-4xl font-extrabold text-gray-300 hover:text-gray-400 transition-colors duration-300 cursor-default">Google</span>
                  <span className="text-4xl font-extrabold text-gray-300 hover:text-gray-400 transition-colors duration-300 cursor-default">Microsoft</span>
                  <span className="text-4xl font-extrabold text-gray-300 hover:text-gray-400 transition-colors duration-300 cursor-default">Amazon</span>
                  <span className="text-4xl font-extrabold text-gray-300 hover:text-gray-400 transition-colors duration-300 cursor-default">Apple</span>
                  <span className="text-4xl font-extrabold text-gray-300 hover:text-gray-400 transition-colors duration-300 cursor-default">Meta</span>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

      </main>

      {/* --- Footer --- */}
      <footer className="border-t border-gray-100 py-12 px-4 bg-gray-50">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={containerVariants}
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8"
        >
          {/* Logo/Brand Column */}
          <div className="col-span-2 md:col-span-1">
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-xl font-bold tracking-tight text-gray-900 mb-4">
              <FaConnectdevelop className="text-2xl text-gray-700" />
              CareerMentor.AI
            </motion.div>
            <motion.p variants={itemVariants} className="text-sm text-gray-500">
              Empowering careers with data and intelligence.
            </motion.p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-1">
            <motion.h4 variants={itemVariants} className="font-semibold text-gray-900 mb-4">Product</motion.h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <motion.li variants={itemVariants}><Link to="/features" className="hover:text-gray-900 transition duration-200">Features</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/pricing" className="hover:text-gray-900 transition duration-200">Pricing</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/how-it-works" className="hover:text-gray-900 transition duration-200">How It Works</Link></motion.li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="md:col-span-1">
            <motion.h4 variants={itemVariants} className="font-semibold text-gray-900 mb-4">Company</motion.h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <motion.li variants={itemVariants}><Link to="/about" className="hover:text-gray-900 transition duration-200">About</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/careers" className="hover:text-gray-900 transition duration-200">Careers</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/contact" className="hover:text-gray-900 transition duration-200">Contact</Link></motion.li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="md:col-span-1">
            <motion.h4 variants={itemVariants} className="font-semibold text-gray-900 mb-4">Resources</motion.h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <motion.li variants={itemVariants}><Link to="/blog" className="hover:text-gray-900 transition duration-200">Blog</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/help" className="hover:text-gray-900 transition duration-200">Help Center</Link></motion.li>
              <motion.li variants={itemVariants}><Link to="/terms" className="hover:text-gray-900 transition duration-200">Terms & Privacy</Link></motion.li>
            </ul>
          </div>
          
          {/* Social Icons (Placeholder for real icons) */}
          <div className="md:col-span-1">
            <motion.h4 variants={itemVariants} className="font-semibold text-gray-900 mb-4">Connect</motion.h4>
            <motion.div variants={itemVariants} className="flex gap-4 text-gray-500 text-xl">
              <FaRobot className="hover:text-gray-700 transition duration-200 cursor-pointer" />
              <FaFileAlt className="hover:text-gray-700 transition duration-200 cursor-pointer" />
              <FaRoad className="hover:text-gray-700 transition duration-200 cursor-pointer" />
            </motion.div>
          </div>

        </motion.div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} CareerMentor.AI. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}