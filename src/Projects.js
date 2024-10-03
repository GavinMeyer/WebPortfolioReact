import './Projects.css';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';
import leftward from './images/leftward.png';
import rightward from './images/rightward.png';
import fulldot from './images/fulldot.png';
import emptydot from './images/emptydot.png';
import animelleCover from './images/animelle.png';
import crudCover from './images/crud1.png';
import roboCover from './images/robo2.png';
import minesCover from './images/mines2.png';
import websiteCover from './images/website1.png';


function setProjNumberFunction(x, isRight) {
    const end = 4;

    if (isRight){
        return (x<end) ? x+1 : 0;    
    }
    
    return (x > 0) ? x-1 : end;
}

function Dot(props) {

    if (props.projNumber === props.dotnum){
        return (<img src={fulldot} alt="Filled Dot"/>);
    }

    return (<img src={emptydot} alt="Filled Dot"/>);
}

function ProjectSelection() {
    const [projNumber, setProjNumber] = useState(0);
    // const dotMenu = ["[* - - -]", "[- * - -]", "[- - * -]", "[- - - *]"];

    // <button onClick={() => setProjNumber(setProjNumberFunction(projNumber, false))}><img src={leftward} alt="left button"/></button>
    return (
        <div className="selectionDiv">
            <input src={leftward} type="image" onClick={() => setProjNumber(setProjNumberFunction(projNumber, false))} alt="left button" />
            <Dot projNumber={projNumber} dotnum={0} />
            <Dot projNumber={projNumber} dotnum={1} />
            <Dot projNumber={projNumber} dotnum={2} />
            <Dot projNumber={projNumber} dotnum={3} />
            <Dot projNumber={projNumber} dotnum={4} /> 
            <input src={rightward} type="image" onClick={() => setProjNumber(setProjNumberFunction(projNumber, true))} alt="right button" />


            <Project projNumber={projNumber}/>

        </div>
    );
}

function Project(props) {

    if (props.projNumber === 0){
        return (
            <div className="singleProjectDiv">
                <div className="leftCol">
                    <h1>ELLE Endless Learner: AnimELLE Crossing</h1>
                    <h2>Project Type</h2>
                    <h4>School Project</h4>
                    
                    <h2>Date</h2>
                    <h4>January - July 2024</h4>

                    <h2>Link</h2>
                    <a href="https://chdr.cs.ucf.edu/elle/home" target="_blank" rel="noopener noreferrer" className="projects">
                        <h4>Elle Endless Learner Website</h4>
                    </a>

                    <h2>Tech Stack</h2>
                    <h4>C#, Unity, GitHub, Jira (Agile Scrum)</h4>

                    <h2>Group Size</h2>
                    <h4>6</h4>
                </div>
                
                <div className="rightCol">
                    <img src={animelleCover} alt="Main Menu of ELLE's Animelle Crossing game" className="cover"/>
                    
                    <h3>
                        Updated a game on ELLE's language learning website for students. <br/><br/>
                        The site's purpose is to teach students a new language through use of fun video games. Aside from helping with minor bug fixing and smaller 
                        updates around the project, my main role was creating a new minigame within the AnimELLE Crossing game. 
                        Players need to translate words by hitting various targets moving across the screen. I also created some of 
                        the sprites used in the game, and participated in making twenty-five pages of a design document.
                    </h3>
                </div>
            </div>
        );
    }
    else if (props.projNumber === 1){
        return (
            <div className="singleProjectDiv">
                <div className="leftCol">
                    <h1>LAMP Stack CRUD Website</h1>
                    <h2>Project Type</h2>
                    <h4>School Project</h4>

                    <h2>Date</h2>
                    <h4>August - October 2023</h4>

                    <h2>Tech Stack</h2>
                    <h4>HTML, PHP, Bootstrap, JavaScript, MySQL</h4>

                    <h2>Group Size</h2>
                    <h4>5</h4>
                </div>

                <div className="rightCol">
                    <img src={crudCover} alt="Front page of CRUD website" className="cover"/>

                    <h3>
                    LAMP stands for Linux, Apache, MySQL, PHP. <br />
                    CRUD stands for Create, Read, Update, Delete. <br /><br />
                    The website was a contact manager for storing and editing contacts like name, phone number, and email.
                    My role was to design and create the front-end html.
                    I utilized bootstrap to help with the construction of the design.
                    </h3>
                </div>
            </div>
        ); 
    }
    else if (props.projNumber === 3){
        return (
            <div className="singleProjectDiv">
                <div className="leftCol">
                    <h1>Robot AI (Q-Learning)</h1>
                    <h2>Project Type</h2>
                    <h4>Personal Project</h4>

                    <h2>Date</h2>
                    <h4>December 2023</h4>

                    <h2>Tech Stack</h2>
                    <h4>AI, Godot, GDScript</h4>

                    <h2>Group Size</h2>
                    <h4>1</h4>
                </div>

                <div className="rightCol">
                    <img src={roboCover} alt="Front page of CRUD website" className="cover"/>

                    <h3>
                    After learning about Q-Learning in an AI course, I found it to be fascinating. 
                    This small game was then created within the next month. The user is given a grid 
                    on which they can place a robot and any number of flags, bombs, and power treats. 
                    The user is also given multiple parameters to tweak the AI. After clicking play, 
                    the robot will learn on its own to reach the flag and avoid the bombs.
                    </h3>
                </div>
            </div>
        ); 
    }
    else if (props.projNumber === 2){
        return (
            <div className="singleProjectDiv">
                <div className="leftCol">
                    <h1>Portfolio Website</h1>
                    <h2>Project Type</h2>
                    <h4>Personal Project</h4>

                    <h2>Date</h2>
                    <h4>August - September 2024</h4>

                    <h2>Link</h2>
                    <a href="https://github.com/GavinMeyer/WebPortfolioReact" target="_blank" rel="noopener noreferrer" className="projects">
                        <h4>GitHub Repository</h4>
                    </a>

                    <h2>Tech Stack</h2>
                    <h4>HTML/CSS, Javascript, React.JS, Node.JS, Netlify</h4>

                    <h2>Group Size</h2>
                    <h4>1</h4>
                </div>

                <div className="rightCol">
                    <img src={websiteCover} alt="Front page of current portfolio website"  height="50%" className="cover"/>

                    <h3>
                    This website acts as a portfolio, which allowed me to strengthen my foundational knowledge in website design. 
                    <br />
                    Also plays a role in front-end user design.
                    </h3>
                </div>
            </div>
        ); 
    }
    else if (props.projNumber === 4){
        return (
            <div className="singleProjectDiv">
                <div className="leftCol">
                    <h1>Minesweeper</h1>
                    <h2>Project Type</h2>
                    <h4>Personal Project</h4>

                    <h2>Date</h2>
                    <h4>September 2023</h4>

                    <h2>Link</h2>
                    <a href="https://github.com/GavinMeyer/Minesweeper" target="_blank" rel="noopener noreferrer" className="projects">
                        <h4>GitHub Repository</h4>
                    </a>

                    <h2>Tech Stack</h2>
                    <h4>Godot, GDScript</h4>

                    <h2>Group Size</h2>
                    <h4>1</h4>
                </div>

                <div className="rightCol">
                    <img src={minesCover} alt="Front page of CRUD website"  height="50%" className="cover"/>

                    <h3>
                    Created my own clone of classic game Minesweeper from scratch.
                    </h3>
                </div>
            </div>
        ); 
    }
    
}

function Projects() {
    return (
       <>
            <Header />
            <ProjectSelection />
            <Footer />
        </>
    );
}

export default Projects;