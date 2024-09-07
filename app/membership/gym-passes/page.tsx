import React from "react";
import { Container } from "@chakra-ui/react";
import { getPassTypes } from "@/app/action/pass-types";
import PassCard from "@/components/membership/Card";

const PassTypesPage = async () => {
  const { dayPasses, peakPasses, nonPeakPasses } = await getPassTypes("GYM");

  return (
    <Container mb={10} maxW="1400px">
      <PassCard passTypes={dayPasses} header="Day pass" />
      <PassCard
        passTypes={nonPeakPasses}
        header="Non-peak pass"
        days="Monday to Friday"
        time="7am to 4pm"
      />
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
