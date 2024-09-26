"use client";
import { Select, Stack, Text, Icon } from "@chakra-ui/react";
import { PassCategory } from "@prisma/client";
import { useRouter } from "next/navigation";
import { FaFilter } from "react-icons/fa6";

interface SelectProps {
  selectedCategory: PassCategory | undefined;
}
const FilterPassesSelect = ({ selectedCategory }: SelectProps) => {
  const router = useRouter();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sortedCategory = event.target.value;
    if (sortedCategory === "") {
      router.push("?");
    } else {
      router.push(`?passCategory=${sortedCategory}`);
    }
  };
  return (
    <Stack direction="row" alignItems="center">
      <Text textStyle="p">Sort by</Text>
      <Icon as={FaFilter} />
      <Select
        defaultValue={selectedCategory}
        onChange={handleChange}
        maxW="200px"
        variant="cream"
      >
        <option value="">ALL</option>
        <option value="GYM">GYM</option>
        <option value="SWIM">SWIM</option>
      </Select>
    </Stack>
  );
};

export default FilterPassesSelect;
