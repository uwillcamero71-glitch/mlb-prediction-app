import React, { useState } from 'react'
import { FiFilter, FiDownload, FiTrendingUp } from 'react-icons/fi'
import GameCard from '../components/GameCard'

function Predictions() {
  const [filter, setFilter] = useState('all')
  
  const predictions = [
    {
      id: 1,
      homeTeam: 'New York Yankees',
      awayTeam: 'Boston Red Sox',
      date: '2024-09-10T19:05:00Z',
      prediction: 'Yankees',
      confidence: 72,
      predictedRuns: 8.5,
      status: 'pending'
    },
    {
      id: 2,
      homeTeam: 'Los Angeles Dodgers',
      awayTeam: 'San Francisco Giants',
      date: '2024-09-10T22:05:00Z',
      prediction: 'Dodgers',
      confidence: 65,
      predictedRuns: 7.2,
      status: 'pending'
    },
    {
      id: 3,
      homeTeam: 'Houston Astros',
      awayTeam: 'Oakland Athletics',
      date: '2024-09-09T20:05:00Z',
      prediction: 'Astros',
      confidence: 78,
      predictedRuns: 6.8,
      status: 'completed'
    }
  ]

  const filteredPredictions = predictions.filter(p => 
    filter === 'all' ? true : p.status === filter
  )

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-bold text-white mb-2">Predictions</h1>
          <p className="text-gray-400">View all game predictions and their outcomes</p>
        </div>
        <button className="mt-4 md:mt-0 flex items-center gap-2 bg-accent text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">
          <FiDownload size={20} />
          Export
        </button>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {['all', 'pending', 'completed'].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg transition ${
              filter === f
                ? 'bg-accent text-white'
                : 'bg-secondary text-gray-300 hover:bg-gray-600'
            }`}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Predictions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPredictions.map((pred) => (
          <GameCard key={pred.id} game={pred} />
        ))}
      </div>
    </div>
  )
}

export default Predictions
