import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Events from './pages/Events'
import CreateEvent from './pages/CreateEvent'
import Donate from './pages/Donate'
import DonationSuccess from './pages/DonationSuccess'
import Admin from './pages/Admin'
import Navbar from './components/Navbar'
import { useAuth } from './context/AuthContext'
import Footer from './components/Footer'
import About from './pages/About'
import Contact from './pages/Contact'

function PrivateRoute({ children }) {
  const { user } = useAuth()
  return user ? children : <Navigate to="/login" />
}

function AdminRoute({ children }) {
  const { user } = useAuth()
  return user?.role === 'admin' ? children : <Navigate to="/" />
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-red-100">
      <Navbar />
      <main
        className="
          flex-1
          w-full
          mx-auto
          px-4
          py-8
          md:px-8
          md:py-12
          animate-fade-in
        "
        role="main"
        aria-label="Main content"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/events" element={<Events />} />
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path="/create-event" element={<CreateEvent />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/donation-success" element={<DonationSuccess />} />
          <Route path="/admin" element={<AdminRoute><Admin /></AdminRoute>} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}