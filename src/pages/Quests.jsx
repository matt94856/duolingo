import React from 'react';
import { useQuiz } from '../context/QuizContext';

const Quests = () => {
  const { xp } = useQuiz();
  
  const quests = [
    {
      title: "Early Bird",
      description: "Complete a lesson before 9 AM",
      reward: "20 XP",
      progress: 0,
      total: 1,
      icon: "🌅"
    },
    {
      title: "Perfect Lesson",
      description: "Complete a lesson without making mistakes",
      reward: "15 XP",
      progress: 0,
      total: 1,
      icon: "⭐"
    },
    {
      title: "Word Collector",
      description: "Learn 10 new words",
      reward: "30 XP",
      progress: Math.min(xp / 50, 10),
      total: 10,
      icon: "📚"
    },
    {
      title: "Streak Master",
      description: "Maintain a 3-day streak",
      reward: "50 XP",
      progress: 1,
      total: 3,
      icon: "🔥"
    }
  ];

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Daily Quests</h1>
      <div className="grid gap-4">
        {quests.map((quest, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-[#FFF4CC] rounded-lg flex items-center justify-center text-2xl mr-4">
                {quest.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-bold">{quest.title}</h3>
                <p className="text-sm text-gray-600">{quest.description}</p>
              </div>
              <div className="text-[#1CB0F6] font-bold">{quest.reward}</div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div
                className="h-full bg-[#58CC02] rounded-full transition-all duration-300"
                style={{ width: `${(quest.progress / quest.total) * 100}%` }}
              />
            </div>
            <div className="text-right text-sm text-gray-500 mt-1">
              {quest.progress} / {quest.total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quests; 