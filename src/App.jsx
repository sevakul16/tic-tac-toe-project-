import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayerIndex, setActivePlayerIndex] = useState("X");

  const handleCellClick = (rowIndex, colIndex) => {
    setActivePlayerIndex((curActivePlayer) =>
      curActivePlayer === "X" ? "O" : "X"
    );
    setGameTurns((prevGameTurns) => {
      let currentPlayer = "X";
      if (prevGameTurns.length > 0 && prevGameTurns[0].player === "X") {
        currentPlayer = "O";
      }
      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurns,
      ];

      return updatedTurns;
    });
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
          turns={gameTurns}
        />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
