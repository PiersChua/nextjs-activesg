import FacilitiesCard from "@/components/facilities/FacilitiesTypeCard";
import SearchFacilitiesForm from "@/components/Form/SearchFacilitiesForm";
import { Box, Container, SimpleGrid, Stack } from "@chakra-ui/react";
import React from "react";

const BookingPage = () => {
  return (
    <Container maxW="1400px">
      <Stack my={10} alignItems="center">
        <SearchFacilitiesForm />
      </Stack>
      <Box py={10}>
        <SimpleGrid minChildWidth="350px" spacing="40px">
          {facilityItems.map((item, index) => (
            <FacilitiesCard
              key={index}
              index={index}
              title={item.title}
              href={item.href}
              image={item.image}
            />
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

const facilityItems = [
  {
    title: "Hall",
    href: "HALL",
    image: "/facilities_hall.webp",
  },
  {
    title: "Court",
    href: "COURT",
    image: "/facilities_court.webp",
  },
  {
    title: "Room",
    href: "ROOM",
    image: "/facilities_room.webp",
  },
  {
    title: "Studio",
    href: "STUDIO",
    image: "/facilities_studio.webp",
  },
  {
    title: "Outdoor",
    href: "OUTDOOR",
    image: "/facilities_outdoor.webp",
  },
];

export default BookingPage;
