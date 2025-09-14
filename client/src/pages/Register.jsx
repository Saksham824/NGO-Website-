import React, { useState } from 'react'
import api from '../lib/api'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useAuth()
  const nav = useNavigate()
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErr(null)
    try {
      const res = await api.post('/auth/register', { name, email, password })
      login(res.data)
      nav('/')
    } catch (err) {
      setErr(err.response?.data?.message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        {/* Logo or Icon */}
        <div className="flex justify-center mb-6">
          <img
            src="https://img.icons8.com/color/96/000000/charity.png"
            alt="NGO Logo"
            className="w-16 h-16"
          />
        </div>
        <h2 className="text-2xl font-extrabold text-center text-red-700 mb-2">Create Your Account</h2>
        <p className="text-center text-gray-500 mb-6">Join us and start making a difference today!</p>
        {err && (
          <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {err}
          </div>
        )}
        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="name">Full Name</label>
            <input
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your full name"
              type="text"
              autoComplete="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="email">Email</label>
            <input
              id="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              type="email"
              autoComplete="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="password">Password</label>
            <input
              id="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              placeholder="Create a password"
              autoComplete="new-password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              required
              minLength={6}
            />
            <div className="text-xs text-gray-400 mt-1">
              Must be at least 6 characters.
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-3 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Registering...' : 'Register'}
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600 text-sm">
          Already have an account?{' '}
          <Link to="/login" className="text-red-600 font-semibold hover:underline">
            Login
          </Link>
        </div>
        <div className="mt-8 text-xs text-gray-400 text-center">
          By registering, you agree to our{' '}
          <Link to="/terms" className="underline hover:text-red-600">Terms of Service</Link> and{' '}
          <Link to="/privacy" className="underline hover:text-red-600">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  )
}