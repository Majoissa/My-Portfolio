import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

const ExperienceTexts = () => {
  return (
    <VStack
      spacing={8}
      zIndex={1}
      position="relative"
      mt={{ base: "-500", sm: "-430", md: "-350", lg: "-250" }}
      w={{ base: "50%", md: "35%" }}
      textAlign={"center"}
    >
      <Parallax speed={20}>
        <Title text={"My experience"} />
      </Parallax>
      <Parallax speed={20}>
        <Subtitle
          text={
            "In this section you can checkout some of the technologies that I have worked with"
          }
        />
      </Parallax>
    </VStack>
  );
};

export default ExperienceTexts;
