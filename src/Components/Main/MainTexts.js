import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack, HStack, Button } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const MainTexts = () => {
  return (
    <VStack
      spacing={8}
      position={"absolute"}
      top={{
        base: "120",
        sm: "200",
        md: "250",
        lg: "300",
        xl: "500",
      }}
    >
      <Fade cascade direction="down" damping={0.3}>
        <Title text={"Hi, I'm María José Issa."} />
        <Subtitle text={"A full-stack developer and UX Enthusiast"} />
        <HStack>
          <Button size={{ base: "sm", lg: "lg" }} colorScheme="teal">
            CV
          </Button>
          <Button size={{ base: "sm", lg: "lg" }} colorScheme="teal">
            Contact me!
          </Button>
        </HStack>
      </Fade>
    </VStack>
  );
};

export default MainTexts;
