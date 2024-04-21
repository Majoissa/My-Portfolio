import { Box, useColorMode } from "@chakra-ui/react";
import ContactForm from "./ContactForm";
import ContactTexts from "./ContactTexts";

const Contact = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      id="contact"
      bgGradient={
        colorMode === "light"
          ? "linear(to-r,#af91a7,#dfbdd7, #dfbdd7,#af91a7)"
          : "linear(to-r, #32282e, #725c76, #725c76, #32282e)"
      }
      py={{ base: "5rem", md: "8rem" }}
    >
      <ContactTexts />
      <ContactForm />
    </Box>
  );
};

export default Contact;
