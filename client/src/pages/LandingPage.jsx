import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaStar, FaFileAlt, FaRobot, FaRoad, FaUserTie, FaBriefcase } from "react-icons/fa";

const features = [
	{
		icon: <FaFileAlt className="text-blue-500" />,
		emoji: "📄",
		title: "Resume Analyzer",
		desc: "Upload your resume and get instant, AI-powered feedback to help you stand out.",
		detail: "Our AI reviews your resume for keywords, structure, and impact. Receive actionable suggestions to improve your chances of landing interviews.",
	},
	{
		icon: <FaRobot className="text-green-500" />,
		emoji: "🤖",
		title: "Interview Bot",
		desc: "Practice mock interviews tailored to your role and experience.",
		detail: "Simulate real interview scenarios and get instant feedback on your answers, confidence, and communication.",
	},
	{
		icon: <FaRoad className="text-purple-500" />,
		emoji: "🧭",
		title: "Roadmap Generator",
		desc: "Generate a personalized learning path for your dream career.",
		detail: "Tell us your goal, and our AI will create a step-by-step roadmap with resources, skills, and milestones.",
	},
	{
		icon: <FaUserTie className="text-orange-500" />,
		emoji: "👨‍🏫",
		title: "Career Mentor",
		desc: "Ask career questions and get expert AI advice anytime.",
		detail: "Stuck or confused? Get guidance on job search, growth, or switching fields—instantly.",
	},
	{
		icon: <FaBriefcase className="text-cyan-500" />,
		emoji: "📌",
		title: "Job Tracker",
		desc: "Track your job applications and stay organized.",
		detail: "Never lose track of your applications. Manage statuses, notes, and deadlines in one place.",
	},
];

export default function LandingPage() {
	return (
		<div className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-50 flex flex-col items-center justify-center relative overflow-hidden">
			{/* Animated background blobs */}
			<motion.div
				className="absolute w-[28rem] h-[28rem] bg-indigo-200 opacity-30 rounded-full -top-20 -left-20 blur-3xl z-0"
				animate={{ scale: [1, 1.1, 1], rotate: [0, 15, 0] }}
				transition={{ repeat: Infinity, duration: 12, ease: "easeInOut" }}
			/>
			<motion.div
				className="absolute w-[20rem] h-[20rem] bg-pink-200 opacity-30 rounded-full -bottom-10 -right-10 blur-3xl z-0"
				animate={{ scale: [1, 1.12, 1], rotate: [0, -15, 0] }}
				transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
			/>

			{/* Company Name and Intro */}
			<div className="relative z-10 w-full max-w-3xl mx-auto text-center mt-12 mb-8">
				<div className="flex flex-col items-center gap-2">
					<div className="inline-flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400 rounded-full p-4 shadow-lg mb-2">
						<FaStar className="text-4xl text-white drop-shadow" />
					</div>
					<h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 mb-2 tracking-tight">
						Welcome to{" "}
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-pink-500">
							CareerMentor.AI
						</span>
						<span className="ml-2 animate-bounce text-3xl">🚀</span>
					</h1>
					<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
						Your AI-powered career companion for resume analysis, interview prep,
						learning roadmaps, and more.
					</p>
				</div>
			</div>

			{/* Call to Action */}
			<div className="flex justify-center gap-4 mb-8 z-10">
				<Link
					to="/login"
					className="bg-gradient-to-r from-indigo-500 to-pink-500 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:from-pink-500 hover:to-indigo-500 transition-all text-lg"
				>
					Get Started
				</Link>
			</div>

			{/* Features */}
			<motion.div
				className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto z-10 mb-16"
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
				{features.map(({ icon, emoji, title, desc, detail }) => (
					<motion.div
						key={title}
						className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-start hover:shadow-2xl transition-all duration-300"
						variants={{
							hidden: { opacity: 0, y: 30 },
							show: { opacity: 1, y: 0 },
						}}
						whileHover={{ scale: 1.04, rotate: 1 }}
						whileTap={{ scale: 0.97 }}
					>
						<div className="flex items-center gap-3 mb-2">
							<span className="text-3xl animate-bounce">{emoji}</span>
							<span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
								{title}
							</span>
						</div>
						<div className="flex items-center gap-2 text-lg font-semibold mb-1 text-gray-700">
							{icon}
							<span>{desc}</span>
						</div>
						<div className="text-gray-500 text-sm">{detail}</div>
					</motion.div>
				))}
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
}
