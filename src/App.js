import * as React from 'react';
import logo from './logo.svg';
import './App.css'

function App() {
  const [text, setText] = React.useState('init')
  
  function handleClick(e) {
    debugger
    setText(text + '0');
    setText(text + '1');
    // Promise.resolve().then(() => {
    //   setText(text + '2');
    //   setText(text + '3');
    // })
  }

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>React Version: {React.version}</p>
      <p>{text}</p>
      <button onClick={handleClick}>点击</button>
    </div>
  );
}

export default App;
