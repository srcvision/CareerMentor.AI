import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import JobTracker from "./pages/JobTracker";
import ResumeAnalyzer from "./pages/ResumeAnalyzer";
import InterviewBot from "./pages/InterviewBot";
import CareerRoadmap from "./pages/CareerRoadmap";
import CareerMentor from "./pages/CareerMentor";
import AdminDashboard from "./pages/AdminDashboard";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/jobs" element={<JobTracker />} />
      <Route path="/resume" element={<ResumeAnalyzer />} />
      <Route path="/interview" element={<InterviewBot />} />
      <Route path="/roadmap" element={<CareerRoadmap />} />
      <Route path="/mentor" element={<CareerMentor />} />
      <Route path="/admin" element={<AdminDashboard />} />
    </Routes>
  );    
};

export default App;
