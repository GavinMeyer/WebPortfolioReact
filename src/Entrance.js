import './Entrance.css';
import { Link } from 'react-router-dom';

function Entrance(){
    return(
        <div className="mainDiv">
            <div className="innerDiv">
                <h1>WELCOME TO GAVIN MEYER'S PORTFOLIO</h1>
                <br />
                <Link to="/home" >LEARN ABOUT ME</Link>
            </div>
        </div>
    );
}

export default Entrance;