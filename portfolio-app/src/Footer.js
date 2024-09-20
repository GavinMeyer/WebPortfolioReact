import './Footer.css';
import { Link } from 'react-router-dom';

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
                    Working on this website.
                </h3>
                
                <br />

                <Link to="/">
                    Take me to Entrance page
                </Link>
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
