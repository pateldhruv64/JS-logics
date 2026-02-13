import './App.css';
import { ToastContainer, toast } from 'react-toastify';
function App() {
  const Delete = () => toast('Delete your item');

  const Update = () => toast('Update your item');
  const Add = () => toast('Add your item');
  const data = [
    { name: 'dhruv', age: '12', id: '1' },
    { name: 'ayush', age: '22', id: '2' },
    { name: 'hem', age: '32', id: '3' },
  ];
  return (
    <>
      <div className="w-70 h-70 bg-amber-300   justify-center flex-row   gap-3 flex">
        <ul>
          <h1>
            {data.map((el) => {
              return (
                <>
                  <li>{el.name}</li>
                  <li>{el.age}</li>
                  <li>{el.id}</li>
                </>
              );
            })}
          </h1>
        </ul>
      </div>

      <div className="gap-3 flex w-10  h-10 mt-10 pl-10">
        <button onClick={Delete} className="bg-red-700 cursor-pointer">
          Delete
          <ToastContainer />
        </button>
        <button onClick={Update} className="bg-green-700 cursor-pointer">
          Update
          <ToastContainer />
        </button>
        <button onClick={Add} className="bg-yellow-700 cursor-pointer">
          Add
          <ToastContainer />
        </button>
      </div>
    </>
  );
}

export default App;
