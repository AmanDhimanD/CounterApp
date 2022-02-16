import { useState } from 'react';
import './App.css';
import Button from 'react-bootstrap/Button';
import useSound from "use-sound";
import mysound from './mysound.mp3';


function App() {
  const state = useState();
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  }
  const Decrement = () => {
    if (count <= 0) {
      count = 0
    }
    setCount(count - 1);
  }
  const Reset = () => {
    setCount(0);
  }
  
  const [playSound] = useSound(mysound);
  
  return (
    <div className="App">
      <header className="App-header">
        <p>Counter App</p>
        <p>{count}</p>
        <div>
          <Button variant="secondary" onClick={Increment}>Increment</Button>{' '}
          <Button variant="success" onClick={Decrement}>Decrement</Button>{' '}
          <Button variant="warning" onClick={Reset}>Reset</Button>{' '}
        </div>
       <br/>
        <Button onClick={playSound}>
          Play Sound
        </Button>
        
      </header>
    </div>
  );
}

export default App;
