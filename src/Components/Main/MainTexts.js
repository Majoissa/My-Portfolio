import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack, HStack, Button } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

const MainTexts = () => {
  return (
    <VStack spacing={8} zIndex={1} position="relative">
      <Parallax speed={20}>
        <Title text={"Hi, I'm María José Issa."} />
      </Parallax>
      <Parallax speed={20}>
        <Subtitle text={"A full-stack developer and UX Enthusiast"} />
      </Parallax>
      <Parallax speed={20}>
        <HStack
          zIndex={888}
          mt={{ base: "-800", sm: "-740", md: "-715", lg: "-520" }}
        >
          <Button colorScheme="teal">CV</Button>
          <Button colorScheme="teal">Contact me!</Button>
        </HStack>
      </Parallax>
    </VStack>
  );
};

export default MainTexts;
