import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <Router>
        <>
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/projects`}>Projects</Link></li>
                    <li><Link to={`/contact`}>Contact</Link></li>
                </ul>
            </nav>
        </div>
        </>
        </Router>
    )
}

export default NavBar;