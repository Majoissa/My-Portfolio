import { Image, VStack } from "@chakra-ui/react";
import { Parallax } from "react-scroll-parallax";

const MainImage = () => {
  const image = require("./formas.png");
  return (
    <VStack
      h={"100vh"}
      position={"relative"}
      top={{ base: "-750", sm: "-500" }}
    >
      <Parallax speed={-180}>
        <Image
          src={image}
          alt="hola"
          w={"100vw"}
          h={{ base: "60vh", sm: "70vh", md: "110vh", lg: "138vh" }}
          objectFit={"cover"}
          opacity={0.9}
          zIndex={0}
        />
      </Parallax>
    </VStack>
  );
};

export default MainImage;
