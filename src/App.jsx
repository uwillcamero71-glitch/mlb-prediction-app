import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Dashboard'
import Predictions from './pages/Predictions'
import Games from './pages/Games'
import Analytics from './pages/Analytics'
import Settings from './pages/Settings'
import { Toaster } from 'react-hot-toast'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    // Set theme
    document.documentElement.classList.add('dark')
  }, [theme])

  return (
    <Router>
      <div className="flex h-screen bg-gray-900 text-gray-100">
        {/* Sidebar */}
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* Main Content */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Navbar */}
          <Navbar onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

          {/* Page Content */}
          <main className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/predictions" element={<Predictions />} />
              <Route path="/games" element={<Games />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>
        </div>

        {/* Toast Notifications */}
        <Toaster position="top-right" />
      </div>
    </Router>
  )
}

export default App
