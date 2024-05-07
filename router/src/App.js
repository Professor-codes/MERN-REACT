import logo from './logo.svg';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Navbar/Header';
import { NotFound } from './components/NotFound';
import { Pricing } from './components/Pricing';
import { Contact } from './components/Contact';
import { Services } from './components/Services';
import { About } from './components/About';
import { Home } from './components/Home';
import { AboutTeam } from './components/AboutTeam';
import { AboutProject } from './components/AboutProject';
import { AboutCompany } from './components/AboutCompany';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />

        <Route path='/about' element={<About />} />
        <Route path='/about/about-project/:id' element={<AboutProject />} />
        <Route path='/about/about-team/:id' element={<AboutTeam />} />
        <Route path='/about/about-company/:id' element={<AboutCompany />} />

        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
