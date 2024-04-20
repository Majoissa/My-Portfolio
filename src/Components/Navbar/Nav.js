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

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsScrolled(currentScrollY > 0);
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
        boxShadow="0px 0px 5px 0 #162d33"
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
                  <a href="#home">About me</a>
                </ListItem>
                <ListItem p={4}>
                  <a href="#home">What I do</a>
                </ListItem>
                <ListItem p={4}>
                  <a href="#home">Experience</a>
                </ListItem>
                <ListItem p={4}>
                  <a href="#home">My projects</a>
                </ListItem>
                <ListItem p={4}>
                  <a href="#home">Contact</a>
                </ListItem>
              </UnorderedList>
            </List>
          </Box>
        </Collapse>
      </Box>
      <Box
        as="nav"
        boxShadow={isScrolled ? "0px 0px 5px #162d33" : "none"}
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
              <a href="#home">About me</a>
            </ListItem>
            <ListItem>
              <a href="#home">What I do</a>
            </ListItem>
            <ListItem>
              <a href="#home">Experience</a>
            </ListItem>
            <ListItem>
              <a href="#home">My projects</a>
            </ListItem>
            <ListItem>
              <a href="#home">Contact</a>
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
