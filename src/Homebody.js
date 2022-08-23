import React, { Suspense, lazy } from 'react';
import { Box, Spacer } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Navbar';

import Lottie from './Lottie';
import { motion } from 'framer-motion';

const Homebody = () => {
  return (
    <>
      <div>

        <Navbar />
        <br></br>
        <br></br>
        <br></br>
        <div className="hb"   >
          <Lottie />
          <motion.div className="box-div"
            animate={{
              y: ['90px', '10px'],
            }}
          >
            <Box className="box" bg="#38b2ac" w="50%" p={10}>


              <p align="center" className="Hello">
                Hello,I'm a Full Stack Developer and Programmer Based in India
              </p>

            </Box>
          </motion.div>



        </div>



        <motion.div className="resume-btn-div">
          <Link className="resume-link" to="/resume">My Resume.. </Link>
        </motion.div>




      </div>

    </>
  );
};
export default Homebody;
