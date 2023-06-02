import './App.css'
import { useState } from 'react';

const TURNS = {
  X: 'x',
  O: 'o'
};

// const board = Array(9).fill(null);

const Square = ({ children, updateBoard, index}) => {
  return (
    <div className='square'>
      {children}
    </div>
  )
}

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
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
              >
                
              </Square>
            )
          })
        }
      </section>
    </main>
  )
}

export default App
