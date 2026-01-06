import Cards from "../cards/Cards";
import useGame from "./hooks/useGame";
const Game = ({ setPoints, points }) => {
  const { count, startGame } = useGame();
  if (startGame) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Cards setPoints={setPoints} points={points} />
      </div>
    );
  }
  return (
    <div className="bg-[#3B325C] w-full h-screen flex flex-col items-center justify-center text-black">
      <div className="bg-white flex items-center justify-center text-6xl font-fredoka font-bold text-blue-500 animate-pulse w-[100px] h-[100px] rounded-full">
        {count > 0 ? count : "Go!"}
      </div>
    </div>
  );
};
export default Game;
