import { motion } from "framer-motion";
import Button from "../../components/ui/Button";
import { Link } from "react-router-dom";
const GameOverActions = ({ itemVariants }) => {
  return (
    <motion.div
      variants={itemVariants}
      className="flex justify-around items-center w-full"
    >
      <Button>
        <Link to="/trivia-game/game">Play Again</Link>
      </Button>
      <Button>
        <Link to="/trivia-game/">Go Home</Link>
      </Button>
    </motion.div>
  );
};

export default GameOverActions;
