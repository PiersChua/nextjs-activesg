import { IconButton } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";

interface ButtonProps {
  id: string;
  quantity: number;
}
const EditButton = ({ id, quantity }: ButtonProps) => {
  return (
    <IconButton
      as="a"
      href={`?quantity=${quantity}&id=${id}`}
      variant="blueWhite"
      fontSize="20px"
      aria-label="Edit"
      icon={<FaEdit />}
    />
  );
};

export default EditButton;
