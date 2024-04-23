import { SimpleGrid } from "@chakra-ui/react";
import CardProject from "../../GeneralComponents/CardProject";
import { useTranslation } from "react-i18next";

const AppsGrid = () => {
  const { t } = useTranslation();
  const projectImages = [
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/hosteleria.jpeg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/yumee.jpeg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/facontroler.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/lotery.jpg",
    "https://raw.githubusercontent.com/Majoissa/My-Portfolio/main/src/imgs/crud.jpg",
  ];
  const projectTitles = t("apps-cards.apps-titles", { returnObjects: true });
  const projectDescriptions = t("apps-cards.apps-descriptions", {
    returnObjects: true,
  });
  const githubLinks = t("apps-cards.apps-link", { returnObjects: true });
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

export default AppsGrid;
