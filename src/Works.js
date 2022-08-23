import React from 'react'
import Navbar from './Navbar';
import { motion } from "framer-motion";


const Works = () => {
  return (
    <>
      <Navbar />

      <br></br>
      <br></br>
      <br></br>

      <div className="pr">
        <motion.h2 animate={{ y: ["55px", "3px"] }} className="skills-text">
          Projects
        </motion.h2>
      </div>
    </>
  )
}
export default Works;