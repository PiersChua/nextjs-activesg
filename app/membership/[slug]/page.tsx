import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { getPassTypes } from "@/app/action/pass-types";
import PassCard from "@/components/membership/Card";
import { PassCategory } from "@prisma/client";
import { notFound } from "next/navigation";
import QuantityModal from "@/components/Cart/QuantityModal";

const PassTypesPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string };
}) => {
  if (params.slug !== PassCategory.GYM && params.slug !== PassCategory.SWIM) {
    notFound();
  }
  const { dayPasses, peakPasses, nonPeakPasses } = await getPassTypes(
    params.slug
  );
  return (
    <Container mb={10} maxW="1400px">
      {searchParams.id && searchParams.type && (
        <QuantityModal
          id={searchParams.id}
          type="Create"
          route={searchParams.type === "Buy" ? true : false}
        />
      )}

      {dayPasses.length > 0 && (
        <PassCard passTypes={dayPasses} header="Day pass" />
      )}

      {nonPeakPasses.length > 0 && (
        <PassCard
          passTypes={nonPeakPasses}
          header="Non-peak pass"
          days="Monday to Friday"
          time="7am to 4pm"
        />
      )}
      {peakPasses.length > 0 && (
        <PassCard
          passTypes={peakPasses}
          header="Peak pass"
          days="Monday to Sunday"
          time="7am to 10pm"
        />
      )}
      {dayPasses.length === 0 &&
        nonPeakPasses.length === 0 &&
        peakPasses.length === 0 && (
          <Text textStyle="h1">
            Are you above 65 years old? Show your NRIC to our staff for a free
            entry
          </Text>
        )}
    </Container>
  );
};

export default PassTypesPage;
