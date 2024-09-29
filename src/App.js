import './App.css';
import logo from './images/ferret_goof_smile.webp';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function Bio(){

  return (
    <div className="App">
      <header className="App-header">
        <Link to="https://en.wikipedia.org/wiki/Ferret">
          <img src={logo} className="App-logo" alt="logo"/>
        </Link>
        <br /><br />

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

function App() {
  return (
    <>
      <Header />
      <Bio />
      <Footer />
    </>
  );
}

export default App;
