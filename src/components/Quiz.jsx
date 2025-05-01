import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { lessons } from '../data/vocab';
import { useQuiz } from '../context/QuizContext';

const Quiz = () => {
  const { lessonNumber } = useParams();
  const navigate = useNavigate();
  const { updateProgress } = useQuiz();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  
  const lesson = lessons[lessonNumber];
  
  // Handle invalid lesson number
  if (!lesson) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <h2 className="text-2xl font-bold mb-4">Lesson not found</h2>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-[#58CC02] text-white rounded-xl font-bold hover:bg-[#46a001]"
        >
          Return to Lessons
        </button>
      </div>
    );
  }
  
  const currentWord = lesson.words[currentQuestion];
  
  const generateOptions = () => {
    const options = [currentWord.english];
    const otherWords = Object.values(lessons)
      .flatMap(l => l.words)
      .filter(w => w.english !== currentWord.english)
      .map(w => w.english);
    
    while (options.length < 4) {
      const randomWord = otherWords[Math.floor(Math.random() * otherWords.length)];
      if (!options.includes(randomWord)) {
        options.push(randomWord);
      }
    }
    
    return options.sort(() => Math.random() - 0.5);
  };
  
  const [options, setOptions] = useState(generateOptions());
  
  useEffect(() => {
    setOptions(generateOptions());
  }, [currentQuestion]);
  
  const handleAnswer = (answer) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    const correct = answer === currentWord.english;
    setIsCorrect(correct);
    
    if (correct) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      setSelectedAnswer(null);
      setIsCorrect(null);
      
      if (currentQuestion < lesson.words.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        setShowResult(true);
        updateProgress(Number(lessonNumber));
      }
    }, 1500);
  };
  
  if (showResult) {
    return (
      <div className="flex flex-col items-center justify-center p-8">
        <div className="text-4xl mb-4">🎉</div>
        <h2 className="text-2xl font-bold mb-4">Lesson Complete!</h2>
        <p className="text-lg mb-6">You scored {score} out of {lesson.words.length}</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-[#58CC02] text-white rounded-xl font-bold hover:bg-[#46a001]"
        >
          Continue
        </button>
      </div>
    );
  }
  
  return (
    <div className="flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-2xl">
        <div className="mb-8">
          <div className="h-2 bg-gray-200 rounded-full">
            <div
              className="h-full bg-[#58CC02] rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestion + 1) / lesson.words.length) * 100}%` }}
            />
          </div>
        </div>
        
        <h2 className="text-xl font-bold mb-6">Translate this to English:</h2>
        <div className="text-3xl font-bold mb-8 text-center">{currentWord.spanish}</div>
        
        <div className="grid grid-cols-2 gap-4">
          {options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={selectedAnswer !== null}
              className={`p-4 rounded-xl font-bold text-left transition-all duration-300 ${
                selectedAnswer === option
                  ? isCorrect
                    ? 'bg-[#58CC02] text-white'
                    : 'bg-[#FF4B4B] text-white'
                  : 'bg-white border-2 border-gray-200 hover:border-[#1CB0F6]'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Quiz; 