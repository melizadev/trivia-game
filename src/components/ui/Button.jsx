const CuteButton = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        bg-pink-600 hover:bg-pink-700 
        font-fredoka
        text-lg
        text-white 
        py-2 px-4 
        rounded-full 
        shadow-md 
        transform 
        transition 
        duration-200 
        hover:scale-105 
        focus:outline-none 
        focus:ring-2 
        focus:ring-pink-200
        cursor-pointer
      `}
    >
      {children}
    </button>
  );
};

export default CuteButton;
