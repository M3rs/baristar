import './App.scss';
import FA from 'react-fontawesome';
import { useState } from 'react';
import { CoffeeCalc } from './CoffeeCalc';

function App() {

  const coffeeData = [
    { Id: 1, Name: "Esspresso", Ratio: 2, Grind: 8  },
    { Id: 2, Name: "French Press", Ratio: 16, Grind: 35 },
    { Id: 3, Name: "Pour Over", Ratio: 15, Grind: 20 }
  ];

  const [coffee, setCoffee] = useState({Id: 0});
  const [showCalc, setShowCalc] = useState(false);

  const changeCoffee = (e) => {
    const idx = e.target.value;
    setCoffee(coffeeData[idx]);
    setShowCalc(true);
  }

  return (
    <div className="App">
      <header className="App-header"></header>
      <main>
        <h1><FA name="coffee"/> Baristar</h1>

        <div className="coffeeTypeBox">
          <label>Coffee Type</label>
          <select defaultValue="0" onChange={changeCoffee} className="coffeeType">
            <option value="0" disabled>-- Please Select --</option>
            {
              coffeeData.map((c, index) => {
                return (
                  <option key={index} value={index}>{c.Name}</option>
                )
              })
            }
          </select>
        </div>

        <CoffeeCalc show={showCalc} coffee={coffee} />

      </main>

    </div>
  );
}

export default App;
