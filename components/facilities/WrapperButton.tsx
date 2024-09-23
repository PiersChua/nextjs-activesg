"use client";
import { Button } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import React from "react";
interface ButtonProps {
  id: string;
}
const WrapperButton = ({ id }: ButtonProps) => {
  const path = usePathname();
  return (
    <Button as="a" href={`${path}/${id}`} variant="orangeWhite">
      Book now
    </Button>
  );
};

export default WrapperButton;
