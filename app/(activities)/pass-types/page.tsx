import React from "react";
import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { redirect } from "next/navigation";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
  Container,
  Button,
  Stack,
} from "@chakra-ui/react";
import { PassType } from "@prisma/client";
import { MdAddShoppingCart, MdOutlineShoppingBag } from "react-icons/md";

const PassTypesPage = async () => {
  const getPassTypes = async () => {
    const user = await getSessionUser();
    const age = user?.age;
    if (!age) {
      redirect("/user-profile");
    }
    const data = await prisma.passType.findMany({
      where: {
        minAge: { lte: age },
        maxAge: { gte: age },
      },
    });
    const sortByPrice = (arr: PassType[]) =>
      arr.sort((a, b) => a.price - b.price);
    const dayPasses = data.filter((item) => item.durationInDays === 1);
    const monthPasses = data.filter((item) => item.durationInDays > 1);
    const peakPasses = monthPasses.filter((item) => item.isPeak);
    const nonPeakPasses = monthPasses.filter((item) => !item.isPeak);
    return {
      dayPasses: sortByPrice(dayPasses),
      peakPasses: sortByPrice(peakPasses),
      nonPeakPasses: sortByPrice(nonPeakPasses),
    };
  };
  const { dayPasses, peakPasses, nonPeakPasses } = await getPassTypes();

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

interface PassCardProps {
  passTypes: PassType[];
  header: string;
  days?: string;
  time?: string;
}

const PassCard = ({ passTypes, header, days, time }: PassCardProps) => {
  return (
    <Box py="1em">
      <Box mb="0.5em">
        <Text textStyle="h1">{header}</Text>
        <Text textStyle="p">{days}</Text>
        <Text textStyle="p">{time}</Text>
      </Box>
      <SimpleGrid minChildWidth="300px" spacing="40px">
        {passTypes.map((passType) => (
          <Card key={passType.id}>
            <CardHeader textStyle="h2">
              {`$${passType.price.toFixed(2)}`}
            </CardHeader>
            <CardBody textStyle="p">
              {passType.durationInDays > 1
                ? `${passType.durationInDays / 30} ${
                    passType.durationInDays / 30 > 1 ? "Months" : "Month"
                  }`
                : `${passType.durationInDays} Day`}{" "}
              membership
            </CardBody>
            <CardFooter>
              <Stack flexWrap="wrap" direction="row" spacing={4}>
                <Button
                  colorScheme="blue"
                  variant="outline"
                  leftIcon={<MdAddShoppingCart />}
                >
                  Add to cart
                </Button>
                <Button
                  colorScheme="blue"
                  variant="solid"
                  leftIcon={<MdOutlineShoppingBag />}
                >
                  Purchase
                </Button>
              </Stack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PassTypesPage;
