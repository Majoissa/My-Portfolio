import { VStack } from "@chakra-ui/react";
import MainTexts from "./MainTexts";
import MainImage from "./MainImage";

const Main = () => {
  return (
    <VStack>
      <MainImage />
      <MainTexts />
    </VStack>
  );
};

export default Main;
