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

const Nav = () => {
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
                <ListItem p={4}>
                  <a
                    href="#about"
                    onClick={() => setActiveSection("about")}
                    style={{
                      fontWeight: activeSection === "about" ? "700" : "500",
                      color:
                        activeSection === "about"
                          ? colorMode === "light"
                            ? "black"
                            : "#f2eca9"
                          : "inherit",
                    }}
                  >
                    About me
                  </a>
                </ListItem>
                <ListItem p={4}>
                  <a
                    href="#whatIdo"
                    onClick={() => setActiveSection("whatIdo")}
                    style={{
                      fontWeight: activeSection === "whatIdo" ? "700" : "500",
                      color:
                        activeSection === "whatIdo"
                          ? colorMode === "light"
                            ? "black"
                            : "#f2eca9"
                          : "inherit",
                    }}
                  >
                    What I do
                  </a>
                </ListItem>
                <ListItem p={4}>
                  <a
                    href="#experience"
                    onClick={() => setActiveSection("experience")}
                    style={{
                      fontWeight:
                        activeSection === "experience" ? "700" : "500",
                      color:
                        activeSection === "experience"
                          ? colorMode === "light"
                            ? "black"
                            : "#f2eca9"
                          : "inherit",
                    }}
                  >
                    Experience
                  </a>
                </ListItem>
                <ListItem p={4}>
                  <a
                    href="#projects"
                    onClick={() => setActiveSection("projects")}
                    style={{
                      fontWeight: activeSection === "projects" ? "700" : "500",
                      color:
                        activeSection === "projects"
                          ? colorMode === "light"
                            ? "black"
                            : "#f2eca9"
                          : "inherit",
                    }}
                  >
                    My projects
                  </a>
                </ListItem>
                <ListItem p={4}>
                  <a
                    href="#contact"
                    onClick={() => setActiveSection("contact")}
                    style={{
                      fontWeight: activeSection === "contact" ? "700" : "500",
                      color:
                        activeSection === "contact"
                          ? colorMode === "light"
                            ? "black"
                            : "#f2eca9"
                          : "inherit",
                    }}
                  >
                    Contact
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setActiveSection("contact")}
                  >
                    Contact
                  </a>
                </ListItem>
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
            <ListItem>
              <a
                href="#about"
                onClick={() => setActiveSection("about")}
                style={{
                  fontWeight: activeSection === "about" ? "700" : "500",
                  color:
                    activeSection === "about"
                      ? colorMode === "light"
                        ? "black"
                        : "#f2eca9"
                      : "inherit",
                }}
              >
                About me
              </a>
            </ListItem>
            <ListItem>
              <a
                href="#whatIdo"
                onClick={() => setActiveSection("whatIdo")}
                style={{
                  fontWeight: activeSection === "whatIdo" ? "700" : "500",
                  color:
                    activeSection === "whatIdo"
                      ? colorMode === "light"
                        ? "black"
                        : "#f2eca9"
                      : "inherit",
                }}
              >
                What I do
              </a>
            </ListItem>
            <ListItem>
              <a
                href="#experience"
                onClick={() => setActiveSection("experience")}
                style={{
                  fontWeight: activeSection === "experience" ? "700" : "500",
                  color:
                    activeSection === "experience"
                      ? colorMode === "light"
                        ? "black"
                        : "#f2eca9"
                      : "inherit",
                }}
              >
                Experience
              </a>
            </ListItem>
            <ListItem>
              <a
                href="#projects"
                onClick={() => setActiveSection("projects")}
                style={{
                  fontWeight: activeSection === "projects" ? "700" : "500",
                  color:
                    activeSection === "projects"
                      ? colorMode === "light"
                        ? "black"
                        : "#f2eca9"
                      : "inherit",
                }}
              >
                My projects
              </a>
            </ListItem>
            <ListItem>
              <a
                href="#contact"
                onClick={() => setActiveSection("contact")}
                style={{
                  fontWeight: activeSection === "contact" ? "700" : "500",
                  color:
                    activeSection === "contact"
                      ? colorMode === "light"
                        ? "black"
                        : "#f2eca9"
                      : "inherit",
                }}
              >
                Contact
              </a>
            </ListItem>
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
