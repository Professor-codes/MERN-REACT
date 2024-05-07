import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { ApiDemo1 } from './Api/ApiDemo1';
import { ApiDemo2 } from './Api/ApiDemo2';
import { ApiDemo3 } from './Api/ApiDemo3';
import { ApiDemo4 } from './Api/ApiDemo4';
import { ApiProject1 } from './Project/ApiProject1';
import { ApiProject2 } from './Project/ApiProject2';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/api-demo-1" element={<ApiDemo1 />} />
        <Route path="/api-demo-2" element={<ApiDemo2 />} />
        <Route path="/api-demo-3" element={<ApiDemo3 />} />
        <Route path="/api-demo-4" element={<ApiDemo4 />} />
        <Route path="/project-1" element={<ApiProject1 />} />
      </Routes>
    </div>
  );
}

export default App;
