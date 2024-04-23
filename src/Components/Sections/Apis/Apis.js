import Texts from "../../GeneralComponents/Texts";
import Footer from "../../Footer/Footer";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ApisGrid from "./ApisGrid";
import GoHomeButton from "../../GeneralComponents/GoHomeButton";

const Apis = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Box>
      <VStack
        py={{ base: "4rem" }}
        pb={{ base: "8rem" }}
        bg={colorMode === "light" ? "#efe259" : "#989565"}
      >
        <Texts title={t("apis")} subtitle={t("api-description")} />
        <GoHomeButton />
        <ApisGrid />
      </VStack>
      <Footer />
    </Box>
  );
};

export default Apis;
