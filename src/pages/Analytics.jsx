import React from 'react'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function Analytics() {
  const accuracyByTeam = [
    { team: 'Yankees', accuracy: 78 },
    { team: 'Dodgers', accuracy: 75 },
    { team: 'Astros', accuracy: 72 },
    { team: 'Red Sox', accuracy: 68 },
    { team: 'Giants', accuracy: 65 },
  ]

  const predictionDistribution = [
    { name: 'Home Wins', value: 45, color: '#3B82F6' },
    { name: 'Away Wins', value: 35, color: '#10B981' },
    { name: 'Draws', value: 20, color: '#8B5CF6' },
  ]

  const winLossData = [
    { week: 'Week 1', wins: 8, losses: 4 },
    { week: 'Week 2', wins: 9, losses: 3 },
    { week: 'Week 3', wins: 11, losses: 1 },
    { week: 'Week 4', wins: 10, losses: 2 },
    { week: 'Week 5', wins: 12, losses: 1 },
    { week: 'Week 6', wins: 14, losses: 2 },
    { week: 'Week 7', wins: 13, losses: 3 },
    { week: 'Week 8', wins: 15, losses: 2 },
  ]

  return (
    <div className="p-6 space-y-6 min-h-screen">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Analytics</h1>
        <p className="text-gray-400">In-depth analysis of prediction performance</p>
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Win/Loss Trend */}
        <div className="card-lg">
          <h2 className="text-xl font-bold mb-4">Weekly Win/Loss Trend</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={winLossData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
              <XAxis stroke="#9CA3AF" />
              <YAxis stroke="#9CA3AF" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: '1px solid #374151',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar dataKey="wins" fill="#10B981" name="Wins" radius={[8, 8, 0, 0]} />
              <Bar dataKey="losses" fill="#EF4444" name="Losses" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Prediction Distribution */}
        <div className="card-lg">
          <h2 className="text-xl font-bold mb-4">Prediction Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={predictionDistribution}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {predictionDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Accuracy by Team */}
      <div className="card-lg">
        <h2 className="text-xl font-bold mb-4">Accuracy by Team</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={accuracyByTeam} layout="vertical">
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis type="number" stroke="#9CA3AF" />
            <YAxis dataKey="team" type="category" stroke="#9CA3AF" width={100} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
              }}
            />
            <Bar dataKey="accuracy" fill="#3B82F6" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card">
          <p className="text-gray-400 text-sm mb-2">Total Games Analyzed</p>
          <p className="text-3xl font-bold text-accent">2,847</p>
          <p className="text-xs text-gray-500 mt-2">+243 this week</p>
        </div>
        <div className="card">
          <p className="text-gray-400 text-sm mb-2">Average Confidence</p>
          <p className="text-3xl font-bold text-green-400">71.3%</p>
          <p className="text-xs text-gray-500 mt-2">+2.1% this month</p>
        </div>
        <div className="card">
          <p className="text-gray-400 text-sm mb-2">Best Performing Day</p>
          <p className="text-3xl font-bold text-purple-400">Thursday</p>
          <p className="text-xs text-gray-500 mt-2">78% accuracy average</p>
        </div>
      </div>
    </div>
  )
}

export default Analytics
