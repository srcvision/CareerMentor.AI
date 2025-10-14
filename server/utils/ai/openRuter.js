const axios = require("axios");
const {perplexityChat} = require("./perplexityChat")
async function analyzeWithOpenRouter(text) {
  const prompt = `
You are a resume reviewer. Analyze the resume text below and provide a professional yet friendly review with emojis where appropriate. Your feedback should include the following sections in plain text:

Give a full Name hello,name

1) ATS Score (Out of 100 in %) with a brief explanation of the score

2) Key Skills Detected

3) Missing Key Skills

4) Areas of Improvement

5) Suggestions for ATS Optimization

6) Tips to Make It More Impactful

7) Overall Feedback Summary

8) Bonus Insights

9) Bonus Tips

Resume Text:
${text}
Please avoid using any asterisks, hashtags, or Markdown formatting in your response. Write in a conversational tone that sounds professional yet warm, like a helpful career mentor.Also make sure always start with welcome in careerMentor.Ai just like welcoming neture then after start.
`;

  return perplexityChat(prompt);
}

async function mockInterview(role) {
  const prompt = `
You are a friendly and experienced technical interviewer. Interview the candidate for the role of ${role}. 

Generate 10 realistic and relevant technical interview questions for this specific role. For each question, provide the following:

1. The Interview Question (be clear and role-specific)
2. A Model Answer (correct, showing good understanding)
3. for each question is highlighted to amek diffrent 
4. A Tip for Improvement in Interview (suggest how a candidate can better answer or prepare)
5. Add relevant emoji for each item to make the output more friendly and visually engaging

Your tone should be professional, helpful, and slightly encouraging — like a supportive mentor guiding a candidate.

Please ensure all content is formatted clearly and easy to understand. Avoid Markdown symbols like **, ##, or # in the output.
Make sure always start with welcome in careerMentor.Ai just like welcoming neture then after start.
`;

  return perplexityChat(prompt);
}

async function generateRoadmap(goal) {
  const prompt = `
I want to achieve this career goal: "${goal}"

Please provide a detailed career roadmap including:
1. Timeline (weekly or monthly)
2. Topics to learn
3. Tools & tech stack
4. Practice ideas
5. Free resource links
6. Tips for staying motivated


Please ensure all content is formatted clearly and easy to understand. Avoid Markdown symbols like **, ##, or # in the output.
Make sure always start with welcome in careerMentor.Ai just like welcoming neture then after start.

`;
  return perplexityChat(prompt);
}

async function careerMentor(question) {
  const prompt = `
You are a friendly and practical career mentor for developers. Please answer clearly and helpfully:

Question: ${question}
Please ensure all content is formatted clearly and easy to understand. Avoid Markdown symbols like **, ##, or # in the output.
Make sure always start with welcome in careerMentor.Ai just like welcoming neture then after start.
`;
  return perplexityChat(prompt);
}

module.exports = {
  analyzeWithOpenRouter,
  mockInterview,
  generateRoadmap,
  careerMentor,
};
