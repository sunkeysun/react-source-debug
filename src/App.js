import { useState } from 'react';

function App() {
  const [text, setText] = useState('')
  
  function handleChange(e) {
    debugger
    setText(e.target.value);
  }

  return (
    <div className="App">
      <input onChange={handleChange} value={text} />
      <ul>
        {
          (new Array(10000)).fill(1).map(() => <li>{text}</li>)
        }
      </ul>
    </div>
  );
}

export default App;
