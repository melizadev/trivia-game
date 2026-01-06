import { AnimatePresence, motion } from "framer-motion";
const QuestionImage = ({ img }) => {
  if (!img) return null;

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={img}
        className=" flex items-center justify-center"
        initial={{ opacity: 0, scale: 0.9, filter: "blur(8px)" }}
        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
        exit={{ opacity: 0, scale: 0.95, filter: "blur(6px)" }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <img
          src={img}
          alt="question image"
          className="w-full h-[180px] object-cover mb-4 rounded"
        />
      </motion.div>
    </AnimatePresence>
  );
};

export default QuestionImage;
