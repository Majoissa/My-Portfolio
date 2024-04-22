import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const ExperienceTexts = () => {
  const { t } = useTranslation();
  return (
    <VStack
      spacing={8}
      zIndex={1}
      w={{ base: "50%", md: "45%", lg: "35%" }}
      textAlign={"center"}
      mt={{ base: "5rem", md: "8rem" }}
    >
      <Fade cascade direction="down" damping={0.3}>
        <Title text={t("experience-title")} />
        <Subtitle text={t("experience-description")} />
      </Fade>
    </VStack>
  );
};

export default ExperienceTexts;
