// import { useState, useEffect } from 'react';

// import './App.css';

// function User() {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then((response) => response.json())
//       .then((data) => {
//         setUser(data);
//       });
//   }, []);

//   return (
//     <div>
//       <h2>User Info</h2>
//       {user ? <p>{user.name}</p> : <p>Loading...</p>}
//     </div>
//   );
// }

// function App() {
//   return (
//     <>
//       <User />
//     </>
//   );
// }

// export default App;
//////////////////////////////////////////////////////////////////////////////////////////////////

import { useState, useEffect } from 'react';
import './App.css';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log('Effect chalu thayu');
  }, [count]); //[] hoy to ekj var chale useeffect && ,[] kadi nakhi ye to jetli war render thay aetli var call thay state change thay to pan hit thay props change thay to pan hit thay perent render thay to pan hit thay // jetli var count change thashe aetli varhit thashe  jo aem nem button banavi ne click kariye to hit na thay aena mate render thavu pade toj thay

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button onClick={() => setCount(0)}>reset</button>
    </>
  );
}

function App() {
  return (
    <>
      <Counter />
    </>
  );
}

export default App;
