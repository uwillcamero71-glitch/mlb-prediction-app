import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiHome, FiBarChart2, FiCalendar, FiTrendingUp, FiSettings, FiX } from 'react-icons/fi'
import { FaBaseballBall } from 'react-icons/fa'

function Sidebar({ open, setOpen }) {
  const location = useLocation()

  const menuItems = [
    { label: 'Dashboard', icon: FiHome, path: '/' },
    { label: 'Predictions', icon: FiTrendingUp, path: '/predictions' },
    { label: 'Games', icon: FiCalendar, path: '/games' },
    { label: 'Analytics', icon: FiBarChart2, path: '/analytics' },
    { label: 'Settings', icon: FiSettings, path: '/settings' },
  ]

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={() => setOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:static w-64 h-screen bg-primary border-r border-gray-700 transition-transform duration-300 z-30 ${
          open ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div className="flex items-center gap-2">
              <FaBaseballBall className="text-accent text-2xl" />
              <span className="font-bold text-xl">MLB AI</span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="lg:hidden p-2 hover:bg-gray-700 rounded-lg"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                    isActive
                      ? 'bg-accent text-white'
                      : 'text-gray-300 hover:bg-secondary'
                  }`}
                >
                  <Icon size={20} />
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
          </nav>

          {/* Footer */}
          <div className="p-6 border-t border-gray-700">
            <div className="bg-secondary rounded-lg p-4">
              <p className="text-sm font-semibold text-accent mb-2">⭐ Premium</p>
              <p className="text-xs text-gray-400 mb-4">
                Get advanced predictions and analytics
              </p>
              <button className="w-full bg-accent text-white py-2 rounded-lg hover:bg-blue-600 transition text-sm font-semibold">
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
