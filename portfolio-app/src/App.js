import logo from './logo.svg';
import './App.css';
// import testComponent from './Test.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, world!
        </p>
        <a
          className="App-link"
          href="https://gavinplay.wixsite.com/gavin-meyer-portfoli"
          target="_blank"
          rel="noopener noreferrer"
        >
          Look at completed portfolio (Made in Wix)
        </a>

        <a href="./GavinMeyerResumeF.docx" download="Gavin_Meyer_Resume">My Resume</a>
      
      </header>
    </div>
  );
}

export default App;
