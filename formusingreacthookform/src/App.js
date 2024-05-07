import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Navbar } from './Content/Navbar';
import { Header } from './Header/Header';
import { Forms } from './Content/Forms';
import { Validation } from './Content/Validation';
import { Mode } from './Content/Mode';
import { FormStudent } from './Content/FormStudent';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/form' element={<Forms />} />
        <Route path='/validation' element={<Validation />} />
        <Route path='/mode' element={<Mode />} />
        <Route path='/task' element={<FormStudent />} />
      </Routes>
    </div>
  );
}

export default App;
