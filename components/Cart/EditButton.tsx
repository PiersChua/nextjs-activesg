"use client";
import { IconButton } from "@chakra-ui/react";
import { usePathname } from "next/navigation";
import { FaEdit } from "react-icons/fa";

interface ButtonProps {
  id: string;
  quantity: number;
}
const EditButton = ({ id, quantity }: ButtonProps) => {
  const path = usePathname();
  return (
    <IconButton
      as="a"
      href={`${path}?quantity=${quantity}&id=${id}`}
      color="#ffffff"
      _hover={{ bg: "#2980b9 " }}
      bg="#3498db"
      fontSize="20px"
      aria-label="Edit"
      icon={<FaEdit />}
    />
  );
};

export default EditButton;
