import React, { useState } from 'react';
import { Activity, Upload, BarChart2, Mic, Camera, AlertCircle } from 'lucide-react';

const HealthTracker = () => {
  const [activeTab, setActiveTab] = useState('risk');
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">AI-Powered Hormonal Health Tracker</h1>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <TabButton 
              label="Risk Predictor" 
              icon={<AlertCircle size={18} />} 
              active={activeTab === 'risk'} 
              onClick={() => setActiveTab('risk')} 
            />
            <TabButton 
              label="Skin & Hair Analysis" 
              icon={<Camera size={18} />} 
              active={activeTab === 'skin'} 
              onClick={() => setActiveTab('skin')} 
            />
            <TabButton 
              label="Voice Stress Detector" 
              icon={<Mic size={18} />} 
              active={activeTab === 'voice'} 
              onClick={() => setActiveTab('voice')} 
            />
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'risk' && <RiskPredictorTab />}
          {activeTab === 'skin' && <SkinAnalysisTab />}
          {activeTab === 'voice' && <VoiceStressTab />}
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ 
  label, 
  icon, 
  active, 
  onClick 
}: { 
  label: string; 
  icon: React.ReactNode; 
  active: boolean; 
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 py-4 px-6 font-medium text-sm border-b-2 ${
        active
          ? 'border-blue-500 text-blue-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

const RiskPredictorTab = () => {
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(65);
  const [cycleRegularity, setCycleRegularity] = useState('regular');
  const [familyHistory, setFamilyHistory] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  
  const handleAnalyze = () => {
    // In a real app, this would call an ML model
    setAnalysisComplete(true);
  };
  
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">PCOS/Menopause Risk Predictor</h2>
        <p className="text-sm text-gray-600">
          Our AI model uses XGBoost to analyze your health data and predict potential hormonal health risks.
        </p>
      </div>
      
      {!analysisComplete ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Age</label>
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(parseInt(e.target.value))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(parseInt(e.target.value))}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              />
            </div>
            
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Menstrual Cycle</label>
              <select
                value={cycleRegularity}
                onChange={(e) => setCycleRegularity(e.target.value)}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value="regular">Regular (21-35 days)</option>
                <option value="irregular">Irregular</option>
                <option value="absent">Absent</option>
              </select>
            </div>
            
            <div className="mb-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={familyHistory}
                  onChange={(e) => setFamilyHistory(e.target.checked)}
                  className="rounded border-gray-300 text-blue-600 focus:ring-blue-500 h-4 w-4"
                />
                <span className="ml-2 text-sm text-gray-700">Family history of PCOS or early menopause</span>
              </label>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-blue-800 mb-2">Additional Data Sources</h3>
            <p className="text-sm text-blue-700 mb-4">
              Connect your health apps to improve prediction accuracy:
            </p>
            
            <div className="space-y-3">
              <DataSourceButton label="Connect Apple Health" connected={true} />
              <DataSourceButton label="Connect Fitbit" connected={false} />
              <DataSourceButton label="Connect Clue Period Tracker" connected={false} />
            </div>
            
            <div className="mt-6">
              <button
                onClick={handleAnalyze}
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <BarChart2 size={18} />
                <span>Analyze Risk Factors</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="bg-blue-50 p-4 rounded-lg mb-6">
            <div className="flex items-start gap-3">
              <Activity className="h-6 w-6 text-blue-600 mt-1" />
              <div>
                <h3 className="font-medium text-blue-800">AI Analysis Results</h3>
                <p className="text-sm text-blue-700 mt-1">
                  Based on your data, our XGBoost model has analyzed your hormonal health risk factors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <RiskCard 
              title="PCOS Risk" 
              riskLevel="Low" 
              riskColor="green"
              factors={[
                "Regular menstrual cycles",
                "No significant weight fluctuations",
                "No reported acne or hair issues"
              ]}
              recommendations={[
                "Continue regular exercise",
                "Maintain balanced diet with adequate protein",
                "Annual gynecological check-up"
              ]}
            />
            
            <RiskCard 
              title="Early Menopause Risk" 
              riskLevel="Moderate" 
              riskColor="yellow"
              factors={[
                "Family history reported",
                "Some cycle irregularity in past 6 months",
                "Recent stress levels elevated"
              ]}
              recommendations={[
                "Consider hormone level testing",
                "Increase vitamin D and calcium intake",
                "Stress management techniques",
                "Follow-up with healthcare provider"
              ]}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const SkinAnalysisTab = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Skin & Hair Health Analyzer</h2>
        <p className="text-sm text-gray-600">
          Upload a photo to analyze skin and hair health indicators that may relate to hormonal imbalances.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center">
          <Camera className="h-12 w-12 text-gray-400 mb-4" />
          <h3 className="font-medium text-gray-700 mb-2">Upload a clear selfie</h3>
          <p className="text-sm text-gray-500 text-center mb-4">
            For best results, use natural lighting and no filters
          </p>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            <Upload size={18} />
            <span>Upload Photo</span>
          </button>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="font-medium text-blue-800 mb-4">How It Works</h3>
          
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-medium text-sm">
                1
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Upload a photo</h4>
                <p className="text-sm text-blue-700">Our system works with regular selfies</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-medium text-sm">
                2
              </div>
              <div>
                <h4 className="font-medium text-blue-800">AI analysis</h4>
                <p className="text-sm text-blue-700">Our CNN model analyzes skin texture, hair quality, and more</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center text-blue-800 font-medium text-sm">
                3
              </div>
              <div>
                <h4 className="font-medium text-blue-800">Get insights</h4>
                <p className="text-sm text-blue-700">Receive personalized recommendations based on detected patterns</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 text-sm text-blue-700">
            <p className="font-medium">What we can detect:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Hormonal acne patterns</li>
              <li>Hair thinning indicators</li>
              <li>Skin dryness/oiliness</li>
              <li>Signs of inflammation</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const VoiceStressTab = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Voice-Based Hormonal Stress Detector</h2>
        <p className="text-sm text-gray-600">
          Our AI analyzes voice patterns to detect stress levels that may impact hormonal balance.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-4 shadow-md">
            <Mic className="h-10 w-10 text-blue-600" />
          </div>
          
          <h3 className="font-medium text-blue-800 mb-2">Record Your Voice</h3>
          <p className="text-sm text-blue-700 text-center mb-6">
            Read the following passage for 30 seconds:
            "The sun rises over the mountains, casting a golden glow across the valley..."
          </p>
          
          <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
            <Mic size={18} />
            <span>Start Recording</span>
          </button>
        </div>
        
        <div>
          <h3 className="font-medium mb-4">How Voice Analysis Works</h3>
          
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium mb-2">Spectral Analysis</h4>
              <p className="text-sm text-gray-600">
                Our CNN model analyzes voice spectrograms to detect subtle variations in pitch, tone, and rhythm that indicate stress.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium mb-2">Stress Biomarkers</h4>
              <p className="text-sm text-gray-600">
                Changes in voice patterns correlate with cortisol levels, which directly impact hormonal balance.
              </p>
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h4 className="font-medium mb-2">Personalized Insights</h4>
              <p className="text-sm text-gray-600">
                Receive recommendations for stress management techniques based on your specific voice stress patterns.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DataSourceButton = ({ label, connected }: { label: string; connected: boolean }) => {
  return (
    <button className={`flex items-center justify-between w-full p-2 rounded ${
      connected ? 'bg-blue-100 text-blue-800' : 'bg-white text-gray-700'
    }`}>
      <span className="text-sm">{label}</span>
      {connected ? (
        <span className="text-xs bg-blue-200 text-blue-800 px-2 py-0.5 rounded">Connected</span>
      ) : (
        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">Connect</span>
      )}
    </button>
  );
};

const RiskCard = ({ 
  title, 
  riskLevel, 
  riskColor, 
  factors, 
  recommendations 
}: { 
  title: string; 
  riskLevel: string; 
  riskColor: 'green' | 'yellow' | 'red'; 
  factors: string[]; 
  recommendations: string[];
}) => {
  const getBgColor = () => {
    switch (riskColor) {
      case 'green': return 'bg-green-100';
      case 'yellow': return 'bg-yellow-100';
      case 'red': return 'bg-red-100';
      default: return 'bg-gray-100';
    }
  };
  
  const getTextColor = () => {
    switch (riskColor) {
      case 'green': return 'text-green-800';
      case 'yellow': return 'text-yellow-800';
      case 'red': return 'text-red-800';
      default: return 'text-gray-800';
    }
  };
  
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className={`p-4 ${getBgColor()}`}>
        <div className="flex justify-between items-center">
          <h3 className="font-medium">{title}</h3>
          <span className={`text-sm font-medium ${getTextColor()} px-2 py-1 rounded-full bg-white`}>
            {riskLevel} Risk
          </span>
        </div>
      </div>
      
      <div className="p-4">
        <div className="mb-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Contributing Factors</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {factors.map((factor, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>{factor}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-2">Recommendations</h4>
          <ul className="text-sm text-gray-600 space-y-1">
            {recommendations.map((recommendation, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="text-green-500">✓</span>
                <span>{recommendation}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default HealthTracker;