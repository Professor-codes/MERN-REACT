import './App.css';
import { SelectData } from './components/SelectData';

function App() {

  const data = [
    {
      name: "Select Country",
      value: "country",
      city: ["city"]
    },
    {
      name: "United States of America",
      value: "usa",
      city: ["New York", "San Francisco", "Oklahoma City", "Chicago", "Los Angeles"]
    },
    {
      name: "India",
      value: "ind",
      city: ["Mumbai", "Chandigarh", "Kolkata", "Hyderabad", "Ahmedabad"]
    },
    {
      name: "United Arab Emirates",
      value: "uae",
      city: ["Dubai", "Abu Dhabi", "Al Ain", "Sharjah", "Umm Al Quwain"]
    },
    {
      name: "Turkey",
      value: "turk",
      city: ["İstanbul", "İzmir", "Antalya", "Konya", "Trabzon"]
    },
    {
      name: "France",
      value: "frnc",
      city: ["Paris", "Marseille", "Bordeaux", "Nice", "Montpellier"]
    },
  ]

  return (
    <div className="App">
      <SelectData country={data} />
    </div>
  );
}

export default App;
