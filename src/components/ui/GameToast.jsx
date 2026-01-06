import { motion, AnimatePresence } from "framer-motion";

const toastVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.25 },
  },
};

const GameToast = ({ show, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={toastVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-6 left-1/2 -translate-x-1/2 
          bg-white/90 text-neutral-700 px-6 py-3 rounded-xl 
          shadow-lg backdrop-blur-md z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameToast;
