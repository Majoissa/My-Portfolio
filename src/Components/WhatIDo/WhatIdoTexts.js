import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const WhatIdoTexts = () => {
  const { t } = useTranslation();
  return (
    <VStack spacing={8}>
      <Fade cascade direction="down" damping={0.3}>
        <Title text={t("whatido-title")} />
        <Subtitle text={t("whatido-subtitle")} />
      </Fade>
    </VStack>
  );
};

export default WhatIdoTexts;
