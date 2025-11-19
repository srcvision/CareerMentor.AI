import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaUserTie,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPlusCircle,
  FaClipboardList,
  FaArrowLeft,
  FaCircleNotch,
} from "react-icons/fa";

export default function JobTracker() {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("applied");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("full-time");
  const [editId, setEditId] = useState(null);
  const [editStatus, setEditStatus] = useState("");
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingJobs, setLoadingJobs] = useState(false);

  const { user } = useContext(AuthContext);
  const loc = useLocation();
  const navigate = useNavigate();

  const API_URL = `${import.meta.env.VITE_BACKEND_URL}api/jobs`;

  useEffect(() => {
    if (!loc.state?.fromDashboard) {
      navigate("/dashboard", { replace: true });
    }
  }, [loc, navigate]);

  useEffect(() => {
    if (user?.token) fetchJobs();
  }, [user]);

  const handleBack = () => navigate(-1);

  const fetchJobs = async () => {
    setLoadingJobs(true);
    try {
      const res = await axios.get(API_URL, {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      setJobs(res.data.data);
    } catch (err) {
      console.error(err);
    }
    setLoadingJobs(false);
  };

  const addJob = async (e) => {
    e.preventDefault();
    setLoadingAdd(true);
    try {
      await axios.post(
        API_URL,
        { company, role, status, location, jobType },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );
      setCompany("");
      setRole("");
      setStatus("applied");
      setLocation("");
      setJobType("full-time");
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
    setLoadingAdd(false);
  };

  const handleEdit = (job) => {
    setEditId(job._id);
    setEditStatus(job.status || "applied");
  };

  const handleEditDone = async (job) => {
    try {
      await axios.put(
        `${API_URL}/${job._id}`,
        { ...job, status: editStatus },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );
      setEditId(null);
      fetchJobs();
    } catch (err) {
      console.error(err);
    }
  };

  const stats = [
    {
      label: "Applied",
      color: "bg-blue-100 text-blue-700",
      count: jobs.filter((j) => j.status === "applied").length,
    },
    {
      label: "Interviewed",
      color: "bg-yellow-100 text-yellow-700",
      count: jobs.filter((j) => j.status === "interviewed").length,
    },
    {
      label: "Hired",
      color: "bg-green-100 text-green-700",
      count: jobs.filter((j) => j.status === "hired").length,
    },
    {
      label: "Rejected",
      color: "bg-red-100 text-red-700",
      count: jobs.filter((j) => j.status === "rejected").length,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white flex items-center justify-center relative p-4 overflow-hidden">
      {/* Background Glow */}
      <motion.div
        className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 opacity-20 rounded-full -top-48 -left-48 blur-3xl"
        animate={{ rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 25 }}
      />
      <motion.div
        className="absolute w-80 h-80 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-20 rounded-full -bottom-40 -right-40 blur-3xl"
        animate={{ rotate: [0, -360] }}
        transition={{ repeat: Infinity, duration: 30 }}
      />

      <motion.div
        className="relative z-10 flex  flex-col md:flex-row w-full max-w-76xl bg-slate-800/60 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Back Button */}
        <button
          onClick={handleBack}
          className="absolute top-4 left-4 flex items-center gap-2 text-white/80 hover:text-white"
        >
          <FaArrowLeft /> Back
        </button>

        {/* Add Job Panel */}
        <div className="md:w-1/3 w-full p-8 bg-gradient-to-br from-white/10 to-white/20 flex flex-col gap-6 border-r border-white/10">
          <motion.h2
            className="text-2xl font-black mt-8 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 flex items-center gap-2"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <FaPlusCircle /> Add Job
          </motion.h2>

          <form onSubmit={addJob} className="flex flex-col gap-4">
            {[ 
              { value: company, set: setCompany, placeholder: "Company" },
              { value: role, set: setRole, placeholder: "Role" },
              { value: location, set: setLocation, placeholder: "Location" },
            ].map((input, i) => (
              <input
                key={i}
                className="w-full p-3 rounded-xl bg-white/20 text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none transition"
                placeholder={input.placeholder}
                value={input.value}
                onChange={(e) => input.set(e.target.value)}
                required
              />
            ))}
            <select
              className="w-full p-3 rounded-xl bg-white/20 text-white"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="applied" className="bg-black/80 text-white">Applied</option>
              <option value="interviewed" className="bg-black/80 text-white">Interviewed</option>
              <option value="hired" className="bg-black/80 text-white">Hired</option>
              <option value="rejected" className="bg-black/80 text-white">Rejected</option>
            </select>

            <select
              className="w-full p-3 rounded-xl bg-white/20 text-white"
              value={jobType}
              onChange={(e) => setJobType(e.target.value)}
            >
              <option value="full-time" className="bg-black/80 text-white">Full-Time</option>
              <option value="part-time" className="bg-black/80 text-white">Part-Time</option>
              <option value="contract" className="bg-black/80 text-white">Contract</option>
              <option value="internship" className="bg-black/80 text-white">Internship</option>
            </select>

            <motion.button
              type="submit"
              disabled={loadingAdd}
              className={`w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-xl font-semibold transition ${
                loadingAdd ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
              }`}
              whileTap={{ scale: loadingAdd ? 1 : 0.97 }}
            >
              {loadingAdd ? <FaCircleNotch className="animate-spin" /> : <FaPlusCircle />}
              {loadingAdd ? "Adding..." : "Add Job"}
            </motion.button>
          </form>
        </div>

        {/* Job List */}
        <div className="flex-1 p-8 flex flex-col max-h-[80vh] overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-slate-800">
          {/* Stats */}
          <div className="flex flex-wrap gap-3 mb-6 justify-center">
            {stats.map((s) => (
              <div
                key={s.label}
                className={`${s.color} px-4 py-2 rounded-xl font-bold bg-opacity-90 shadow`}
              >
                {s.label}: {s.count}
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-4 flex items-center gap-2">
            <FaClipboardList /> Your Jobs
          </h3>

          {loadingJobs ? (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              <FaCircleNotch className="animate-spin text-4xl" />
            </div>
          ) : jobs.length === 0 ? (
            <div className="flex-1 flex items-center justify-center text-gray-400">
              No jobs yet. Add one!
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobs.map((job) => (
                <motion.div
                  key={job._id}
                  className="bg-slate-800/70 p-4 rounded-2xl flex flex-col gap-3 shadow-lg border border-white/10 hover:border-purple-400/40 transition"
                  whileHover={{ scale: 1.03, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-lg">{job.role}</span>
                    {editId === job._id ? (
                      <select
                        value={editStatus}
                        onChange={(e) => setEditStatus(e.target.value)}
                        className="rounded-full bg-white/20 text-white px-2 py-1 text-sm"
                      >
                        <option value="applied" className="bg-black/80 text-white">Applied</option>
                        <option value="interviewed" className="bg-black/80 text-white">Interviewed</option>
                        <option value="hired" className="bg-black/80 text-white">Hired</option>
                        <option value="rejected" className="bg-black/80 text-white">Rejected</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 py-1 rounded-full text-sm capitalize ${
                          job.status === "applied"
                            ? "bg-blue-500"
                            : job.status === "interviewed"
                            ? "bg-yellow-500"
                            : job.status === "hired"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {job.status}
                      </span>
                    )}
                  </div>
                  <div className="text-gray-300">{job.company}</div>
                  <div className="flex flex-wrap gap-2 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                      <FaMapMarkerAlt />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <FaBriefcase />
                      {job.jobType}
                    </span>
                  </div>
                  <div className="mt-auto flex gap-2">
                    {editId === job._id ? (
                      <button
                        onClick={() => handleEditDone(job)}
                        className="flex-1 bg-green-500 py-1 rounded text-white text-sm hover:bg-green-600 transition"
                      >
                        Save
                      </button>
                    ) : (
                      <button
                        onClick={() => handleEdit(job)}
                        className="flex-1 bg-blue-500 py-1 rounded text-white text-sm hover:bg-blue-600 transition"
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
}
