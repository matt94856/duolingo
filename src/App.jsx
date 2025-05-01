import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QuizProvider } from './context/QuizContext';
import Layout from './components/Layout';
import LessonPath from './components/LessonPath';
import Quiz from './components/Quiz';
import Leaderboards from './pages/Leaderboards';
import Quests from './pages/Quests';
import Shop from './pages/Shop';
import Profile from './pages/Profile';
import StatsBar from './components/StatsBar';

function App() {
  return (
    <QuizProvider>
      <Router>
        <Layout>
          <div className="h-full flex flex-col">
            {/* Stats Bar */}
            <StatsBar xp={500} streak={1} gems={0} />
            
            {/* Main Content */}
            <Routes>
              <Route path="/" element={<LessonPath />} />
              <Route path="/lesson/:lessonNumber" element={<Quiz />} />
              <Route path="/leaderboards" element={<Leaderboards />} />
              <Route path="/quests" element={<Quests />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </Layout>
      </Router>
    </QuizProvider>
  );
}

export default App; 