import Title from "../GeneralComponents/Title";
import Subtitle from "../GeneralComponents/Subtitle";
import React from "react";
import { VStack, HStack, Button } from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";

const MainTexts = () => {
  const { t } = useTranslation();
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
        <Title text={t("welcome-title")} />
        <Subtitle text={t("welcome-subtitle")} />
        <HStack>
          <Button
            size={{ base: "sm", lg: "lg" }}
            colorScheme="teal"
            fontFamily=' "Karla", sans-serif'
          >
            CV
          </Button>
          <Button
            size={{ base: "sm", lg: "lg" }}
            colorScheme="teal"
            fontFamily=' "Karla", sans-serif'
          >
            {t("contact-button")}
          </Button>
        </HStack>
      </Fade>
    </VStack>
  );
};

export default MainTexts;
