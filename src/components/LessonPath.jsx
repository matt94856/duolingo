import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useQuiz } from '../context/QuizContext';
import { lessons } from '../data/vocab';

const LessonPath = () => {
  const navigate = useNavigate();
  const { progress, currentLesson } = useQuiz();
  
  const handleLessonClick = (lessonNumber) => {
    // Only allow access to completed lessons or the next available lesson
    if (lessonNumber === 1 || progress[`lesson${lessonNumber - 1}`]) {
      navigate(`/lesson/${lessonNumber}`);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-xl mx-auto p-8">
      <div className="relative w-full mb-8">
        {/* Path Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-[#E5E5E5] -translate-y-1/2" />
        
        {/* Lesson Points */}
        <div className="relative flex justify-between items-center">
          {Object.entries(lessons).map(([lessonNumber, lesson]) => {
            const isCompleted = progress[`lesson${lessonNumber}`];
            const isAvailable = lessonNumber === '1' || progress[`lesson${Number(lessonNumber) - 1}`];
            const isCurrent = Number(lessonNumber) === currentLesson;
            
            return (
              <button
                key={lessonNumber}
                onClick={() => handleLessonClick(Number(lessonNumber))}
                disabled={!isAvailable}
                className={`relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isCompleted
                    ? 'bg-[#58CC02] text-white shadow-lg'
                    : isAvailable
                    ? 'bg-white border-4 border-[#58CC02] hover:border-[#46a001]'
                    : 'bg-[#E5E5E5] cursor-not-allowed'
                }`}
              >
                {isCompleted ? (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                  </svg>
                ) : (
                  <span className="font-bold text-lg">
                    {lessonNumber}
                  </span>
                )}
                
                {/* Lesson Title Tooltip */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                  <span className="text-sm font-bold">
                    {lesson.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mascot */}
      <div className="mt-8">
        <img 
          src="/duo-mascot.svg" 
          alt="Duo" 
          className="w-24 h-24 animate-bounce-slow"
        />
      </div>

      {/* Daily Quests Card */}
      <div className="mt-8 w-full max-w-sm bg-white rounded-xl shadow-sm border border-gray-200 p-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="font-bold text-gray-700">Daily Quests</h3>
          <button 
            onClick={() => navigate('/quests')}
            className="text-[#1CB0F6] text-sm font-bold"
          >
            VIEW ALL
          </button>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="p-2 bg-[#FFF4CC] rounded-lg">
            <svg className="w-6 h-6" fill="#FFC800" viewBox="0 0 24 24">
              <path d="M3.55 19.09l1.41 1.41 1.79-1.8-1.41-1.41zM11 20h2v3h-2zM1 11h3v2H1zm14-4.15L9.43 13.42 8.01 12l5.57-5.57L12 4.85l-7.72 7.72 4.42 4.43L16.15 9.7 14.73 8.3zM21 11h2v2h-2zm-4.6 9.99l1.79 1.8 1.41-1.41-1.8-1.79z"/>
            </svg>
          </div>
          <div className="flex-1">
            <div className="text-sm font-bold mb-1">Earn 10 XP</div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-[#FFC800] rounded-full transition-all duration-300"
                style={{ width: `${Math.min((currentLesson * 10) / 100, 100)}%` }}
              />
            </div>
          </div>
          <div className="text-sm text-gray-500">
            {currentLesson * 10} / 100
          </div>
        </div>
      </div>
    </div>
  );
};

export default LessonPath; 