const getOptionClass = ({ option, solution, selectedOption, showAnswers }) => {
  if (!showAnswers) return "border-gray-300 text-neutral-700 hover:bg-gray-50";

  if (option === solution) return "border-green-500 bg-green-100";

  if (option === selectedOption) return "border-red-500 bg-red-100";

  return "opacity-50";
};

const QuestionOptions = ({
  options = [],
  solution,
  selectedOption,
  showAnswers,
  onSelect,
}) => {
  const base =
    "p-2 border rounded font-fredoka text-lg cursor-pointer transition";

  return (
    <ul className="space-y-2">
      {options.map((option, idx) => (
        <li
          key={idx}
          className={`${base} ${getOptionClass({
            option,
            solution,
            selectedOption,
            showAnswers,
          })}`}
          onClick={() => onSelect(option)}
        >
          {option}
        </li>
      ))}
    </ul>
  );
};

export default QuestionOptions;
