import React from 'react';
import { useQuiz } from '../context/QuizContext';

const Profile = () => {
  const { xp, streak, gems } = useQuiz();
  
  const stats = [
    {
      label: "Current Streak",
      value: streak,
      icon: "🔥"
    },
    {
      label: "Total XP",
      value: xp,
      icon: "⭐"
    },
    {
      label: "Gems",
      value: gems,
      icon: "💎"
    },
    {
      label: "Words Learned",
      value: Math.floor(xp / 10),
      icon: "📚"
    }
  ];

  const achievements = [
    {
      name: "First Lesson",
      description: "Complete your first lesson",
      earned: true,
      icon: "🎯"
    },
    {
      name: "On Fire",
      description: "Reach a 3-day streak",
      earned: streak >= 3,
      icon: "🔥"
    },
    {
      name: "Word Master",
      description: "Learn 100 words",
      earned: (xp / 10) >= 100,
      icon: "👑"
    },
    {
      name: "Perfect Score",
      description: "Complete a lesson without mistakes",
      earned: false,
      icon: "⭐"
    }
  ];

  return (
    <div className="p-8">
      <div className="flex items-center mb-8">
        <div className="w-20 h-20 bg-[#58CC02] rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">
          {xp > 0 ? xp.toString()[0].toUpperCase() : "?"}
        </div>
        <div>
          <h1 className="text-2xl font-bold">Your Profile</h1>
          <p className="text-gray-600">Level {Math.floor(xp / 100)}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-4 shadow-sm">
            <div className="text-2xl mb-2">{stat.icon}</div>
            <div className="font-bold">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold mb-4">Achievements</h2>
      <div className="grid gap-4">
        {achievements.map((achievement, index) => (
          <div key={index} className={`bg-white rounded-xl p-4 shadow-sm ${!achievement.earned && 'opacity-50'}`}>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-[#FFF4CC] rounded-lg flex items-center justify-center text-2xl mr-4">
                {achievement.icon}
              </div>
              <div>
                <h3 className="font-bold">{achievement.name}</h3>
                <p className="text-sm text-gray-600">{achievement.description}</p>
              </div>
              {achievement.earned && (
                <div className="ml-auto text-[#58CC02]">✓</div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile; 