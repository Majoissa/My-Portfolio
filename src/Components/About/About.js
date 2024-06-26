import React from "react";
import Title from "../GeneralComponents/Title";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import AboutGrid from "./AboutGrid";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const About = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Box
      id="about"
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
            <Title text={t("about-title")} />
          </Box>
        </Fade>
        <AboutGrid />
      </VStack>
    </Box>
  );
};

export default About;
