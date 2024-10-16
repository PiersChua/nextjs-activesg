"use client";
import { updatePassCartChecked } from "@/app/action/pass-carts";
import { Checkbox } from "@chakra-ui/react";
import React from "react";
interface CheckboxProps {
  checked: boolean;
  id: string;
}
const CartCheckbox = ({ checked, id }: CheckboxProps) => {
  return (
    <Checkbox
      colorScheme="red"
      border="var(--grey)"
      isChecked={checked}
      onChange={() => {
        updatePassCartChecked(id);
      }}
    />
  );
};

export default CartCheckbox;
