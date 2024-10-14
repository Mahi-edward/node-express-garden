import express from "express";
import { testPostController } from "../controllers/testController.js";

const router = express.Router();

// routes
router.post("/test-post",testPostController)

export default router;