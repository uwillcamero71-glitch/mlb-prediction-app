import React, { useState, useEffect } from 'react'
import { FiTrendingUp, FiTarget, FiAward, FiCalendar } from 'react-icons/fi'
import StatCard from '../components/StatCard'
import GameCard from '../components/GameCard'
import PredictionChart from '../components/PredictionChart'
import axios from 'axios'
import toast from 'react-hot-toast'

function Dashboard() {
  const [stats, setStats] = useState(null)
  const [games, setGames] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchDashboardData()
  }, [])

  const fetchDashboardData = async () => {
    try {
      setLoading(true)
      const response = await axios.get('/api/dashboard')
      setStats(response.data.stats)
      setGames(response.data.games)
    } catch (error) {
      console.error('Error fetching dashboard:', error)
      toast.error('Failed to load dashboard data')
      // Mock data for development
      setStats({
        accuracy: 68.5,
        predictions: 1245,
        wins: 847,
        streak: 12
      })
      setGames([
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
        }
      ])
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <div className="spinner mx-auto mb-4"></div>
          <p className="text-lg text-gray-400">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 space-y-6 bg-gradient-to-b from-gray-900 to-gray-950 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Dashboard</h1>
        <p className="text-gray-400">Welcome back! Here's your prediction summary</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={FiTrendingUp}
          label="Accuracy"
          value={`${stats?.accuracy}%`}
          change="+2.3% this month"
          color="blue"
        />
        <StatCard
          icon={FiTarget}
          label="Total Predictions"
          value={stats?.predictions?.toLocaleString()}
          change="243 this week"
          color="green"
        />
        <StatCard
          icon={FiAward}
          label="Wins"
          value={stats?.wins?.toLocaleString()}
          change={`${Math.round((stats?.wins / stats?.predictions) * 100)}% success rate`}
          color="purple"
        />
        <StatCard
          icon={FiCalendar}
          label="Win Streak"
          value={`${stats?.streak} games`}
          change="Current streak"
          color="orange"
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 card-lg">
          <h2 className="text-xl font-bold mb-4">Prediction Accuracy Trend</h2>
          <PredictionChart />
        </div>
        <div className="card-lg">
          <h2 className="text-xl font-bold mb-4">Quick Stats</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-400">Today's Predictions</span>
              <span className="font-bold text-accent">12</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-accent h-2 rounded-full" style={{ width: '75%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">This Week</span>
              <span className="font-bold text-accent">8.4/10</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '84%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-400">This Month</span>
              <span className="font-bold text-accent">68.5%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '68.5%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Upcoming Games */}
      <div className="card-lg">
        <h2 className="text-xl font-bold mb-4">Upcoming Predictions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
