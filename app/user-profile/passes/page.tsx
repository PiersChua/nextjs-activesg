import PassCard from "@/components/user-profile/PassCard";
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
        <PassCard passId={searchParams.id} />
      )}
    </Container>
  );
};

export default PassesPage;
