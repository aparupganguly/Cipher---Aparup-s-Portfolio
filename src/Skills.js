import React from 'react'
import Navbar from "./Navbar";
import {motion} from 'framer-motion';

const Skills=()=> {
  return (
    <>
    <Navbar/>
    <br></br>
    <br></br>
    <br></br>
    <div className="pr">
      <motion.h2
      
      animate ={{y:['55px','3px']}}
      className="skills-text">Skills</motion.h2>
    </div>
    </>
  )
}
export default Skills;