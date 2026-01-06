import GameOverCard from "./GameOverCard";
import useGameOver from "./hooks/useGameOver";

const GameOver = ({ points }) => {
  const { highScores } = useGameOver({ points });

  return (
    <div className="bg-[#3B325C] w-full h-screen flex items-center justify-center text-white">
      <GameOverCard points={points} highScores={highScores} />
    </div>
  );
};

export default GameOver;
