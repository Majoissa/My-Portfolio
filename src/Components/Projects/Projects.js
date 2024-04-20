import React from "react";
import Title from "../GeneralComponents/Title";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import ProjectsGrid from "./ProjectsGrid";

const Projects = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#f4eeae, #f0e9a2,#f0e9a2,#f4eeae)"
          : "linear(to-r, #215460, #456f79, #215460)"
      }
      py={{ base: "4rem", md: "8rem" }}
      position={"absolute"}
      mt={{ base: "42rem", sm: "45rem", md: "52rem", lg: "60rem", xl: "63rem" }}
      w={"100%"}
    >
      <VStack spacing={8}>
        <Fade cascade direction="down" damping={0.3}>
          <Box mb={{ base: "3rem", lg: "5rem" }}>
            <Title text={"My projects"} />
          </Box>
        </Fade>
        <ProjectsGrid />
      </VStack>
    </Box>
  );
};

export default Projects;
