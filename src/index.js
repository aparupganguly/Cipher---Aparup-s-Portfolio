import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from "./Navbar";
import { ChakraProvider , ColorModeScript} from '@chakra-ui/react';
import Lottie from "./Lottie";
import Homebody from "./Homebody";
import {BrowserRouter as Router , Routes ,Route} from "react-router-dom";
import Skills from "./Skills";
import Study from "./Study";
import Projects from "./Projects";
import Works from "./Works";
import Contact from "./Contact";
import Resume from "./Resume";
import 'bootstrap/dist/css/bootstrap.min.css';
import Glowing from "./Glowing";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


    <ChakraProvider>
    <ColorModeScript initialColorMode="system" />



   <Router>
     <Routes>
      <Route path ="/" element={<Homebody/>}/>
      <Route path ="/skills" element={<Skills/>}/>
      <Route path ="/study" element={<Study/>}/>
      <Route path ="/projects" element={<Projects/>}/>
      <Route path ="/works" element={<Works/>}/>
      <Route path ="/contact" element={<Contact/>}/>
      <Route path ="/resume" element={<Resume/>}/>
      <Route path ="/glow" element={<Glowing/>}/>
     </Routes>
   </Router>
 
  </ChakraProvider>


);

