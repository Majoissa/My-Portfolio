import React, { useState, useEffect } from "react";
import {
  Box,
  List,
  ListItem,
  UnorderedList,
  Button,
  IconButton,
  Collapse,
  useDisclosure,
  useColorMode,
  Avatar,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useTranslation } from "react-i18next";
import LanguageSelector from "../GeneralComponents/LanguageSelector";

const Nav = () => {
  const { t } = useTranslation();
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onToggle } = useDisclosure();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleScroll = () => {
    const sections = [
      "home",
      "about",
      "whatIdo",
      "experience",
      "projects",
      "contact",
    ];
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 0);
    const sectionOffsets = sections.map((section) => {
      const element = document.getElementById(section);
      return element ? element.offsetTop : null;
    });

    const currentSection = sections.find((section, index) => {
      return (
        currentScrollY >= sectionOffsets[index] &&
        (index === sections.length - 1 ||
          currentScrollY < sectionOffsets[index + 1])
      );
    });

    setActiveSection(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navItems = ["about", "whatIdo", "experience", "projects", "contact"];

  const profile = require("./profile.png");
  return (
    <Box>
      <Box
        as="nav"
        id="navbar"
        bg={colorMode === "light" ? "#a6ddeb" : "#162d33;"}
        zIndex={5}
        display={{ base: "flex", lg: "none" }}
        justifyContent={"flex-end"}
        alignItems={"center"}
        position={"fixed"}
        minH={"60px"}
        minW={"100vw"}
      >
        <Avatar
          name="María José Issa"
          src={profile}
          bg={colorMode === "light" ? "#162d33" : "#846076"}
          position={"absolute"}
          left={5}
          m={1.5}
        />
        <Box position={"absolute"} left={"5rem"}>
          <LanguageSelector />
        </Box>
        <IconButton
          onClick={toggleColorMode}
          colorScheme="gray"
          _hover={{ opacity: 0.8 }}
          mr="70px"
          borderRadius={100}
        >
          {colorMode === "light" ? (
            <MoonIcon boxSize={5} color={"#486060"} />
          ) : (
            <SunIcon boxSize={5} />
          )}
        </IconButton>
        <Button
          onClick={onToggle}
          colorScheme="gray"
          _hover={{ opacity: 0.8 }}
          variant="ghost"
          position="absolute"
          right={3}
          top={0}
          zIndex={1}
          mt={3}
        >
          <HamburgerIcon
            boxSize={30}
            color={colorMode === "light" ? "#486060" : "white"}
          />
        </Button>

        <Collapse in={isOpen} animateOpacity textAlign={"center"}>
          <Box
            bg={colorMode === "light" ? "#a6ddeb" : "#162d33;"}
            position="absolute"
            top="100%"
            right={0}
            zIndex={0}
            width="100%"
            display="flex"
            justifyContent="center"
          >
            <List
              textAlign="center"
              fontFamily=' "Karla", sans-serif'
              fontWeight={500}
              textTransform={"uppercase"}
            >
              <UnorderedList
                listStyleType={"none"}
                color={colorMode === "light" ? "#486060" : "white"}
                fontSize={{
                  base: "12px",
                  md: "16px",
                }}
              >
                {navItems.map((item, index) => (
                  <ListItem key={index} p={4}>
                    <a
                      href={`#${item}`}
                      onClick={() => setActiveSection(item)}
                      style={{
                        fontWeight: activeSection === item ? "bold" : "normal",
                        color:
                          activeSection === item
                            ? colorMode === "light"
                              ? "#162d33"
                              : "#f2eca9"
                            : "inherit",
                      }}
                    >
                      {t(`navbar.${index}`)}
                    </a>
                  </ListItem>
                ))}
              </UnorderedList>
            </List>
          </Box>
        </Collapse>
      </Box>
      <Box
        as="nav"
        bg={
          isScrolled
            ? colorMode === "light"
              ? "#a6ddeb"
              : "#162d33"
            : "transparent"
        }
        display={{ base: "none", lg: "block" }}
        position={"fixed"}
        top={0}
        left={0}
        right={0}
        zIndex={999}
        minH={{ base: "60px" }}
        transition="background-color 0.3s"
      >
        <Avatar
          name="María José Issa"
          src={profile}
          bg={colorMode === "light" ? "#162d33" : "#846076"}
          position={"absolute"}
          left={5}
          m={{ base: "1.5" }}
          size={{ base: "md" }}
        />
        <Box
          position={"absolute"}
          left={"5rem"}
          top={"1rem"}
          zIndex={10}
          border={"none"}
        >
          <LanguageSelector />
        </Box>
        <List
          amily='"Josefin Sans", sans-serif'
          fontWeight={500}
          textTransform={"uppercase"}
          pr={15}
        >
          <UnorderedList
            listStyleType={"none"}
            display={"flex"}
            flexDirection={"row"}
            justifyContent={"flex-end"}
            alignItems={"center"}
            position={"relative"}
            minH={"60px"}
            gap={10}
            color={colorMode === "light" ? "#486060" : "white"}
            fontSize={{
              base: "12px",
              md: "16px",
            }}
            fontFamily=' "Karla", sans-serif'
          >
            {navItems.map((item, index) => (
              <ListItem key={index}>
                <a
                  href={`#${item}`}
                  onClick={() => setActiveSection(item)}
                  style={{
                    fontWeight: activeSection === item ? "bold" : "normal",
                    color:
                      activeSection === item
                        ? colorMode === "light"
                          ? "#162d33"
                          : "#f2eca9"
                        : "inherit",
                  }}
                >
                  {t(`navbar.${index}`)}
                </a>
              </ListItem>
            ))}
            <IconButton
              size={{ base: "sm" }}
              onClick={toggleColorMode}
              colorScheme="gray"
              _hover={{ opacity: 0.8 }}
              mr="10px"
              borderRadius={100}
            >
              {colorMode === "light" ? (
                <MoonIcon boxSize={{ base: "5" }} color={"#486060"} />
              ) : (
                <SunIcon boxSize={{ base: "5", xl: "8" }} />
              )}
            </IconButton>
          </UnorderedList>
        </List>
      </Box>
    </Box>
  );
};

export default Nav;
