import React, { useState, useRef } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  VStack,
  Box,
  Textarea,
  useColorMode,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ContactForm = () => {
  const { t } = useTranslation();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const cancelRef = React.useRef();
  const { colorMode } = useColorMode();
  const [name, setname] = useState("");
  const [mail, setmail] = useState("");
  const [message, setMessage] = useState("");
  const placeholderColor = colorMode === "light" ? "gray.500" : "gray.400";

  const [touchedFields, setTouchedFields] = useState({
    name: false,
    mail: false,
    message: false,
  });

  const handlenameChange = (e) => {
    setname(e.target.value);
  };
  const handlemailChange = (e) => {
    setmail(e.target.value);
  };
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleBlur = (field) => {
    setTouchedFields((prevTouchedFields) => ({
      ...prevTouchedFields,
      [field]: true,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        "https://portfoliosever-679jvl6r8-soul-plates-projects.vercel.app/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ name, mail, message }),
        }
      );
      const responseData = await response.json();
      if (response.ok) {
        console.log("Email sent successfully", responseData);
        setIsSuccess(true);
        onOpen();
        setname("");
        setmail("");
        setMessage("");
        setTouchedFields({
          name: false,
          mail: false,
          message: false,
        });
      } else {
        console.error("Failed to send email", responseData);
        setIsError(true);
        onOpen();
        // Aquí puedes mostrar un mensaje de error al usuario
      }

      console.log(responseData);
    } catch (error) {
      console.error(error);
      setIsError(true);
      onOpen();
    }
  };
  return (
    <Box>
      <VStack
        as="form"
        fontFamily=' "Karla", sans-serif'
        onSubmit={handleSubmit}
        maxW={{ base: "90%", sm: "85%", md: "60%", lg: "40%" }}
        bg={"white"}
        margin={"auto"}
        px={"2rem"}
        borderRadius={"30px"}
        color={"#486060"}
      >
        <FormControl mt={50} maxW={600} isRequired>
          <FormLabel mt={5}>{t("name-label")}</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={handlenameChange}
            onBlur={() => handleBlur("name")}
            placeholder={t("name-label")}
            isInvalid={touchedFields.name && name === ""}
            sx={{
              "::placeholder": {
                color: placeholderColor,
              },
            }}
          />
          <FormHelperText
            mt={1}
            color={touchedFields.name && name === "" ? "red" : "gray"}
          >
            {t("name-help")}
          </FormHelperText>
          <FormLabel mt={5}>{t("mail-label")}</FormLabel>
          <Input
            type="email"
            value={mail}
            onChange={handlemailChange}
            onBlur={() => handleBlur("mail")}
            placeholder={t("mail-label")}
            isInvalid={touchedFields.mail && mail === ""}
            sx={{
              "::placeholder": {
                color: placeholderColor,
              },
            }}
          />
          <FormHelperText
            mt={1}
            color={touchedFields.mail && mail === "" ? "red" : "gray"}
          >
            {t("mail-help")}
          </FormHelperText>
          <FormLabel mt={5}>{t("message")}</FormLabel>
          <Textarea
            value={message}
            onChange={handleMessageChange}
            onBlur={() => handleBlur("message")}
            placeholder={t("message")}
            isInvalid={touchedFields.message && message === ""}
            sx={{
              "::placeholder": {
                color: placeholderColor,
              },
            }}
          />

          <FormHelperText
            mt={1}
            color={touchedFields.mail && mail === "" ? "red" : "gray"}
          >
            {t("message-help")}
          </FormHelperText>
          <Button
            mt={5}
            mb={20}
            colorScheme="teal"
            type="submit"
            fontFamily=' "Karla", sans-serif'
          >
            {t("send-button")}
          </Button>
        </FormControl>
      </VStack>

      {/*alert dialog de exito*/}
      <AlertDialog
        isOpen={isSuccess && isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => {
          setIsSuccess(false);
          onClose();
        }}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            mx={3}
            maxW={{ base: "90%", sm: "80%", md: "70%", lg: "50%", xl: "40%" }}
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("alert-header")}
            </AlertDialogHeader>

            <AlertDialogBody>{t("alert-dialog")}</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="green" onClick={onClose} ml={3}>
                {t("acept")}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>

      {/**Contenido del alert dialog error */}
      <AlertDialog
        isOpen={isError && isOpen}
        leastDestructiveRef={cancelRef}
        onClose={() => {
          setIsError(false);
          onClose();
        }}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            mx={3}
            maxW={{ base: "90%", sm: "80%", md: "70%", lg: "50%", xl: "40%" }}
          >
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              {t("alert-no-header")}
            </AlertDialogHeader>

            <AlertDialogBody>{t("alert-no-dialog")}</AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                {t("acept")}
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ContactForm;
