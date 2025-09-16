import React, { useState } from 'react'
import api from '../lib/api'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Donate() {
  const [amount, setAmount] = useState(1000) 
  const [frequency, setFrequency] = useState('one-time')
  const [loading, setLoading] = useState(false)
  const [err, setErr] = useState(null)
  const { user } = useAuth()
  const nav = useNavigate()

  const presetAmounts = [500, 1000, 2500, 5000]

  const donate = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErr(null)
    try {
      if (!user) return nav('/login')
      const res = await api.post('/donations/checkout', { amount, frequency })
      window.location.href = res.data.url
    } catch (err) {
      setErr(err.response?.data?.message || 'Checkout failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className='max-w-7xl mx-auto flex flex-col lg:flex-row'>
        
        {/* Left side - Image and Content */}
        <div className="lg:w-1/2 relative">
          <div className="relative h-96 lg:h-full">
            <img 
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Happy children" 
              className="w-full h-full object-cover"
            />
            {/* Red curved overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-red-600/20 to-transparent"></div>
            <svg className="absolute top-0 right-0 h-full w-32 text-red-600" viewBox="0 0 100 100" preserveAspectRatio="none">
              <path d="M0,0 Q50,50 0,100 L100,100 L100,0 Z" fill="currentColor" opacity="0.1"/>
            </svg>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-8 text-white">
            <h1 className="text-4xl font-bold mb-4 text-red-600">ONLINE DONATION FOR NGO INDIA</h1>
            <p className="text-lg mb-2">Since 2004, Bal Raksha Bharat has been working in several states of India to help children</p>
            <p className="text-lg">get a happy childhood and a bright future.</p>
            <p className="text-base mt-4">We work in close coordination with government agencies at various levels </p>
          </div>
        </div>

      {/* Form */}
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg -mt-1 p-8">
        {err && (
          <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {err}
          </div>
        )}

        <form onSubmit={donate} className="space-y-6">
          {/* Frequency */}
          <div className="flex justify-center gap-4">
            {['one-time', 'monthly'].map(opt => (
              <button
                type="button"
                key={opt}
                className={`px-6 py-2 rounded-full font-semibold border transition ${
                  frequency === opt
                    ? 'bg-red-600 text-white border-red-600'
                    : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-red-50'
                }`}
                onClick={() => setFrequency(opt)}
              >
                {opt === 'one-time' ? 'One-Time' : 'Monthly'}
              </button>
            ))}
          </div>

          {/* Amount Selection */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Choose Amount</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
              {presetAmounts.map((amt) => (
                <button
                  type="button"
                  key={amt}
                  className={`p-4 rounded-lg border font-bold text-lg transition ${
                    amount === amt
                      ? 'bg-red-600 text-white border-red-600'
                      : 'bg-gray-50 text-gray-700 border-gray-200 hover:bg-red-50'
                  }`}
                  onClick={() => setAmount(amt)}
                >
                  ₹{amt}
                </button>
              ))}
            </div>
            <input
              type="number"
              value={amount}
              onChange={e => setAmount(Number(e.target.value))}
              min={100}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none"
              placeholder="Enter custom amount (₹)"
              required
            />
          </div>

          {/* Personal Info */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Your Information</label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input type="text" placeholder="Full Name" className="w-full border px-4 py-3 rounded-lg" required />
              <input type="email" placeholder="Email" className="w-full border px-4 py-3 rounded-lg" required />
              <input type="tel" placeholder="Phone Number" className="w-full border px-4 py-3 rounded-lg" required />
              <input type="text" placeholder="City" className="w-full border px-4 py-3 rounded-lg" />
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className={`w-full py-4 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Processing...' : `Donate ₹${amount}`}
          </button>
        </form>

        {/* Secure message */}
        <div className="flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm">
          <img src="https://img.icons8.com/color/32/000000/lock--v1.png" alt="Secure" />
          <span>100% Secure Payments • Tax Exempted</span>
        </div>
      </div>
      </div>
      
    </div>
  )
}
