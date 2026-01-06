import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const useHome = () => {
  const navigate = useNavigate();
  const [start, setStart] = useState(false);
  const [instructions, setInstructions] = useState(false);
  const onPlay = () => {
    setStart(true);
  };

  useEffect(() => {
    if (start) {
      navigate("/trivia-game/game");
    }
  }, [start, navigate]);
  return { onPlay, setInstructions, instructions };
};

export default useHome;
