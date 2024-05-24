import "./App.css";
import { First } from "./components/First";
import { Route, Routes } from "react-router-dom";
import { Second } from "./components/Second";
import { Third } from "./components/Third";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { ThemeContext } from "./context";

function App() {
  return (
    <div className="App">
      <ThemeContext.Provider value={{ mode: "light" }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/first" element={<First />} />
          <Route path="/second" element={<Second />} />
          <Route path="/third" element={<Third />} />
        </Routes>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
