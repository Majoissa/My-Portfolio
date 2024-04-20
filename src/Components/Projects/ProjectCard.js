import { Box, useColorMode, Image, Heading } from "@chakra-ui/react";
//bg={colorMode === "light" ? "#debed7" : "#836483"}

const ProjectCard = ({
  lightColor,
  darkColor,
  img,
  alt,
  title,
  bottomPosition,
  leftPosition,
}) => {
  //const img1 = require("./web.png");
  const { colorMode } = useColorMode();
  return (
    <Box
      bg={colorMode === "light" ? lightColor : darkColor}
      pr={"250px"}
      pt={"150px"}
      minW={"650px"}
      minH={"600px"}
      overflow="hidden"
      position="relative"
      borderRadius="30px"
    >
      <Heading
        position={"absolute"}
        right={8}
        top={20}
        as={"h1"}
        fontFamily=' "Paytone One", sans-serif'
        fontWeight={"bold"}
        color={colorMode === "light" ? "#486060" : "white"}
        textShadow={"0.5px 0.5px 2px rgba(0, 0, 0, 0.5)"}
        size={{ base: "sm", sm: "md", md: "lg", lg: "xl" }}
      >
        {title}
      </Heading>
      <Image
        position="absolute"
        src={img}
        alt={alt}
        bottom={bottomPosition}
        left={leftPosition}
      />
    </Box>
  );
};

export default ProjectCard;
