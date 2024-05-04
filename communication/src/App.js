import './App.css';
import Content from './Content';
import Footer from './Footer';
import { Header } from './Header';

function App() {

  let header = "This is header with PROPS"
  let data = {
    title: "one",
    desc: "Description of one"
  }

  return (
    <div className="App">
      <Header h={header} />
      <Content d={data}/>
      <Footer />
    </div>
  );
}

export default App;
