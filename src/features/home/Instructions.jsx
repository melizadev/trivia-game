import { motion } from "framer-motion";

const Instructions = ({ setInstructions }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="absolute bottom-[35%] bg-white rounded-xl p-6 max-w-md text-gray-800 shadow-xl"
    >
      <h2 className="text-xl font-bold mb-3">📜 instructions</h2>

      <ul className="text-left space-y-2 text-sm">
        <li>🦄 Answer one question at a time</li>
        <li>⭐ Each correct answer earns points</li>
        <li>❤️ You have a limited number of lives</li>
        <li>🏆 Earn bonus points at the end of the game</li>
      </ul>

      <button
        onClick={() => setInstructions(false)}
        className="mt-4 text-sm text-purple-600 font-semibold"
      >
        close
      </button>
    </motion.div>
  );
};
export default Instructions;
