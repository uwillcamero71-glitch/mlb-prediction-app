import React from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { format } from 'date-fns'

function GameCard({ game }) {
  const getConfidenceColor = (confidence) => {
    if (confidence >= 75) return 'text-green-400'
    if (confidence >= 60) return 'text-yellow-400'
    return 'text-red-400'
  }

  return (
    <div className="card hover:scale-105 transition-transform cursor-pointer">
      <div className="space-y-3">
        {/* Teams */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="font-semibold">{game.homeTeam}</span>
            <span className="text-xs bg-accent/20 text-accent px-2 py-1 rounded">HOME</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <div className="flex-1 h-px bg-gray-600"></div>
            <FiArrowRight />
            <div className="flex-1 h-px bg-gray-600"></div>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-semibold">{game.awayTeam}</span>
            <span className="text-xs bg-gray-600/20 text-gray-400 px-2 py-1 rounded">AWAY</span>
          </div>
        </div>

        {/* Date */}
        <p className="text-sm text-gray-400">
          {format(new Date(game.date), 'MMM dd, HH:mm a')}
        </p>

        {/* Prediction */}
        <div className="bg-primary rounded-lg p-3">
          <p className="text-xs text-gray-400 mb-1">Prediction</p>
          <div className="flex items-center justify-between">
            <p className="font-bold text-white">{game.prediction}</p>
            <p className={`font-bold text-lg ${getConfidenceColor(game.confidence)}`}>
              {game.confidence}%
            </p>
          </div>
        </div>

        {/* Runs */}
        <div className="text-sm">
          <span className="text-gray-400">Predicted Total Runs: </span>
          <span className="font-bold text-accent">{game.predictedRuns}</span>
        </div>
      </div>
    </div>
  )
}

export default GameCard
