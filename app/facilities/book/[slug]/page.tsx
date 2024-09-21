import { getFacilities } from "@/app/action/facilities";
import { Container, Text } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { FacilityType } from "@prisma/client";
const FacilitiesTypePage = async ({ params }: { params: { slug: string } }) => {
  if (!Object.values(FacilityType).includes(params.slug as FacilityType)) {
    console.log(params.slug);
    notFound();
  }
  const facilities = await getFacilities(params.slug as FacilityType);
  return (
    <Container maxW="1400px">
      {facilities.map((item) => (
        <Text>{item.name}</Text>
      ))}
    </Container>
  );
};

export default FacilitiesTypePage;
