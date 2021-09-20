import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import React from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';

const NavBar = () => {
    return (
        <>
        <div className="navbar">
            <nav>
                <ul>
                    <li><Link to={`/home`}>Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default NavBar;