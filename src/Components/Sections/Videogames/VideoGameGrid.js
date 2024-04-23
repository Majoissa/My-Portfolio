import { SimpleGrid } from "@chakra-ui/react";
import CardProject from "../../GeneralComponents/CardProject";
import { useTranslation } from "react-i18next";

const VideogameGrid = () => {
  const { t } = useTranslation();
  const projectImages = [
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/destroyPlanet.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/flappy.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/Arkanoid.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/asteroid.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/turtle.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/crazy%20balls.png",
  ];
  const projectTitles = t("games-cards.games-titles", { returnObjects: true });
  const projectDescriptions = t("games-cards.games-descriptions", {
    returnObjects: true,
  });
  const githubLinks = t("games-cards.games-link", { returnObjects: true });
  return (
    <SimpleGrid
      mt={{ base: "4rem", lg: "8rem" }}
      columns={{ base: 1, lg: 2 }}
      spacing={10}
    >
      {projectImages.map((image, index) => (
        <CardProject
          key={index}
          image={image}
          alt={projectTitles[index]}
          projectTitle={projectTitles[index]}
          projectDescription={projectDescriptions[index]}
          viewCode={t("view-code")}
          onClickButton={() => window.open(githubLinks[index], "_blank")}
        />
      ))}
    </SimpleGrid>
  );
};

export default VideogameGrid;
