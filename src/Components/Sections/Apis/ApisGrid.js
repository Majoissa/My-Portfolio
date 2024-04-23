import { SimpleGrid } from "@chakra-ui/react";
import CardProject from "../../GeneralComponents/CardProject";
import { useTranslation } from "react-i18next";

const ApisGrid = () => {
  const { t } = useTranslation();
  const projectImages = [
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/idplantas.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/rickymorty.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/littlelemon.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/soulplates.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/pokemon.png",
  ];
  const projectTitles = t("apis-cards.apis-titles", { returnObjects: true });
  const projectDescriptions = t("apis-cards.apis-descriptions", {
    returnObjects: true,
  });
  const githubLinks = t("apis-cards.apis-link", { returnObjects: true });
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

export default ApisGrid;
