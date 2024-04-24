import React from "react";
import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import AboutImage from "./AboutImage";
import MyDescription from "./MyDescription";
import { useTranslation } from "react-i18next";

const AboutGrid = () => {
  const { t } = useTranslation();
  return (
    <VStack>
      <SimpleGrid
        width={{ base: "80%", xl: "65%", "2xl": "50%" }}
        columns={{ base: 1, md: 2 }}
        spacingX={{ base: "0px", md: "5px" }}
      >
        <Box>
          <AboutImage />
        </Box>
        <Box mt={{ lg: "3rem" }}>
          <MyDescription text={t("about-description")} />
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default AboutGrid;
