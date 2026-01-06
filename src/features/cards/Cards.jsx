import GameOver from "../game/GameOver";
import useCards from "./useCards";
import QuestionCard from "./QuestionCard";
import { useNavigate } from "react-router-dom";

const Cards = ({ setPoints, points }) => {
  const game = useCards({ setPoints, points });
  const navigate = useNavigate();
  if (game.isGameOver) {
    navigate("/trivia-game/gameover");
  }

  return (
    <div className="bg-[#3B325C] w-full h-screen flex items-center justify-center">
      <QuestionCard {...game} points={points} />
    </div>
  );
};

export default Cards;
