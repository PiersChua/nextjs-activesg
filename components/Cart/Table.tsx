"use client";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Stack,
} from "@chakra-ui/react";
import { PassCart, PassType } from "@prisma/client";
import DeleteButton from "./DeleteButton";
import CartCheckbox from "./CartCheckbox";
import EditButton from "./EditButton";

type relatedPassCart = PassCart & {
  passType: PassType;
};
interface TableProps {
  userCart: relatedPassCart[];
}

const TableComponent = ({ userCart }: TableProps) => {
  return (
    <TableContainer>
      <Table size="lg" variant="simple">
        <Thead>
          <Tr>
            <Th>Checked</Th>
            <Th>Name</Th>
            <Th>Quantity</Th>
            <Th isNumeric>Price ($)</Th>
          </Tr>
        </Thead>
        <Tbody>
          {userCart.map((item) => (
            <Tr key={item.id}>
              <Td>
                <CartCheckbox id={item.id} checked={item.cartChecked} />
              </Td>
              <Td>
                {`${
                  item.passType.durationInDays > 1
                    ? `${item.passType.durationInDays / 30} ${
                        item.passType.durationInDays / 30 > 1
                          ? "Months"
                          : "Month"
                      }`
                    : `${item.passType.durationInDays} Day`
                } ${item.passType.isPeak ? "Peak" : "Non-peak"} ${
                  item.passType.category
                } Pass`}
              </Td>
              <Td>{item.quantity}</Td>
              <Td isNumeric>
                {((item.passType.priceInCents * item.quantity) / 100).toFixed(
                  2
                )}
              </Td>
              <Td>
                <Stack direction="row">
                  <EditButton quantity={item.quantity} id={item.id} />
                  <DeleteButton id={item.id} />
                </Stack>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableComponent;
