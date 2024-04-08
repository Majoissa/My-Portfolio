import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Subtitle = ({ text }) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Fade>
        <Heading
          as={"h1"}
          fontFamily='"Hanken Grotesk", sans-serif'
          fontWeight={500}
          color={colorMode === "light" ? "#486060" : "white"}
          zIndex={5}
          mt={{
            base: "-35vw",
            sm: "-42vw",
            md: "-48vw",
          }}
          size={{ base: "xs", sm: "sm", md: "md" }}
        >
          {text}
        </Heading>
      </Fade>
    </Box>
  );
};

export default Subtitle;
