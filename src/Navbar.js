import React, { useState } from "react";
import { HStack, Heading } from "@chakra-ui/react";
import "./index.css";
import { FaSun, FaMoon, FaBars } from "react-icons/fa";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  IconButton,
  useColorMode,
} from "@chakra-ui/react";

import { motion } from "framer-motion";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <nav className="navbar navbar-light fixed-top">
        <Link to="/" className="logo">
          Aparup Ganguly
        </Link>
        <Link to="/skills" className={isMobile ? "skillsl-mobile" : "skillsl"}>
          Skills
        </Link>
        <Link to="/study"  className={isMobile ? "studyl-mobile" : "studyl"}>
          Study
        </Link>
        <Link to="/projects" className={isMobile ? "projectsl-mobile" : "projectsl"}>
          Projects
        </Link>
        <Link to="/works" className={isMobile ? "worksl-mobile" : "worksl"}>
          Works
        </Link>

        <IconButton
          className="icnbtn"
          icon={colorMode === "light" ? <FaSun /> : <FaMoon />}
          onClick={toggleColorMode}></IconButton>
        <IconButton
          className="icnbtn2"
          icon={<FaBars />}
          onClick={()=> setIsMobile(!isMobile)}></IconButton>
      </nav>

      <br></br>
      <br></br>
    </>
  );
};

export default Navbar;
