import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Video from './component/Video';
import Main from './component/Main';
import About from './component/About';
<<<<<<< HEAD
import { BrowserRouter as Router, Link,} from 'react-router-dom';
=======
import Imgs from './component/Carosel';
import carouselImgs from './component/Carosel2';
import { BrowserRouter as Router, Link} from 'react-router-dom';
>>>>>>> 178d0cdf7ea3a0fb9803e354e68d95393d60cf85


function App() {
  return (
    <>
    <NavBar />
<<<<<<< HEAD
=======

        <Main />

        <Imgs />

        <p style={{fontSize: "10px"}}>Created by: Devan Chaney | Last Update: 09/12/2021</p>
>>>>>>> 178d0cdf7ea3a0fb9803e354e68d95393d60cf85
    </>
  );
}

export default App;
