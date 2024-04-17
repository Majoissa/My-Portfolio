import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";

const Subtitle = ({ text }) => {
  const { colorMode } = useColorMode();
  return (
    <Box>
      <Heading
        position={"relative"}
        as={"h2"}
        mily=' "Hedvig Letters Sans", sans-serif'
        fontWeight={500}
        color={colorMode === "light" ? "#486060" : "white"}
        size={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
      >
        {text}
      </Heading>
    </Box>
  );
};

export default Subtitle;
