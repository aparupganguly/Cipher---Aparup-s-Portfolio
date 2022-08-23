import React from 'react'
import Navbar from "./Navbar";
import {Link } from 'react-router-dom';

function Study() {
  return (
    <>
    <Navbar/>
      <br></br>
      <br></br>
    <div className="resume-page">
      <br></br>
    <b className="name-in-resume">Aparup Ganguly</b>
    
      <p>
      Software Developer
      </p>
      Contact Number: 6297893392
      <p>
      Email id:  <a target="_blank" href ="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSBncJHZTHkwsfGzwsFqPKVkSwglBZrGQtRgFqKJMsTWFFZBGPqrPGzGqgCFbksRCWTWNvCV">aparupganguly86@gmail.com</a>
      </p>
      <p>
      GitHub : <a target="_blank" href ="https://github.com/aparupganguly">aparupganguly</a>
      </p>
      <p>
      LinkedIn : <a target="_blank" href ="https://www.linkedin.com/in/aparup-ganguly-90a307223/">Aparup Ganguly</a>
      </p>

    </div>
    </>
  )
}
export default Study;