import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

function PredictionChart() {
  const data = [
    { name: 'Week 1', accuracy: 65, confidence: 62 },
    { name: 'Week 2', accuracy: 68, confidence: 65 },
    { name: 'Week 3', accuracy: 72, confidence: 70 },
    { name: 'Week 4', accuracy: 70, confidence: 68 },
    { name: 'Week 5', accuracy: 75, confidence: 73 },
    { name: 'Week 6', accuracy: 78, confidence: 76 },
    { name: 'Week 7', accuracy: 82, confidence: 80 },
    { name: 'Week 8', accuracy: 85, confidence: 83 },
  ]

  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
        <XAxis stroke="#9CA3AF" />
        <YAxis stroke="#9CA3AF" />
        <Tooltip
          contentStyle={{
            backgroundColor: '#1F2937',
            border: '1px solid #374151',
            borderRadius: '8px',
          }}
          cursor={{ stroke: '#3B82F6' }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="accuracy"
          stroke="#10B981"
          dot={{ fill: '#10B981', r: 4 }}
          activeDot={{ r: 6 }}
          strokeWidth={2}
          name="Prediction Accuracy %"
        />
        <Line
          type="monotone"
          dataKey="confidence"
          stroke="#3B82F6"
          dot={{ fill: '#3B82F6', r: 4 }}
          activeDot={{ r: 6 }}
          strokeWidth={2}
          name="Average Confidence %"
        />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default PredictionChart
