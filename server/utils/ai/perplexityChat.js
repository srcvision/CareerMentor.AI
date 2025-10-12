const axios = require("axios");
require("dotenv").config();

const headers = {
  Authorization: `Bearer ${process.env.PERPLEXITY_API_KEY}`,
  "Content-Type": "application/json",
};

async function perplexityChat(prompt) {
  const payload = {
    model: "sonar-pro", // Using the best-performing default model
    messages: [
      {
        role: "user",
        content: prompt,
      },
    ],
  };

  try {
    const res = await axios.post("https://api.perplexity.ai/chat/completions", payload, {
      headers,
    });

    return res.data.choices?.[0]?.message?.content || "No response.";
  } catch (err) {
    console.error("❌ Perplexity API Error:", err.response?.data || err.message);
    throw new Error("Perplexity AI failed.");
  }
}

module.exports = { perplexityChat };
