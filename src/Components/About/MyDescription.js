import React from "react";
import { Box, Heading, useColorMode } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const MyDescription = ({ text }) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Fade>
        <Heading
          as={"h2"}
          fontFamily='"Quicksand", sans-serif'
          fontWeight={500}
          color={colorMode === "light" ? "#486060" : "white"}
          zIndex={5}
          mt={{
            base: "5vh",
            md: "2vh",
          }}
          size={{ base: "xs", sm: "sm", md: "md" }}
          textAlign={{ base: "center", md: "left" }}
        >
          {text}
        </Heading>
      </Fade>
    </Box>
  );
};

export default MyDescription;
