import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contect from './pages/Contect';
import Navbar from './pages/Navbar';
import Footer from './pages/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  let x = 'hello world';
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home data={x} />} />
          <Route path="/contect" element={<Contect />} />
          <Route path="/about" element={<About datap={x}  />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
