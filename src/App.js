import { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      debugger
      setCount(999)
    })
  }, [])
  
  function handleClick() {
    debugger
    console.log(1)
    setCount(count+1);
    setCount(count+2);
    console.log(2)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>{count}</h1>
        <button onClick={ handleClick }>加一</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
