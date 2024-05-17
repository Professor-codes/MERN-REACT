import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { ApiDemo1 } from './Api/ApiDemo1';
import { ApiDemo2 } from './Api/ApiDemo2';
import { ApiDemo3 } from './Api/ApiDemo3';
import { ApiDemo4 } from './Api/ApiDemo4';
import { ApiProject1 } from './Project/ApiProject1';
import { ApiProject2 } from './Project/ApiProject2';
import { UserDetails } from './Api/UserDetails';
import { UserUpdate } from './Api/UserUpdate';
import { GoRestApiGet } from './Api/GoRestApiGet';
import { GoRestApiPost } from './Api/GoRestApiPost';
import { ApiDemo5 } from './Api/ApiDemo5';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/get" element={<ApiDemo1 />} />
        <Route path="/post" element={<ApiDemo2 />} />
        <Route path="/put" element={<ApiDemo3 />} />
        <Route path="/delete" element={<ApiDemo4 />} />
        <Route path="/search" element={<ApiDemo5 />} />
        <Route path="/userdetails/:id" element={<UserDetails />} />
        <Route path="/updateuser/:id" element={<UserUpdate />} />
        <Route path="/gorestapi-get" element={<GoRestApiGet />} />
        <Route path="/gorestapi-post" element={<GoRestApiPost />} />
        <Route path="/project-1" element={<ApiProject1 />} />
        <Route path="/project-2" element={<ApiProject2 />} />
      </Routes>
    </div>
  );
}

export default App;
