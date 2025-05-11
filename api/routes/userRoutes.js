// api/routes/userRoutes.js
import express from "express";
import { protectRoute } from "../middleware/auth.js";
import { updateProfile } from "../controllers/userController.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

router.put("/update", protectRoute, upload.single("image"), updateProfile);

export default router;
