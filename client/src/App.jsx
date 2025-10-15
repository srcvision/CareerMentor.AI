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
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";
import Howwork from "./pages/Howwork";  
import PrivateRoute from "./components/PrivateRoute";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

const HomeRoutes = () => {
  const { user } = useContext(AuthContext);
  return user ? <Dashboard /> : <LandingPage />;
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={ <HomeRoutes />} />
      <Route path="/about" element={<About />} />
      <Route path="/seehowwork" element={<Howwork />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
      <Route path="/jobs" element={<PrivateRoute><JobTracker /></PrivateRoute>} />
      <Route path="/resume" element={<PrivateRoute><ResumeAnalyzer /></PrivateRoute>} />
      <Route path="/interview" element={<PrivateRoute><InterviewBot /></PrivateRoute>} />
      <Route path="/roadmap" element={<PrivateRoute><CareerRoadmap /></PrivateRoute>} />
      <Route path="/mentor" element={<PrivateRoute><CareerMentor /></PrivateRoute>} />
    </Routes>
  );    
};

export default App;