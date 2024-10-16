import express from "express"
import { userRegisterController } from "../controllers/authController.js";

// router object
const router = express.Router();


// user register route
router.post("/register", userRegisterController)

export default router;