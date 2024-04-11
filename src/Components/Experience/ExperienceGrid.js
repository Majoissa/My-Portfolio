import React from "react";
import {
  VStack,
  Box,
  SimpleGrid,
  useColorMode,
  Avatar,
} from "@chakra-ui/react";
import {
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoGithub,
} from "react-icons/io";
import {
  IoLogoFigma,
  IoLogoAndroid,
  IoLogoReact,
  IoLogoPython,
} from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { FaUnity } from "react-icons/fa6";
import { FaNode } from "react-icons/fa";
import { TbBrandPhp } from "react-icons/tb";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { TbBrandFirebase } from "react-icons/tb";
import { Fade } from "react-awesome-reveal";

import { Parallax } from "react-scroll-parallax";

const ExperienceGrid = () => {
  const { colorMode } = useColorMode();
  return (
    <SimpleGrid
      columns={{ base: 2, md: 4, lg: "5" }}
      spacing={1}
      width={{ base: "70%", md: "50%" }}
      position={"relative"}
      top={{ base: "-500", sm: "-450", md: "-400", lg: "-300" }}
    >
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <IoLogoAndroid
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <IoLogoCss3
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <IoLogoFigma
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <IoLogoGithub
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <IoLogoHtml5
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <IoLogoNodejs
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <IoLogoPython
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <IoLogoReact
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <FaJava
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <FaNode
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <FaUnity
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <TbBrandPhp
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <SiAdobeillustrator
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <SiAdobephotoshop
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
      <Parallax speed={20}>
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", sm: "xl" }}
              icon={
                <TbBrandFirebase
                  fontSize={{ base: "1.5rem", sm: "3rem" }}
                  color={colorMode === "light" ? "#162d33" : "#846076"}
                />
              }
              bg={colorMode === "light" ? "#f8f5ca" : "#162d33"}
            />
          </VStack>
        </Fade>
      </Parallax>
    </SimpleGrid>
  );
};

export default ExperienceGrid;
