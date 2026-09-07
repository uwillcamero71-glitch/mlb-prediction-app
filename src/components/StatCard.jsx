import React from 'react'

function StatCard({ icon: Icon, label, value, change, color = 'blue' }) {
  const colorStyles = {
    blue: 'bg-blue-900/30 border-blue-700 text-blue-400',
    green: 'bg-green-900/30 border-green-700 text-green-400',
    purple: 'bg-purple-900/30 border-purple-700 text-purple-400',
    orange: 'bg-orange-900/30 border-orange-700 text-orange-400',
  }

  return (
    <div className={`card ${colorStyles[color]}`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-400 text-sm mb-2">{label}</p>
          <p className="text-3xl font-bold text-white">{value}</p>
          <p className="text-xs text-gray-500 mt-2">{change}</p>
        </div>
        <Icon size={24} className={colorStyles[color]} />
      </div>
    </div>
  )
}

export default StatCard
