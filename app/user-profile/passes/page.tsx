import { getPasses } from "@/app/action/passes";
import { formatDurationUnit } from "@/utils/formatDateTime";
import { Box, Container, Stack } from "@chakra-ui/react";

const PassesPage = async () => {
  const userPasses = await getPasses();
  return (
    <Container maxW="1400px">
      <Stack>
        {userPasses.map((item, index) => (
          <Box key={index}>
            {`${formatDurationUnit(item.passType.durationInDays)} ${
              item.passType.durationInDays > 1
                ? item.passType.isPeak
                  ? "Peak"
                  : "Non-peak"
                : ""
            } ${item.passType.category} Pass`}
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default PassesPage;
