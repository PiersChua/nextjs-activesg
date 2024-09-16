"use client";
import { Button } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import { MdAddShoppingCart, MdOutlineShoppingBag } from "react-icons/md";
import { PassType } from "@prisma/client";
import { usePathname } from "next/navigation";

interface CardButtonProps {
  color: string;
  bg: string;
  hoverColor: string;
  border?: string;
  type: "Cart" | "Buy";
  passType: PassType;
  children: ReactNode;
}

const CardButton = ({
  color,
  hoverColor,
  bg,
  type,
  border,
  passType,
  children,
}: CardButtonProps) => {
  const path = usePathname();
  return (
    <Button
      as="a"
      href={`${path}?type=${type}&id=${passType.id}`}
      color={color}
      _hover={{ bg: hoverColor }}
      bg={bg}
      border={border}
      leftIcon={
        type === "Cart" ? <MdAddShoppingCart /> : <MdOutlineShoppingBag />
      }
    >
      {children}
    </Button>
  );
};

export default CardButton;
