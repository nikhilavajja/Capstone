import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import LandingPage from './components/LandingPage';
import SkinAssessment from './components/SkinAssessment';
import ResultsPage from './components/ResultsPage';
import EducationHub from './components/EducationHub';
import RoutineTracker from './components/RoutineTracker';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');
  const [skinTypeResult, setSkinTypeResult] = useState(null);

  const handleAssessmentComplete = (result) => {
    setSkinTypeResult(result);
    setCurrentPage('results');
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onStartAssessment={() => setCurrentPage('assessment')} />;
      case 'assessment':
        return <SkinAssessment onComplete={handleAssessmentComplete} onBack={() => setCurrentPage('landing')} />;
      case 'results':
        return <ResultsPage result={skinTypeResult} onRetakeQuiz={() => setCurrentPage('assessment')} />;
      case 'education':
        return <EducationHub onBack={() => setCurrentPage('landing')} />;
      case 'tracker':
        return <RoutineTracker onBack={() => setCurrentPage('landing')} />;
      default:
        return <LandingPage onStartAssessment={() => setCurrentPage('assessment')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                SkinWise
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <button
                onClick={() => setCurrentPage('landing')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'landing' ? 'text-rose-600' : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentPage('assessment')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'assessment' ? 'text-rose-600' : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                Assessment
              </button>
              <button
                onClick={() => setCurrentPage('education')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'education' ? 'text-rose-600' : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                Education
              </button>
              <button
                onClick={() => setCurrentPage('tracker')}
                className={`text-sm font-medium transition-colors ${
                  currentPage === 'tracker' ? 'text-rose-600' : 'text-gray-600 hover:text-rose-600'
                }`}
              >
                Tracker
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;