import { deletePassCart } from "@/app/action/pass-carts";
import { IconButton } from "@chakra-ui/react";
import { RiDeleteBin5Line } from "react-icons/ri";

interface ButtonProps {
  id: string;
}
const DeleteButton = ({ id }: ButtonProps) => {
  return (
    <IconButton
      onClick={() => deletePassCart(id)}
      color="#ffffff"
      _hover={{ bg: "#c0392b" }}
      bg="#e74c3c"
      fontSize="20px"
      aria-label="Delete"
      icon={<RiDeleteBin5Line />}
    />
  );
};

export default DeleteButton;
