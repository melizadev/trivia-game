const QuestionImage = ({ img }) => {
  if (!img) return null;

  return (
    <img
      src={img}
      alt="Question"
      className="w-full h-[180px] object-cover mb-4 rounded"
    />
  );
};

export default QuestionImage;
