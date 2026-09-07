import React from 'react'
import { FiMenu, FiSearch, FiBell, FiUser } from 'react-icons/fi'
import { FaBaseballBall } from 'react-icons/fa'

function Navbar({ onMenuClick }) {
  return (
    <nav className="bg-secondary border-b border-gray-700 sticky top-0 z-40">
      <div className="flex items-center justify-between h-16 px-6">
        {/* Left Side */}
        <div className="flex items-center gap-4">
          <button
            onClick={onMenuClick}
            className="p-2 hover:bg-gray-700 rounded-lg transition"
          >
            <FiMenu size={24} />
          </button>
          <div className="flex items-center gap-2">
            <FaBaseballBall className="text-accent text-2xl" />
            <span className="font-bold text-xl hidden sm:inline">MLB AI</span>
          </div>
        </div>

        {/* Center - Search */}
        <div className="hidden md:flex flex-1 max-w-md mx-4">
          <div className="relative w-full">
            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search teams, games..."
              className="w-full bg-primary border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-accent transition"
            />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-700 rounded-lg transition relative">
            <FiBell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <button className="p-2 hover:bg-gray-700 rounded-lg transition">
            <FiUser size={20} />
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
