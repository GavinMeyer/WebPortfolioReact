import './Footer.css';

function Footer(){
    return(
        <div className="row">
            <div className="column">
                <h1>
                    Gavin's Portfolio
                </h1>
                <br />
                <h1>
                    What's Next?
                </h1>
                <h3>
                    Updating and improving this website!
                </h3>
                
                <br />
            </div>
            
            <div className="column">
                <h4>
                    843-696-5700
                <br />
                    gavinplay@live.com
                </h4>

                <a href="https://www.linkedin.com/in/gavin-meyer-52b756309/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        LinkedIn
                    </button>
                </a>

                <a href="https://github.com/GavinMeyer"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        Personal GitHub
                    </button>
                </a>

                <a href="https://github.com/GavinMeyerSchool"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button>
                        School GitHub
                    </button>
                </a>


            </div>
        </div>
    );
}

export default Footer;
