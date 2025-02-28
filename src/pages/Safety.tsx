import React, { useState } from 'react';
import { Shield, Phone, MapPin, Bell, Users, Clock, AlertTriangle } from 'lucide-react';

const Safety = () => {
  const [emergencyContacts, setEmergencyContacts] = useState([
    { id: 1, name: 'Emma Johnson', phone: '(555) 123-4567', relation: 'Sister' },
    { id: 2, name: 'Michael Smith', phone: '(555) 987-6543', relation: 'Friend' }
  ]);
  
  const [safeRouteActive, setSafeRouteActive] = useState(false);
  
  const toggleSafeRoute = () => {
    setSafeRouteActive(!safeRouteActive);
  };
  
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Safety Features</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6">
            <div className="bg-red-50 p-4 border-b border-red-100">
              <div className="flex items-center gap-3">
                <Shield className="h-6 w-6 text-red-600" />
                <h2 className="text-lg font-semibold text-red-800">SOS Emergency Button</h2>
              </div>
            </div>
            
            <div className="p-6 flex flex-col items-center justify-center">
              <button className="h-32 w-32 rounded-full bg-red-100 flex items-center justify-center border-8 border-red-200 hover:bg-red-200 transition-colors">
                <AlertTriangle className="h-16 w-16 text-red-600" />
              </button>
              <p className="mt-4 text-red-700 font-semibold">Press to send an emergency alert</p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-800">Safe Route Tracking</h2>
            </div>
            <p className="text-gray-600 mb-4">Activate to share your live location with emergency contacts.</p>
            <button onClick={toggleSafeRoute} className={`px-4 py-2 rounded-md text-white ${safeRouteActive ? 'bg-green-600' : 'bg-gray-500'}`}>
              {safeRouteActive ? 'Tracking Active' : 'Activate Tracking'}
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm overflow-hidden p-6">
          <div className="flex items-center gap-3 mb-4">
            <Users className="h-6 w-6 text-purple-600" />
            <h2 className="text-lg font-semibold text-gray-800">Emergency Contacts</h2>
          </div>
          <ul className="space-y-4">
            {emergencyContacts.map(contact => (
              <li key={contact.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-md border border-gray-200">
                <div>
                  <p className="text-gray-800 font-semibold">{contact.name}</p>
                  <p className="text-gray-600 text-sm">{contact.relation}</p>
                </div>
                <a href={`tel:${contact.phone}`} className="text-blue-600 font-semibold">Call</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Safety;
