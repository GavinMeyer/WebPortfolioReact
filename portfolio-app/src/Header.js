import './Header.css';

function Header(){
    return(
        <div className='scroll'>
            <h3>

                <a href="/#" className="order1">
                    GAVIN MEYER
                </a>
                
                <div className="rightward">
                    <a href="https://gavinplay.wixsite.com/gavin-meyer-portfoli" className="order3">
                        WIX
                    </a>
                    
                    <a href="/#test" className="order2">
                        Test
                    </a>
                </div>

            </h3>
        </div>
    );
}

export default Header;
