"use client";
import {
  Select,
  Stack,
  Text,
  Icon,
  RadioGroup,
  Radio,
  Button,
} from "@chakra-ui/react";
import { PassCategory } from "@prisma/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaFilter } from "react-icons/fa6";

interface SelectProps {
  selectedCategory: PassCategory | undefined;
}
const FilterPassesSelect = ({ selectedCategory }: SelectProps) => {
  const router = useRouter();
  const [selectValue, setSelectValue] = useState("");
  const [radioValue, setRadioValue] = useState("");
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectValue(value);
  };
  const handleRadioChange = (value: string) => {
    setRadioValue(value);
  };
  const applyFilter = () => {
    if (selectValue && radioValue) {
      router.push(`?passCategory=${selectValue}&passStatus=${radioValue}`);
    } else if (selectValue) {
      router.push(`?passCategory=${selectValue}`);
    } else if (radioValue) {
      router.push(`?passStatus=${radioValue}`);
    }
    return;
  };
  const resetFilter = () => {
    router.push("passes");
  };
  return (
    <Stack direction="column">
      <Stack direction="row" alignItems="center">
        <Text textStyle="p">Sort by</Text>
        <Icon as={FaFilter} />
        <Select
          defaultValue={selectedCategory}
          onChange={handleSelectChange}
          maxW="200px"
          variant="cream"
        >
          <option value="">ALL</option>
          <option value="GYM">GYM</option>
          <option value="SWIM">SWIM</option>
        </Select>
        <Button onClick={applyFilter} variant="outlineOrange">
          Apply
        </Button>
        <Button onClick={resetFilter} variant="orangeWhite">
          Reset
        </Button>
      </Stack>
      <RadioGroup onChange={handleRadioChange}>
        <Stack direction="row">
          <Radio variant="cream" value="Active">
            Active
          </Radio>
          <Radio variant="cream" value="Inactive">
            Inactive
          </Radio>
          <Radio variant="cream" value="Expired">
            Expired
          </Radio>
        </Stack>
      </RadioGroup>
    </Stack>
  );
};

export default FilterPassesSelect;
