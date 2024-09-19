import SearchFacilitiesForm from "@/components/Form/SearchFacilitiesForm";
import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

const BookingPage = () => {
  return (
    <Container maxW="1400px">
      <Stack my={10} alignItems="center">
        <SearchFacilitiesForm />
      </Stack>
    </Container>
  );
};

export default BookingPage;
