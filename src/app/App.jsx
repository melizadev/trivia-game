import Home from "../features/home/Home";
import { Routes, Route } from "react-router-dom";
import Game from "../features/game/Game";
import { useState } from "react";
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
      </Routes>
    </>
  );
}

export default App;
