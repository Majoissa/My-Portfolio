import React from "react";
import {
  VStack,
  Box,
  SimpleGrid,
  useColorMode,
  Avatar,
} from "@chakra-ui/react";
import { IoMdColorPalette, IoMdCode, IoIosChatbubbles } from "react-icons/io";
import MyDescription from "../About/MyDescription";
import { Fade } from "react-awesome-reveal";

const WhatIdoGrid = () => {
  const { colorMode } = useColorMode();
  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} width={"90%"}>
      <Fade cascade direction="left" damping={0.1}>
        <VStack
          bg={colorMode === "light" ? "#f7f2c3" : "#162d33"}
          py={30}
          borderTopLeftRadius={"0px"}
          borderTopRightRadius={"40px"}
          borderBottomLeftRadius={"40px"}
          borderBottomRightRadius={"0px"}
          boxShadow="5px 2px 10px 0 rgba(0, 0, 0, 0.5)"
        >
          <Avatar
            boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
            size="2xl"
            icon={<IoMdCode fontSize="3rem" color="#162d33" />}
            bg={colorMode === "light" ? "#dbea4b" : "#456f79"}
          />
          <Box width={"50%"}>
            <MyDescription
              text={
                "I like to code and learn new programming things. I am constantly trying to innovate, and taking new courses to expand my knowledge and improve my professionalism."
              }
            />
          </Box>
        </VStack>
      </Fade>
      <Fade cascade direction="left" damping={0.1}>
        <VStack
          bg={colorMode === "light" ? "#f7f2c3" : "#162d33"}
          py={30}
          borderTopLeftRadius={"0px"}
          borderTopRightRadius={"40px"}
          borderBottomLeftRadius={"40px"}
          borderBottomRightRadius={"0px"}
          boxShadow="5px 2px 10px 0 rgba(0, 0, 0, 0.5)"
        >
          <Avatar
            boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
            size="2xl"
            icon={<IoMdColorPalette fontSize="3rem" color="#162d33" />}
            bg={colorMode === "light" ? "#dbea4b" : "#456f79"}
          />
          <Box width={"50%"}>
            <MyDescription
              text={
                "I am passionate about design, and I am constantly incorporating new tools to implement it, improving my Web pages, apps and videogames."
              }
            />
          </Box>
        </VStack>
      </Fade>
      <Fade cascade direction="left" damping={0.1}>
        <VStack
          bg={colorMode === "light" ? "#f7f2c3" : "#162d33"}
          py={30}
          borderTopLeftRadius={"0px"}
          borderTopRightRadius={"40px"}
          borderBottomLeftRadius={"40px"}
          borderBottomRightRadius={"0px"}
          boxShadow="5px 2px 10px 0 rgba(0, 0, 0, 0.5)"
        >
          <Avatar
            boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
            size="2xl"
            icon={<IoIosChatbubbles fontSize="3rem" color="#162d33" />}
            bg={colorMode === "light" ? "#dbea4b" : "#456f79"}
          />
          <Box width={"50%"}>
            <MyDescription
              text={
                "Among my soft skills are my adaptability to new challenges and my good communication when working in a team, applying Agile methodologies."
              }
            />
          </Box>
        </VStack>
      </Fade>
    </SimpleGrid>
  );
};

export default WhatIdoGrid;
