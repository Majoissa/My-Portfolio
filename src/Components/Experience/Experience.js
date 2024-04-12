import { VStack } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
import ExperienceImage from "./ExperienceImage";
import ExperienceTexts from "./ExperienceTexts";
import ExperienceGrid from "./ExperienceGrid";

const Experience = () => {
  return (
    <ParallaxProvider>
      <VStack>
        <ExperienceImage />
        <ExperienceTexts />
        <ExperienceGrid />
      </VStack>
    </ParallaxProvider>
  );
};

export default Experience;
