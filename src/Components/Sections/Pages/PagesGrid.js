import { SimpleGrid } from "@chakra-ui/react";
import CardProject from "../../GeneralComponents/CardProject";
import { useTranslation } from "react-i18next";

const PagesGrid = () => {
  const { t } = useTranslation();
  const projectImages = [
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/joviat-admin.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/pokemon.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/littlelemon.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/meta%20portfolio.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/soulplates.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/skiline.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/hotel.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/botigaa.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/crud.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/exportacion.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/goal.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/airbnbclone.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/tortapage.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/rss.png",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/tiendamuebles.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/brandwise.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/hair.jpg",
  ];
  const projectTitles = t("pages-cards.pages-titles", { returnObjects: true });
  const projectDescriptions = t("pages-cards.pages-descriptions", {
    returnObjects: true,
  });
  const githubLinks = t("pages-cards.github-link", { returnObjects: true });
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

export default PagesGrid;
