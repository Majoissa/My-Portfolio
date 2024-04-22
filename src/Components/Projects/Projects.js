import React from "react";
import Title from "../GeneralComponents/Title";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import ProjectsGrid from "./ProjectsGrid";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const { colorMode } = useColorMode();
  return (
    <Box
      id="projects"
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#f4eeae, #f0e9a2,#f0e9a2,#f4eeae)"
          : "linear(to-r, #215460, #456f79, #215460)"
      }
      py={{ base: "4rem", md: "8rem" }}
      mt={{ base: "8rem", md: "12rem" }}
      w={"100%"}
    >
      <VStack spacing={8}>
        <Fade cascade direction="down" damping={0.3}>
          <Box mb={{ base: "3rem", lg: "5rem" }}>
            <Title text={t("project-title")} />
          </Box>
        </Fade>
        <ProjectsGrid />
      </VStack>
    </Box>
  );
};

export default Projects;
