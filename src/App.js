import logo from './logo.svg';
import './App.css';
import Gretting from './components/pure/gretting';
import GrettingF from './components/pure/grettingF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* Componente Gretting */}
{/*         <Gretting name='Alan'></Gretting> */}
<GrettingF name='Alan'></GrettingF>
      </header>
    </div>
  );
}

export default App;
