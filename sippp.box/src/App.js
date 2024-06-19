import logo from './sippp-logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Sippp, or it didn't happen.
        </p>
        <a
          className="App-link"
          href="https://github.com/SiPPProtocol"
          target="_blank"
          rel="noopener noreferrer"
        >
          Download
        </a>
      </header>
    </div>
  );
}

export default App;
