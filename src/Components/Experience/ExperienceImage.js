import { Image, VStack } from "@chakra-ui/react";

const ExperienceImage = () => {
  const image = require("../Main/formas.png");
  return (
    <VStack h={"100vh"}>
      <Image
        src={image}
        alt="hola"
        w={"100vw"}
        minHeight={{ base: "55rem", md: "70rem", lg: "90rem" }}
        objectFit={"cover"}
        opacity={0.8}
      />
    </VStack>
  );
};

export default ExperienceImage;
