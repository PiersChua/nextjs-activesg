import React from "react";
import { Container, Text } from "@chakra-ui/react";
import { getPassTypes } from "@/app/action/pass-types";
import PassCard from "@/components/membership/Card";

const PassTypesPage = async () => {
  const { dayPasses, peakPasses } = await getPassTypes("SWIM");

  return (
    <Container mb={10} maxW="1400px">
      {dayPasses.length > 0 && (
        <PassCard passTypes={dayPasses} header="Day pass" />
      )}
      {peakPasses.length > 0 && (
        <PassCard
          passTypes={peakPasses}
          header="Peak pass"
          days="Monday to Sunday"
          time="7am to 10pm"
        />
      )}
      {dayPasses.length === 0 && peakPasses.length === 0 && (
        <Text textStyle="h1">
          Are you above 65 years old? Show your NRIC to our staff to for free
        </Text>
      )}
    </Container>
  );
};

export default PassTypesPage;
