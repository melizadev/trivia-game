import Button from "../../components/ui/Button";
import HighScores from "./HighScores";
import useGameOver from "./useGameOver";
import gameover from "../../assets/gameover.avif";
const GameOver = ({ points }) => {
  const { highScores } = useGameOver({ points });
  return (
    <div className="bg-[#3B325C] w-full h-full flex flex-col items-center justify-center text-white">
      <div className="max-w-[400px] min-w-[300px] h-[500px] rounded-md flex flex-col items-center justify-center gap-2 bg-white">
        <h2 className="font-bold text-3xl text-neutral-700">Game Over</h2>
        <img
          src={gameover}
          alt="Game Over"
          className="w-[200px] bg-gray-500 rounded-xl"
        />
        <p className="text-neutral-600 text-base">Your Score is {points}</p>
        <div className="flex justify-around items-center w-full">
          <Button>
            <a href="/game">Play Again</a>
          </Button>
          <Button>
            <a href="/">Go Home</a>
          </Button>
        </div>
        <HighScores highScores={highScores} />
      </div>
    </div>
  );
};

export default GameOver;
