import { VStack } from "@chakra-ui/react";
import ExperienceImage from "./ExperienceImage";
import ExperienceTexts from "./ExperienceTexts";
import ExperienceGrid from "./ExperienceGrid";

const Experience = () => {
  return (
    <VStack>
      <ExperienceImage />
      <ExperienceTexts />
      <ExperienceGrid />
    </VStack>
  );
};

export default Experience;
