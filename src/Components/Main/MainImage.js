import { Image, VStack } from "@chakra-ui/react";

const MainImage = () => {
  const image = require("./fondo_mejorado.png");
  return (
    <VStack>
      <Image
        position={"fixed"}
        zIndex={-1}
        src={image}
        alt="hola"
        w={"100%"}
        h={{ base: "120vh" }}
        objectFit={"cover"}
        opacity={0.6}
        mt={-5}
      />
    </VStack>
  );
};

export default MainImage;
