import React from 'react';
import alien from '../alien.png';
import me from '../me.jpeg';
import "animate.css";

const About = () => {
    return (
        <>
        <div className="about-section">
            <br />

            <br />

        <div style={{ textAlign: 'left', color: 'white'}}>
            <div className="animate__animated animate__bounceInLeft">
                <h1>Just a simple programmer from a small town 
                    <br />
                    in Kentucky.
                    Looking for answers in the world, just like you.
                    <br />
                    Focused, determined, ready set go mentality, 
                    <br />
                    that's me. 😊
                    <br />
                    <br />
                    <br />
                </h1>
        </div>
        </div>
        <div style={{ textAlign: 'right', marginLeft: '600px', color: 'white'}}>
        <div className="animate__animated animate__bounceInRight">

                    <h1>A full stack developer having fun.
                        <br />
                        My passion is not just for coding.
                        <br />
                        It's also for the love of computers
                        <br />
                        and for the love of technology.
                        <br />
                        I'm always looking for the next best thing. 💻
                        </h1>
                        <br />
                        <br />
                        <br />
        </div>
        </div>
        <div style={{textAlign: 'left', marginRight: '0px', color: 'white'}}>
        <div className="animate__animated animate__bounceInLeft">

                    <h1>Skills in HTML, CSS, Javascript, React, 
                        <br />
                        ReactRouter, Bootstrap, PostgreSQL, NodeJS, ExpressJS, 
                        <br />
                        ElephantSQL, DBeaver, Python and a tiny bit of Java. ☕️</h1>
            </div>
                        <br />
                        <br />
        </div>
        </div>

        <hr class="sep-3" />
        <p style={{fontSize: '10px', color: 'white'}}>EST: 2020 | Last Update: September 26, 2021 4:31 AM</p>
        </>
    )
}

export default About;