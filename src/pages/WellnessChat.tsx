import React, { useState } from 'react';
import { MessageCircle, Send, Mic, Info, User } from 'lucide-react';

const WellnessChat = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'ai',
      text: "Hello! I'm your AI wellness assistant. How can I help you today with your fitness, health, or mental well-being?",
      timestamp: new Date().toISOString(),
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      sender: 'user',
      text: inputText,
      timestamp: new Date().toISOString(),
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    
    // Simulate AI response
    setTimeout(() => {
      const aiResponses = [
        "Based on your menstrual cycle data, this might be a good week for high-intensity workouts. Your energy levels tend to peak during this phase.",
        "I notice you've been reporting higher stress levels. Have you tried the 4-7-8 breathing technique? It can help regulate your nervous system.",
        "Your sleep data shows some disruption. Hormonal fluctuations can affect sleep quality. Would you like some tips for better sleep during this phase of your cycle?",
        "Remember to stay hydrated today! Water intake is especially important during the luteal phase to help with bloating and water retention.",
      ];
      
      const randomResponse = aiResponses[Math.floor(Math.random() * aiResponses.length)];
      
      const aiMessage: Message = {
        id: messages.length + 2,
        sender: 'ai',
        text: randomResponse,
        timestamp: new Date().toISOString(),
      };
      
      setMessages(prevMessages => [...prevMessages, aiMessage]);
    }, 1000);
  };
  
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };
  
  const toggleRecording = () => {
    setIsRecording(!isRecording);
    
    // Simulate voice recording and analysis
    if (!isRecording) {
      setTimeout(() => {
        setIsRecording(false);
        setInputText("I've been feeling more tired than usual this week and having trouble sleeping.");
      }, 3000);
    }
  };
  
  return (
    <div className="p-6 h-full flex flex-col">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">NLP-Based Wellness Chatbot</h1>
        <button className="flex items-center gap-2 text-sm text-purple-600 hover:text-purple-800">
          <Info size={16} />
          <span>How it works</span>
        </button>
      </div>
      
      <div className="flex-1 bg-white rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="bg-purple-50 p-4 border-b border-purple-100">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-purple-200 flex items-center justify-center">
              <MessageCircle className="h-5 w-5 text-purple-700" />
            </div>
            <div>
              <h2 className="font-medium">FemmeFit AI Assistant</h2>
              <p className="text-xs text-purple-700">Powered by advanced NLP for women's health</p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </div>
        
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <button
              onClick={toggleRecording}
              className={`p-2 rounded-full ${
                isRecording ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <Mic size={20} />
            </button>
            
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message or use voice input..."
              className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              rows={1}
            />
            
            <button
              onClick={handleSendMessage}
              disabled={!inputText.trim()}
              className={`p-2 rounded-full ${
                inputText.trim()
                  ? 'bg-purple-600 text-white hover:bg-purple-700'
                  : 'bg-gray-100 text-gray-400'
              }`}
            >
              <Send size={20} />
            </button>
          </div>
          
          {isRecording && (
            <div className="mt-2 text-xs text-center text-purple-600">
              Listening... (Voice tone analysis active)
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <SuggestionCard 
          title="Fitness" 
          suggestion="How should I adjust my workouts during my period?" 
          onClick={() => setInputText("How should I adjust my workouts during my period?")}
        />
        <SuggestionCard 
          title="Nutrition" 
          suggestion="What foods help with hormonal balance?" 
          onClick={() => setInputText("What foods help with hormonal balance?")}
        />
        <SuggestionCard 
          title="Mental Health" 
          suggestion="Tips for managing PMS mood swings?" 
          onClick={() => setInputText("Tips for managing PMS mood swings?")}
        />
      </div>
    </div>
  );
};

interface Message {
  id: number;
  sender: 'user' | 'ai';
  text: string;
  timestamp: string;
}

const ChatMessage = ({ message }: { message: Message }) => {
  const isAi = message.sender === 'ai';
  
  return (
    <div className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}>
      <div className={`max-w-[75%] rounded-lg p-3 ${
        isAi ? 'bg-purple-50 text-gray-800' : 'bg-purple-600 text-white'
      }`}>
        {isAi && (
          <div className="flex items-center gap-2 mb-1">
            <MessageCircle size={14} className="text-purple-600" />
            <span className="text-xs font-medium text-purple-600">FemmeFit AI</span>
          </div>
        )}
        
        <p className="text-sm">{message.text}</p>
        
        <div className={`text-xs mt-1 text-right ${isAi ? 'text-gray-500' : 'text-purple-200'}`}>
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      </div>
    </div>
  );
};

const SuggestionCard = ({ 
  title, 
  suggestion, 
  onClick 
}: { 
  title: string; 
  suggestion: string; 
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className="bg-white p-3 rounded-lg border border-gray-200 hover:border-purple-300 hover:shadow-sm text-left transition-all"
    >
      <h3 className="text-xs font-medium text-gray-500 mb-1">{title}</h3>
      <p className="text-sm text-gray-800">{suggestion}</p>
    </button>
  );
};

export default WellnessChat;