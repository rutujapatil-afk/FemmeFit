import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import FitnessPlanner from './pages/FitnessPlanner';
import NutritionCoach from './pages/NutritionCoach';
import HealthTracker from './pages/HealthTracker';
import WellnessChat from './pages/WellnessChat';
import Community from './pages/Community';
import Safety from './pages/Safety';

function App() {
  return (
    <Router>
      <div className="flex h-screen bg-gray-50">
        <Sidebar />
        <div className="flex-1 overflow-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/fitness" element={<FitnessPlanner />} />
            <Route path="/nutrition" element={<NutritionCoach />} />
            <Route path="/health-tracker" element={<HealthTracker />} />
            <Route path="/wellness-chat" element={<WellnessChat />} />
            <Route path="/community" element={<Community />} />
            <Route path="/safety" element={<Safety />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;