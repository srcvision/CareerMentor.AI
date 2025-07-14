const express = require("express");
const router = express.Router();
const { mockInterview } = require("../utils/ai/openRuter"); // Adjust the import based on your file structure
const auth = require("../middleware/auth");
const AiLog = require("../models/Ailog");

router.post("/generate", auth, async (req, res) => {
  const { role } = req.body;
  console.log("📩 Interview requested for:", role);
  if (!role) {
    return res.status(400).json({ message: "Role is required" });
  }
  try {
    const response = await mockInterview(role);
    res.json({ feedback: response });
    await AiLog.create({
      user: req.user.id,
      type: "interview",
      input: role,
      output: response,
    });
  } catch (err) {
    res.status(500).json({
      message:
        err.message || "An error occurred while generating interview questions",
    });
  }
});

module.exports = router;
