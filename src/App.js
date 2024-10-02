import './App.css';
// import logo from './images/ferret_goof_smile.webp';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import selfPhoto from './images/professional_photo.jpg';
import linkedInLogo from './images/LinkedIn_logo_initials.png'
import gitHubLogo from './images/github-mark-white.png';

function Bio(){

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="bio-headline-row">
          <img src={selfPhoto} alt="Gavin Meyer head shot" className="bio-headline-photo"/>
          <div className="bio-headline-body">
            <h1>
              A little about me
            </h1>

            <h4 className="bio-aboutme">
              I am an enthusiastic software engineer that graduated with a BS of Computer Science in only three years. My experience resides primarily in Java with knowledge of C, C#, Python, HTML, and SQL. I have also worked in a group with an Agile/Scrum structure. I believe strongly in my passion for coding and would love to work for a company that would let me unleash this passion while also helping me grow.
            </h4>

            <div className="bio-links">
              <Link to="/resume"><button className="bio-links-col">My Resume</button></Link>
              
              <a href="https://www.linkedin.com/in/gavin-meyer-52b756309/"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img src={linkedInLogo} alt="LinkedIn Logo with link" className="bio-links-col" />
              </a>

              <a href="https://github.com/GavinMeyer"
                  target="_blank"
                  rel="noopener noreferrer"
              >
                  <img src={gitHubLogo} alt="GitHub Logo with link" className="bio-links-col" />
              </a>
            </div>
          </div>
        </div>

      </header>

    </div>
  );

  // <a href="./GavinMeyerResumeF.docx" download="Gavin_Meyer_Resume">My Resume</a>
  /*
  <Link to="https://en.wikipedia.org/wiki/Ferret">
          <img src={logo} className="App-logo" alt="logo"/>
  </Link>
  <br /><br />
  */
}

function ProjectList() {
  return (
    <div>
      <h1>List of projects.........</h1>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <Bio />
      <hr />
      <ProjectList />
      <Footer />
    </>
  );
}

export default App;
