import React, { useState } from 'react';
import { Calendar, Dumbbell, Clock, BarChart, ArrowRight, Play } from 'lucide-react';

const FitnessPlanner = () => {
  const [energyLevel, setEnergyLevel] = useState(7);
  const [stressLevel, setStressLevel] = useState(4);
  const [cycleDay, setCycleDay] = useState(15);
  const [workoutGenerated, setWorkoutGenerated] = useState(false);

  const handleGenerateWorkout = () => {
    // In a real app, this would call an ML model
    setWorkoutGenerated(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Adaptive AI Fitness Planner</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Your Metrics</h2>
          
          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Energy Level (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={energyLevel}
                onChange={(e) => setEnergyLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Stress Level (1-10)
              </label>
              <input
                type="range"
                min="1"
                max="10"
                value={stressLevel}
                onChange={(e) => setStressLevel(parseInt(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>Low</span>
                <span>Medium</span>
                <span>High</span>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Menstrual Cycle Day (1-28)
              </label>
              <div className="flex items-center gap-2">
                <Calendar size={18} className="text-purple-500" />
                <select 
                  value={cycleDay}
                  onChange={(e) => setCycleDay(parseInt(e.target.value))}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm"
                >
                  {Array.from({ length: 28 }, (_, i) => (
                    <option key={i + 1} value={i + 1}>
                      Day {i + 1}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            
            <button
              onClick={handleGenerateWorkout}
              className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center gap-2"
            >
              <BarChart size={18} />
              <span>Generate AI Workout</span>
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          {workoutGenerated ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Personalized Workout</h2>
                <div className="flex items-center gap-2 text-sm text-purple-600">
                  <span>Based on your metrics</span>
                  <div className="h-5 w-5 rounded-full bg-purple-100 flex items-center justify-center">
                    <span className="text-xs">AI</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-purple-700">
                  <strong>AI Analysis:</strong> Based on your cycle day (15), energy level (7/10), and stress level (4/10), 
                  we've created a moderate-intensity workout that focuses on strength and flexibility. This is optimal for your 
                  current hormonal state, which typically features higher energy and improved recovery capacity.
                </p>
              </div>
              
              <div className="space-y-4">
                <WorkoutExercise 
                  name="Dynamic Warm-up"
                  duration="5 minutes"
                  description="Light cardio and dynamic stretching to prepare your body"
                />
                <WorkoutExercise 
                  name="Strength Circuit"
                  duration="20 minutes"
                  description="3 rounds of: 12 squats, 10 push-ups (modified as needed), 12 dumbbell rows, 30-second plank"
                />
                <WorkoutExercise 
                  name="Mobility Flow"
                  duration="10 minutes"
                  description="Yoga-inspired movements focusing on hip and shoulder mobility"
                />
                <WorkoutExercise 
                  name="Cool Down"
                  duration="5 minutes"
                  description="Static stretching and deep breathing"
                />
              </div>
              
              <div className="mt-6 flex justify-between">
                <button className="flex items-center gap-2 text-purple-600 hover:text-purple-800">
                  <ArrowRight size={18} />
                  <span>Save to My Workouts</span>
                </button>
                <button className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">
                  <Play size={18} />
                  <span>Start Workout</span>
                </button>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Dumbbell size={24} className="text-purple-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Workout Generated Yet</h3>
              <p className="text-gray-500 max-w-md mb-6">
                Adjust your metrics and generate a personalized AI workout plan based on your current cycle day, energy levels, and stress.
              </p>
              <p className="text-sm text-purple-600">
                Our AI adapts your workout to your hormonal fluctuations for optimal results
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const WorkoutExercise = ({ 
  name, 
  duration, 
  description 
}: { 
  name: string; 
  duration: string; 
  description: string;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium">{name}</h3>
        <div className="flex items-center gap-1 text-sm text-gray-500">
          <Clock size={16} />
          <span>{duration}</span>
        </div>
      </div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default FitnessPlanner;