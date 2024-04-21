import { Box, VStack } from "@chakra-ui/react";

const ExperienceImage = () => {
  return (
    <VStack h={"100vh"}>
      <Box
        bg={"transparent"}
        w={"100vw"}
        minHeight={{
          base: "42rem",
          sm: "45rem",
          md: "52rem",
          lg: "60rem",
          xl: "63rem",
        }}
      />
    </VStack>
  );
};

export default ExperienceImage;
