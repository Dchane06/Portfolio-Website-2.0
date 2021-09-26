import React from 'react';

const Contact = () => {
    return (
        <>
        <h1 className="animate__animated animate__zoomIn" style={{textAlign: 'center'}}>Contact Page</h1>
        <hr class="sep-3" />
        <h1 className="animate__animated animate__zoomIn" style={{textAlign: 'center'}}>Email: <a href="mailto:dchane06@hotmail.com">Dchane06@hotmail.com</a></h1>
        <h1 className="animate__animated animate__zoomIn" style={{textAlign: 'center'}}><a href="https://github.com/Dchane06" target="_blank">GitHub</a>
        <br />
              <a className="animate__animated animate__zoomIn" href="https://www.linkedin.com/in/james-chaney-coding" target="_blank">LinkedIn</a></h1>             
        <br />
        <hr class="sep-3" />
        <br />
            <iframe style={{marginLeft: '405px'}}src="https://docs.google.com/forms/d/e/1FAIpQLSec-jzeT9dM9_HZ6g06t4LT1s3sVpyEQnUrCU_LM0XtccMhIQ/viewform?embedded=true" width="640" height="844" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
        </>
    )
}

export default Contact;