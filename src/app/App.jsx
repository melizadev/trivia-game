import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Game from "../features/game/Game";
import GameOver from "../features/gameover/GameOver";
import Home from "../features/home/Home";

function App() {
  const [points, setPoints] = useState(0);

  return (
    <>
      <Routes>
        <Route path="/trivia-game/" element={<Home />} />
        <Route
          path="/trivia-game/game"
          element={<Game setPoints={setPoints} points={points} />}
        />
        <Route
          path="/trivia-game/gameover"
          element={<GameOver points={points} />}
        />
      </Routes>
    </>
  );
}

export default App;
