import { Box, Heading, useColorMode } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Subtitle = ({ text }) => {
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
            base: "-115vh",
            sm: "-106vh",
            md: "-90vh",
            lg: "-78vh",
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
