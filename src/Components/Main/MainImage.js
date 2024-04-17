import { Image, VStack } from "@chakra-ui/react";

const MainImage = () => {
  const image = require("./formas.png");
  return (
    <VStack>
      <Image
        src={image}
        alt="hola"
        w={"100vw"}
        h={{ base: "45vh", sm: "60vh", md: "auto" }}
        objectFit={"cover"}
        opacity={0.8}
        mt={-5}
      />
    </VStack>
  );
};

export default MainImage;
