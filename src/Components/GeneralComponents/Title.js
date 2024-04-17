import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

const Title = ({ text }) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Heading
        position={"relative"}
        as={"h1"}
        fontFamily=' "Paytone One", sans-serif'
        fontWeight={"bold"}
        textTransform={"uppercase"}
        color={colorMode === "light" ? "#486060" : "white"}
        textShadow={"0.5px 0.5px 2px rgba(0, 0, 0, 0.5)"}
        size={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
      >
        {text}
      </Heading>
    </Box>
  );
};

export default Title;
