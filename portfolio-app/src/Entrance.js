import './Entrance.css';
import { Link } from 'react-router-dom';

function Entrance(){
    return(
        <div>
            <p>entrance</p>
            <br />
            <Link to="/home" >LEARN ABOUT ME</Link>
        </div>
    );
}

export default Entrance;