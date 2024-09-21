import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MdAddShoppingCart, MdOutlineShoppingBag } from "react-icons/md";
import { PassType } from "@prisma/client";

interface CardButtonProps {
  variant: string;
  type: "Cart" | "Buy";
  passType: PassType;
  children: ReactNode;
}

const CardButton = ({ variant, type, passType, children }: CardButtonProps) => {
  return (
    <Button
      as="a"
      href={`?type=${type}&id=${passType.id}`}
      variant={variant}
      leftIcon={
        type === "Cart" ? <MdAddShoppingCart /> : <MdOutlineShoppingBag />
      }
    >
      {children}
    </Button>
  );
};

export default CardButton;
