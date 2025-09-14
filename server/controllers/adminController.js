import User from "../models/User.js";
import Donation from "../models/Donation.js";
import Event from "../models/Event.js";

export const getUsers = async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
};
 
export const getDonations = async (req, res) => {
  const donations = await Donation.find().populate("user", "name email");
  res.json(donations);
};

export const getEvents = async (req, res) => {
  const events = await Event.find().populate("attendees", "name email");
  res.json(events);
};
 