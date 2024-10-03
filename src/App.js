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
import godotLogo from './logos/godot_logo.png';
import unityLogo from './logos/unitywhite_logo.webp';


function Bio(){

  return (
    <div className="App">
      <header className="App-header">
        
        <div className="bio-headline-row">
          <div className="bio-headline-body">
            <h1>
              A Little About Me
            </h1>

            <h4 className="bio-aboutme">
            I am a passionate software engineer that can go above and beyond with any challenge presented. In as few as 3 years, I graduated from the University of Central Florida with a bachelors in Computer Science. I believe in my aptitude for building on my own skills in an environment that allows me to flourish.
            <br /><br />
            Feel free to reach out!
            <br />
            Phone: +1 843-696-5700
            <br />
            Email: gavinplay@live.com
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

          <img src={selfPhoto} alt="Gavin Meyer head shot" className="bio-headline-photo"/>
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
        <h1>Technologies</h1>  
      </div>

      <div className="tech-div">
        <img src={reactLogo} title="React.js" alt="React.js Logo" className="tech-logo"/>
        <img src={unityLogo} title="Unity" alt="Unity Logo" className="tech-logo"/>
        <img src={godotLogo} title="Godot" alt="Godot Logo" className="tech-logo"/>
      </div>
    </>
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
