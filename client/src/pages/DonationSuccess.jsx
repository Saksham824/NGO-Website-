import React from 'react'
import { Link } from 'react-router-dom'

export default function DonationSuccess() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 via-red-100 to-white px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center">
        {/* Success Icon */}
        <div className="flex justify-center mb-6">
          <svg className="w-16 h-16 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12l2 2 4-4" />
          </svg>
        </div>
        <h2 className="text-2xl font-extrabold text-red-600 mb-2">Thank you!</h2>
        <p className="text-gray-600 mb-6">
          Your donation was successful.<br />
          We appreciate your support and generosity.
        </p>
        <Link
          to="/"
          className="inline-block px-8 py-3 bg-gradient-to-r from-red-600 to-orange-500 text-white font-bold rounded-full shadow hover:scale-105 transition-transform"
        >
          Back to Home
        </Link>
        <div className="mt-8 text-xs text-gray-400">
          Want to see how your donation helps? <Link to="/impact" className="underline hover:text-red-600">See our impact</Link>
        </div>
      </div>
    </div>
  )
}