import TabsComponent from "@/components/Tabs";
import { Container, Tab, TabList, Tabs } from "@chakra-ui/react";

const ProfileLayout = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <>
      <Container maxW="1400px">
        <TabsComponent tabItems={tabItems} />
      </Container>
      {children}
    </>
  );
};

const tabItems = [
  {
    label: "My profile",
    href: "/user-profile",
  },
  {
    label: "Passes",
    href: "/user-profile/passes",
  },
];

export default ProfileLayout;
