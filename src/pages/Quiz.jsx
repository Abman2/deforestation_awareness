import React, { useState, useEffect } from 'react';

const rawQuizData = [
  {
    question: "What is deforestation?",
    options: [
      "Planting trees",
      "Cutting down trees without replacing them",
      "Saving forests",
      "Building eco-homes",
    ],
    answer: 1,
    explanation: "Deforestation refers to cutting down trees without adequate replanting or regeneration."
  },
  {
    question: "Which of the following is a cause of deforestation?",
    options: [
      "Organic farming",
      "Afforestation",
      "Logging",
      "Wildlife conservation",
    ],
    answer: 2,
    explanation: "Logging removes trees for timber or paper, contributing to forest loss."
  },
  {
    question: "Which continent has the highest rate of deforestation?",
    options: ["Asia", "Africa", "Europe", "Australia"],
    answer: 1,
    explanation: "Africa currently has the highest net forest loss due to various economic pressures."
  },
  {
    question: "What can help prevent deforestation?",
    options: [
      "Using recycled paper",
      "Burning forests",
      "Buying more furniture",
      "Clearing land for farming",
    ],
    answer: 0,
    explanation: "Recycling paper reduces the demand for new wood, thus saving trees."
  },
  {
    question: "Which of these is a major environmental impact of deforestation?",
    options: [
      "Improved air quality",
      "Increased biodiversity",
      "Loss of wildlife habitats",
      "Enhanced soil fertility",
    ],
    answer: 2,
    explanation: "Forests are home to many species, and deforestation destroys their habitats."
  },
  {
    question: "Which practice can reduce deforestation?",
    options: [
      "Shifting cultivation",
      "Monoculture farming",
      "Selective logging",
      "Slash-and-burn agriculture",
    ],
    answer: 2,
    explanation: "Selective logging minimizes environmental damage compared to clear-cutting."
  },
  {
    question: "How does deforestation affect climate change?",
    options: [
      "It cools the Earth's surface",
      "It reduces rainfall",
      "It lowers sea levels",
      "It increases carbon dioxide in the atmosphere",
    ],
    answer: 3,
    explanation: "Trees absorb carbon dioxide, so removing them increases atmospheric CO₂."
  },
  {
    question: "Which international agreement aims to protect forests?",
    options: [
      "Kyoto Protocol",
      "Montreal Protocol",
      "Paris Agreement",
      "REDD+ Initiative",
    ],
    answer: 3,
    explanation: "REDD+ is a UN initiative aimed at reducing emissions from deforestation."
  },
  {
    question: "What is a social consequence of deforestation?",
    options: [
      "Better housing for all",
      "Displacement of indigenous people",
      "Lower food production",
      "Increase in rural tourism",
    ],
    answer: 1,
    explanation: "Many indigenous communities are forced to relocate due to forest loss."
  },
  {
    question: "Which of these is a sustainable alternative to deforestation?",
    options: [
      "Clear-cutting",
      "Agroforestry",
      "Urban expansion",
      "Open-pit mining",
    ],
    answer: 1,
    explanation: "Agroforestry integrates trees into farming systems, preserving forest cover."
  }
];

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
  const [showResult, setShowResult] = useState(false);
  const [isAnsweredCorrectly, setIsAnsweredCorrectly] = useState(false);

  useEffect(() => {
    const shuffled = shuffleArray(
      rawQuizData.map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }))
    );
    setQuizData(shuffled);
  }, []);

  const handleOptionClick = (index) => {
    const correctAnswerIndex = quizData[currentQuestion].options.indexOf(
      rawQuizData.find(q => q.question === quizData[currentQuestion].question).options[quizData[currentQuestion].answer]
    );

    setSelectedOption(index);

    if (index === correctAnswerIndex) {
      setIsAnsweredCorrectly(true);
    } else {
      setIsAnsweredCorrectly(false);
    }
  };

  const handleNext = () => {
    const correctAnswerIndex = quizData[currentQuestion].options.indexOf(
      rawQuizData.find(q => q.question === quizData[currentQuestion].question).options[quizData[currentQuestion].answer]
    );

    if (selectedOption === correctAnswerIndex) {
      setScore(score + 1);
    }

    setSelectedOption(null);
    setIsAnsweredCorrectly(false);

    if (currentQuestion + 1 < quizData.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestart = () => {
    const reshuffled = shuffleArray(
      rawQuizData.map(q => ({
        ...q,
        options: shuffleArray(q.options)
      }))
    );
    setQuizData(reshuffled);
    setCurrentQuestion(0);
    setSelectedOption(null);
    setScore(0);
    setShowResult(false);
    setIsAnsweredCorrectly(false);
  };

  if (quizData.length === 0) return null;

  const correctAnswerText = rawQuizData.find(q => q.question === quizData[currentQuestion].question).options[
    rawQuizData.find(q => q.question === quizData[currentQuestion].question).answer
  ];
  const explanation = rawQuizData.find(q => q.question === quizData[currentQuestion].question).explanation;

  return (
    <div className="max-w-3xl mx-auto px-4 py-16 text-center ">
      <h1 className="text-3xl font-bold mb-6 text-green-800">Deforestation Awareness Quiz</h1>

      {showResult ? (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Your Score: {score} / {quizData.length}</h2>
          <p className="text-gray-700 text-base mb-4">
            {score === quizData.length
              ? "Excellent! You're a forest hero."
              : score >= 2
              ? "Good job! Keep learning and sharing."
              : "You can do better! Try again to learn more."}
          </p>
          <button
            onClick={handleRestart}
            className="mt-4 px-6 py-3 bg-green-600 text-white font-medium rounded hover:bg-green-700 transition-colors"
          >
            Try Again
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Question {currentQuestion + 1} of {quizData.length}
          </h2>
          <p className="text-gray-700 mb-6 text-lg font-medium">
            {quizData[currentQuestion].question}
          </p>
          <div className="grid grid-cols-1 gap-4">
            {quizData[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleOptionClick(index)}
                disabled={isAnsweredCorrectly}
                className={`border px-4 py-3 rounded text-left transition-colors text-gray-800 ${
                  selectedOption === index
                    ? 'bg-green-100 border-green-500'
                    : 'hover:bg-gray-100 border-gray-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          {selectedOption !== null && (
            <div className="mt-4 text-sm text-left text-gray-700">
              <p className="font-medium">Correct Answer: {correctAnswerText}</p>
              <p className="mt-1 italic">Explanation: {explanation}</p>
            </div>
          )}

          <button
            onClick={handleNext}
            disabled={!isAnsweredCorrectly}
            className="mt-6 px-6 py-2 bg-green-700 text-white font-medium rounded disabled:opacity-50"
          >
            {currentQuestion + 1 === quizData.length ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};
