import { PassType } from "@prisma/client";
import { MdAddShoppingCart, MdOutlineShoppingBag } from "react-icons/md";
import {
  Box,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  SimpleGrid,
  Text,
  Button,
  Stack,
} from "@chakra-ui/react";

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

export default PassCard;
