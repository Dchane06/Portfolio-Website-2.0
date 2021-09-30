import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Main from './Main'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import clouds from '../clouds.png';
import grass from '../grass.png'

const NavBar = () => {
    return (
        <Router>
        <>
        <div className="navbar" style={{marginTop: '40px', textDecoration: 'underline'}}>
            <nav>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/projects`}>Projects</Link></li>
                    <li><Link to={`/contact`}>Contact</Link></li>
                </ul>
            </nav>
        </div>
        
        <div className="clouds">
    <img src={clouds}  alt='clouds' style={{height: '275px', width: '1400px'}}/>
        </div>

        <div>
        <Switch>
            <Route path="/contact">
                <Contact />
            </Route>
            <Route path="/projects">
                <Projects />
            </Route>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/">
                <Main />
            </Route>
        </Switch>
        </div>
        </>

        <div className="grass">
            <img src={grass} alt='grass' style={{height: '125px', width: '1450px', marginBottom: '0px'}}/>
        </div>

        </Router>
    )
}

export default NavBar;