import { useState, useEffect } from 'react';

import './App.css';

const Counter = () => {
  const [Count, setCount] = useState(0);
  const increment = () => {
    setCount(Count + 1);
  };
  const dicrement = () => {
    setCount(Count == 0 ? 0 : Count - 1);
  };
  const reset = () => {
    setCount(0);
  };

  useEffect(() => {
    document.title = `Current Count: ${Count}`;
    console.log('Count :', Count);
  }, [Count]);

  return (
    <>
      <div className=" gap-5 flex  flex-col items-center justify-center  ">
        <div>
          <p>hello evryone == {Count}</p>
        </div>

        <div className=" gap-3 flex">
          <button onClick={increment}>increment</button>
          <button onClick={dicrement}>dicrement</button>
          <button onClick={reset}>reset</button>
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
