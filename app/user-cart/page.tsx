import { Box, Button, Container, Stack, Text } from "@chakra-ui/react";
import { getPassCart } from "@/app/action/pass-carts";
import TableComponent from "@/components/Cart/Table";
import QuantityModal from "@/components/Cart/QuantityModal";
import EmptyCart from "@/components/Cart/EmptyCart";
import SubmitCart from "@/components/Cart/SubmitCart";

const UserCartPage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) => {
  const userCart = await getPassCart();
  const checkedItems = userCart.filter((item) => item.cartChecked);
  return (
    <Container maxW="1400px">
      {userCart.length > 0 ? (
        <>
          {searchParams.id && searchParams.quantity && (
            <QuantityModal
              type="Update"
              route={false}
              id={searchParams.id}
              quantity={parseInt(searchParams.quantity, 10)}
            />
          )}
          <TableComponent userCart={userCart}></TableComponent>
          <Box
            mb={5}
            p={3}
            bottom="0"
            position="sticky"
            mt={5}
            bg="var(--beige)"
            boxShadow="0 5px 20px rgba(0,0,0,0.2)"
          >
            <Stack
              alignItems="center"
              justifyContent="flex-end"
              direction="row"
              spacing={5}
            >
              <Text textStyle="p">
                Total (<Text as="span">{checkedItems.length} item</Text>):
              </Text>
              <Text color="var(--orange)" textStyle="h2">
                {`$${(
                  checkedItems.reduce(
                    (acc, item) =>
                      acc + item.passType.priceInCents * item.quantity,
                    0
                  ) / 100
                ).toFixed(2)}`}
              </Text>
              {checkedItems.length > 0 && <SubmitCart />}
            </Stack>
          </Box>
        </>
      ) : (
        <EmptyCart />
      )}
    </Container>
  );
};

export default UserCartPage;
