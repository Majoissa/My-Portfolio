import { Box, useColorMode, Image, Heading } from "@chakra-ui/react";
import { Link } from "wouter";
import { Fade } from "react-awesome-reveal";
//bg={colorMode === "light" ? "#debed7" : "#836483"}

const ProjectCard = ({
  lightColor,
  darkColor,
  img,
  alt,
  title,
  bottomPosition,
  leftPosition,
  link,
}) => {
  //const img1 = require("./web.png");
  const { colorMode } = useColorMode();
  return (
    <Link to={link}>
      <Fade cascade direction="left" damping={0.1}>
        <Box
          bg={colorMode === "light" ? lightColor : darkColor}
          pr={"20rem"}
          pt={"15rem"}
          minW={{ base: "40vw", sm: "60vw", lg: "40vw" }}
          minH={{ base: "45vh", sm: "50vh", md: "55vh", lg: "80vh" }}
          overflow="hidden"
          position="relative"
          borderRadius="30px"
          _hover={{
            ".image": {
              transform: "scale(1.1)",
              transition: "transform 0.5s ease-in-out",
            },
          }}
        >
          <Heading
            position={"absolute"}
            right={8}
            top={20}
            as={"h1"}
            fontFamily=' "Paytone One", sans-serif'
            fontWeight={"bold"}
            color={colorMode === "light" ? "#486060" : "white"}
            size={{ base: "md", sm: "md", md: "lg", lg: "xl" }}
          >
            {title}
          </Heading>
          <Image
            className="image"
            position="absolute"
            src={img}
            alt={alt}
            bottom={bottomPosition}
            left={leftPosition}
            sx={{
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </Box>
      </Fade>
    </Link>
  );
};

export default ProjectCard;
