import './App.css';
import { Navbar } from './navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Deposite } from './components/Deposite.jsx';
import { Withdraw } from './components/Withdraw.jsx';
import { Home } from './components/Home.jsx';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/deposite" element={<Deposite />} />
        <Route path="/withdraw" element={<Withdraw />} />
      </Routes>
    </div>
  );
}

export default App;
