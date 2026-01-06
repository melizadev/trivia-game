import { AnimatePresence, motion } from "framer-motion";
import QuestionHeader from "./QuestionHeader";
import QuestionImage from "./QuestionImage";
import QuestionOptions from "./QuestionOptions";

const QuestionCard = ({
  currentQuestion,
  points,
  hitPoints,
  showAnswers,
  selectedOption,
  handleAnswer,
}) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key="weather-card"
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 15, scale: 0.95 }}
        transition={{ duration: 0.3 }}
        className="p-4 bg-white shadow rounded w-[300px] sm:w-[320px] md:w-[400px] min-h-[555px]"
      >
        <div className="min-h-12">
          {" "}
          <h2 className="text-xl font-semibold font-fredoka text-neutral-700 mb-2">
            {currentQuestion?.question}
          </h2>
        </div>

        <QuestionImage img={currentQuestion?.img} />

        <QuestionHeader points={points} hitPoints={hitPoints} />

        <QuestionOptions
          options={currentQuestion?.options}
          solution={currentQuestion?.solution}
          selectedOption={selectedOption}
          showAnswers={showAnswers}
          onSelect={handleAnswer}
        />
      </motion.div>
    </AnimatePresence>
  );
};
export default QuestionCard;
