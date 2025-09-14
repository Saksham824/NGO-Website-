import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import { createCheckout, handleWebhook } from "../controllers/donationController.js";

const router = express.Router();

router.post("/checkout", protect, createCheckout);
router.post("/webhook", handleWebhook);

export default router;
