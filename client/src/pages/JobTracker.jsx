import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaBuilding,
  FaUserTie,
  FaMapMarkerAlt,
  FaBriefcase,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";

const JobTracker = () => {
  const [jobs, setJobs] = useState([]);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("applied");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("full-time");
  const [editId, setEditId] = useState(null);
  const [editStatus, setEditStatus] = useState("");

  const { user } = useContext(AuthContext);

  const fetchJobs = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/jobs", {
        headers: { Authorization: `Bearer ${user?.token}` },
      });
      
     
      setJobs(res.data.data);
      console.log("Jobs fetched successfully:", res.data.data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const addJob = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://localhost:5000/api/jobs",
        { company, role, status, location, jobType },
        { headers: { Authorization: `Bearer ${user?.token}` } }
      );
      setCompany("");
      setRole("");
      setStatus("applied");
      setLocation("");
      setJobType("full-time");
      fetchJobs(); // Refresh list
      console.log("Job added successfully");
    } catch (error) {
      console.error("Error adding job:", error);
    }
  };

  const handleEdit = (job) => {
    setEditId(job._id);
    setEditStatus(job.status);
  };

  const handleEditStatusChange = (e) => {
    setEditStatus(e.target.value);
  };

  const handleEditDone = async (job) => {
    try {
      await axios.put(
        `http://localhost:5000/api/jobs/${job._id}`,
        { ...job, status: editStatus },
        { headers: { Authorization: `Bearer ${user?.token}`} }
      );
      setEditId(null);
      setEditStatus("");
      fetchJobs();
    } catch (error) {
      console.error("Error updating job status:", error);
    }
  };

  useEffect(() => {
    if (user?.token) {
      fetchJobs();
    }
  }, [user]);

  useEffect(() => {
    if (sessionStorage.getItem("fromDashboard") === "true") {
      sessionStorage.removeItem("fromDashboard");
    } else {
      window.location.replace("/dashboard");
    }
  }, []);

  // Job stats for summary bar
  const stats = [
    { label: "Applied", color: "bg-blue-100 text-blue-700", count: jobs.filter(j => j.status === "applied").length },
    { label: "Interviewed", color: "bg-yellow-100 text-yellow-700", count: jobs.filter(j => j.status === "interviewed").length },
    { label: "Hired", color: "bg-green-100 text-green-700", count: jobs.filter(j => j.status === "hired").length },
    { label: "Rejected", color: "bg-red-100 text-red-700", count: jobs.filter(j => j.status === "rejected").length },
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-400 via-green-400 to-purple-500 overflow-hidden">
      {/* Animated background blobs */}
      <motion.div
        className="absolute w-[36rem] h-[36rem] bg-green-400 opacity-30 rounded-full -top-40 -left-40 blur-3xl z-0"
        animate={{ scale: [1, 1.15, 1], rotate: [0, 30, 0] }}
        transition={{ repeat: Infinity, duration: 9, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[28rem] h-[28rem] bg-blue-400 opacity-30 rounded-full -bottom-32 -right-32 blur-3xl z-0"
        animate={{ scale: [1, 1.1, 1], rotate: [0, -30, 0] }}
        transition={{ repeat: Infinity, duration: 11, ease: "easeInOut" }}
      />

      {/* Main App Layout */}
      <motion.div
        className="relative z-10 flex flex-col md:flex-row bg-white/90 rounded-3xl shadow-2xl w-full max-w-6xl min-h-[36rem] backdrop-blur-md overflow-hidden"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Sidebar: Add Job Form */}
        <div className="md:w-1/3 w-full flex flex-col items-center justify-start p-10 bg-gradient-to-br from-white/80 via-blue-50 to-green-50 border-r border-blue-100 min-h-[36rem]">
          <motion.h2
            className="text-3xl font-extrabold text-center mb-8 text-gray-800 tracking-tight flex items-center gap-3"
            initial={{ scale: 0.7 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <FaClipboardList className="text-blue-500" /> Job Tracker
            <span className="inline-block animate-bounce">🗂️</span>
          </motion.h2>
          <form
            onSubmit={addJob}
            className="w-full flex flex-col gap-6"
          >
            <div className="relative">
              <FaBuilding className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white/80"
              />
            </div>
            <div className="relative">
              <FaUserTie className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white/80"
              />
            </div>
            <div>
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-xl bg-white/80"
              >
                <option value="applied">Applied</option>
                <option value="interviewed">Interviewed</option>
                <option value="hired">Hired</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl bg-white/80"
              />
            </div>
            <div>
              <select
                value={jobType}
                onChange={(e) => setJobType(e.target.value)}
                className="w-full py-3 px-4 border border-gray-300 rounded-xl bg-white/80"
              >
                <option value="full-time">Full-Time</option>
                <option value="part-time">Part-Time</option>
                <option value="contract">Contract</option>
                <option value="internship">Internship</option>
              </select>
            </div>
            <motion.button
              type="submit"
              className="col-span-1 md:col-span-2 w-full bg-gradient-to-r from-blue-600 to-green-500 text-white py-3 rounded-xl font-semibold shadow-md hover:from-green-500 hover:to-blue-600 transition-all flex items-center justify-center gap-2 text-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              <FaPlusCircle /> Add Job <span className="animate-pulse">✨</span>
            </motion.button>
          </form>
        </div>

        {/* Main Content: Job List */}
        <div className="flex-1 flex flex-col p-10 bg-gradient-to-br from-blue-50 via-green-50 to-white/80 min-h-[36rem]">
          {/* Summary Bar */}
          <div className="flex flex-wrap gap-4 mb-8 justify-center">
            {stats.map(stat => (
              <div key={stat.label} className={`flex items-center gap-2 px-4 py-2 rounded-xl font-semibold shadow ${stat.color}`}>
                <span>{stat.label}</span>
                <span className="text-lg">{stat.count}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 mb-8">
            <FaClipboardList className="text-green-500 text-2xl" />
            <span className="text-2xl font-bold text-gray-700">Your Jobs</span>
            <span className="ml-2 animate-bounce">📋</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <motion.div
                  key={job._id}
                  className="bg-white/95 p-6 rounded-2xl shadow-xl flex flex-col gap-3 border border-gray-100 hover:border-green-400 transition-all duration-300 relative group"
                  style={{ minHeight: "unset", height: "auto" }}
                  whileHover={{ scale: 1.03, y: -2 }}
                >
                  <div className="flex flex-col gap-1 mb-2">
                    <div className="flex flex-row flex-wrap items-center justify-between gap-2 w-full">
                      <div className="font-bold text-xl text-blue-800 flex items-center gap-1 break-words min-w-0">
                        <FaUserTie />
                        <span className="break-words w-full">{job.role}</span>
                      </div>
                      <div className="flex-shrink-0 mt-2 sm:mt-0">
                        {editId === job._id ? (
                          <select
                            value={editStatus}
                            onChange={handleEditStatusChange}
                            className="px-3 py-1 rounded-full text-xs font-bold capitalize shadow border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-blue-50 text-blue-700"
                          >
                            <option value="applied">Applied</option>
                            <option value="interviewed">Interviewed</option>
                            <option value="hired">Hired</option>
                            <option value="rejected">Rejected</option>
                          </select>
                        ) : (
                          <span className={`px-3 py-1 rounded-full text-xs font-bold capitalize shadow block whitespace-nowrap ${job.status === 'applied' ? 'bg-blue-100 text-blue-700' : job.status === 'interviewed' ? 'bg-yellow-100 text-yellow-700' : job.status === 'hired' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                            {job.status}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="text-gray-700 flex items-center gap-2 mb-1">
                    <FaBuilding className="text-lg text-blue-400" />
                    <span className="font-semibold break-words">{job.company}</span>
                  </div>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <div className="flex items-center gap-1 bg-blue-50 px-3 py-1 rounded-full text-sm text-blue-700"><FaMapMarkerAlt /> {job.location}</div>
                    <div className="flex items-center gap-1 bg-green-50 px-3 py-1 rounded-full text-sm text-green-700"><FaBriefcase /> {job.jobType}</div>
                  </div>
                  <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                    {editId === job._id ? (
                      <button
                        className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600 text-xs"
                        onClick={() => handleEditDone(job)}
                      >
                        Done
                      </button>
                    ) : (
                      <button
                        className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600 text-xs"
                        onClick={() => handleEdit(job)}
                      >
                        Edit
                      </button>
                    )}
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center text-gray-400 py-16">
                <FaClipboardList className="text-5xl mb-4 animate-bounce" />
                <span className="text-lg font-medium">No jobs found. Start by adding a job! 😕</span>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default JobTracker;
