import { Tab, TabList, Tabs } from "@chakra-ui/react";

interface TabsProps {
  tabItems: { label: string; href: string }[];
}
const TabsComponent = ({ tabItems }: TabsProps) => {
  return (
    <Tabs my={5} size="md" variant="enclosed">
      <TabList>
        {tabItems.map((item, index) => (
          <Tab key={index} as="a" href={item.href}>
            {item.label}
          </Tab>
        ))}
      </TabList>
    </Tabs>
  );
};

export default TabsComponent;
