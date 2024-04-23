import { SimpleGrid } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import { useTranslation } from "react-i18next";
const ProjectsGrid = () => {
  const { t } = useTranslation();
  const imagesArray = [
    {
      src: require("./web.png"),
      title: t("pages"),
      lightColor: "#debed7",
      darkColor: "#836483",
      bottom: { base: "-8rem", lg: "-4rem" },
      left: "-8rem",
      link: "/pages",
    },
    {
      src: require("./phone.png"),
      title: t("apps"),
      lightColor: "#c9e3ea",
      darkColor: "#4ea8ba",
      bottom: { base: "-25rem", lg: "-12rem" },
      left: { base: "-6rem", lg: "-2rem" },
      link: "/apps",
    },

    {
      src: require("./apis.png"),
      title: t("apis"),
      lightColor: "#efe259",
      darkColor: "#989565",
      bottom: "-2rem",
      left: "-10rem",
      link: "/apis",
    },
    {
      src: require("./game.png"),
      title: t("games"),
      lightColor: "#f1c4d6",
      darkColor: "#956b82",
      bottom: "-2rem",
      left: "-10rem",
      link: "/videogames",
    },
  ];
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
      {imagesArray.map((item, index) => (
        <ProjectCard
          key={index}
          lightColor={item.lightColor}
          darkColor={item.darkColor}
          img={item.src}
          alt={item.alt}
          title={item.title}
          bottomPosition={item.bottom}
          leftPosition={item.left}
          link={item.link}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProjectsGrid;
