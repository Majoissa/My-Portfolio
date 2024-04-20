import React from "react";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import WhatIdoTexts from "./WhatIdoTexts";
import WhatIdoGrid from "./WhatIdoGrid";
import { Fade } from "react-awesome-reveal";

const WhatIdo = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#cd6bb1,#d988c2, #d988c2,#cd6bb1)"
          : "linear(to-r, #32282e, #725c76, #725c76, #32282e)"
      }
      py={{ base: "5rem", md: "8rem" }}
    >
      <VStack>
        <Box
          mb={{ base: "5rem", md: "7rem" }}
          w={{ base: "50%", md: "45%", lg: "35%" }}
          textAlign={"center"}
        >
          <WhatIdoTexts />
        </Box>
        <WhatIdoGrid />
      </VStack>
    </Box>
  );
};

export default WhatIdo;
