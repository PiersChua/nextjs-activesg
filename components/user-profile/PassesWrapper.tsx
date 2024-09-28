import { getPasses } from "@/app/action/passes";
import { formatDurationUnit, isExpired } from "@/utils/formatDateTime";
import { Box, Button, Divider, Flex, Stack, Text } from "@chakra-ui/react";
import { PassCategory } from "@prisma/client";
import React from "react";
import FilterPassesSelect from "./FilterPassesSelect";
import PassStatusTag from "./PassStatusTag";
import EmptyPass from "./EmptyPass";
import { filterPasses } from "@/utils/filterPasses";

interface WrapperProps {
  passCategory: PassCategory | undefined;
  passStatus: string;
}
const PassesWrapper = async ({ passCategory, passStatus }: WrapperProps) => {
  let userPasses = await getPasses();
  userPasses = filterPasses(userPasses, passCategory, passStatus);

  return (
    <Flex mb={10} direction="column" gap={5}>
      <FilterPassesSelect selectedCategory={passCategory} />
      {userPasses.length === 0 && <EmptyPass />}
      {userPasses.map((item, index) => (
        <Box
          key={index}
          bg="var(--beige)"
          boxShadow="0 5px 20px rgba(0,0,0,0.2)"
          p={3}
          rounded="xl"
        >
          <Flex direction="row" justifyContent="space-between">
            <Flex direction="column" gap={1}>
              <Text textStyle="h3" flexWrap="wrap">
                {`${formatDurationUnit(item.passType.durationInDays)} ${
                  item.passType.durationInDays > 1
                    ? item.passType.isPeak
                      ? "Peak"
                      : "Non-peak"
                    : ""
                } ${item.passType.category} Pass`}
              </Text>
              <Text textStyle="p">
                Price paid:{" "}
                <Text as="span" color="var(--orange)" fontWeight="semibold">
                  $
                  {((item.passType.priceInCents * item.quantity) / 100).toFixed(
                    2
                  )}
                </Text>
              </Text>
              <Text textStyle="p2" color="var(--grey)">
                Purchased on {item.createdAt.toLocaleDateString()}
              </Text>
              <PassStatusTag
                expiryDate={item.isActive ? (item.endDate as Date) : undefined}
                isActive={item.isActive}
              />
            </Flex>
            <Stack alignItems="flex-end" justifyContent="space-between">
              <Text whiteSpace="nowrap" textStyle="p" color="var(--grey)">
                × {item.quantity}
              </Text>
              <Button
                as="a"
                href={`?id=${item.id}`}
                display={{ base: "none", md: "inline-flex" }}
                variant="orangeWhite"
              >
                View pass
              </Button>
            </Stack>
          </Flex>
          <Divider
            display={{ base: "block", md: "none" }}
            my={5}
            borderColor="var(--black)"
          />
          <Button
            as="a"
            href={`?id=${item.id}`}
            display={{ base: "inline-flex", md: "none" }}
            variant="orangeWhite"
          >
            View pass
          </Button>
        </Box>
      ))}
    </Flex>
  );
};

export default PassesWrapper;
