import questions from "../../data/questions";
import { useEffect, useState } from "react";
import { shuffleArray } from "./shufflerray";

const useCards = ({ setPoints, points }) => {
  const [remainingQuestions, setRemainingQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [hitPoints, setHitPoints] = useState(5);
  const [isGameOver, setIsGameOver] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showAnswers, setShowAnswers] = useState(false);

  // start game shuffle

  useEffect(() => {
    const shuffled = shuffleArray(questions);
    setRemainingQuestions(shuffled);
    setCurrentQuestion(shuffled[0]);
  }, []);

  // Pick next question
  const pickNextQuestion = () => {
    setRemainingQuestions((prev) => {
      if (prev.length <= 1) {
        setIsGameOver(true);
        return [];
      }

      const [, ...rest] = prev;
      setCurrentQuestion(rest[0]);
      return rest;
    });

    setSelectedOption(null);
    setShowAnswers(false);
  };

  // check game state

  const checkGameState = (isCorrect) => {
    const lastQuestion = remainingQuestions.length <= 1;
    const noHitPoints = hitPoints <= 1 && !isCorrect;

    if (noHitPoints) {
      setPoints((prev) => prev - 10);
      setIsGameOver(true);
      return;
    }

    if (lastQuestion) {
      if (isCorrect) {
        setPoints((prev) => prev + 50);
      } else {
        setPoints((prev) => prev - 10);
      }
      setIsGameOver(true);
      return;
    }

    pickNextQuestion();
  };

  // Handle answer selection

  const handleAnswer = (option) => {
    if (showAnswers || !currentQuestion) return;

    const isCorrect = option === currentQuestion.solution;

    setSelectedOption(option);
    setShowAnswers(true);

    if (isCorrect) {
      setPoints((prev) => prev + 10);
    } else {
      if (points > 0) {
        setPoints((prev) => prev - 5);
      }
      setHitPoints((prev) => (prev > 0 ? prev - 1 : 0));
    }

    setTimeout(() => {
      checkGameState(isCorrect);
    }, 1000);
  };

  return {
    currentQuestion,
    hitPoints,
    showAnswers,
    selectedOption,
    handleAnswer,
    isGameOver,
  };
};

export default useCards;
