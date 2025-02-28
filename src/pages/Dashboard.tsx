import React from 'react';
import { Line } from 'react-chartjs-2';
import { 
  Chart as ChartJS, 
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
} from 'chart.js';
import { Bell, Calendar, TrendingUp, Zap, MessageSquare } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale, 
  LinearScale, 
  PointElement, 
  LineElement, 
  Title, 
  Tooltip, 
  Legend,
  Filler
);

const Dashboard = () => {
  // Mock data for the chart
  const chartData = {
    labels: ['Day 1', 'Day 5', 'Day 10', 'Day 15', 'Day 20', 'Day 25', 'Day 28'],
    datasets: [
      {
        label: 'Energy Level',
        data: [65, 70, 80, 60, 55, 75, 85],
        borderColor: 'rgb(147, 51, 234)',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        tension: 0.4,
        fill: true,
      },
      {
        label: 'Stress Level',
        data: [40, 35, 30, 50, 55, 35, 25],
        borderColor: 'rgb(236, 72, 153)',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Monthly Health Metrics',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Welcome back, Jane!</h1>
        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200">
            <Bell size={20} className="text-gray-600" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            <Calendar size={18} />
            <span>Cycle Day 15</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <StatCard 
          title="Today's Energy" 
          value="75%" 
          description="15% higher than yesterday" 
          icon={<Zap className="h-6 w-6 text-yellow-500" />} 
          color="bg-yellow-50"
        />
        <StatCard 
          title="Workout Streak" 
          value="7 days" 
          description="Keep it up!" 
          icon={<TrendingUp className="h-6 w-6 text-green-500" />} 
          color="bg-green-50"
        />
        <StatCard 
          title="AI Insights" 
          value="3 new" 
          description="Based on your recent activity" 
          icon={<MessageSquare className="h-6 w-6 text-purple-500" />} 
          color="bg-purple-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Health Trends</h2>
          <Line data={chartData} options={chartOptions} />
        </div>
        
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-lg font-semibold mb-4">AI Recommendations</h2>
          
          <div className="space-y-4">
            <RecommendationCard 
              title="Workout Adjustment" 
              description="Based on your cycle day and energy levels, try a moderate-intensity yoga session today."
              type="fitness"
            />
            <RecommendationCard 
              title="Nutrition Tip" 
              description="Your iron levels might be low. Consider adding more leafy greens to your meals today."
              type="nutrition"
            />
            <RecommendationCard 
              title="Mood Support" 
              description="Your sleep pattern indicates potential stress. Try a 10-minute meditation before bed."
              type="wellness"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ 
  title, 
  value, 
  description, 
  icon, 
  color 
}: { 
  title: string; 
  value: string; 
  description: string; 
  icon: React.ReactNode; 
  color: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm">
      <div className="flex items-center gap-4">
        <div className={`p-3 rounded-full ${color}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <p className="text-2xl font-bold">{value}</p>
          <p className="text-xs text-gray-500">{description}</p>
        </div>
      </div>
    </div>
  );
};

const RecommendationCard = ({ 
  title, 
  description, 
  type 
}: { 
  title: string; 
  description: string; 
  type: 'fitness' | 'nutrition' | 'wellness';
}) => {
  const getBgColor = () => {
    switch (type) {
      case 'fitness': return 'bg-blue-50';
      case 'nutrition': return 'bg-green-50';
      case 'wellness': return 'bg-purple-50';
      default: return 'bg-gray-50';
    }
  };

  const getTextColor = () => {
    switch (type) {
      case 'fitness': return 'text-blue-600';
      case 'nutrition': return 'text-green-600';
      case 'wellness': return 'text-purple-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="p-4 rounded-lg border border-gray-100">
      <div className={`text-xs font-medium ${getTextColor()} ${getBgColor()} inline-block px-2 py-1 rounded mb-2`}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </div>
      <h3 className="font-medium mb-1">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default Dashboard;