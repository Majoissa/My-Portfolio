import React from "react";
import Title from "../GeneralComponents/Title";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#efe259, #f4e97a,#efe259)"
          : "linear(to-r, #215460, #456f79, #215460)"
      }
      py={{ base: "20", md: "40" }}
      position={"absolute"}
      mt={{ lg: "15rem" }}
      w={"100%"}
    >
      <VStack spacing={8}>
        <Fade cascade direction="down" damping={0.3}>
          <Box mb={25}>
            <Title text={"My projects"} />
          </Box>
        </Fade>
      </VStack>
    </Box>
  );
};

export default Projects;
