import UserProfileForm from "@/components/Form/UserProfileForm";
import prisma from "@/lib/db";
import { getSessionUser } from "@/utils/getSessionUser";
import { Container } from "@chakra-ui/react";

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
    <Container maxW="1400px">
      <UserProfileForm user={user} />
    </Container>
  );
};

export default UserPage;
