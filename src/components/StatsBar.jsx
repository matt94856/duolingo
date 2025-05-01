import React from 'react';

const StatsBar = ({ xp, streak, gems }) => {
  return (
    <div className="flex items-center space-x-4">
      {/* Language Flag */}
      <div className="flex items-center">
        <img
          src="/spanish-flag.svg"
          alt="Spanish"
          className="w-6 h-6 rounded-sm"
        />
      </div>

      {/* XP */}
      <div className="flex items-center bg-[#F7F7F7] rounded-xl px-3 py-1">
        <svg className="w-5 h-5 mr-1" fill="#FFC800" viewBox="0 0 24 24">
          <path d="M3.55 19.09l1.41 1.41 1.79-1.8-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm14-4.15L9.43 13.42 8.01 12l5.57-5.57L12 4.85l-7.72 7.72 4.42 4.43L16.15 9.7 14.73 8.3zM21 11h2v2h-2zm-4.6 9.99l1.79 1.8 1.41-1.41-1.8-1.79z"/>
        </svg>
        <span className="font-bold text-sm">500</span>
      </div>

      {/* Streak */}
      <div className="flex items-center bg-[#F7F7F7] rounded-xl px-3 py-1">
        <svg className="w-5 h-5 mr-1" fill="#FF9600" viewBox="0 0 24 24">
          <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
        </svg>
        <span className="font-bold text-sm">1</span>
      </div>

      {/* Gems */}
      <div className="flex items-center bg-[#F7F7F7] rounded-xl px-3 py-1">
        <svg className="w-5 h-5 mr-1" fill="#FF4B4B" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
        <span className="font-bold text-sm">0</span>
      </div>

      {/* Timer */}
      <div className="flex items-center bg-[#F7F7F7] rounded-xl px-3 py-1">
        <svg className="w-5 h-5 mr-1" fill="#FF4B4B" viewBox="0 0 24 24">
          <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
          <path d="M12.5 7H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
        </svg>
        <span className="font-bold text-sm">0:23:58</span>
      </div>
    </div>
  );
};

export default StatsBar; 