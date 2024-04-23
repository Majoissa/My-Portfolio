import Texts from "../../GeneralComponents/Texts";
import Footer from "../../Footer/Footer";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import PagesGrid from "./PagesGrid";
import GoHomeButton from "../../GeneralComponents/GoHomeButton";

const Pages = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Box>
      <VStack
        py={{ base: "4rem" }}
        pb={{ base: "8rem" }}
        bg={colorMode === "light" ? "#debed7" : "#836483"}
      >
        <Texts title={t("pages")} subtitle={t("pages-description")} />
        <GoHomeButton />
        <PagesGrid />
      </VStack>
      <Footer />
    </Box>
  );
};

export default Pages;
