import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log"
import { useState } from "react"
import { WINNING_COMBINATIONS } from "./winning-combinations"

// const WINNING_COMBINATIONS=[
//   [
//     { row:0 , col:0 },
//     { row:0 , col:1 },
//     { row:0 , col:2 },
//   ]
// ]

function derivedActivePlayer(gameTurns){
  let currentPlayer ="X";
      if(gameTurns.length>0 && gameTurns[0].player === 'X'){
        currentPlayer = "O"
      }
      return currentPlayer;

}



function App() {

  const [gameTurns ,setGameTurns] = useState([]);
  // const [activePlayer, setActivePlayer] = useState('X')

  const activePlayer = derivedActivePlayer(gameTurns);
  
  function handleSelectSquare(rowIndex,colIndex){
    // setActivePlayer((currActivePlayer)=>currActivePlayer === 'X'? 'O' : 'X'); 
    setGameTurns(prevTurns => {
      const currentPlayer = derivedActivePlayer(prevTurns);
      
      const updatedTurns = [{square:{row:rowIndex , col:colIndex},player:activePlayer},...prevTurns]
      return updatedTurns;
    });
  }

  return (
     <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'}/>
          <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'}/>
        </ol>

        <GameBoard onSelectSquare ={handleSelectSquare} turns={gameTurns}/>
      </div>

      <Log turns={gameTurns}/>
     </main>
  )
}

export default App
