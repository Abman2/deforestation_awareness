// src/QuizPage.js
import React, { useState, useEffect } from "react";
import { rawQuizData, feedbackQuestion } from "../components/Quiz/quizData";
import { db } from "../components/Quiz/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export const QuizPage = () => {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [name, setName] = useState("");
  const [nameSubmitted, setNameSubmitted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const shuffled = shuffleArray(
      rawQuizData.map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }))
    );
    setQuizData(shuffled);
  }, []);

  const totalQuestions = quizData.length + feedbackQuestion.length;
  const isFeedbackQuestion = currentQuestion >= quizData.length;

  const handleOptionClick = (index) => {
    if (hasAnswered) return;

    if (isFeedbackQuestion) {
      const feedbackQ = feedbackQuestion[currentQuestion - quizData.length];
      setFeedback(prev => [
        ...prev,
        {
          question: feedbackQ.question,
          selected: feedbackQ.options[index]
        }
      ]);
      setSelectedOption(index);
      setHasAnswered(true);
      return;
    }

    const currentQ = quizData[currentQuestion];
    const originalQ = rawQuizData.find(q => q.question === currentQ.question);
    const correctAnswer = originalQ.options[originalQ.answer];
    const selectedAnswer = currentQ.options[index];

    const isCorrect = selectedAnswer === correctAnswer;
    if (isCorrect) setScore(prev => prev + 1);

    setSelectedOption(index);
    setHasAnswered(true);

    setAnswers(prev => [
      ...prev,
      {
        question: currentQ.question,
        selected: selectedAnswer,
        correct: isCorrect
      }
    ]);
  };

  const handleNext = async () => {
    setSelectedOption(null);
    setHasAnswered(false);

    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1);
    } else {
      try {
        await addDoc(collection(db, "quizResults"), {
          name,
          score,
          totalQuestions: quizData.length,
          answers,
          feedback,
          timestamp: serverTimestamp()
        });
      } catch (err) {
        console.error("Error saving to Firebase", err);
      }
      setShowResult(true);
    }
  };

  const handleNameSubmit = () => {
    if (name.trim()) {
      setNameSubmitted(true);
    }
  };

  if (!nameSubmitted) {
    return (
      <div className="max-w-xs sm:max-w-md mx-auto mt-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Enter Your Name</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border px-4 py-2 rounded w-full mb-4"
          placeholder="Your name"
        />
        <button
          onClick={handleNameSubmit}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Start Quiz
        </button>
      </div>
    );
  }

  if (quizData.length === 0) return null;

  if (showResult) {
    return (
      <div className="max-w-xs sm:max-w-xl mx-auto text-center mt-20 bg-white p-6 rounded shadow">
        <h2 className="text-2xl font-bold text-green-700">Your Score: {score} / {quizData.length}</h2>
        <p className="mt-4 text-gray-700">Thanks for completing the quiz!</p>
      </div>
    );
  }

  const currentQ = isFeedbackQuestion
    ? feedbackQuestion[currentQuestion - quizData.length]
    : quizData[currentQuestion];

  const originalQ = rawQuizData.find(q => q.question === currentQ?.question);
  const correctAnswer = originalQ?.options[originalQ?.answer];

  return (
    <div className="max-w-3xl mx-auto px-4 py-10 text-center">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Deforestation Awareness Quiz</h1>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Question {currentQuestion + 1} of {totalQuestions}
        </h2>

        <p className="text-gray-700 mb-6 text-lg font-medium">
          {currentQ.question}
        </p>

        <div className="grid grid-cols-1 gap-4">
          {currentQ.options.map((option, index) => {
            const isSelected = selectedOption === index;
            const isCorrect = isSelected && option === correctAnswer;
            const isWrong = isSelected && option !== correctAnswer;

            return (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={hasAnswered}
                className={`border px-4 py-3 rounded text-left transition-colors text-gray-800
                  ${isCorrect ? 'bg-green-100 border-green-500' : ''}
                  ${isWrong ? 'bg-red-100 border-red-500' : ''}
                  ${!isSelected && !hasAnswered ? 'hover:bg-gray-100 border-gray-300' : ''}
                `}
              >
                {option}
              </button>
            );
          })}
        </div>

        {!isFeedbackQuestion && hasAnswered && (
          <div className="mt-4 text-sm text-left text-gray-700">
            <p className="font-medium">
              Correct Answer: {correctAnswer}
            </p>
            <p className="mt-1 italic">
              Explanation: {originalQ.explanation}
            </p>
          </div>
        )}

        <button
          onClick={handleNext}
          disabled={!hasAnswered}
          className="mt-6 px-6 py-2 bg-green-700 text-white font-medium rounded disabled:opacity-50"
        >
          {currentQuestion === totalQuestions - 1 ? 'Finish' : 'Next'}
        </button>
      </div>
    </div>
  );
};
