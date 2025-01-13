import express from "express";
import {upload} from "../middleware/multer.js"
import { 
    fileUpload,
    getFiles,
 } from "../controllers/file.controller.js";
import { protectRoute } from "../middleware/protectRoute.js";
const router = express.Router();

// router.get("/authCheck",protectRoute,authCheck);
router.post("/upload",upload.single('file'), fileUpload);
router.get("/:userId/getfiles",getFiles);

export default router;
