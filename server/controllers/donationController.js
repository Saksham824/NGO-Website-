import Donation from "../models/Donation.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
 
export const createCheckout = async (req, res) => {
  try {
    const { amount } = req.body;
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "aud",
            product_data: { name: "ngo" },
            unit_amount: amount * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${process.env.CLIENT_URL}/donation-success`,
      cancel_url: `${process.env.CLIENT_URL}/donate`,
    });

    const donation = await Donation.create({
      user: req.user?._id,
      amount,
      currency: "aud",
      stripeSessionId: session.id,
    });

    res.json({ id: session.id, url: session.url, donation });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
 
// Stripe webhook
export const handleWebhook = async (req, res) => {
  const sig = req.headers["stripe-signature"];
  let event;
  try {
    event = stripe.webhooks.constructEvent(
      req.rawBody,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object;
    await Donation.findOneAndUpdate(
      { stripeSessionId: session.id },
      { status: "succeeded" }
    );
  }

  res.json({ received: true });
};
