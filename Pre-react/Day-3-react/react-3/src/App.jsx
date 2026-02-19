

import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const Delete = (id) => {
    console.log(id);
    toast(`Delete item with id ${id}`);
  };

  const Update = (id) => {
    toast(`Update item with id ${id}`);
  };

  const Add = () => toast('Add your item');

  const data = [
    { name: 'dhruv', age: '12', id: '1' },
    { name: 'ayush', age: '22', id: '2' },
    { name: 'hem', age: '32', id: '3' },
  ];

  return (
    <>
      <ToastContainer />

      <div className="w-70 h-70 bg-amber-300 flex gap-3 p-4">
        <ul>
          {data.map((el) => (
            <li key={el.id}>
              {el.name} - {el.age} - {el.id}
              <button
                onClick={() => Delete(el.id)}
                className="bg-red-700 text-white ml-2 px-2"
              >
                Delete
              </button>
              <button
                onClick={() => Update(el.id)}
                className="bg-green-700 text-white ml-2 px-2"
              >
                Update
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="gap-3 flex mt-5 pl-10">
        <button onClick={Add} className="bg-yellow-700 text-white px-3">
          Add
        </button>
      </div>
    </>
  );
}

export default App;
