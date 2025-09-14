import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import { useAuth } from '../context/AuthContext'
import { FaCalendarAlt, FaMapMarkerAlt, FaUsers } from 'react-icons/fa'
import { Link } from 'react-router-dom'

export default function Events() {
  const [events, setEvents] = useState([])
  const { user } = useAuth()
  const [msg, setMsg] = useState(null)
  const [loading, setLoading] = useState(true)
  const [registering, setRegistering] = useState(null)
  const [registeredIds, setRegisteredIds] = useState([])

  useEffect(() => {
    setLoading(true)
    api.get('/events')
      .then(r => {
        setEvents(r.data)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  useEffect(() => {
    if (user) {
      api.get('/events/registered')
        .then(r => setRegisteredIds(r.data.map(ev => ev._id)))
        .catch(() => {})
    }
  }, [user])

  const register = async (id) => {
    setRegistering(id)
    try {
      await api.post(`/events/${id}/register`)
      setMsg('Registered successfully')
      setRegisteredIds(ids => [...ids, id])
    } catch (err) {
      setMsg(err.response?.data?.message || 'Registration failed')
    } finally {
      setRegistering(null)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero/Banner */}
      <section className="mb-10">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-white mb-2">Upcoming Events</h1>
            <p className="text-white/90 text-lg max-w-xl">
              Join our events to make a real impact in the community. Register now and be a part of the change!
            </p>
          </div>
          <img
            src="https://img.icons8.com/color/96/000000/conference.png"
            alt="Events"
            className="w-24 h-24 md:w-32 md:h-32"
          />
        </div>
      </section>

      {/* Message */}
      {msg && (
        <div className="bg-green-100 border border-green-200 text-green-800 px-4 py-2 rounded mb-6 text-center font-medium">
          {msg}
        </div>
      )}

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center items-center py-16">
          <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-red-600"></div>
        </div>
      )}

      {/* Empty State */}
      {!loading && events.length === 0 && (
        <div className="text-center text-gray-500 py-16">
          <img src="https://img.icons8.com/ios-filled/100/cccccc/calendar--v1.png" alt="No events" className="mx-auto mb-4 opacity-60" />
          <div className="text-lg font-semibold">No events found.</div>
          <div className="text-sm">Please check back later for new opportunities!</div>
        </div>
      )}

      {/* Events Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(ev => {
          const isUpcoming = new Date(ev.date) > new Date()
          const isRegistered = registeredIds.includes(ev._id)
          return (
            <div
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition p-6 flex flex-col"
              key={ev._id}
            >
              <div className="flex items-center gap-3 mb-2">
                <FaCalendarAlt className="text-red-500" />
                <span className="font-semibold text-red-700">{new Date(ev.date).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                <span className={`ml-auto px-3 py-1 rounded-full text-xs font-bold ${isUpcoming ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-500'}`}>
                  {isUpcoming ? 'Upcoming' : 'Past'}
                </span>
              </div>
              <h3 className="font-bold text-lg text-gray-800 mb-1">{ev.title}</h3>
              <p className="text-gray-600 mb-3 line-clamp-3">{ev.description}</p>
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-2">
                {ev.location && (
                  <>
                    <FaMapMarkerAlt className="text-pink-500" />
                    <span>{ev.location}</span>
                  </>
                )}
                {ev.capacity && (
                  <>
                    <FaUsers className="text-green-500 ml-4" />
                    <span>{ev.capacity} seats</span>
                  </>
                )}
              </div>
              <div className="mt-auto pt-4 flex flex-col gap-2">
                {user ? (
                  isRegistered ? (
                    <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-center font-semibold">
                      Registered
                    </span>
                  ) : (
                    <button
                      onClick={() => register(ev._id)}
                      className={`px-4 py-2 bg-red-600 text-white rounded-full font-bold shadow hover:bg-red-700 transition ${registering === ev._id ? 'opacity-60 cursor-not-allowed' : ''}`}
                      disabled={registering === ev._id}
                    >
                      {registering === ev._id ? 'Registering...' : 'Register'}
                    </button>
                  )
                ) : (
                  <span className="text-sm text-red-600 font-semibold">Login to register</span>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* Call to Action */}
      <section className="mt-16">
        <div className="bg-red-700 rounded-xl shadow-lg p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white text-xl font-bold text-center md:text-left">
            Want to host an event or have questions? <br className="hidden md:block" />
            <span className="font-normal">Contact our team for collaboration opportunities.</span>
          </div>
          <Link
            to="/contact"
            className="px-6 py-3 bg-white text-red-700 font-bold rounded-full shadow hover:bg-red-50 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}