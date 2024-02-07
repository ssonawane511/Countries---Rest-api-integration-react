
import CountriesProvide from './context/index'
import Home from './pages';

function App() {
  return (
    <div className="App"> 
      <CountriesProvide>
        {/* children */}
        <Home></Home>
      </CountriesProvide>
    </div>
  );
}

export default App;
