import { useState, useEffect } from "react";
const useGame = () => {
  const [count, setCount] = useState(3);
  const [startGame, setStartGame] = useState(false);

  useEffect(() => {
    if (count <= 0) {
      setTimeout(() => {
        setStartGame(true);
      }, 300);
      return;
    }

    const timerId = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    // Limpiar el timeout si el componente se desmonta o count cambia
    return () => clearTimeout(timerId);
  }, [count, setStartGame]);

  return { count, startGame };
};

export default useGame;
