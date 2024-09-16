import { Button } from "@chakra-ui/react";
import { MdShoppingCartCheckout } from "react-icons/md";

const SubmitCart = () => {
  return (
    <Button
      color="#ffffff"
      _hover={{ bg: "var(--orange-1)" }}
      bg="var(--orange)"
      leftIcon={<MdShoppingCartCheckout />}
    >
      Check out
    </Button>
  );
};

export default SubmitCart;
