import { Container } from "@chakra-ui/react";
import { notFound } from "next/navigation";
import { FacilityType, Sport } from "@prisma/client";
import FacilitiesWrapper from "@/components/facilities/FacilitiesWrapper";
import BreadcrumbComponent from "@/components/Breadcrumb";
import { Suspense } from "react";
import Loading from "./loading";

const FacilitiesTypePage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) => {
  if (
    (!Object.values(Sport).includes(searchParams.sport as Sport) &&
      searchParams.sport) ||
    !Object.values(FacilityType).includes(params.slug as FacilityType)
  ) {
    notFound();
  }
  const sportParam = searchParams.sport
    ? (searchParams.sport as Sport)
    : undefined;
  return (
    <Container maxW="1400px">
      <BreadcrumbComponent />
      <Suspense fallback={<Loading />}>
        <FacilitiesWrapper
          facilityParam={params.slug as FacilityType}
          sportParam={sportParam}
        />
      </Suspense>
    </Container>
  );
};

export default FacilitiesTypePage;
