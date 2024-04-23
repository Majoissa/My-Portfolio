import { Button } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { Link } from "wouter";

const GoHomeButton = () => {
  const { t } = useTranslation();
  return (
    <Link to="/">
      <Button mt={"4rem"} variant="solid" colorScheme="teal">
        {t("home-btn")}
      </Button>
    </Link>
  );
};

export default GoHomeButton;
