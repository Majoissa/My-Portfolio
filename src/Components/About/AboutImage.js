import React from "react";
import { Box, Image, useColorMode } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const AboutImage = () => {
  const { colorMode } = useColorMode();
  const image = require("../Navbar/profile.png");
  return (
    <Box display={"flex"} justifyContent={"center"}>
      <Fade cascade direction="down" damping={0.1}>
        <Image
          src={image}
          alt="Profile image"
          bg={colorMode === "light" ? "#162d33" : "#32282e"}
          width={{ base: "200px", md: "250px" }}
          height={{ base: "200px", md: "350px" }}
          objectFit="cover"
          boxShadow="5px 2px 10px 0 rgba(0, 0, 0, 0.5)"
          borderTopLeftRadius={{ base: "500px", md: "150px" }}
          borderTopRightRadius={{ base: "500px", md: "150px" }}
          borderBottomRadius={{ base: "500px", md: "0px" }}
        />
      </Fade>
    </Box>
  );
};

export default AboutImage;
