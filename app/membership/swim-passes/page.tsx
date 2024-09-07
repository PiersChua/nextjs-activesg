import React from "react";
import { Container } from "@chakra-ui/react";
import { getPassTypes } from "@/app/action/pass-types";
import PassCard from "@/components/membership/Card";

const PassTypesPage = async () => {
  const { dayPasses, peakPasses } = await getPassTypes("SWIM");

  return (
    <Container mb={10} maxW="1400px">
      <PassCard passTypes={dayPasses} header="Day pass" />
      <PassCard
        passTypes={peakPasses}
        header="Peak pass"
        days="Monday to Sunday"
        time="7am to 10pm"
      />
    </Container>
  );
};

export default PassTypesPage;
