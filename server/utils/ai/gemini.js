const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function geminiChat(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const result = await model.generateContent(prompt);
    const text = result.response.text();

    return text || "No response from Gemini.";
  } catch (err) {
    console.error("❌ Gemini API Error:", err.message);
    throw new Error("Gemini AI failed.");
  }
}

module.exports = { geminiChat };
