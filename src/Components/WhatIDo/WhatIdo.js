import React from "react";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import Title from "../GeneralComponents/Title";
//import Subtitle from "../GeneralComponents/Subtitle";
import WhatIdoGrid from "./WhatIdoGrid";

const WhatIdo = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#d988c2, #d9b5d3,#d988c2)"
          : "linear(to-r, #32282e, #725c76, #32282e)"
      }
      position={"relative"}
      top={{ base: "-470", sm: "-380", md: "-310", lg: "-50" }}
      py={{ base: "120px", md: "170px" }}
    >
      <VStack>
        <Box
          position={"absolute"}
          top={{ base: "850", sm: "800", md: "820", lg: "630" }}
          mt={0}
          zIndex={2}
        >
          <Title text={"What I do"} />
        </Box>
        <WhatIdoGrid />
      </VStack>
    </Box>
  );
};

export default WhatIdo;
