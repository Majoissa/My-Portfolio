import React from "react";
import Nav from "../Navbar/Nav";

import { Box } from "@chakra-ui/react";
import Main from "../Main/Main";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import WhatIdo from "../WhatIDo/WhatIdo";
import Footer from "../Footer/Footer";
import Contact from "../Contact/Contact";
const HomePage = () => {
  return (
    <Box>
      <Nav />
      <Main />
      <About />
      <WhatIdo />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </Box>
  );
};

export default HomePage;
