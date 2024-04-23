import Title from "./Title";
import Subtitle from "./Subtitle";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const Texts = ({ title, subtitle }) => {
  return (
    <VStack
      spacing={8}
      zIndex={1}
      w={{ base: "50%", md: "45%", lg: "35%" }}
      textAlign={"center"}
      mt={{ base: "5rem", md: "8rem" }}
    >
      <Fade cascade direction="down" damping={0.3}>
        <Title text={title} />
        <Subtitle text={subtitle} />
      </Fade>
    </VStack>
  );
};

export default Texts;
