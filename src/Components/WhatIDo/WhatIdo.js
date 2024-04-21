import React from "react";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import WhatIdoTexts from "./WhatIdoTexts";
import WhatIdoGrid from "./WhatIdoGrid";
import { Fade } from "react-awesome-reveal";

const WhatIdo = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      id="whatIdo"
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#af91a7,#dfbdd7, #dfbdd7,#af91a7)"
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
