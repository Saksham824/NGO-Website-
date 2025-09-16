import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, logout } = useAuth()
  const nav = useNavigate()
  const [menuOpen, setMenuOpen] = useState(false)

  const handleLogout = () => {
    logout()
    nav('/')
    setMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50">
      {/* Top branding bar */}
      <div className="bg-gradient-to-r from-red-600 to-orange-500 h-2 w-full" />

      {/* Navbar wrapper with overflow-x-hidden */}
      <nav className="backdrop-blur bg-white/80 shadow-lg overflow-x-hidden">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3 group">
              <span className="inline-block bg-gradient-to-r from-red-600 to-orange-500 rounded-full p-2 shadow-lg group-hover:scale-105 transition-transform">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" fill="red" />
                  <path d="M8 12l2 2 4-4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <span className="font-extrabold text-2xl md:text-3xl text-red-600 tracking-tight group-hover:text-red-500 transition-colors">NGO</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-red-700 font-semibold transition-colors">Home</Link>
            <Link to="/about" className="text-gray-700 hover:text-red-700 font-semibold transition-colors">About</Link>
            <Link to="/events" className="text-gray-700 hover:text-red-700 font-semibold transition-colors">Events</Link>
            <Link to="/contact" className="text-gray-700 hover:text-red-700 font-semibold transition-colors">Contact</Link>
            <Link to="/donate" className="ml-2 px-5 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full shadow-lg font-bold hover:scale-105 hover:from-orange-500 hover:to-red-500 transition-all duration-200">
              Donate Now
            </Link>
            {user ? (
              <>
                <span className="text-gray-600 text-sm">Hi, <span className="font-semibold">{user.name}</span></span>
                {user.role === 'admin' && (
                  <Link to="/admin" className="text-red-700 hover:text-red-900 font-semibold transition-colors">Admin</Link>
                )}
                {user.role === 'admin' && (
                  <Link to="/create-event" className="text-red-700 hover:text-red-900 font-semibold transition-colors">CreateEvent</Link>
                )}
                <button
                  onClick={handleLogout}
                  className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="px-4 py-1 border border-red-600 text-red-600 rounded hover:bg-red-50 transition-colors">Login</Link>
                <Link to="/register" className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors shadow">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex items-center text-red-700 focus:outline-none"
            aria-label="Open menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay  */}
      <div
        className={`fixed text-center inset-0 z-40 transition-all duration-300 ${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'}`}
        style={{ background: menuOpen ? 'rgba(30, 58, 138, 0.15)' : 'transparent' }}
        onClick={() => setMenuOpen(false)}
      >
        <div
          className={`absolute right-0 w-4/5 max-w-xs h-full bg-white/90 shadow-2xl rounded-l-2xl p-6 flex flex-col space-y-5 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={e => e.stopPropagation()}
        >
          <Link to="/" className="font-extrabold text-2xl text-red-700 mb-4" onClick={() => setMenuOpen(false)}>NGO</Link>
          <Link to="/" className="text-gray-700 hover:text-red-700 font-semibold transition-colors" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-red-700 font-semibold transition-colors" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/events" className="text-gray-700 hover:text-red-700 font-semibold transition-colors" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/contact" className="text-gray-700 hover:text-red-700 font-semibold transition-colors" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/donate" className="px-5 py-2 bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-full shadow-lg font-bold hover:scale-105 hover:from-orange-500 hover:to-red-500 transition-all duration-200" onClick={() => setMenuOpen(false)}>
            Donate Now
          </Link>
          {user ? (
            <>
              <span className="text-gray-600">Hi, <span className="font-semibold">{user.name}</span></span>
              {user.role === 'admin' && (
                <Link to="/admin" className="text-red-700 hover:text-red-900 font-semibold transition-colors" onClick={() => setMenuOpen(false)}>Admin</Link>
              )}
              {user.role === 'admin' && (
                <Link to="/create-event" className="text-red-700 hover:text-red-900 font-semibold transition-colors" onClick={() => setMenuOpen(false)}>CreateEvent</Link>
              )}
              <button
                onClick={handleLogout}
                className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors shadow"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-4 py-1 border border-red-600 text-red-600 rounded hover:bg-red-50 transition-colors" onClick={() => setMenuOpen(false)}>Login</Link>
              <Link to="/register" className="px-4 py-1 bg-red-600 text-white rounded hover:bg-red-700 transition-colors shadow" onClick={() => setMenuOpen(false)}>Register</Link>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
