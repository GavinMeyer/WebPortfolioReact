import './App.css';
// import logo from './images/ferret_goof_smile.webp';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import selfPhoto from './images/professional_photo.jpg';
import linkedInLogo from './logos/LinkedIn_logo_initials.png'
import gitHubLogo from './logos/github-mark-white.png';
import javaLogo from './logos/java_logo.png';
import htmlLogo from './logos/html_logo2.png';
import cLogo from './logos/c_logo.png';
import cSharpLogo from './logos/csharp_logo.png';
import pythonLogo from './logos/python_logo.png';
import cssLogo from './logos/css_logo.png';
import sqlLogo from './logos/sql_logo.png';
import reactLogo from './logos/react_logo.png';


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

function TechStack() {
  return (
    <>
      <div className="tech-div">
        <h1>Programming Languages</h1>  
      </div>

      <div className="tech-div">
        <img src={javaLogo} title="Java" alt="Java Logo" className="tech-logo"/>
        <img src={cLogo} title="C" alt="C (language) Logo" className="tech-logo"/>
        <img src={cSharpLogo} title="C#" alt="C# Logo" className="tech-logo"/>
        <img src={htmlLogo} title="HTML" alt="HTML Logo" className="tech-logo"/>
        <img src={cssLogo} title="CSS" alt="CSS Logo" className="tech-logo"/>
        <img src={pythonLogo} title="Python" alt="Python Logo" className="tech-logo"/>
        <img src={sqlLogo} title="SQL" alt="SQL Logo" className="tech-logo"/>
      </div>

      <div className="tech-div">
        <h1>Technical Frameworks</h1>  
      </div>

      <div className="tech-div">
        <img src={reactLogo} title="React.js" alt="React.js Logo" className="tech-logo"/>
      </div>
    </>
  );
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
      <TechStack />
      <Footer />
    </>
  );
}

export default App;
