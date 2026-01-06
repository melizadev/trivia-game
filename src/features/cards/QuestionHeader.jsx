import { FaRegHeart } from "react-icons/fa";

const QuestionHeader = ({ points, hitPoints }) => {
  return (
    <div className="flex items-center justify-between text-sm text-gray-600 mb-4 ">
      <p className="text-xl font-semibold">{points}</p>
      <div className="flex relative">
        <FaRegHeart size={26} />
        <div className="border-none absolute right-[-6px] top-[-7px] text-white w-[18px] h-[18px] flex items-center justify-center rounded-full bg-pink-600">
          <p className="text-xs">{hitPoints}</p>
        </div>
      </div>
    </div>
  );
};

export default QuestionHeader;
