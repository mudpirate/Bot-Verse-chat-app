import express from "express";
const router = express.Router();
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/user.controllers.js";

router.get("/", protectRoute, getUsersForSidebar);

export default router;
