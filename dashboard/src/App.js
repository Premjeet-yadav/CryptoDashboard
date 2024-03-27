import './App.css';
import CryptoPrices from './Components/CryptoPrices';
import PopulationChart from './Components/PopulationChart';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App" >
      <Sidebar>
      <PopulationChart/>
      <h1>Bitcoin Price</h1>
      <CryptoPrices/>
      </Sidebar>
      
    </div>
  );
}

export default App;
