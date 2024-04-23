import Texts from "../../GeneralComponents/Texts";
import Footer from "../../Footer/Footer";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import AppsGrid from "./AppsGrid";
import GoHomeButton from "../../GeneralComponents/GoHomeButton";

const Apps = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Box>
      <VStack
        py={{ base: "4rem" }}
        pb={{ base: "8rem" }}
        bg={colorMode === "light" ? "#c9e3ea" : "#4ea8ba"}
      >
        <Texts title={t("apps")} subtitle={t("app-description")} />
        <GoHomeButton />
        <AppsGrid />
      </VStack>
      <Footer />
    </Box>
  );
};

export default Apps;
