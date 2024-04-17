import React from "react";
import Nav from "../Navbar/Nav";

import { Box } from "@chakra-ui/react";
import Main from "../Main/Main";
import About from "../About/About";
import Experience from "../Experience/Experience";
import Projects from "../Projects/Projects";
import WhatIdo from "../WhatIDo/WhatIdo";
const HomePage = () => {
  return (
    <Box>
      <Nav />
      <Main />
      <About />
      <WhatIdo />
      <Experience />
      <Projects />
    </Box>
  );
};

export default HomePage;
