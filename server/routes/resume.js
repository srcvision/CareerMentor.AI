const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const pdf = require("pdf-parse");
const auth = require("../middleware/auth");
const { analyzeWithOpenRouter } = require("../utils/ai/openRuter"); 
const AiLog = require("../models/Ailog");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.post("/analyze", auth, upload.single("resume"), async (req, res) => {
  const filePath = req.file?.path;
  try {
    if (!filePath) {
      return res.status(400).json({ message: "Resume file is missing." });
    }

    const dataBuffer = fs.readFileSync(filePath);
    const pdfData = await pdf(dataBuffer);
    const inputText = pdfData.text;

    const feedback = await analyzeWithOpenRouter(inputText);

    res.json({ feedback });

    await AiLog.create({
      user: req.user.id,
      type: "resume",
      input: inputText,
      output: feedback,
    });
  } catch (error) {
    console.error("Resume analysis failed:", error.message);
    res.status(500).json({ message: error.message || "Failed to analyze resume" });
  } finally {
    if (filePath && fs.existsSync(filePath)) {
      fs.unlinkSync(filePath); // cleanup
    }
  }
});

module.exports = router;
