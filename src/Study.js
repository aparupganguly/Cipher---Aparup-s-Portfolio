import React from 'react'
import Navbar from './Navbar';
import { motion } from "framer-motion";
function Study() {
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>

      <div className="pr">
        <motion.h2

          animate={{ y: ['55px', '3px'] }}
          className="skills-text">Study</motion.h2>
      </div>



    </>
  )
}
export default Study;