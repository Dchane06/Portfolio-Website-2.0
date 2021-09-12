import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Video from './component/Video';
import Main from './component/Main';
import About from './component/About';


function App() {
  return (
    <>
    <NavBar />

        <Main />

        <About />

        <p style={{fontSize: "10px"}}>Created by: Devan Chaney | Last Update: 09/12/2021</p>
    </>
  );
}

export default App;
