import { getPasses } from "@/app/action/passes";
import { Box, Container, Stack } from "@chakra-ui/react";

const PassesPage = async () => {
  const userPasses = await getPasses();
  return (
    <Container maxW="1400px">
      <Stack>
        {userPasses.map((item, index) => (
          <Box key={index}>
            {`${
              item.passType.durationInDays > 1
                ? `${item.passType.durationInDays / 30} ${
                    item.passType.durationInDays / 30 > 1 ? "Months" : "Month"
                  } ${item.passType.isPeak ? "Peak" : "Non-peak"}`
                : `${item.passType.durationInDays} Day`
            } ${item.passType.category} Pass`}
          </Box>
        ))}
      </Stack>
    </Container>
  );
};

export default PassesPage;
