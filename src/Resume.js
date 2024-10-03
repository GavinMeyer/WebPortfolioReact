import './Resume.css';
import Header from './Header';
import Footer from './Footer';

function ResumeContent() {
    
    return (
        <>
            <div className="resumeDiv">
                <iframe src= "GavinMeyerResumeL.pdf" title="resumePDF" type="application/pdf" className="resume"></iframe>
            </div>

            <div className="resumeDiv">
                <a href="./GavinMeyerResumeL.pdf" download="Gavin_Meyer_Resume">
                    <button>Download</button>
                </a>
            </div>        
        </>
    );
}

function Resume() {
    return (
      <>
        <Header />
        <ResumeContent />
        <Footer />
      </>
    );
}

export default Resume;