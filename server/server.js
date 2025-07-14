const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

const authRouter = require('./routes/auth');
const jobRouter = require('./routes/jobs');
const resumeRouter = require('./routes/resume');
const interviewRouter = require('./routes/interview');
const roadmapRouter = require('./routes/roadmap');
const careerMentor = require("./routes/mentor")

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("MongoDb is Connected"))
    .catch((err) => console.log(err))

app.get("/", (req, res) => {
    res.send("API Running 🚀")
})

app.use('/api/auth', authRouter);
app.use('/api/jobs', jobRouter);
app.use('/api/resume', resumeRouter);
app.use('/api/interview', interviewRouter);
app.use('/api/roadmap', roadmapRouter);
app.use('/api/mentor', careerMentor);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
