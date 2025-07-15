import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, RotateCcw, Trophy, Clock, CheckCircle, XCircle } from 'lucide-react';

const MultiThreadingQuiz = ({ questions, title, subTitle }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1200); // 20 minutes
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    let interval = null;
    if (quizStarted && timeLeft > 0 && !showResults) {
      interval = setInterval(() => {
        setTimeLeft(time => {
          if (time <= 1) {
            setShowResults(true);
            return 0;
          }
          return time - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [quizStarted, timeLeft, showResults]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setUserAnswers({ ...userAnswers, [currentQuestion]: answerIndex });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(userAnswers[currentQuestion + 1] || null);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedAnswer(userAnswers[currentQuestion - 1] || null);
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setUserAnswers({});
    setShowResults(false);
    setTimeLeft(1800);
    setQuizStarted(false);
  };

  const calculateScore = () => {
    return Object.keys(userAnswers).filter(
      questionIndex => userAnswers[questionIndex] === questions[questionIndex].correct
    ).length;
  };

  const getScoreColor = (score, total) => {
    const percentage = (score / total) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 max-w-2xl w-full border border-white/20">
          <div className="text-center">
            <Trophy className="mx-auto h-16 w-16 text-yellow-400 mb-6" />
            <h1 className="text-4xl font-bold text-white mb-4">
              {title}
            </h1>
            <p className="text-white/80 mb-6 text-lg">
              {subTitle}
            </p>
            <div className="bg-white/10 rounded-lg p-4 mb-6">
              <h2 className="text-xl font-semibold text-white mb-3">Quiz Details:</h2>
              <ul className="text-white/80 space-y-2 text-left">
                <li>• {questions?.length} comprehensive questions</li>
                <li>• Covers all {questions[0].category?.split(" ")[0]} topics</li>
                <li>• Code output prediction questions</li>
                <li>• 20 minutes time limit</li>
                <li>• Instant feedback with explanations</li>
              </ul>
            </div>
            <button
              onClick={() => setQuizStarted(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold text-lg transition-all duration-200 transform hover:scale-105"
            >
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const percentage = Math.round((score / questions.length) * 100);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-6">
            <div className="text-center mb-8">
              <Trophy className={`mx-auto h-16 w-16 mb-4 ${percentage >= 80 ? 'text-yellow-400' : percentage >= 60 ? 'text-orange-400' : 'text-gray-400'}`} />
              <h1 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h1>
              <p className={`text-2xl font-semibold ${getScoreColor(score, questions.length)}`}>
                Score: {score}/{questions.length} ({percentage}%)
              </p>
            </div>

            <button
              onClick={restartQuiz}
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 flex items-center justify-center gap-2"
            >
              <RotateCcw className="h-5 w-5" />
              Retake Quiz
            </button>
          </div>

          <div className="space-y-4">
            {questions.map((question, index) => {
              const userAnswer = userAnswers[index];
              const isCorrect = userAnswer === question.correct;

              return (
                <div key={question.id} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-start gap-3 mb-4">
                    {isCorrect ? (
                      <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    ) : (
                      <XCircle className="h-6 w-6 text-red-400 mt-1 flex-shrink-0" />
                    )}
                    <div className="flex-grow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-medium text-blue-300 bg-blue-900/50 px-2 py-1 rounded">
                          {question.category}
                        </span>
                        <span className="text-white/60">Question {index + 1}</span>
                      </div>
                      <h3 className="text-white font-semibold mb-3">{question.question}</h3>

                      {question.code && (
                        <div className="bg-gray-900/50 rounded-lg p-3 mb-3 border border-gray-600">
                          <pre className="text-sm text-green-300 overflow-x-auto whitespace-pre-wrap">
                            {question.code}
                          </pre>
                        </div>
                      )}

                      <div className="grid grid-cols-1 gap-2 mb-3">
                        {question.options.map((option, optionIndex) => {
                          const isUserAnswer = userAnswer === optionIndex;
                          const isCorrectAnswer = question.correct === optionIndex;

                          let bgClass = 'bg-white/5';
                          if (isCorrectAnswer) {
                            bgClass = 'bg-green-900/50 border-green-400';
                          } else if (isUserAnswer && !isCorrectAnswer) {
                            bgClass = 'bg-red-900/50 border-red-400';
                          }

                          return (
                            <div
                              key={optionIndex}
                              className={`p-3 rounded-lg border ${bgClass} ${isCorrectAnswer || (isUserAnswer && !isCorrectAnswer) ? 'border' : 'border-transparent'}`}
                            >
                              <div className="flex items-center gap-2">
                                <span className="text-white/70">{String.fromCharCode(65 + optionIndex)}.</span>
                                <span className="text-white/90 whitespace-pre-wrap">{option}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-blue-900/30 rounded-lg p-3 border-l-4 border-blue-400">
                        <p className="text-blue-100 text-sm">
                          <strong>Explanation:</strong> {question.explanation}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-4 mb-2 border border-white/20">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold text-white">{title}</h1>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <Clock className="h-5 w-5" />
                <span className={timeLeft < 300 ? 'text-red-400' : 'text-white'}>{formatTime(timeLeft)}</span>
              </div>
              <span className="text-white/70">
                Question {currentQuestion + 1} of {questions.length}
              </span>
            </div>
          </div>

          <div className="w-full bg-white/20 rounded-full h-2 mb-2">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-white/60 text-sm">{Math.round(progress)}% Complete</p>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 mb-6">
          <div className="mb-6">

            <h2 className="text-xl font-bold text-white mb-4 flex justify-between items-center mb-4" >{currentQ.question}
              <span className="ml-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                {currentQ.category}
              </span>

            </h2>

            {currentQ.code && (
              <div className="bg-gray-900/80 rounded-lg p-4 mb-6 border border-gray-600">
                <pre className="text-sm text-green-300 overflow-x-auto whitespace-pre-wrap font-mono">
                  {currentQ.code}
                </pre>
              </div>
            )}
          </div>

          <div className="space-y-3 mb-8">
            {currentQ.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded-lg border-2 transition-all duration-200 text-left ${selectedAnswer === index
                    ? 'border-blue-400 bg-blue-900/50 text-white'
                    : 'border-white/20 bg-white/5 text-white/80 hover:border-white/40 hover:bg-white/10'
                  }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-current flex items-center justify-center text-sm font-medium">
                    {String.fromCharCode(65 + index)}
                  </span>
                  <span className="whitespace-pre-wrap">{option}</span>
                </div>
              </button>
            ))}
          </div>

          <div className="flex justify-between items-center">
            <button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              className="flex items-center gap-2 px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              <ChevronLeft className="h-4 w-4" />
              Previous
            </button>

            <div className="flex gap-2">
              {currentQuestion === questions.length - 1 ? (
                <button
                  onClick={finishQuiz}
                  className="px-6 py-2 bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-all duration-200 transform hover:scale-105"
                >
                  Finish Quiz
                </button>
              ) : (
                <button
                  onClick={nextQuestion}
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-all duration-200"
                >
                  Next
                  <ChevronRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
          <h3 className="text-lg font-semibold text-white mb-4">Question Progress</h3>
          <div className="grid grid-cols-10 gap-2">
            {questions.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentQuestion(index);
                  setSelectedAnswer(userAnswers[index] || null);
                }}
                className={`w-8 h-8 rounded text-sm font-medium transition-all duration-200 ${index === currentQuestion
                    ? 'bg-blue-600 text-white ring-2 ring-blue-300'
                    : userAnswers[index] !== undefined
                      ? 'bg-green-600 text-white'
                      : 'bg-white/20 text-white/60 hover:bg-white/30'
                  }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiThreadingQuiz;