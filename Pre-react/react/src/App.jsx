import './App.css';
import About from './pages/About';
import Contect from './pages/Contect';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contect" element={<Contect />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
