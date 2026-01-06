import { useState, useEffect } from "react";

const useGameOver = ({ points }) => {
  const [highScores, setHighScores] = useState([]);

  useEffect(() => {
    const scores = JSON.parse(localStorage.getItem("highScores")) || [];
    const newScore = { points, date: new Date().toLocaleDateString() };
    scores.push(newScore);
    scores.sort((a, b) => b.points - a.points);
    if (scores.length > 3) scores.pop();
    localStorage.setItem("highScores", JSON.stringify(scores));
    setHighScores(scores);
    console.log(scores);
  }, [points]);

  return { highScores };
};

export default useGameOver;
