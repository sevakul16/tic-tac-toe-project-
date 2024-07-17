import GameBoard from "./components/GameBoard";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [activePlayerIndex, setActivePlayerIndex] = useState("X");

  const handleCellClick = () => {
    setActivePlayerIndex((curActivePlayer) =>
      curActivePlayer === "X" ? "O" : "X"
    );
  };

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player1"
            symbol="X"
            isActive={activePlayerIndex === "X"}
          />
          <Player
            initialName="Player2"
            symbol="O"
            isActive={activePlayerIndex === "O"}
          />
        </ol>
        <GameBoard
          onSelectCell={handleCellClick}
          activePlayerSymbol={activePlayerIndex}
        />
      </div>
    </main>
  );
}

export default App;
