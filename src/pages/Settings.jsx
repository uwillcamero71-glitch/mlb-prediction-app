import React, { useState } from 'react'
import { FiToggleRight, FiBell, FiLock, FiUser, FiLogOut } from 'react-icons/fi'
import toast from 'react-hot-toast'

function Settings() {
  const [settings, setSettings] = useState({
    emailNotifications: true,
    pushNotifications: false,
    darkMode: true,
    highConfidenceOnly: false,
    autoUpdate: true,
  })

  const handleToggle = (key) => {
    setSettings(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
    toast.success('Setting updated')
  }

  return (
    <div className="p-6 space-y-6 min-h-screen max-w-2xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Settings</h1>
        <p className="text-gray-400">Manage your preferences and account settings</p>
      </div>

      {/* Account Settings */}
      <div className="card-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FiUser size={24} />
          Account Settings
        </h2>
        <div className="space-y-4 border-t border-gray-700 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Email Address</p>
              <p className="text-sm text-gray-400">uwillcamero71@gmail.com</p>
            </div>
            <button className="text-accent hover:text-blue-400 transition">Edit</button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Username</p>
              <p className="text-sm text-gray-400">uwillcamero71</p>
            </div>
            <button className="text-accent hover:text-blue-400 transition">Edit</button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Plan</p>
              <p className="text-sm text-gray-400">Premium</p>
            </div>
            <button className="text-accent hover:text-blue-400 transition">Upgrade</button>
          </div>
        </div>
      </div>

      {/* Notification Settings */}
      <div className="card-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FiBell size={24} />
          Notifications
        </h2>
        <div className="space-y-4 border-t border-gray-700 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Email Notifications</p>
              <p className="text-sm text-gray-400">Get email alerts for predictions</p>
            </div>
            <button
              onClick={() => handleToggle('emailNotifications')}
              className={`p-2 rounded-lg transition ${
                settings.emailNotifications ? 'bg-accent/20 text-accent' : 'bg-gray-700 text-gray-400'
              }`}
            >
              <FiToggleRight size={24} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Push Notifications</p>
              <p className="text-sm text-gray-400">Receive browser notifications</p>
            </div>
            <button
              onClick={() => handleToggle('pushNotifications')}
              className={`p-2 rounded-lg transition ${
                settings.pushNotifications ? 'bg-accent/20 text-accent' : 'bg-gray-700 text-gray-400'
              }`}
            >
              <FiToggleRight size={24} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">High Confidence Only</p>
              <p className="text-sm text-gray-400">Only notify for predictions over 70%</p>
            </div>
            <button
              onClick={() => handleToggle('highConfidenceOnly')}
              className={`p-2 rounded-lg transition ${
                settings.highConfidenceOnly ? 'bg-accent/20 text-accent' : 'bg-gray-700 text-gray-400'
              }`}
            >
              <FiToggleRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Preferences */}
      <div className="card-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FiToggleRight size={24} />
          Preferences
        </h2>
        <div className="space-y-4 border-t border-gray-700 pt-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Dark Mode</p>
              <p className="text-sm text-gray-400">Always use dark theme</p>
            </div>
            <button
              onClick={() => handleToggle('darkMode')}
              className={`p-2 rounded-lg transition ${
                settings.darkMode ? 'bg-accent/20 text-accent' : 'bg-gray-700 text-gray-400'
              }`}
            >
              <FiToggleRight size={24} />
            </button>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-semibold text-white">Auto-Update</p>
              <p className="text-sm text-gray-400">Automatically update predictions</p>
            </div>
            <button
              onClick={() => handleToggle('autoUpdate')}
              className={`p-2 rounded-lg transition ${
                settings.autoUpdate ? 'bg-accent/20 text-accent' : 'bg-gray-700 text-gray-400'
              }`}
            >
              <FiToggleRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="card-lg">
        <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
          <FiLock size={24} />
          Security
        </h2>
        <div className="space-y-4 border-t border-gray-700 pt-4">
          <button className="w-full text-left p-3 hover:bg-secondary rounded-lg transition">
            <p className="font-semibold text-white">Change Password</p>
            <p className="text-sm text-gray-400">Update your password</p>
          </button>
          <button className="w-full text-left p-3 hover:bg-secondary rounded-lg transition">
            <p className="font-semibold text-white">Two-Factor Authentication</p>
            <p className="text-sm text-gray-400">Add extra security to your account</p>
          </button>
          <button className="w-full text-left p-3 hover:bg-secondary rounded-lg transition">
            <p className="font-semibold text-white">Active Sessions</p>
            <p className="text-sm text-gray-400">Manage your active login sessions</p>
          </button>
        </div>
      </div>

      {/* Danger Zone */}
      <div className="card-lg border-red-500/30">
        <h2 className="text-xl font-bold mb-4 text-red-400">Danger Zone</h2>
        <div className="space-y-3 border-t border-red-500/30 pt-4">
          <button className="w-full flex items-center gap-2 text-red-400 hover:text-red-300 transition p-3 hover:bg-red-900/10 rounded-lg">
            <FiLogOut size={20} />
            Logout
          </button>
          <button className="w-full text-left text-red-400 hover:text-red-300 transition p-3 hover:bg-red-900/10 rounded-lg">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
