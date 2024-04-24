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
        color={colorMode === "light" ? "#486060" : "white"}
        size={{ base: "md", sm: "lg", md: "xl", lg: "2xl" }}
      >
        {text}
      </Heading>
    </Box>
  );
};

export default Title;
