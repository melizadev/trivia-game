import { motion } from "framer-motion";
import GameOverHeader from "./GameOverHeader";
import GameOverActions from "./GameOverActions";
import HighScores from "./HighScores";
const GameCard = ({ points, highScores }) => {
  const itemVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 15, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="max-w-[400px] min-w-[300px] h-[500px] rounded-md flex flex-col items-center justify-center gap-3 bg-white"
    >
      <GameOverHeader points={points} itemVariants={itemVariants} />
      <GameOverActions itemVariants={itemVariants} />
      <HighScores highScores={highScores} itemVariants={itemVariants} />
    </motion.div>
  );
};

export default GameCard;
