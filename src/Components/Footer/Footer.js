import {
  Box,
  VStack,
  HStack,
  SimpleGrid,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { LuCopyright } from "react-icons/lu";
const Footer = () => {
  const { colorMode } = useColorMode();
  return (
    <Box
      py={"4rem"}
      bg={colorMode === "light" ? "#a6ddeb" : "#162d33;"}
      color={colorMode === "light" ? "#486060" : "white"}
      fontSize={{
        base: "12px",
        md: "16px",
      }}
      width={"full"}
      fontFamily={' "Karla", sans-serif'}
      fontWeight={"600"}
    >
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={5}
        p={5}
        maxWidth={{ base: "90%", sm: "70%", md: "60%" }}
        margin={"auto"}
      >
        <VStack align={"start"}>
          <Text fontWeight={700} textTransform={"uppercase"}>
            María José Issa
          </Text>
          <Text>
            Full-stack developer in constant training, passionate about the
            field of technology and learning.
          </Text>
          <HStack>
            <LuCopyright />
            <Text>All rigths reserved</Text>
          </HStack>
        </VStack>
        <VStack>
          <Text fontWeight={700} textTransform={"uppercase"}>
            Social
          </Text>
          <HStack>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Majoissa"
            >
              <FaGithub fontSize={"2rem"} />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/mariajoseissa/"
            >
              <FaLinkedin fontSize={"2rem"} />
            </a>
            <a href="mailto:tuemail@example.com">
              <CiMail fontSize={"2rem"} />
            </a>
          </HStack>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;
