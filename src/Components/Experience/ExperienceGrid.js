import React from "react";
import { VStack, SimpleGrid, useColorMode, Avatar } from "@chakra-ui/react";
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
      columns={{ base: 4, md: 5 }}
      spacing={2}
      width={{ base: "70%", md: "50%" }}
      mt={{ base: "2rem", md: "4rem" }}
    >
      {iconsArray.map((Icon, index) => (
        <Fade cascade direction="right" damping={0.1}>
          <VStack>
            <Avatar
              boxShadow="2px 2px 7px 0 rgba(0, 0, 0, 0.5)"
              size={{ base: "lg", md: "xl" }}
              icon={
                <Icon
                  fontSize={{ base: "1.5rem", md: "3rem" }}
                  color={colorMode === "light" ? "#486060" : "white"}
                />
              }
              bg={colorMode === "light" ? "#f7f2c3" : "#846076"}
            />
          </VStack>
        </Fade>
      ))}
    </SimpleGrid>
  );
};

export default ExperienceGrid;
