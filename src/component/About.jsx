import React from 'react';

const About = () => {
    return (
        <>
        <div className="about-section">
            <br />

            <h3>About Me</h3>

            <br />

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gridGap: 20, textAlign: 'center' }}>
            <div>
                <p>Welcome to my website! Here you will find all of the latest things I'm up to such as 
                    current & completed projects. First, let me tell you about myself. I'm a guy from a small town in Kentucky who became 
                    interested in coding when he realized his love for computers and technology and decided to try and get 
                    into something that would bring him closer to the tech field.
                    <br />
                    <br />
                    So, I began learning Python to start out, coded a couple of things with it, and saw an opprotunity 
                    to learn fullstack development as a career. Since then I've learned Javascript, HTML, CSS, React, Bootstrap, NodeJS, ExpressJS, PostgreSql, etc and aspire to learn more and more of what the coding community has to offer.
                    I strive to sharpen my skills in the frontend AND backend aspect of coding.

                </p>
            </div>
            <div>
            <p>Now to get a bit more personal.. When I'm not coding and I have free time away from my job, 
                I enjoy playing video games, such as Rocket League, Hearthstone, Valorant, etc. I also enjoy journaling and writing 
                poetry from time to time to take my mind away from the world! I try my best to live as relaxed and at ease as possible, 
                adopting some of the Buddhist teachings to try and consistently keep a level and a clear head in my daily life. Meditation 
                I have found does wonder for the brain and can help keep your soul connected to yourself and to the Earth that we're living on.
                
                <br />
                <br />
                I also have a very cute Alaskan Malamute named Luna who is one of the many joys in my life. Along with
                a wonderful girlfriend who I love to spend time with as well. Nature walks are one of the things we love to do along with our puppy companion.
                </p>
            </div>
            <div className="goals">
            <p>Here are some goals I'd like to set for myself:</p>
                <ul>
                    <li>Improved learning of backend technologies</li>
                    <li>Write cleaner code</li>
                    <li>Polish off my HTML and CSS skills so that they may become second nature</li>
                    <li>Improve my understanding of Javascript deeply</li>
                    <li>Learn other programming languages.</li>
                </ul>
            </div>        
        </div>
        </div>

        <hr class="sep-3" />
        </>
    )
}

export default About;