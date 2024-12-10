import express from "express";
import {
    getService,
    addService,
} from "../controllers/service.controller.js";
// import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

// router.get("/authCheck", protectRoute, authCheck);
router.get('/get/:name',getService);
router.post("/add",addService);

export default router;
