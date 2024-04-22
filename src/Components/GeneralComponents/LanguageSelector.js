import { useTranslation } from "react-i18next";
import { Select, Box } from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";

function LanguageSelector() {
  const { colorMode } = useColorMode();
  const { i18n } = useTranslation();

  const changeLanguage = (event) => {
    i18n.changeLanguage(event.target.value);
  };

  return (
    <Box>
      <Select
        size="sm"
        onChange={changeLanguage}
        border={"none"}
        fontFamily=' "Karla", sans-serif'
        fontWeight={500}
        color={colorMode === "light" ? "#486060" : "white"}
      >
        <option
          style={{ fontFamily: ' "Karla", sans-serif', fontWeight: "bold" }}
          value="en"
        >
          EN
        </option>
        <option
          style={{ fontFamily: ' "Karla", sans-serif', fontWeight: "bold" }}
          value="es"
        >
          ES
        </option>
        <option
          style={{ fontFamily: ' "Karla", sans-serif', fontWeight: "bold" }}
          value="ca"
        >
          CAT
        </option>
      </Select>
    </Box>
  );
}

export default LanguageSelector;
