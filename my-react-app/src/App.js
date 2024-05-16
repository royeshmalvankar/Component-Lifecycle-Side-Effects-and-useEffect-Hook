import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  const [count, setCount] = useState(0);


  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>count+</button>
      <button onClick={() => setCount(count - 1)} disabled={count === 0}>count-</button>
    </div>
  );
}

export default App;
