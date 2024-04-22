import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const ContactTexts = () => {
  const { t } = useTranslation();
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
        <Title text={t("contact-title")} />
        <Subtitle text={t("contact-subtitle")} />
      </Fade>
    </VStack>
  );
};

export default ContactTexts;
