import React, { useState } from 'react'
import api from '../lib/api'
import { useAuth } from '../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'

export default function Login() {
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
      const res = await api.post('/auth/login', { email, password })
      login(res.data)
      nav('/')
    } catch (err) {
      setErr(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500  px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        {/* Logo or Icon */}
        <div className="flex justify-center mb-6">
          <img
            src="https://img.icons8.com/color/96/000000/charity.png"
            alt="NGO Logo"
            className="w-16 h-16"
          />
        </div>
        <h2 className="text-2xl font-extrabold text-center text-red-700 mb-2">Welcome Back</h2>
        <p className="text-center text-gray-500 mb-6">Sign in to your account to continue supporting our mission.</p>
        {err && (
          <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {err}
          </div>
        )}
        <form onSubmit={submit} className="space-y-5">
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
              placeholder="Your password"
              autoComplete="current-password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <Link to="/forgot-password" className="text-sm text-red-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <button
            type="submit"
            className={`w-full py-3 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600 text-sm">
          Don't have an account?{' '}
          <Link to="/register" className="text-red-600 font-semibold hover:underline">
            Register
          </Link>
        </div>
        <div className="mt-8 text-xs text-gray-400 text-center">
          By logging in, you agree to our{' '}
          <Link to="/terms" className="underline hover:text-red-600">Terms of Service</Link> and{' '}
          <Link to="/privacy" className="underline hover:text-red-600">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  )
}