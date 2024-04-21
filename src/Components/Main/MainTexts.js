import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack, HStack, Button } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const MainTexts = () => {
  return (
    <VStack
      w={"100%"}
      h={{ base: "100vh", lg: "120vh" }}
      spacing={8}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      textAlign={"center"}
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
