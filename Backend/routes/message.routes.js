import express from "express";
const router = express.Router();
import protectRoute from "../middleware/protectRoute.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";

router.post("/send/:id", protectRoute, sendMessage);
router.get("/get/:id", protectRoute, getMessages);

export default router;
