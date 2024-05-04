import Texts from "../../GeneralComponents/Texts";
import Footer from "../../Footer/Footer";
import { Box, VStack, useColorMode } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import VideogameGrid from "./VideoGameGrid";
import GoHomeButton from "../../GeneralComponents/GoHomeButton";

const Videogames = () => {
  const { colorMode } = useColorMode();
  const { t } = useTranslation();
  return (
    <Box>
      <VStack
        py={{ base: "4rem" }}
        pb={{ base: "8rem" }}
        bg={colorMode === "light" ? "#f1c4d6" : "#956b82"}
      >
        <Texts title={t("games")} subtitle={t("game-description")} />
        <GoHomeButton />
        <VideogameGrid />
      </VStack>
      <Footer />
    </Box>
  );
};

export default Videogames;
