import './App.css';
import { Asset } from './Asset/Asset';
import { Cart } from './Cart/Cart';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Home } from './Home/Home';
import { Plan } from './Plan/Plan';
import { Progress } from './Progress/Progress';
import { SideBar } from './SideBar/SideBar';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Header />
      <div className='d-flex'>
        <SideBar />
        <Routes>
          <Route path='/home' element={<Home />} />
          <Route path='/asset' element={<Asset />} />
          <Route path='/plan' element={<Plan />} />
          <Route path='/progress' element={<Progress />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
