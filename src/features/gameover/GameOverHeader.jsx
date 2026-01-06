import { motion } from "framer-motion";
import gameover from "../../assets/gameover.avif";

const GameOverHeader = ({ points, itemVariants }) => {
  return (
    <>
      <motion.h2
        variants={itemVariants}
        className="font-bold text-3xl text-neutral-700"
      >
        Game Over
      </motion.h2>

      <motion.img
        variants={itemVariants}
        src={gameover}
        alt="Game Over"
        className="w-[200px] bg-gray-500 rounded-xl"
      />

      <motion.p variants={itemVariants} className="text-neutral-600 text-base">
        Your Score is {points}
      </motion.p>
    </>
  );
};

export default GameOverHeader;
