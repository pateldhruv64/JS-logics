import './App.css';
import Home from './pages/Home';
function App() {
  let x = 'hello world';
  return (
    <>
      <Home data={x} />
    </>
  );
}

export default App;
