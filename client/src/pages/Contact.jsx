import React, { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaQuestionCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-red-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto text-center py-12 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold text-red-800 mb-3 drop-shadow">
          Contact Us
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Have questions, want to collaborate, or need support? We’re here for you!
        </p>
        <div className="flex justify-center gap-4 mb-4">
          <Link to="#" className="text-blue-600 hover:text-red-800 text-2xl transition"><FaFacebook /></Link>
          <Link to="#" className="text-blue-400 hover:text-red-600 text-2xl transition"><FaTwitter /></Link>
          <Link to="#" className="text-pink-500 hover:text-pink-700 text-2xl transition"><FaInstagram /></Link>
        </div>
        <span className="inline-block bg-red-100 text-red-700 px-4 py-2 rounded-full font-semibold shadow">
          We reply within 24 hours!
        </span>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-4 pb-16">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white/90 shadow-2xl rounded-3xl p-8 space-y-6 border border-red-100"
        >
          <h2 className="text-2xl font-bold text-red-700 mb-2">Send a Message</h2>
          <div>
            <label className="block font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="you@email.com"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Subject"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all duration-200"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
              placeholder="Type your message here..."
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition-all duration-200"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-semibold hover:from-orange-500 hover:to-red-600 shadow-lg transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info & Extras */}
        <div className="flex flex-col gap-8">
          <div className="bg-red-50/80 shadow-xl rounded-3xl p-8 space-y-6 border border-red-100">
            <h2 className="text-2xl font-bold text-red-700">Get in Touch</h2>
            <p className="text-gray-600">
              We’re here to answer your questions and hear your ideas.
            </p>
            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-700">
                <FaMapMarkerAlt className="text-red-600" /> 123 NGO Street, City, Country
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <FaEnvelope className="text-red-600" /> contact@ngo.org
              </p>
              <p className="flex items-center gap-3 text-gray-700">
                <FaPhoneAlt className="text-red-600" /> +91 98765 43210
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <Link to="#" className="text-red-600 hover:text-red-800 text-2xl transition"><FaFacebook /></Link>
              <Link to="#" className="text-red-400 hover:text-red-600 text-2xl transition"><FaTwitter /></Link>
              <Link to="#" className="text-pink-500 hover:text-pink-700 text-2xl transition"><FaInstagram /></Link>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white/90 rounded-2xl p-6 shadow border border-red-100">
            <div className="flex items-center gap-2 mb-3">
              <FaQuestionCircle className="text-red-500 text-xl" />
              <h3 className="text-lg font-semibold text-red-700">Frequently Asked Questions</h3>
            </div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <span className="font-semibold text-red-600">Q:</span> How soon will I get a response?
                <br />
                <span className="text-gray-500">A: We typically reply within 24 hours.</span>
              </li>
              <li>
                <span className="font-semibold text-red-600">Q:</span> Can I visit your office?
                <br />
                <span className="text-gray-500">A: Yes! Please schedule an appointment via email first.</span>
              </li>
              <li>
                <span className="font-semibold text-red-600">Q:</span> How can I volunteer?
                <br />
                <span className="text-gray-500">A: Fill out the form or visit our <Link to="/volunteer" className="text-red-600 underline">Volunteer page</Link>.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="max-w-4xl mx-auto mt-10 rounded-2xl overflow-hidden shadow-lg border border-red-100">
        <iframe
          title="NGO Location"
          src="https://www.openstreetmap.org/export/embed.html?bbox=77.5946%2C12.9716%2C77.5946%2C12.9716&amp;layer=mapnik"
          className="w-full h-64"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}