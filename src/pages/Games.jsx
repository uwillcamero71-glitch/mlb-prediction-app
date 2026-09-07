import React, { useState } from 'react'
import { FiCalendar, FiFilter, FiSearch } from 'react-icons/fi'

function Games() {
  const [selectedDate, setSelectedDate] = useState('2024-09-10')
  const [selectedTeam, setSelectedTeam] = useState('all')

  const games = [
    {
      id: 1,
      homeTeam: 'New York Yankees',
      awayTeam: 'Boston Red Sox',
      date: '2024-09-10T19:05:00Z',
      homeOdds: -110,
      awayOdds: -110,
      predictedWinner: 'Yankees',
      status: 'scheduled'
    },
    {
      id: 2,
      homeTeam: 'Los Angeles Dodgers',
      awayTeam: 'San Francisco Giants',
      date: '2024-09-10T22:05:00Z',
      homeOdds: -120,
      awayOdds: 100,
      predictedWinner: 'Dodgers',
      status: 'scheduled'
    },
    {
      id: 3,
      homeTeam: 'Houston Astros',
      awayTeam: 'Oakland Athletics',
      date: '2024-09-09T20:05:00Z',
      homeOdds: -150,
      awayOdds: 130,
      predictedWinner: 'Astros',
      status: 'completed'
    }
  ]

  const teams = ['all', 'Yankees', 'Red Sox', 'Dodgers', 'Giants', 'Astros', 'Athletics']

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Games</h1>
        <p className="text-gray-400">Browse all MLB games and their predictions</p>
      </div>

      {/* Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-4">
          {/* Date Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">Select Date</label>
            <div className="flex items-center gap-2 bg-secondary border border-gray-600 rounded-lg px-4 py-2">
              <FiCalendar className="text-gray-400" />
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="bg-transparent text-white focus:outline-none flex-1"
              />
            </div>
          </div>

          {/* Team Filter */}
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-300 mb-2">Team</label>
            <select
              value={selectedTeam}
              onChange={(e) => setSelectedTeam(e.target.value)}
              className="w-full bg-secondary border border-gray-600 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-accent"
            >
              {teams.map((team) => (
                <option key={team} value={team}>
                  {team === 'all' ? 'All Teams' : team}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Games List */}
      <div className="space-y-3">
        {games.map((game) => (
          <div key={game.id} className="card hover:border-accent transition">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              {/* Teams */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold">{game.homeTeam}</span>
                  <span className="text-xs text-gray-500">HOME</span>
                </div>
                <div className="text-center text-gray-500 text-sm my-2">vs</div>
                <div className="flex items-center justify-between">
                  <span className="font-semibold">{game.awayTeam}</span>
                  <span className="text-xs text-gray-500">AWAY</span>
                </div>
              </div>

              {/* Odds */}
              <div className="mt-4 md:mt-0 md:mx-6">
                <p className="text-xs text-gray-400 mb-2">Odds</p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <p className="text-sm text-gray-300">{game.homeOdds > 0 ? '+' : ''}{game.homeOdds}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-gray-300">{game.awayOdds > 0 ? '+' : ''}{game.awayOdds}</p>
                  </div>
                </div>
              </div>

              {/* Prediction */}
              <div className="mt-4 md:mt-0">
                <p className="text-xs text-gray-400 mb-2">Our Pick</p>
                <div className="flex items-center gap-2">
                  <span className="bg-accent/20 text-accent px-3 py-1 rounded-lg font-semibold text-sm">
                    {game.predictedWinner}
                  </span>
                  <span className={`text-xs font-semibold ${game.status === 'completed' ? 'text-green-400' : 'text-yellow-400'}`}>
                    {game.status === 'completed' ? 'Completed' : 'Scheduled'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Games
