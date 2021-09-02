import React from "react";
import '../App.css';

const Header = () => {
    return (
    <>
        <div className="video-container">
                <video src="/videos/forest-video.mp4" autoPlay loop muted />
                <h1>WELCOME VISITORS</h1>
                <h2>Coding Portfolio & Website By Devan Chaney</h2>
        </div>
    </>
    )
}

export default Header;