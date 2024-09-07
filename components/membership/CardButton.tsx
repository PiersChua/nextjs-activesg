"use client";
import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MdAddShoppingCart, MdOutlineShoppingBag } from "react-icons/md";
import { createPass } from "@/app/action/passes";
import { PassType } from "@prisma/client";

interface CardButtonProps {
  color: string;
  variant: string;
  icon: "Cart" | "Bag";
  passType: PassType;
  children: ReactNode;
}

const CardButton = ({
  color,
  variant,
  icon,
  passType,
  children,
}: CardButtonProps) => {
  return (
    <Button
      onClick={() => createPass(passType)}
      colorScheme={color}
      variant={variant}
      leftIcon={
        icon === "Cart" ? <MdAddShoppingCart /> : <MdOutlineShoppingBag />
      }
    >
      {children}
    </Button>
  );
};

export default CardButton;
