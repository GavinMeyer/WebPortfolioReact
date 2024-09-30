import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='scroll'>
            <h3>

                <Link to="/" className="order1">
                    GAVIN MEYER
                </Link>
                
                <div className="rightward">
                    <Link to="/home" className="order3">
                        About
                    </Link>
                    
                    <Link to="/projects" className="order2">
                        Projects
                    </Link>
                </div>

            </h3>
        </div>
    );
}

export default Header;
