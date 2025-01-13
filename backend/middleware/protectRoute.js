import User from '../models/User.js';
import jwt from 'jsonwebtoken';

export const protectRoute = async (req, res, next) => {
    try {
        const token = req.cookies.jwt;

        if (!token) {
            return res.status(401).json({ error: "Unauthorized: No token provided" });
        }

        let decode;
        try {
            decode = jwt.verify(token, process.env.JWT_SECRET);
        } catch (err) {
            console.log("Error decoding JWT:", err.message);
            return res.status(401).json({ error: "Unauthorized: Invalid or expired token" });
        }

        const user = await User.findById(decode.userId).select("-password");
        if (!user) {
            return res.status(401).json({ error: "User not found" });
        }

        req.user = user;
        next();
    } catch (error) {
        console.log("Error in ProtectRoute Middleware:", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};
