import { VStack } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import MainTexts from "./MainTexts";
import MainImage from "./MainImage";

const Main = () => {
  return (
    <ParallaxProvider>
      <VStack>
        <MainImage />
        <MainTexts />
      </VStack>
    </ParallaxProvider>
  );
};

export default Main;
