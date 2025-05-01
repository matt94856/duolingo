import React from 'react';
import { useQuiz } from '../context/QuizContext';

const Leaderboards = () => {
  const { xp } = useQuiz();
  
  const leaderboardData = [
    { name: "You", xp: xp, rank: 3 },
    { name: "Sarah M.", xp: xp + 250, rank: 1 },
    { name: "John D.", xp: xp + 100, rank: 2 },
    { name: "Mike R.", xp: xp - 50, rank: 4 },
    { name: "Lisa K.", xp: xp - 150, rank: 5 },
  ].sort((a, b) => b.xp - a.xp);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Leaderboards</h1>
      <div className="bg-white rounded-xl shadow-sm">
        {leaderboardData.map((user, index) => (
          <div
            key={user.name}
            className={`flex items-center p-4 border-b last:border-b-0 ${
              user.name === "You" ? "bg-[#F7F7F7]" : ""
            }`}
          >
            <div className="w-8 font-bold text-gray-500">{index + 1}</div>
            <div className="flex-1">
              <div className="font-bold">{user.name}</div>
              <div className="text-sm text-gray-500">Level {Math.floor(user.xp / 100)}</div>
            </div>
            <div className="font-bold text-[#1CB0F6]">{user.xp} XP</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboards; 
