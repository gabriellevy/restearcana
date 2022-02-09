import '../styles/App.css';
import Banner from './Banner'
import Table from './Table'
import LieuxDePouvoir from './LieuxDePouvoir'

function App() {
  return (
    <div className="App">
      <Banner/><br/>
      <div>
        <Table/><LieuxDePouvoir/>
      </div>
    </div>
  );
}

export default App;
