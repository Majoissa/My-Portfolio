import React from "react";
import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const MyDescription = ({ text }) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Fade cascade direction="left">
        <Heading
          as={"h2"}
          fontFamily=' "Karla", sans-serif'
          fontWeight={500}
          color={colorMode === "light" ? "#486060" : "white"}
          zIndex={5}
          size={{ base: "xs", md: "sm", lg: "md" }}
          textAlign={{ base: "center", md: "left" }}
          mt={{ base: "15", md: "50", lg: "75" }}
        >
          {text}
        </Heading>
      </Fade>
    </Box>
  );
};

export default MyDescription;
