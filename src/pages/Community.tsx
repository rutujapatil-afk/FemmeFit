import React, { useState } from 'react';
import { Users, Award, MessageSquare, UserPlus, Search, Heart, ThumbsUp, MessageCircle } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('buddies');
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Community & Gamification</h1>
      
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <TabButton 
              label="Workout Buddies" 
              icon={<Users size={18} />} 
              active={activeTab === 'buddies'} 
              onClick={() => setActiveTab('buddies')} 
            />
            <TabButton 
              label="Wellness Challenges" 
              icon={<Award size={18} />} 
              active={activeTab === 'challenges'} 
              onClick={() => setActiveTab('challenges')} 
            />
            <TabButton 
              label="Support Groups" 
              icon={<MessageSquare size={18} />} 
              active={activeTab === 'groups'} 
              onClick={() => setActiveTab('groups')} 
            />
          </nav>
        </div>
        
        <div className="p-6">
          {activeTab === 'buddies' && <WorkoutBuddiesTab />}
          {activeTab === 'challenges' && <ChallengesTab />}
          {activeTab === 'groups' && <SupportGroupsTab />}
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
          ? 'border-pink-500 text-pink-600'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
      }`}
    >
      {icon}
      {label}
    </button>
  );
};

const WorkoutBuddiesTab = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">AI-Powered Workout Buddy Matcher</h2>
        <p className="text-sm text-gray-600">
          Find workout partners with similar fitness goals, schedules, and cycle patterns.
        </p>
      </div>
      
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <div className="bg-pink-50 p-4 rounded-lg mb-6">
            <div className="flex items-center gap-3 mb-3">
              <UserPlus className="h-5 w-5 text-pink-600" />
              <h3 className="font-medium text-pink-800">Find Your Match</h3>
            </div>
            <p className="text-sm text-pink-700 mb-4">
              Our AI analyzes your workout preferences, schedule, and even your menstrual cycle to find compatible workout partners.
            </p>
            <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors">
              Find Matches
            </button>
          </div>
          
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-medium">Filter Matches</h3>
              <Search size={16} className="text-gray-400" />
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Workout Type</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm">
                  <option>All Types</option>
                  <option>Strength Training</option>
                  <option>Cardio</option>
                  <option>Yoga/Pilates</option>
                  <option>Running</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Experience Level</label>
                <select className="w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm">
                  <option>All Levels</option>
                  <option>Beginner</option>
                  <option>Intermediate</option>
                  <option>Advanced</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Cycle Sync</label>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-gray-300 text-pink-600 focus:ring-pink-500 h-4 w-4"
                  />
                  <span className="ml-2 text-sm text-gray-700">Match with similar cycle phases</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-2/3">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <BuddyCard 
              name="Sarah J." 
              age={28}
              location="2 miles away"
              compatibility={92}
              interests={["Strength Training", "HIIT", "Running"]}
              cycleSync={true}
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            />
            
            <BuddyCard 
              name="Michelle T." 
              age={32}
              location="5 miles away"
              compatibility={85}
              interests={["Yoga", "Pilates", "Hiking"]}
              cycleSync={true}
              image="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            />
            
            <BuddyCard 
              name="Priya K." 
              age={30}
              location="3 miles away"
              compatibility={78}
              interests={["Cycling", "Swimming", "Weight Training"]}
              cycleSync={false}
              image="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            />
            
            <BuddyCard 
              name="Alicia M." 
              age={26}
              location="1 mile away"
              compatibility={73}
              interests={["Dance Fitness", "Barre", "Yoga"]}
              cycleSync={false}
              image="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ChallengesTab = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Gamified Wellness Challenges</h2>
        <p className="text-sm text-gray-600">
          Join challenges tailored to your fitness level and hormonal cycle for optimal results.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gradient-to-br from-pink-500 to-purple-600 text-white rounded-lg p-5">
          <div className="flex justify-between items-start">
            <h3 className="font-bold text-xl">Your Stats</h3>
            <div className="bg-white bg-opacity-20 rounded-full p-2">
              <Award className="h-5 w-5" />
            </div>
          </div>
          
          <div className="mt-4 space-y-3">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Current Level</span>
                <span className="font-medium">Silver</span>
              </div>
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div className="bg-white rounded-full h-2 w-3/4"></div>
              </div>
            </div>
            
            <div className="flex justify-between">
              <div>
                <p className="text-xs opacity-75">Points</p>
                <p className="font-bold text-xl">1,250</p>
              </div>
              <div>
                <p className="text-xs opacity-75">Challenges</p>
                <p className="font-bold text-xl">8</p>
              </div>
              <div>
                <p className="text-xs opacity-75">Streak</p>
                <p className="font-bold text-xl">12 days</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="col-span-2 bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="font-medium mb-4">Recommended for You</h3>
          
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <p className="text-sm text-green-600">
                Based on your cycle phase (ovulatory), these challenges are optimized for your current energy levels.
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <p className="text-sm text-blue-600">
                Challenges are adjusted to your fitness level and previous activity data.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ChallengeCard 
          title="30-Day Strength Builder" 
          participants={842}
          difficulty="Intermediate"
          duration="30 days"
          points={500}
          progress={65}
          cycleAdjusted={true}
        />
        
        <ChallengeCard 
          title="Stress-Less Meditation" 
          participants={1253}
          difficulty="Beginner"
          duration="14 days"
          points={300}
          progress={0}
          cycleAdjusted={true}
        />
        
        <ChallengeCard 
          title="Hormone Balance Nutrition" 
          participants={567}
          difficulty="All Levels"
          duration="21 days"
          points={450}
          progress={0}
          cycleAdjusted={true}
        />
      </div>
    </div>
  );
};

const SupportGroupsTab = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">AI-Moderated Support Groups</h2>
        <p className="text-sm text-gray-600">
          Join anonymous, safe spaces to discuss women's health topics with AI moderation for support.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="md:col-span-2">
          <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
            <div className="bg-pink-50 p-4 border-b border-pink-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <MessageSquare className="h-5 w-5 text-pink-600" />
                  <h3 className="font-medium">PCOS Support Circle</h3>
                </div>
                <div className="text-xs bg-white text-pink-600 px-2 py-1 rounded-full">
                  24 members online
                </div>
              </div>
            </div>
            
            <div className="p-4 max-h-80 overflow-y-auto">
              <div className="space-y-4">
                <GroupMessage 
                  username="Anonymous123"
                  message="Has anyone tried inositol supplements for PCOS? My doctor recommended them but I'm curious about others' experiences."
                  time="2 hours ago"
                  likes={5}
                  replies={3}
                />
                
                <GroupMessage 
                  username="HealthSeeker22"
                  message="I've been struggling with irregular cycles for years. Finally got diagnosed with PCOS last month. Any advice for newcomers to managing this?"
                  time="4 hours ago"
                  likes={8}
                  replies={6}
                />
                
                <div className="border-l-2 border-pink-200 pl-4 ml-6 mt-2">
                  <GroupMessage 
                    username="WellnessJourney"
                    message="Welcome to the community! I'd recommend starting with tracking your symptoms, finding a good endocrinologist, and joining our weekly Zoom calls. The resources section has some great starter guides too."
                    time="3 hours ago"
                    likes={4}
                    replies={0}
                  />
                </div>
                
                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 rounded-full bg-blue-200 flex items-center justify-center mt-0.5">
                      <span className="text-xs font-medium text-blue-700">AI</span>
                    </div>
                    <div>
                      <p className="text-sm text-blue-800">
                        <strong>AI Moderator Note:</strong> This is a supportive space for sharing experiences. Remember that personal experiences vary, and medical advice should come from healthcare professionals. I've added some verified resources on PCOS management to the Resources tab.
                      </p>
                    </div>
                  </div>
                </div>
                
                <GroupMessage 
                  username="CycleWarrior"
                  message="Just wanted to share a win - after 6 months of lifestyle changes (diet, exercise, stress management), my cycles are becoming more regular! Don't lose hope, it can get better."
                  time="5 hours ago"
                  likes={12}
                  replies={2}
                />
              </div>
            </div>
            
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-2">
                <textarea
                  placeholder="Share your thoughts (anonymous)..."
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                  rows={2}
                />
                <button className="p-2 rounded-full bg-pink-600 text-white hover:bg-pink-700">
                  <MessageCircle size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="bg-white border border-gray-200 rounded-lg p-5">
            <h3 className="font-medium mb-4">Popular Groups</h3>
            
            <div className="space-y-3">
              <GroupCard 
                name="PCOS Support Circle" 
                members={1245}
                active={true}
              />
              
              <GroupCard 
                name="Menopause & Perimenopause" 
                members={892}
                active={false}
              />
              
              <GroupCard 
                name="Endometriosis Warriors" 
                members={763}
                active={false}
              />
              
              <GroupCard 
                name="Fertility Journey" 
                members={1102}
                active={false}
              />
              
              <GroupCard 
                name="Hormone Balance & Nutrition" 
                members={1567}
                active={false}
              />
            </div>
            
            <button className="w-full mt-4 border border-pink-600 text-pink-600 py-2 rounded-lg hover:bg-pink-50 transition-colors">
              Browse All Groups
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const BuddyCard = ({ 
  name, 
  age, 
  location, 
  compatibility, 
  interests, 
  cycleSync,
  image
}: { 
  name: string; 
  age: number; 
  location: string; 
  compatibility: number; 
  interests: string[]; 
  cycleSync: boolean;
  image: string;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="flex items-center p-4">
        <div className="mr-4">
          <img 
            src={image} 
            alt={name} 
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
        <div>
          <h3 className="font-medium">{name}, {age}</h3>
          <p className="text-xs text-gray-500">{location}</p>
          <div className="flex items-center mt-1">
            <div className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
              {compatibility}% Match
            </div>
            {cycleSync && (
              <div className="ml-2 text-xs bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full flex items-center gap-1">
                <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                <span>Cycle Sync</span>
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="px-4 pb-4">
        <div className="flex flex-wrap gap-1 mb-3">
          {interests.map((interest, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
              {interest}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <button className="text-sm text-pink-600 hover:text-pink-800">View Profile</button>
          <button className="text-sm bg-pink-600 text-white px-3 py-1 rounded hover:bg-pink-700">
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

const ChallengeCard = ({ 
  title, 
  participants, 
  difficulty, 
  duration, 
  points,
  progress,
  cycleAdjusted
}: { 
  title: string; 
  participants: number; 
  difficulty: string; 
  duration: string; 
  points: number;
  progress: number;
  cycleAdjusted: boolean;
}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <div className="p-4">
        <h3 className="font-medium mb-1">{title}</h3>
        <div className="flex items-center text-xs text-gray-500 mb-3">
          <Users size={14} className="mr-1" />
          <span>{participants} participants</span>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
            {difficulty}
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded">
            {duration}
          </span>
          <span className="text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded flex items-center gap-1">
            <Award size={12} />
            {points} pts
          </span>
          {cycleAdjusted && (
            <span className="text-xs bg-pink-100 text-pink-700 px-2 py-0.5 rounded flex items-center gap-1">
              <div className="h-1.5 w-1.5 rounded-full bg-pink-500"></div>
              <span>Cycle Adjusted</span>
            </span>
          )}
        </div>
        
        {progress > 0 ? (
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span>Progress</span>
              <span>{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-pink-600 rounded-full h-2" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        ) : (
          <button className="w-full bg-pink-600 text-white py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm">
            Join Challenge
          </button>
        )}
      </div>
    </div>
  );
};

const GroupCard = ({ 
  name, 
  members, 
  active 
}: { 
  name: string; 
  members: number; 
  active: boolean;
}) => {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg ${
      active ? 'bg-pink-50 border border-pink-200' : 'hover:bg-gray-50'
    }`}>
      <div>
        <h4 className={`font-medium ${active ? 'text-pink-800' : 'text-gray-800'}`}>{name}</h4>
        <p className="text-xs text-gray-500">{members} members</p>
      </div>
      {active ? (
        <div className="h-2 w-2 rounded-full bg-pink-500"></div>
      ) : (
        <button className="text-xs text-pink-600 hover:text-pink-800">Join</button>
      )}
    </div>
  );
};

const GroupMessage = ({ 
  username, 
  message, 
  time, 
  likes, 
  replies 
}: { 
  username: string; 
  message: string; 
  time: string; 
  likes: number; 
  replies: number;
}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-1">
        <div className="h-8 w-8 rounded-full bg-gray-200 flex items-center justify-center">
          <User size={14} className="text-gray-500" />
        </div>
        <div>
          <h4 className="text-sm font-medium">{username}</h4>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      
      <div className="ml-10">
        <p className="text-sm text-gray-800 mb-2">{message}</p>
        
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-pink-600">
            <Heart size={14} />
            <span>{likes}</span>
          </button>
          <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-pink-600">
            <MessageCircle size={14} />
            <span>{replies}</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Community;