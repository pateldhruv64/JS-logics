import { useState } from 'react';
import './App.css';

function App() {
  return (
    <>
      <New01 />
    </>
  );
}

export default App;
////////////////////////////////////////////////////////////////////////////////////////////////
// const New = () => {
//   const [count, setCount] = useState(0);
//   useEffect(() => {
//     console.log('hello');
//   }, [count]);

//   const add = () => {
//     setCount(count + 1);
//   };

//   return (
//     <>
//       <center>
//         <div>hello {count}</div>
//         <button
//           onClick={add}
//           className="bg-amber-300 cursor-pointer transition: delay-300 ease-in-out hover:bg-pink-400"
//         >
//           count++
//         </button>
//       </center>
//     </>
//   );
// };
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const New01 = () => {
  const [data, setData] = useState([
    { name: 'dhruv', id: '1', age: '22' },
    { name: 'hemo', id: '2', age: '11' },
    { name: 'devo', id: '3', age: '33' },
  ]);

  const delet = (id) => {
    setData(data.filter((item) => item.id !== id));
    alert(`Deleted id: ${id}`);
  };

  const update = (id) => {
    const newName = prompt('Update name');
    if (!newName) return;

    setData(
      data.map((item) => (item.id === id ? { ...item, name: newName } : item)),
    );
  };

  return (
    <>
      {data.map((d) => (
        <div key={d.id}>
          <div>{d.name}</div>
          <div>{d.id}</div>
          <div>{d.age}</div>
          <button onClick={() => delet(d.id)}>del</button>
          <button onClick={() => update(d.id)}>update</button>
        </div>
      ))}
    </>
  );
};
