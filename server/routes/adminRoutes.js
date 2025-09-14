import express from "express";
import { protect, admin } from "../middleware/authMiddleware.js";
import { getUsers, getDonations, getEvents } from "../controllers/adminController.js";

const router = express.Router();

router.get("/users", protect, admin, getUsers);
router.get("/donations", protect, admin, getDonations);
router.get("/events", protect, admin, getEvents);

export default router;
