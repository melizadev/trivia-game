import GameOver from "../game/GameOver";
import useCards from "./useCards";
import QuestionCard from "./QuestionCard";

const Cards = ({ setPoints, points }) => {
  const game = useCards({ setPoints, points });

  if (game.isGameOver) {
    return <GameOver points={points} />;
  }

  return (
    <div className="bg-[#3B325C] w-full h-screen flex items-center justify-center">
      <QuestionCard {...game} points={points} />
    </div>
  );
};

export default Cards;
