import React from 'react';
import { useQuiz } from '../context/QuizContext';

const Shop = () => {
  const { gems } = useQuiz();
  
  const items = [
    {
      name: "Streak Freeze",
      description: "Maintain your streak even if you miss a day",
      price: 10,
      icon: "❄️"
    },
    {
      name: "Double XP",
      description: "Double XP for all lessons for 30 minutes",
      price: 20,
      icon: "⚡"
    },
    {
      name: "Bonus Hearts",
      description: "Get 5 extra hearts",
      price: 15,
      icon: "❤️"
    },
    {
      name: "Timer Boost",
      description: "Get 15 extra seconds per question",
      price: 12,
      icon: "⏰"
    }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Shop</h1>
        <div className="flex items-center bg-[#F7F7F7] rounded-xl px-4 py-2">
          <svg className="w-6 h-6 mr-2" fill="#FF4B4B" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="font-bold">{gems}</span>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-[#FFF4CC] rounded-lg flex items-center justify-center text-2xl mr-4">
                {item.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
              <button
                className={`px-4 py-2 rounded-xl font-bold ${
                  gems >= item.price
                    ? 'bg-[#58CC02] text-white hover:bg-[#46a001]'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                disabled={gems < item.price}
              >
                {item.price} 💎
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop; 