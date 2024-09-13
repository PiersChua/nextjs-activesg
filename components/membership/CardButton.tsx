"use client";
import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MdAddShoppingCart, MdOutlineShoppingBag } from "react-icons/md";
import { PassType } from "@prisma/client";
import { usePathname } from "next/navigation";

interface CardButtonProps {
  color: string;
  variant: string;
  type: "Cart" | "Buy";
  passType: PassType;
  children: ReactNode;
}

const CardButton = ({
  color,
  variant,
  type,
  passType,
  children,
}: CardButtonProps) => {
  const path = usePathname();
  return (
    <Button
      as="a"
      href={`${path}?type=${type}&id=${passType.id}`}
      colorScheme={color}
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
