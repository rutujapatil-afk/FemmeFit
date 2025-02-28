import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Dumbbell, 
  Apple, 
  Activity, 
  MessageCircle, 
  Users, 
  Shield, 
  LogOut,
  Heart
} from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-purple-900 text-white h-full flex flex-col">
      <div className="p-5 flex items-center gap-3">
        <Heart className="h-8 w-8 text-pink-400" />
        <h1 className="text-xl font-bold">AI FemmeFit</h1>
      </div>
      
      <div className="flex-1 px-3">
        <NavItem to="/" icon={<Home size={20} />} label="Dashboard" />
        <NavItem to="/fitness" icon={<Dumbbell size={20} />} label="Fitness Planner" />
        <NavItem to="/nutrition" icon={<Apple size={20} />} label="Nutrition Coach" />
        <NavItem to="/health-tracker" icon={<Activity size={20} />} label="Health Tracker" />
        <NavItem to="/wellness-chat" icon={<MessageCircle size={20} />} label="Wellness Chat" />
        <NavItem to="/community" icon={<Users size={20} />} label="Community" />
        <NavItem to="/safety" icon={<Shield size={20} />} label="Safety Features" />
      </div>
      
      <div className="p-4 border-t border-purple-800">
        <div className="flex items-center gap-3 mb-4">
          <div className="h-10 w-10 rounded-full bg-purple-700 flex items-center justify-center">
            <span className="font-semibold">JS</span>
          </div>
          <div>
            <p className="font-medium">Jane Smith</p>
            <p className="text-xs text-purple-300">Premium Member</p>
          </div>
        </div>
        <button className="flex items-center gap-2 text-sm text-purple-300 hover:text-white">
          <LogOut size={18} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

const NavItem = ({ to, icon, label }: { to: string; icon: React.ReactNode; label: string }) => {
  return (
    <NavLink 
      to={to} 
      className={({ isActive }) => 
        `flex items-center gap-3 p-3 rounded-lg transition-colors ${
          isActive 
            ? 'bg-purple-700 text-white' 
            : 'text-purple-300 hover:bg-purple-800 hover:text-white'
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
};

export default Sidebar;