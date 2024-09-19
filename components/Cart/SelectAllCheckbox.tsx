"use client";
import { updateAllPassCartChecked } from "@/app/action/pass-carts";
import { Checkbox } from "@chakra-ui/react";

interface CheckboxProps {
  isAllChecked: boolean;
}
const SelectAllCheckbox = ({ isAllChecked }: CheckboxProps) => {
  return (
    <Checkbox
      colorScheme="red"
      border="var(--grey)"
      isChecked={isAllChecked}
      onChange={() => updateAllPassCartChecked(isAllChecked)}
    />
  );
};

export default SelectAllCheckbox;
