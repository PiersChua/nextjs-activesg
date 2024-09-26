import PassesWrapper from "@/components/user-profile/PassesWrapper";
import { Container } from "@chakra-ui/react";
import { PassCategory } from "@prisma/client";

const PassesPage = ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  return (
    <Container maxW="1400px">
      {!searchParams.id ? (
        <PassesWrapper
          passCategory={searchParams.passCategory as PassCategory}
        />
      ) : (
        <h2>Display {searchParams.id} passes</h2>
      )}
    </Container>
  );
};

export default PassesPage;
