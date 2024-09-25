import { Skeleton, Flex } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Flex mb={10} direction="column" gap={5}>
      {[...Array(10)].map((_, i) => (
        <Skeleton
          startColor="var(--beige-1)"
          endColor="var(--beige-2)"
          rounded="xl"
          key={i}
          h="200px"
        />
      ))}
    </Flex>
  );
};

export default Loading;
