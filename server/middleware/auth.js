const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    // console.log("Token received:", token); // Debugging line to check token
    
    if (!token) {
        return res.status(401).json({ message: "No token, authorization denied" });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        // console.log("Decoded token:", decoded); // Debugging line to check decoded token

        req.user = decoded;
        next();
    }catch (err) {
        // console.error("Token verification error:", err.message); // Debugging line to log error
        return res.status(401).json({ message: "Token is not valid" });
    }
}

module.exports = authMiddleware;