import React, { useEffect, useState } from 'react'
import api from '../lib/api'
import { FaUsers, FaDonate, FaCalendarAlt, FaFileExport } from 'react-icons/fa'

export default function Admin() {
  const [users, setUsers] = useState([])
  const [donations, setDonations] = useState([])
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    Promise.all([
      api.get('/admin/users').then(r => setUsers(r.data)),
      api.get('/admin/donations').then(r => setDonations(r.data)),
      api.get('/admin/events').then(r => setEvents(r.data)),
    ]).finally(() => setLoading(false))
  }, [])

  const exportData = (type) => {
    alert(`Exporting ${type} data...`)
  }

  return (
    <div className="container mx-auto px-4 py-8 space-y-10">
      {/* Dashboard Summary */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
          <FaUsers className="text-4xl" />
          <div>
            <div className="text-2xl font-bold">{users.length}</div>
            <div className="text-sm">Total Users</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-300 text-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
          <FaDonate className="text-4xl" />
          <div>
            <div className="text-2xl font-bold">
              {donations.reduce((sum, d) => sum + d.amount, 0).toLocaleString()} {donations[0]?.currency || ''}
            </div>
            <div className="text-sm">Total Donations</div>
          </div>
        </div>
        <div className="bg-gradient-to-r from-indigo-500 to-blue-300 text-white rounded-2xl shadow-lg p-6 flex items-center gap-4">
          <FaCalendarAlt className="text-4xl" />
          <div>
            <div className="text-2xl font-bold">{events.length}</div>
            <div className="text-sm">Total Events</div>
          </div>
        </div>
      </section>

      {/* Users Table */}
      <section className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-red-700 flex items-center gap-2">
            <FaUsers /> Users
          </h2>
          <button
            onClick={() => exportData('users')}
            className="flex items-center gap-2 px-4 py-2 bg-red-100 text-red-700 rounded-full font-semibold hover:bg-red-200 transition"
          >
            <FaFileExport /> Export
          </button>
        </div>
        {loading ? (
          <div className="text-center py-8 text-gray-400">Loading users...</div>
        ) : users.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No users found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-red-50">
                  <th className="py-2 px-4 text-left font-semibold">Name</th>
                  <th className="py-2 px-4 text-left font-semibold">Email</th>
                  <th className="py-2 px-4 text-left font-semibold">Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map(u => (
                  <tr key={u._id} className="border-b hover:bg-red-50 transition">
                    <td className="py-2 px-4">{u.name}</td>
                    <td className="py-2 px-4">{u.email}</td>
                    <td className="py-2 px-4 capitalize">{u.role || 'user'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Donations Table */}
      <section className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-green-700 flex items-center gap-2">
            <FaDonate /> Donations
          </h2>
          <button
            onClick={() => exportData('donations')}
            className="flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full font-semibold hover:bg-green-200 transition"
          >
            <FaFileExport /> Export
          </button>
        </div>
        {loading ? (
          <div className="text-center py-8 text-gray-400">Loading donations...</div>
        ) : donations.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No donations found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-green-50">
                  <th className="py-2 px-4 text-left font-semibold">Donor</th>
                  <th className="py-2 px-4 text-left font-semibold">Amount</th>
                  <th className="py-2 px-4 text-left font-semibold">Status</th>
                  <th className="py-2 px-4 text-left font-semibold">Date</th>
                </tr>
              </thead>
              <tbody>
                {donations.map(d => (
                  <tr key={d._id} className="border-b hover:bg-green-50 transition">
                    <td className="py-2 px-4">{d.user?.name || <span className="text-gray-400">—</span>}</td>
                    <td className="py-2 px-4">{d.amount} {d.currency}</td>
                    <td className="py-2 px-4 capitalize">{d.status}</td>
                    <td className="py-2 px-4">{new Date(d.createdAt || d.date).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Events Table */}
      <section className="bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-indigo-700 flex items-center gap-2">
            <FaCalendarAlt /> Events
          </h2>
          <button
            onClick={() => exportData('events')}
            className="flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full font-semibold hover:bg-indigo-200 transition"
          >
            <FaFileExport /> Export
          </button>
        </div>
        {loading ? (
          <div className="text-center py-8 text-gray-400">Loading events...</div>
        ) : events.length === 0 ? (
          <div className="text-center py-8 text-gray-400">No events found.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="bg-indigo-50">
                  <th className="py-2 px-4 text-left font-semibold">Title</th>
                  <th className="py-2 px-4 text-left font-semibold">Date</th>
                  <th className="py-2 px-4 text-left font-semibold">Attendees</th>
                </tr>
              </thead>
              <tbody>
                {events.map(e => (
                  <tr key={e._id} className="border-b hover:bg-indigo-50 transition">
                    <td className="py-2 px-4">{e.title}</td>
                    <td className="py-2 px-4">{new Date(e.date).toLocaleString()}</td>
                    <td className="py-2 px-4">{e.attendees?.length || 0}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="text-center text-xs text-gray-400 mt-10">
        Admin Dashboard &copy; {new Date().getFullYear()} — NGO Platform
      </footer>
    </div>
  )
}