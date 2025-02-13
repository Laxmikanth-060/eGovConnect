import express from "express";
import {
    signup,
    login,
    logout,
    authCheck,
    updateProfile,
} from "../controllers/auth.controller.js";
import {upload} from '../middleware/multer.js'
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

router.get("/authCheck",protectRoute,authCheck);
router.post("/login", login);
router.post("/signup", signup);
router.post("/logout", logout);
router.post("/profile/update",upload.fields([
    { name: 'coverImg', maxCount: 1 },
    { name: 'profileImg', maxCount: 1 },
]),updateProfile);
// router.post("/emailresend",emailresend);
// router.get("/users/:id/verify/:token",emailVerification);

export default router;
