import React from "react";
import { Box, SimpleGrid, VStack } from "@chakra-ui/react";
import AboutImage from "./AboutImage";
import MyDescription from "./MyDescription";

const AboutGrid = () => {
  return (
    <VStack>
      <SimpleGrid
        width={{ base: "60%", md: "80%", xl: "65%", "2xl": "50%" }}
        columns={{ base: 1, md: 2 }}
        spacingX={{ base: "0px", md: "5px" }}
      >
        <Box>
          <AboutImage />
        </Box>
        <Box mt={{ lg: "3rem" }}>
          <MyDescription
            text={
              " I am a professional in constant training, passionate about the field of technology and learning. I am currently studying to strengthen my knowledge in web development and development of mobile applications and videogames. If you are looking for a developer who can seamlessly integrate both programming and visually appealing design elements into your projects, I am well-equipped to deliver outstanding results. If you want to work with me, don't hesitate to contact me. Together we can achieve great things"
            }
          />
        </Box>
      </SimpleGrid>
    </VStack>
  );
};

export default AboutGrid;
