import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import NavBar from './component/NavBar';
import Video from './component/Video';
import Main from './component/Main';
import 'bootstrap';


function App() {
  return (
    <>
      <div className="navbar">
        <NavBar />
      </div>
      <div className="video">
        <Video />
      </div>
      <div className="main-body-1">
        <Main />
      </div>
    </>
  );
}

export default App;
