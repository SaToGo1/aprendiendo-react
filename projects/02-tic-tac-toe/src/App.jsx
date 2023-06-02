import './App.css'
import { useState } from 'react';

const TURNS = {
  X: 'x',
  O: 'o'
};

// const board = Array(9).fill(null);

const Square = ({ children, isSelected, updateBoard, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;

  const handleClick = () => {
    updateBoard(index);
  }

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(
    Array(9).fill(null)
  );
  const [turn, setTurn] = useState(TURNS.X);
  // null: no hay ganador, false: empate, true: ganador
  const [winner, setWinner] = useState(null);

  const checkWinner = (boardToCheck) => {
    // revisamos todas las combinaciones ganadoras
    // para ver si X u O ganó
    for(const combo of WINNER_COMBOS) {
      const [a, b, c] = combo
      if(
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ) {
        return boardToCheck[a]
      }
    }
    // si no hay ganador
    return null;
  }

  const updateBoard = (index) => {
    // no actualizamos esta posición
    // si ya tiene algo
    if (board[index] || winner) return;

    // Actualizar el tablero
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // Cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // Revisar si hay ganador
    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner);
    } // TODO: check if game is over
  }

  return (
    <main className='board'>
      <h1>Tic tac toe</h1>
      <section className='game'>
        {
          board.map((_, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            )
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <section>
        {
          winner !== null && (
            <section className='winner'>
              <div className='text'>
                <h2>
                  {
                    winner === false 
                      ? 'Empate'
                      : 'Ganó: '
                  }
                </h2>

                <header className='win'>
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button>Empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }
      </section>
    </main>
  )
}

export default App
