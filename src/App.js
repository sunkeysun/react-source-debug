import { useState } from 'react';

function App() {
  const [text, setText] = useState('init')
  
  function handleClick(e) {
    debugger
    setText(text + '0');
    setText(text + '1');
  }

  return (
    <div className="App">
      <button onClick={handleClick}>点击</button>
      <p>{text}</p>
    </div>
  );
}

export default App;
