import { Image, VStack } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

const ExperienceImage = () => {
  const image = require("../Main/formas.png");
  return (
    <VStack
      h={"100vh"}
      position={"relative"}
      top={{ base: "-550", sm: "-470", md: "-350" }}
      zIndex={-9999}
    >
      <Parallax speed={-18}>
        <Image
          src={image}
          alt="hola"
          w={"100vw"}
          h={{ base: "100vh", sm: "140vh", md: "160vh" }}
          objectFit={"cover"}
          opacity={0.9}
        />
      </Parallax>
    </VStack>
  );
};

export default ExperienceImage;
