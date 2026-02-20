import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <First />
    </>
  );
}

export default App;

const First = () => {
  const [color, setColor] = useState('white');

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    console.log(randomColor);
    
    setColor(randomColor);
  };

  return (
    <>
      <center>
        <div
          className="w-screen h-screen flex items-center justify-center"
          style={{ backgroundColor: color }}
        >
          {' '}
          <button
            onClick={changeColor}
            className="text-black border-2 border-black cursor-pointer"
          >
            Color Change
          </button>
        </div>
      </center>
    </>
  );
};
