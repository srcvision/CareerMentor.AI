const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const { careerMentor } = require("../utils/ai/openRuter");
const AiLog = require("../models/Ailog");

router.post("/ask", auth, async (req, res) => {
  const { question } = req.body;

  try {
    const response = await careerMentor(question);
    res.json({ answer: response });
    await AiLog.create({
      user: req.user.id,
      type: "mentor", // or "interview", etc.
      input: originalInputData,
      output: aiResponse,
    });
    console.log("mwntor ",response)
  } catch (err) {
    res.status(500).json({ message: err.message || "Mentor bot error" });
  }
});

module.exports = router;
