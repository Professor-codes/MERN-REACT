import logo from './logo.svg';
import './App.css';
import { UseStateDemo } from './usestatedemo/UseStateDemo';
import { Users } from './users/Users';
import { AlertFun } from './function/AlertFun';

function App() {
  return (
    <div className="App">
      <UseStateDemo />
      <Users />
      <AlertFun />
    </div>
  );
}

export default App;
