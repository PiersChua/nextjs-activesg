import { Button } from "@chakra-ui/react";
import { MdShoppingCartCheckout } from "react-icons/md";

const SubmitCart = () => {
  return (
    <Button
      as="a"
      href={"?checkOut=true"}
      variant="orangeWhite"
      leftIcon={<MdShoppingCartCheckout />}
    >
      Check out
    </Button>
  );
};

export default SubmitCart;
