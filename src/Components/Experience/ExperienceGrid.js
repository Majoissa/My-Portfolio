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
import { SiPostgresql } from "react-icons/si";
import { TbSql } from "react-icons/tb";
import { SiMysql } from "react-icons/si";
import { Parallax } from "react-scroll-parallax";
import { BiLogoMongodb } from "react-icons/bi";
import { SiChakraui } from "react-icons/si";
import { RiBootstrapLine } from "react-icons/ri";
const ExperienceGrid = () => {
  const iconsArray = [
    IoLogoAndroid,
    IoLogoCss3,
    IoLogoFigma,
    IoLogoGithub,
    IoLogoHtml5,
    IoLogoNodejs,
    IoLogoPython,
    IoLogoReact,
    FaJava,
    FaNode,
    FaUnity,
    TbBrandPhp,
    SiAdobeillustrator,
    SiAdobephotoshop,
    TbBrandFirebase,
    SiPostgresql,
    TbSql,
    SiMysql,
    SiChakraui,
    RiBootstrapLine,
  ];
  const { colorMode } = useColorMode();

  return (
    <SimpleGrid
      columns={{ base: 2, md: 4, lg: "5" }}
      spacing={1}
      width={{ base: "70%", md: "50%" }}
      position={"relative"}
      top={{ base: "-500", sm: "-450", md: "-400", lg: "-300" }}
    >
      {iconsArray.map((Icon, index) => (
        <Parallax speed={20} key={index}>
          <Fade cascade direction="right" damping={0.1}>
            <VStack>
              <Avatar
                boxShadow="7px 2px 10px 0 rgba(0, 0, 0, 0.5)"
                size={{ base: "lg", sm: "xl" }}
                icon={
                  <Icon
                    fontSize={{ base: "1.5rem", sm: "3rem" }}
                    color={colorMode === "light" ? "#162d33" : "#162d33"}
                  />
                }
                bg={colorMode === "light" ? "#f8f5ca" : "#846076"}
              />
            </VStack>
          </Fade>
        </Parallax>
      ))}
    </SimpleGrid>
  );
};

export default ExperienceGrid;
