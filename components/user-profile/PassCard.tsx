import prisma from "@/lib/db";
import { Button, Flex, Stack, Text } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
} from "@chakra-ui/react";
import { notFound } from "next/navigation";
import React from "react";
import PassStatusTag from "./PassStatusTag";
import ActivatePassButton from "./ActivatePassButton";
interface CardProps {
  passId: string;
}
const PassCard = async ({ passId }: CardProps) => {
  const pass = await prisma.pass.findUnique({
    where: {
      id: passId,
    },
    include: {
      passType: true,
    },
  });
  if (!pass) notFound();
  return (
    <Stack mb={10} alignItems="center">
      <Card
        bg="var(--beige)"
        boxShadow="0 5px 20px rgba(0,0,0,0.2)"
        rounded="xl"
        maxW="400px"
        w="full"
      >
        <CardHeader>
          <Image src="/fitsg-high-resolution-logo-transparent.svg" />
        </CardHeader>
        <CardBody>
          <Stack>
            <Text textStyle="h3">
              {pass.passType.category} Pass{" "}
              <Text as="span" color="var(--grey)">
                × {pass.quantity}
              </Text>
            </Text>
            {pass.isActive && (
              <>
                <Text textStyle="p2">
                  Activated on {pass.startDate!.toLocaleDateString()}
                </Text>
                <Text textStyle="p2">
                  Expiring on {pass.endDate!.toLocaleDateString()}
                </Text>
              </>
            )}
            <PassStatusTag isActive={pass.isActive}></PassStatusTag>
          </Stack>
        </CardBody>
        {!pass.isActive && (
          <CardFooter>
            <ActivatePassButton passId={pass.id} />
          </CardFooter>
        )}
      </Card>
    </Stack>
  );
};

export default PassCard;
