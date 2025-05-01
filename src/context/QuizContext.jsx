import React, { createContext, useContext, useState } from 'react';

const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  const [currentLesson, setCurrentLesson] = useState(1);
  const [xp, setXp] = useState(500);
  const [streak, setStreak] = useState(1);
  const [gems, setGems] = useState(0);
  const [progress, setProgress] = useState({
    lesson1: false,
    lesson2: false,
    lesson3: false,
    lesson4: false,
    lesson5: false
  });

  const updateProgress = (lessonNumber) => {
    setProgress(prev => ({
      ...prev,
      [`lesson${lessonNumber}`]: true
    }));
    setXp(prev => prev + 10);
  };

  const value = {
    currentLesson,
    setCurrentLesson,
    xp,
    setXp,
    streak,
    setStreak,
    gems,
    setGems,
    progress,
    updateProgress
  };

  return (
    <QuizContext.Provider value={value}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error('useQuiz must be used within a QuizProvider');
  }
  return context;
}; 
