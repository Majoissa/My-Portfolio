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
          fontFamily='"Paytone One", sans-serif'
          fontWeight={"bold"}
          textTransform={"uppercase"}
          color={colorMode === "light" ? "#486060" : "white"}
          zIndex={5}
          mt={{
            base: "-115vh",
            sm: "-108vh",
            md: "-100vh",
            lg: "-80vh",
          }}
          textShadow={"1px 1px 10px rgba(0, 0, 0, 0.5)"}
          size={{ base: "md", sm: "lg", md: "xl" }}
        >
          {text}
        </Heading>
      </Fade>
    </Box>
  );
};

export default Title;
