import { useState } from 'react';

import './App.css';

function App() {
  const [count, setCount] = useState('pink');
  const [text, setText] = useState('black');

  const black = () => {
    setCount(
      count == 'pink' ? 'black' : 'pink',
      setText(text == 'black' ? 'white' : 'black'),
    );
  };
  const green = () => {
    setCount(count == 'pink' ? 'green' : 'pink');
  };

  return (
    <>
      <div
        style={{ backgroundColor: count }}
        className="gap-5 flex w-screen h-screen"
      >
        <button onClick={black} style={{ backgroundColor: count, color: text }}>
          black
        </button>
        <button onClick={green} style={{ backgroundColor: count, color: text }}>
          red
        </button>
      </div>
    </>
  );
}

export default App;
