import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createEvent, listEvents, registerEvent } from "../controllers/eventController.js";

const router = express.Router();

router.post("/", protect, createEvent);
router.get("/", listEvents);
router.post("/:id/register", protect, registerEvent);

export default router;
