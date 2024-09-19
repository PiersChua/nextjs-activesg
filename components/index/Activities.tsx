import { Box, Text, Container, SimpleGrid } from "@chakra-ui/react";
import ActivitiesCard, {
  ActivitiesCardProps,
} from "@/components/index/ActivitiesCard";
const Activities = () => {
  return (
    <Box py="5em">
      <Container maxW="1400px">
        <Text textStyle="h1" mb="0.5em">
          What we{" "}
          <Text as="span" color="var(--orange)">
            offer
          </Text>
        </Text>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing="40px">
          {activityItems.map((item, index) => (
            <ActivitiesCard key={index} {...item} />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

const activityItems: ActivitiesCardProps[] = [
  {
    title: "FitPass",
    desc: "Unlock access to gyms and swimming pools",
    image: "/fitpass.webp",
    icon: "FITPASS",
  },
  {
    title: "PlaySpace",
    desc: "Reserve a spot at your favourite sports facilities",
    image: "/facilities.webp",
    icon: "PLAYSPACE",
  },
  {
    title: "ProActive",
    desc: "Participate in a wide range of programmes designed to keep you moving",
    image: "/programmes.webp",
    icon: "PROACTIVE",
  },
];

export default Activities;
