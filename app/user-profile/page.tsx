import UserProfileForm from "@/components/Form/UserProfileForm";
import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Box, Container } from "@chakra-ui/react";

const UserPage = async () => {
  const getUser = async () => {
    const user = await getSessionUser();
    const userId = user?.id;
    const data = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return data;
  };

  const user = await getUser();
  return (
    <Box pb="5em">
      <Container maxW="1400px">
        <UserProfileForm user={user} />
      </Container>
    </Box>
  );
};

export default UserPage;
