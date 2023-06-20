import './App.css';
import pattern from "./components/pattern";
import React, { useState } from "react"; 

const App = () => {
  const init = ['','','','','','','','',''];
  const winPattern = ["","",""];
  const [combo, setCombo] = useState(winPattern);
  const greet = "Click any of the box and start the game(TicTacToe) player1 : x";
  const [board, setBoard] = useState(init);
  const [player, setPlayer] = useState("x");
  const [count, setCount] = useState(0);
  const [intext, setIntext] = useState(greet);
  const [endGame, setEndGame] = useState(false)
  
  const handleClick = (i) => {
    let co = 0;
    // console.log(i);
    if (board[i] !== '') return;
    if (endGame) return;
    setCount(count+1);
    // console.log(count);
    board[i] = player;
    // console.log(i);
    setBoard(board);
    // console.log(board);
    setPlayer(player === 'x'? 'o' : 'x');
    pattern.forEach((arr) => {
      // const player1 = (player === 'x')? 'o' : 'x';
      // console.log(player1);
      if (board[arr[0]] === player && 
        board[arr[1]] === player && 
        board[arr[2]] === player){
          setCombo([arr[0], arr[1], arr[2]]);
          co+=1;
          setIntext("Player '" + player + "' won the game.")
          // reset();
          setEndGame(true);
        }
        else {
          if (count === 8 && pattern[7]=== arr && co === 0){
            setIntext("Both Lose the game.");
            setEndGame(true);
            // reset();
          }
        }
      })
      const player1 = player === "x" ? "o" : "x";
      if(count !== 8 && co === 0){
        setIntext(player1 +"'s turn");
      }
    }

        const reset = () => {
          setBoard(init);
          setPlayer('x');
          setCount(0);
          setIntext(greet);
          setEndGame(false);
          setCombo(winPattern);
        }
        
  return (
    <div>
        <p className="text">{intext}</p>
    <div className="board">
        {board.map((val, i) => {
          return <div 
          key={i} 
          className={`board_tiles ${combo[0] !== '' ? ( (combo[0] === i || combo[1] === i || combo[2] === i ) ? 'winCombo' : '') : ''}`} onClick={() => handleClick(i)}>{val}</div>
        })}
    </div>
    <button onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
