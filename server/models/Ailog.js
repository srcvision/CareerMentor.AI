const mongoose = require("mongoose");

const aiLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  type: { type: String, enum: ["resume", "interview", "roadmap", "mentor"], required: true },
  input: String,
  output: String,
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("AiLog", aiLogSchema);
