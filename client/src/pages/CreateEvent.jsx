import React, { useState } from 'react'
import api from '../lib/api'
import { useNavigate } from 'react-router-dom'
import { FaCalendarAlt } from 'react-icons/fa'

export default function CreateEvent() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [date, setDate] = useState('')
  const nav = useNavigate()
  const [err, setErr] = useState(null)
  const [loading, setLoading] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setErr(null)
    try {
      await api.post('/events', { title, description, date })
      nav('/events')
    } catch (err) {
      setErr(err.response?.data?.message || 'Create failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-600 to-orange-500 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 md:p-10">
        <div className="flex items-center gap-3 mb-6">
          <FaCalendarAlt className="text-red-600 text-3xl" />
          <h2 className="text-2xl font-extrabold text-red-700">Create New Event</h2>
        </div>
        <p className="text-gray-500 mb-6">
          Fill in the details below to add a new event to your organizations calendar.
        </p>
        {err && (
          <div className="bg-red-100 border border-red-200 text-red-700 px-4 py-2 rounded mb-4 text-sm">
            {err}
          </div>
        )}
        <form onSubmit={submit} className="space-y-5">
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="title">Title</label>
            <input
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              placeholder="Event title"
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="description">Description</label>
            <textarea
              id="description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Event description"
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition resize-none"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium mb-1" htmlFor="date">Date & Time</label>
            <div className="relative">
              <input
                id="date"
                value={date}
                onChange={e => setDate(e.target.value)}
                type="datetime-local"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-400 focus:outline-none transition pr-12"
                required
              />
              <FaCalendarAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-red-400 pointer-events-none" />
            </div>
          </div>
          <button
            type="submit"
            className={`w-full py-3 bg-red-600 text-white font-bold rounded-lg shadow hover:bg-red-700 transition ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? 'Creating...' : 'Create Event'}
          </button>
        </form>
      </div>
    </div>
  )
}