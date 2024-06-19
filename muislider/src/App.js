import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './navbar/Navbar';
import FirstSlider from './component/FirstSlider';
import SecondSlider from './component/SecondSlider';
import ThirdSlider from './component/ThirdSlider';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="single-slider" element={<FirstSlider />} />
        <Route path="single-slider-exact-value" element={<SecondSlider />} />
        <Route path="double-slider" element={<ThirdSlider />} />
      </Routes>
    </div>
  );
}

export default App;
