import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const ExperienceTexts = () => {
  return (
    <VStack
      spacing={8}
      zIndex={1}
      w={{ base: "50%", md: "45%", lg: "35%" }}
      textAlign={"center"}
      position={"absolute"}
      mt={{ base: "5rem", md: "8rem" }}
    >
      <Fade cascade direction="down" damping={0.3}>
        <Title text={"My experience."} />
        <Subtitle
          text={
            "In this section you can checkout some of the technologies that I have worked with"
          }
        />
      </Fade>
    </VStack>
  );
};

export default ExperienceTexts;
