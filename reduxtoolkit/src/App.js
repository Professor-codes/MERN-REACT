import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './navbar/Navbar';
import { Cart } from './reduxComponents/Cart';
import { Products } from './reduxComponents/Products';
import { Home } from './navbar/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
