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

        <div style={{ textAlign: 'left' }}>
            <div className="animate__animated animate__bounceInLeft">
                <h1>Just a simple programmer from a small town 
                    <br />
                    in Kentucky.
                    Looking for answers in the world, just like you.
                    <br />
                    Focused, Determined, Ready Set Go Mentality, 
                    <br />
                    That's Me.
                    <br />
                    <br />
                    <br />
                </h1>
        </div>
        <div style={{ textAlign: 'right', marginLeft: '600px' }}>
        <div className="animate__animated animate__bounceInRight">

                    <h1>A full stack developer having fun.
                        <br />
                        My passion is not just for coding.
                        <br />
                        It's also for the love of computers,
                        <br />
                        And for the love of technology.
                        <br />
                        I'm always looking for the next best thing.</h1>
                        <br />
                        <br />
                        <h2>EST: 2020</h2>
        </div>
            </div>
            </div>
            </div>

        <hr class="sep-3" />
        </>
    )
}

export default About;