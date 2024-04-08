import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Title = ({ text }) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Fade>
        <Heading
          as={"h1"}
          fontFamily='"Hanken Grotesk", sans-serif'
          fontWeight={"bold"}
          textTransform={"uppercase"}
          color={colorMode === "light" ? "#486060" : "white"}
          zIndex={5}
          mt={{
            base: "-40vw",
            sm: "-45vw",
            md: "-50vw",
          }}
          size={{ base: "md", sm: "lg", md: "xl" }}
        >
          {text}
        </Heading>
      </Fade>
    </Box>
  );
};

export default Title;
