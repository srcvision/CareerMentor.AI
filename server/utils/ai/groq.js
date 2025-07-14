const axios = require("axios");
require("dotenv").config()

const headers = {
  Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
  "Content-Type": "application/json",
};

async function groqChat(prompt, model = "llama-3.3-70b-versatile") {
  const payload = {
    model,
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  try {
    const res = await axios.post("https://api.groq.com/openai/v1/chat/completions", payload, {
      headers,
    });
  

    return res.data.choices?.[0]?.message?.content || "No response.";
  } catch (err) {
    console.error("❌ Groq API Error:", err.response?.data || err.message);
    throw new Error("Groq AI failed.");
  }
}

module.exports = { groqChat };
