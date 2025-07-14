const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const AiLog = require("../models/Ailog");
const { generateRoadmap } = require("../utils/ai/openRuter"); // Adjust the import based on your file structure

router.post("/generate", auth, async (req, res) => {
  const { goal } = req.body;
  console.log("📩 Roadmap requested with goals:", goal);

  if (!goal) {
    return res.status(400).json({ message: "goals are required" });
  }

  try {
    const response = await generateRoadmap(goal);
    res.json({ roadmap: response });
    await AiLog.create({
      user: req.user.id,
      type: "roadmap", // or "interview", etc.
      input: goal,
      output: response,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message || "An error occurred while generating the roadmap",
    });
  }
});

module.exports = router;
