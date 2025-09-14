import React from "react";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tr from-gray-900 via-gray-800 to-gray-900 text-gray-200 mt-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* NGO Info */}
        <div>
          <h4 className="font-extrabold text-xl mb-3 tracking-wide text-red-400">NGO Name</h4>
          <p className="text-sm leading-relaxed text-gray-300">
            Empowering communities through <span className="text-red-300 font-semibold">education</span>, <span className="text-red-300 font-semibold">health</span>, and <span className="text-red-300 font-semibold">sustainable livelihoods</span>.
          </p>
        </div>
        {/* Contact */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-red-300">Contact</h4>
          <p className="text-sm flex items-center gap-2 mb-1">
            <span className="font-medium">Email:</span> <Link to="mailto:email@ngo.org" className="hover:text-red-400 transition">email@ngo.org</Link>
          </p>
          <p className="text-sm flex items-center gap-2">
            <span className="font-medium">Phone:</span> <Link to="tel:+919876543210" className="hover:text-red-400 transition">+91 98765 43210</Link>
          </p>
        </div>
        {/* Social */}
        <div>
          <h4 className="font-semibold text-lg mb-3 text-red-300">Follow Us</h4>
          <div className="flex gap-5">
            <Link
              to="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-red-500 transition-colors text-xl"
              aria-label="Twitter"
            >
              <FaTwitter />
            </Link>
            <Link
              to="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-red-500 transition-colors text-xl"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </Link>
            <Link
              to="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-red-500 transition-colors text-xl"
              aria-label="Instagram"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
      <div className="text-center text-xs bg-black/30 py-4 text-gray-400">
        © {new Date().getFullYear()} <span className="font-semibold text-red-300">NGO Name</span> — All rights reserved
      </div>
    </footer>
  );
}