import useCards from "./hooks/useCards";
import QuestionCard from "./QuestionCard";
import GameToast from "../../components/ui/GameToast";

const Cards = ({ setPoints, points }) => {
  const game = useCards({ setPoints, points });

  return (
    <div className="bg-[#3B325C] w-full h-screen flex items-center justify-center">
      <GameToast show={game.showToast} message="Game finished!" />
      <QuestionCard {...game} points={points} />
    </div>
  );
};

export default Cards;
