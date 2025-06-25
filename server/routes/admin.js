const express = require("express")
const router = express.Router()
const AiLog = require("../models/Ailog")
const User = require("../models/User")
const auth = require("../middleware/auth")

router.get("/users",auth,async (req,res)=>{
    const users = await User.find({},"-password")
    res.json(users);
})

router.get("/logs",auth,async (req,res)=>{
    const logs = await AiLog.find().populate("user","name email");
    res.json(logs)
})

module.exports = router

