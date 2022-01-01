import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Clear from './components/Buttons/Clear';
import DisplayMsg from './components/DisplayMsg/DisplayMsg';
import Header from './components/Header/Header';
function App() {
  
  const [board, setBoard] = useState(['_', '_', '_', '_', '_', '_', '_', '_', '_',])

  const [displayMsg, setDisplayMsg] = useState('');
  const [wins, setWins] = useState(0);
  const [ties, setTies] = useState(0); 
  const [losses, setLosses] = useState(0)
  return (
    <div className="App">
      <Header/>
      <Board 
        board={board} setBoard = {setBoard}
        displayMessage={displayMsg} setDisplayMessage={setDisplayMsg} 
        wins={wins} setWins={setWins}
        ties={ties} setTies={setTies}
        losses={losses} setLosses={setLosses}
      />
      
      <DisplayMsg displayMessage={displayMsg} 
      wins={wins}
      ties={ties}
      losses={losses}
      />
      <Clear
        setBoard = {setBoard}
        wins={wins} setWins={setWins}
        ties={ties} setTies={setTies}
        losses={losses} setLosses={setLosses}
      />
    </div>
  );
}

export default App;
