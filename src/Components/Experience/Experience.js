import { VStack } from "@chakra-ui/react";
import ExperienceTexts from "./ExperienceTexts";
import ExperienceGrid from "./ExperienceGrid";

const Experience = () => {
  return (
    <VStack id="experience">
      <ExperienceTexts />
      <ExperienceGrid />
    </VStack>
  );
};

export default Experience;
