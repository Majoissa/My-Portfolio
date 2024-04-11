import React from "react";
import Title from "../GeneralComponents/Title";
import { VStack, Box, useColorMode } from "@chakra-ui/react";
import AboutGrid from "./AboutGrid";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? "#dbea4b" : "#456f79"}
      h={"105vh"}
      py={10}
      zIndex={111}
      position={"relative"}
      top={{ base: "-470", sm: "-380", md: "-310", lg: "-50" }}
    >
      <VStack position={"relative"} mt={500} spacing={8}>
        <Box
          position={"absolute"}
          top={{ base: "300", sm: "280", md: "260", lg: "120" }}
        >
          <Title text={"A little bit about me!"} />
        </Box>
        <AboutGrid />
      </VStack>
    </Box>
  );
};

export default About;
