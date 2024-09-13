import { Container, Stack, Text } from "@chakra-ui/react";
import { getPassCart } from "@/app/action/pass-carts";
import TableComponent from "@/components/Cart/Table";
import CartModal from "@/components/Cart/CartModal";

const UserCartPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const userCart = await getPassCart();
  const checkedItems = userCart.filter((item) => item.cartChecked);
  console.log(searchParams);
  return (
    <Container maxW="1400px">
      {userCart.length > 0 ? (
        <>
          {searchParams.id && searchParams.quantity && (
            <CartModal
              id={searchParams.id}
              quantity={parseInt(searchParams.quantity, 10)}
            />
          )}
          <TableComponent userCart={userCart}></TableComponent>
          <Stack justifyContent="flex-end" direction="row" spacing={5}>
            <Text textStyle="h2">Total</Text>
            <Text textStyle="h2">
              {`$${(
                checkedItems.reduce(
                  (acc, item) =>
                    acc + item.passType.priceInCents * item.quantity,
                  0
                ) / 100
              ).toFixed(2)}`}
            </Text>
          </Stack>
        </>
      ) : (
        <Text alignItems="center" textAlign="center" textStyle="h1">
          Your cart is currently empty
        </Text>
      )}
    </Container>
  );
};

export default UserCartPage;
