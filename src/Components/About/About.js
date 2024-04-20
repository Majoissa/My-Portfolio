import React from "react";
import Title from "../GeneralComponents/Title";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import AboutGrid from "./AboutGrid";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      mt={{ base: "100vh", lg: "115vh" }}
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#f4eeae, #f0e9a2,#f0e9a2,#f4eeae)"
          : "linear(to-r, #215460, #456f79, #215460)"
      }
      py={{ base: "5rem", md: "8rem" }}
      w={"100%"}
      minW={"100%"}
      maxW={"100%"}
    >
      <VStack spacing={8}>
        <Fade cascade direction="down" damping={0.3}>
          <Box mb={25}>
            <Title text={"A little bit about me."} />
          </Box>
        </Fade>
        <AboutGrid />
      </VStack>
    </Box>
  );
};

export default About;
