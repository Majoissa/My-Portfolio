import React from "react";
import Title from "../GeneralComponents/Title";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import AboutGrid from "./AboutGrid";
import { Fade } from "react-awesome-reveal";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#efe259, #f4e97a,#efe259)"
          : "linear(to-r, #215460, #456f79, #215460)"
      }
      py={{ base: "20", md: "40" }}
    >
      <VStack spacing={8}>
        <Fade cascade direction="down" damping={0.3}>
          <Box mb={25}>
            <Title text={"A little bit about me!"} />
          </Box>
        </Fade>
        <AboutGrid />
      </VStack>
    </Box>
  );
};

export default About;
