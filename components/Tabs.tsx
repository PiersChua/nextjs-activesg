"use client";
import { Flex, Text } from "@chakra-ui/react";
import { usePathname } from "next/navigation";

interface TabsProps {
  tabItems: { label: string; href: string }[];
}
const TabsComponent = ({ tabItems }: TabsProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return (
    <Flex my={5}>
      {tabItems.map((item, index) => {
        const isActive =
          pathNames.slice(-1)[0] === item.href.split("/").slice(-1)[0];
        return (
          <Text
            textStyle="p2"
            px={5}
            py={2}
            borderBottom="2px solid"
            borderColor={isActive ? "var(--orange)" : "transparent"}
            _hover={{
              borderColor: !isActive ? "var(--orange)" : "",
              transition: "0.3s",
            }}
            key={index}
            as="a"
            href={item.href}
          >
            {item.label}
          </Text>
        );
      })}
    </Flex>
  );
};

export default TabsComponent;
