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
import { useLocation } from "wouter";

const ContactForm = () => {
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
      const response = await fetch("http://localhost:3001/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, mail, message }),
      });
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
        onSubmit={handleSubmit}
        maxW={{ base: "90%", sm: "85%", md: "60%", lg: "40%" }}
        bg={"white"}
        margin={"auto"}
        px={"2rem"}
        borderRadius={"30px"}
        color={"black"}
      >
        <FormControl mt={50} maxW={600} isRequired>
          <FormLabel mt={5}>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={handlenameChange}
            onBlur={() => handleBlur("name")}
            placeholder="Name"
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
            Enter your name.
          </FormHelperText>
          <FormLabel mt={5}>Email</FormLabel>
          <Input
            type="email"
            value={mail}
            onChange={handlemailChange}
            onBlur={() => handleBlur("mail")}
            placeholder="Email"
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
            Enter your email.
          </FormHelperText>
          <FormLabel mt={5}>message</FormLabel>
          <Textarea
            value={message}
            onChange={handleMessageChange}
            onBlur={() => handleBlur("message")}
            placeholder="Message"
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
            Enter your message.
          </FormHelperText>
          <Button mt={5} mb={20} colorScheme="teal" type="submit">
            Send
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
              Message sent successfully
            </AlertDialogHeader>

            <AlertDialogBody>
              Your message has been sent successfully. ¡I will contact you as
              soon as possible!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="green" onClick={onClose} ml={3}>
                Accept
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
              Failed to send email
            </AlertDialogHeader>

            <AlertDialogBody>
              Your message has not been sent. ¡You can try again!
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Accept
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Box>
  );
};

export default ContactForm;
