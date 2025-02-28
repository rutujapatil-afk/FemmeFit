import React, { useState } from 'react';
import { Apple, Search, ChevronRight, Clock, Utensils, RefreshCw } from 'lucide-react';

const NutritionCoach = () => {
  const [mealPlanGenerated, setMealPlanGenerated] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleGenerateMealPlan = () => {
    // In a real app, this would call an ML model
    setMealPlanGenerated(true);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Smart Nutrition Coach</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h2 className="text-lg font-semibold mb-4">Food Search</h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Search for foods..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            
            <div className="mt-4">
              <h3 className="text-sm font-medium text-gray-500 mb-2">Recent Searches</h3>
              <div className="space-y-2">
                <SearchItem name="Greek Yogurt" calories="100 cal per 100g" />
                <SearchItem name="Quinoa" calories="120 cal per 100g" />
                <SearchItem name="Avocado" calories="160 cal per 100g" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-lg font-semibold mb-4">Hormone-Friendly Foods</h2>
            <p className="text-sm text-gray-600 mb-4">
              Based on your cycle day and health data, these foods may help balance your hormones:
            </p>
            
            <div className="space-y-3">
              <FoodRecommendation 
                name="Fatty Fish" 
                benefit="Rich in omega-3s to reduce inflammation" 
                icon="🐟"
              />
              <FoodRecommendation 
                name="Leafy Greens" 
                benefit="High in magnesium to support hormone production" 
                icon="🥬"
              />
              <FoodRecommendation 
                name="Seeds" 
                benefit="Contain lignans that help balance estrogen" 
                icon="🌱"
              />
              <FoodRecommendation 
                name="Berries" 
                benefit="Antioxidants support overall hormonal health" 
                icon="🍓"
              />
            </div>
            
            <button
              onClick={handleGenerateMealPlan}
              className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
            >
              <Utensils size={18} />
              <span>Generate Meal Plan</span>
            </button>
          </div>
        </div>
        
        <div className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          {mealPlanGenerated ? (
            <>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold">Your Personalized Meal Plan</h2>
                <div className="flex items-center gap-2 text-sm text-green-600">
                  <span>Cycle Day 15</span>
                  <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center">
                    <span className="text-xs">AI</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-green-700">
                  <strong>AI Analysis:</strong> During the ovulatory phase (around day 15), your metabolism is typically higher 
                  and your body can better process complex carbohydrates. We've created a meal plan that supports hormone balance 
                  while providing sustained energy throughout the day.
                </p>
              </div>
              
              <div className="space-y-6">
                <MealSection 
                  title="Breakfast" 
                  meal="Greek Yogurt Parfait with Berries and Seeds" 
                  description="Greek yogurt topped with mixed berries, flaxseeds, and a drizzle of honey. Serve with a slice of whole grain toast."
                  nutrients={["Protein: 20g", "Fiber: 8g", "Healthy Fats: 12g"]}
                />
                
                <MealSection 
                  title="Lunch" 
                  meal="Mediterranean Quinoa Bowl" 
                  description="Quinoa topped with grilled chicken, cucumber, cherry tomatoes, olives, and feta cheese. Dressed with olive oil and lemon juice."
                  nutrients={["Protein: 25g", "Complex Carbs: 35g", "Healthy Fats: 15g"]}
                />
                
                <MealSection 
                  title="Dinner" 
                  meal="Baked Salmon with Roasted Vegetables" 
                  description="Omega-3 rich salmon fillet with roasted sweet potatoes, Brussels sprouts, and a side of steamed asparagus."
                  nutrients={["Protein: 28g", "Fiber: 10g", "Omega-3s: 2.5g"]}
                />
                
                <MealSection 
                  title="Snacks" 
                  meal="Apple with Almond Butter & Herbal Tea" 
                  description="Sliced apple with 1 tbsp almond butter for afternoon snack. Chamomile or peppermint tea in the evening to support digestion."
                  nutrients={["Balanced sugars", "Healthy fats", "Calming herbs"]}
                />
              </div>
              
              <div className="mt-6 flex justify-between">
                <button className="flex items-center gap-2 text-green-600 hover:text-green-800">
                  <RefreshCw size={18} />
                  <span>Regenerate Plan</span>
                </button>
                <button className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700">
                  <ChevronRight size={18} />
                  <span>Save Meal Plan</span>
                </button>
              </div>
            </>
          ) : (
            <div className="h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Apple size={24} className="text-green-600" />
              </div>
              <h3 className="text-lg font-medium mb-2">No Meal Plan Generated Yet</h3>
              <p className="text-gray-500 max-w-md mb-6">
                Generate a personalized meal plan based on your hormonal cycle, nutritional needs, and preferences.
              </p>
              <p className="text-sm text-green-600">
                Our AI analyzes your cycle data to recommend foods that support hormone balance
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SearchItem = ({ name, calories }: { name: string; calories: string }) => {
  return (
    <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg cursor-pointer">
      <div className="flex items-center gap-2">
        <Search size={16} className="text-gray-400" />
        <span>{name}</span>
      </div>
      <span className="text-xs text-gray-500">{calories}</span>
    </div>
  );
};

const FoodRecommendation = ({ 
  name, 
  benefit, 
  icon 
}: { 
  name: string; 
  benefit: string; 
  icon: string;
}) => {
  return (
    <div className="flex items-start gap-3">
      <div className="text-xl">{icon}</div>
      <div>
        <h3 className="text-sm font-medium">{name}</h3>
        <p className="text-xs text-gray-600">{benefit}</p>
      </div>
    </div>
  );
};

const MealSection = ({ 
  title, 
  meal, 
  description, 
  nutrients 
}: { 
  title: string; 
  meal: string; 
  description: string; 
  nutrients: string[];
}) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4">
      <div className="flex items-center gap-2 mb-2">
        <Clock size={16} className="text-green-500" />
        <h3 className="font-medium">{title}</h3>
      </div>
      
      <h4 className="font-medium text-green-700 mb-2">{meal}</h4>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {nutrients.map((nutrient, index) => (
          <span key={index} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
            {nutrient}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NutritionCoach;