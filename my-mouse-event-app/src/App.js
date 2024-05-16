import logo from './logo.svg';
import './App.css';
import { Fecth } from './component/Fetch';
import { ExternalEvent } from './component/Mouseevent';

function App() {
  return (
    <div className="App">
    <ExternalEvent/>
      <Fecth/>
    </div>
  );
}

export default App;
