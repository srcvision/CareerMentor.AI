const Job = require("../models/Jobs");


exports.createJob = async (req, res) => {
  const { company, role, status, location, jobType, notes } = req.body;

  try {

    const newJob = await Job.create({
      user: req.user.id,
      company,
      role,
      status,
      location,
      jobType,
      notes,
    });

    res.status(201).json({ success: true, data: newJob });
  } catch (error) {
    console.error("❌ Error creating job:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};


exports.getJobs = async (req, res) => {
  try {
    
    const jobs = await Job.find({ user: req.user.id }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: jobs });
  } catch (error) {
    console.error("🔥 GET /api/jobs error:", err.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.deleteJob = async (req, res) => {
  try {
    const job = await Job.findOneAndDelete({
      _id: req.params.id,
      user: req.user.id,
    });
    if (!job) {
      return res.status(404).json({ success: false, message: "Job not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Job deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
