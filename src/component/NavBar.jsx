import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Main from './Main'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

const NavBar = () => {
    return (
        <Router>
        <>
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/about`}>About</Link></li>
                    <li><Link to={`/projects`}>Projects</Link></li>
                    <li><Link to={`/contact`}>Contact</Link></li>
                </ul>
            </nav>
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
        </Router>
    )
}

export default NavBar;