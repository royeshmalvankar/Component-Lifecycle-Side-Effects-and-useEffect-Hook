import logo from './logo.svg';
import './App.css';
import { Timer } from './component/Timer';
import { Browserevent } from './component/Browserevent';
import {  useState} from 'react';

function App() {
  
  const [flag, setFlag] = useState(false);

  return (
    <div className="App" >
      {flag?null:<Timer />}
      {flag?null:<Browserevent />}
      <button onClick={() => setFlag(!flag)}>{flag?"mount":"unmount"}</button>
    </div>
  );
}

export default App;
