import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const ContactTexts = () => {
  return (
    <VStack
      spacing={8}
      zIndex={1}
      maxW={{ base: "50%", md: "45%", lg: "35%" }}
      margin={"auto"}
      textAlign={"center"}
      mb={{ base: "5rem", md: "8rem" }}
    >
      <Fade cascade direction="down" damping={0.3}>
        <Title text={"Contact"} />
        <Subtitle
          text={
            "¡Do not hesitate to contact me through this form and I will respond as soon as possible!"
          }
        />
      </Fade>
    </VStack>
  );
};

export default ContactTexts;
