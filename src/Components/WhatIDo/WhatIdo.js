import React from "react";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import Title from "../GeneralComponents/Title";
//import Subtitle from "../GeneralComponents/Subtitle";
import WhatIdoGrid from "./WhatIdoGrid";
import { Fade } from "react-awesome-reveal";

const WhatIdo = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#d988c2, #d9b5d3,#d988c2)"
          : "linear(to-r, #32282e, #725c76, #32282e)"
      }
      py={{ base: "60px", md: "150px" }}
    >
      <VStack>
        <Fade cascade direction="down" damping={0.3}>
          <Box mb={{ base: "60px", md: "100px" }}>
            <Title text={"What I do"} />
          </Box>
        </Fade>
        <WhatIdoGrid />
      </VStack>
    </Box>
  );
};

export default WhatIdo;
