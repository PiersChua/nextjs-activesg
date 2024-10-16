import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
  Stack,
} from "@chakra-ui/react";
import CardButton from "@/components/membership/CardButton";
import { PassType } from "@prisma/client";

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
          <Card
            bg="var(--beige)"
            boxShadow="0 5px 20px rgba(0,0,0,0.2)"
            key={passType.id}
            rounded="xl"
          >
            <CardHeader textStyle="h3">
              {`$${(passType.priceInCents / 100).toFixed(2)}`}
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
                <CardButton
                  variant="outlineOrange"
                  passType={passType}
                  type="Cart"
                >
                  Add to cart
                </CardButton>
                <CardButton
                  passType={passType}
                  variant="orangeWhite"
                  type="Buy"
                >
                  Buy now
                </CardButton>
              </Stack>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default PassCard;
