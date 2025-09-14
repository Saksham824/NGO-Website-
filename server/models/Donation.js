import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    amount: { type: Number, required: true },
    currency: { type: String, default: "usd" },
    status: { type: String, enum: ["pending", "succeeded", "failed"], default: "pending" },
    stripeSessionId: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("Donation", donationSchema);
  