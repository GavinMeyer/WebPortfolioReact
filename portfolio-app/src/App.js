import logo from './ferret_goof_smile.webp';
import './App.css';
import Header from './Header';
import Footer from './Footer';

function Bio(){

  return (
    <div className="App">
      <header className="App-header">
        <a href="https://www.youtube.com/watch?v=ZBoz2mitPiY">
          <img src={logo} className="App-logo" alt="logo"/>
        </a>
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
