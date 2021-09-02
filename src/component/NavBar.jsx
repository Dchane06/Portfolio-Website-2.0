import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactBootStrap from "react-bootstrap";
import React from 'react';
const NavBar = () => {
    return (
        <>
        <ReactBootStrap.Navbar bg="dark" variant="dark">
    <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="#home">Chaney Coding</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Nav className="me-auto">
      <ReactBootStrap.Nav.Link href="#home">Home</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#features">About Me</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">Portfolio</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#contact">Contact</ReactBootStrap.Nav.Link>

    </ReactBootStrap.Nav>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
        </>
    )
}

export default NavBar;