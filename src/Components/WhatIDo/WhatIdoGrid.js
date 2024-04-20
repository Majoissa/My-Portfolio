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
  const iconArray = [IoIosChatbubbles, IoMdCode, IoIosChatbubbles];
  const descriptionsArray = [
    "I like to code and learn new programming things. I am constantly trying to innovate, and taking new courses to expand my knowledge and improve my professionalism.",
    "I like to code and learn new programming things. I am constantly trying to innovate, and taking new courses to expand my knowledge and improve my professionalism.",
    "I like to code and learn new programming things. I am constantly trying to innovate, and taking new courses to expand my knowledge and improve my professionalism.",
  ];

  return (
    <SimpleGrid columns={{ base: 1, md: 3 }} spacing={5} width={"90%"}>
      {iconArray.map((Icon, index) => (
        <Fade cascade direction="left" damping={0.1} key={index}>
          <VStack
            bg={colorMode === "light" ? "#f7f2c3" : "#162d33"}
            py={50}
            borderTopLeftRadius={"0px"}
            borderTopRightRadius={"40px"}
            borderBottomLeftRadius={"40px"}
            borderBottomRightRadius={"0px"}
            boxShadow="2px 2px 5px 0 rgba(0, 0, 0, 0.5)"
          >
            <Avatar
              boxShadow="2px 2px 5px rgba(0, 0, 0, 0.5)"
              size="xl"
              icon={
                <Icon
                  fontSize="3rem"
                  color={colorMode === "light" ? "#162d33" : "white"}
                />
              }
              bg={colorMode === "light" ? "#efe259" : "#215460"}
              mb={{ base: "none", md: "-50" }}
              style={{ transition: "transform 0.3s" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "rotateY(180deg)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "rotateY(0deg)")
              }
              onTouchStart={(e) =>
                (e.currentTarget.style.transform = "rotateY(180deg)")
              }
              onTouchEnd={(e) =>
                (e.currentTarget.style.transform = "rotateY(0deg)")
              }
            />
            <Box width={"70%"}>
              <MyDescription text={descriptionsArray[index]} />
            </Box>
          </VStack>
        </Fade>
      ))}
    </SimpleGrid>
  );
};

export default WhatIdoGrid;
