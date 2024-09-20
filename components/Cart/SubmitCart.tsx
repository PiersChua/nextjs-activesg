import { Button } from "@chakra-ui/react";
import { MdShoppingCartCheckout } from "react-icons/md";

const SubmitCart = () => {
  return (
    <Button variant="orangeWhite" leftIcon={<MdShoppingCartCheckout />}>
      Check out
    </Button>
  );
};

export default SubmitCart;
