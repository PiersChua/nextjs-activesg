import { Button, Icon } from "@chakra-ui/react";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

interface ButtonProps {
  text: string;
  isLoading: boolean;
}
const FormButton = ({ text, isLoading }: ButtonProps) => {
  return (
    <Button
      isLoading={isLoading}
      type="submit"
      variant="yellowBlack"
      rightIcon={<Icon as={FaArrowRightLong} />}
    >
      {text}
    </Button>
  );
};

export default FormButton;
