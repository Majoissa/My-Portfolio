import React from "react";
import Nav from "../Navbar/Nav";
import Main from "../Main/Main";
import { Box, Image } from "@chakra-ui/react";
const HomePage = () => {
  const image = require("./formas.png");
  return (
    <Box>
      <Nav />
      <Image
        src={image}
        alt="hola"
        w={"100%"}
        objectFit={"cover"}
        opacity={0.5}
        zIndex={0}
      />
      <Main />
    </Box>
  );
};

export default HomePage;
