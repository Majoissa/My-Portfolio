import React from "react";
import Nav from "../Navbar/Nav";
import Main from "../Main/Main";
import { Box } from "@chakra-ui/react";
import About from "../About/About";
import WhatIdo from "../WhatIDo/WhatIdo";
import Experience from "../Experience/Experience";
const HomePage = () => {
  return (
    <Box>
      <Nav />
      <Main />
      <About />
      <WhatIdo />
      <Experience />
    </Box>
  );
};

export default HomePage;
