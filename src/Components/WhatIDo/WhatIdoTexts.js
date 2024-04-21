import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const WhatIdoTexts = () => {
  return (
    <VStack spacing={8}>
      <Fade cascade direction="down" damping={0.3}>
        <Title text={"What I do."} />
        <Subtitle
          text={
            "Here you can discover my passions and things that I like to do"
          }
        />
      </Fade>
    </VStack>
  );
};

export default WhatIdoTexts;
