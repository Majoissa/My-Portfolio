import {
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Heading,
  Image,
  Text,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { Fade } from "react-awesome-reveal";

const CardProject = ({
  image,
  alt,
  projectTitle,
  projectDescription,
  viewCode,
  onClickButton,
}) => {
  return (
    <Fade cascade direction="left" damping={0.1}>
      <Card
        bg={"white"}
        color={"#486060"}
        maxW={{ base: "xs", sm: "sm", md: "md", lg: "lg" }}
        fontFamily='"Karla", sans-serif'
      >
        <CardBody>
          <Image
            src={image}
            alt={alt}
            borderRadius="lg"
            boxShadow="1px 1px 4px rgba(0, 0, 0, 0.5)"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{projectTitle}</Heading>
            <Text>{projectDescription}</Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="2">
            <Button onClick={onClickButton} variant="solid" colorScheme="teal">
              {viewCode}
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Fade>
  );
};

export default CardProject;
