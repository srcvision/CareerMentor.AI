import { FaGithub, FaLinkedin, FaEnvelope, FaFileDownload, FaStar, FaArrowLeft, FaCode, FaRocket, FaBrain } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
            {/* Animated background elements - matching landing page */}
            <motion.div
                className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full -top-48 -left-48 blur-3xl"
                animate={{ 
                    scale: [1, 1.2, 1], 
                    rotate: [0, 180, 360],
                }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 20, 
                    ease: "easeInOut" 
                }}
            />
            <motion.div
                className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full -bottom-40 -right-40 blur-3xl"
                animate={{ 
                    scale: [1, 1.15, 1], 
                    rotate: [0, -180, -360],
                }}
                transition={{ 
                    repeat: Infinity, 
                    duration: 25, 
                    ease: "easeInOut" 
                }}
            />

            {/* Top Navigation */}
            <nav className="relative z-10 p-6">
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium px-4 py-2 rounded-xl hover:bg-white/10 transition-all duration-300"
                >
                    <FaArrowLeft />
                    Back to Home
                </Link>
            </nav>

            <div className="relative z-10 max-w-6xl mx-auto px-4 py-12">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-2xl opacity-60 animate-pulse"></div>
                        <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-full p-4 shadow-2xl">
                            <FaStar className="text-4xl text-white drop-shadow-lg" />
                        </div>
                    </div>
                    
                    <motion.h1
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-5xl md:text-6xl font-black mb-4"
                    >
                        <span className="block">About</span>
                        <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                            CareerMentor.AI
                        </span>
                    </motion.h1>
                    
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Building the future of career development with artificial intelligence
                    </p>
                </motion.div>

                {/* Main Content Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-16">
                    {/* Creator Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 backdrop-blur"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">👨‍💻</div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">Saurav Chaudhari</h2>
                                <p className="text-purple-300">MERN Stack Developer & AI Innovator</p>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            A passionate full-stack developer and AI enthusiast dedicated to creating practical solutions that make a real impact. 
                            With expertise in modern web technologies and artificial intelligence, I'm focused on building tools that empower 
                            professionals to accelerate their career growth.
                        </p>

                        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                            <FaCode className="text-purple-400" />
                            <span>React • Node.js • MongoDB • Express • AI APIs</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex flex-wrap gap-3">
                            <a href="https://github.com/srcvision" target="_blank" rel="noreferrer"
                               className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50">
                                <FaGithub /> GitHub
                            </a>
                            <a href="https://linkedin.com/in/saurav-chaudhari" target="_blank" rel="noreferrer"
                               className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50">
                                <FaLinkedin /> LinkedIn
                            </a>
                            <a href="mailto:saurav@careermentor.ai"
                               className="flex items-center gap-2 text-white/80 hover:text-white hover:bg-white/10 px-4 py-2 rounded-xl transition-all duration-300 border border-slate-600/50 hover:border-purple-500/50">
                                <FaEnvelope /> Contact
                            </a>
                            <a href="/Saurav_Resume_Updated.pdf" download="Saurav_Chaudhari_Resume.pdf"
                               className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-xl hover:from-pink-500 hover:to-purple-500 transition-all duration-300">
                                <FaFileDownload /> Resume
                            </a>
                        </div>
                    </motion.div>

                    {/* Project Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 backdrop-blur"
                    >
                        <div className="flex items-center gap-4 mb-6">
                            <div className="text-4xl">🚀</div>
                            <div>
                                <h2 className="text-3xl font-bold text-white">The Project</h2>
                                <p className="text-cyan-300">AI-Powered Career Development Platform</p>
                            </div>
                        </div>

                        <p className="text-gray-300 leading-relaxed mb-6">
                            CareerMentor.AI is a comprehensive full-stack platform that leverages cutting-edge artificial intelligence to revolutionize 
                            how professionals approach career development. From intelligent resume optimization to personalized career roadmaps, 
                            our platform provides the tools needed to succeed in today's competitive job market.
                        </p>

                        {/* Tech Stack */}
                        <div className="mb-6">
                            <h3 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                                <FaBrain className="text-purple-400" />
                                Technology Stack
                            </h3>
                            <div className="grid grid-cols-2 gap-2 text-sm text-gray-300">
                                <div>• React.js + Framer Motion</div>
                                <div>• Node.js + Express</div>
                                <div>• MongoDB Database</div>
                                <div>• OpenRouter AI APIs</div>
                                <div>• Tailwind CSS</div>
                                <div>• Modern UI/UX Design</div>
                            </div>
                        </div>

                        {/* Project Stats */}
                        <div className="grid grid-cols-3 gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-purple-300">5+</div>
                                <div className="text-xs text-gray-400">AI Features</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-pink-300">100%</div>
                                <div className="text-xs text-gray-400">Open Source</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-cyan-300">24/7</div>
                                <div className="text-xs text-gray-400">AI Support</div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Features Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 backdrop-blur mb-16"
                >
                    <h2 className="text-3xl font-bold text-center mb-8">
                        <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                            Platform Features
                        </span>
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20">
                            <div className="text-3xl mb-2">📝</div>
                            <h3 className="font-semibold text-blue-300 mb-1">AI Resume Optimizer</h3>
                            <p className="text-xs text-gray-400">Advanced ATS optimization and keyword analysis</p>
                        </div>
                        
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20">
                            <div className="text-3xl mb-2">🎤</div>
                            <h3 className="font-semibold text-emerald-300 mb-1">Smart Interview Coach</h3>
                            <p className="text-xs text-gray-400">Personalized mock interviews with real-time feedback</p>
                        </div>
                        
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-purple-500/10 to-violet-500/10 border border-purple-500/20">
                            <div className="text-3xl mb-2">🗺️</div>
                            <h3 className="font-semibold text-purple-300 mb-1">Career Roadmap AI</h3>
                            <p className="text-xs text-gray-400">Personalized learning paths and skill development</p>
                        </div>
                        
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20">
                            <div className="text-3xl mb-2">👔</div>
                            <h3 className="font-semibold text-orange-300 mb-1">24/7 Career Mentor</h3>
                            <p className="text-xs text-gray-400">Instant expert advice and career guidance</p>
                        </div>
                        
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-teal-500/10 border border-cyan-500/20">
                            <div className="text-3xl mb-2">📋</div>
                            <h3 className="font-semibold text-cyan-300 mb-1">Smart Job Tracker</h3>
                            <p className="text-xs text-gray-400">Intelligent application management and analytics</p>
                        </div>
                        
                        <div className="text-center p-4 rounded-2xl bg-gradient-to-br from-pink-500/10 to-rose-500/10 border border-pink-500/20">
                            <div className="text-3xl mb-2">🚀</div>
                            <h3 className="font-semibold text-pink-300 mb-1">Future Ready</h3>
                            <p className="text-xs text-gray-400">Continuous updates with latest AI advancements</p>
                        </div>
                    </div>
                </motion.div>

                {/* Mission Statement */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                    className="text-center bg-gradient-to-br from-slate-800/50 to-slate-900/60 border border-slate-700/50 rounded-3xl p-8 backdrop-blur"
                >
                    <h2 className="text-3xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Our Mission
                        </span>
                    </h2>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
                        To democratize career success by making advanced AI-powered career development tools accessible to everyone. 
                        We believe that with the right guidance and technology, every professional can achieve their career goals 
                        and unlock their full potential in the modern workforce.
                    </p>
                    
                    <div className="mt-8">
                        <Link
                            to="/login"
                            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-2xl font-bold hover:from-pink-500 hover:to-purple-500 transition-all duration-300"
                        >
                            <FaRocket />
                            Start Your Journey
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
