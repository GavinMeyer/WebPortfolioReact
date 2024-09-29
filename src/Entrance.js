import './Entrance.css';
import { Link } from 'react-router-dom';

function Entrance(){
    return(
        <div className="mainDiv">
            <div className="innerDiv">
                <h1 className='entrance'>WELCOME TO GAVIN MEYER'S PORTFOLIO</h1>
                <br />

                <div className="buttonDiv">
                    <Link to="/home">
                        <button>About Me</button>
                    </Link>
                    
                    <Link to="/projects">
                        <button>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Entrance;