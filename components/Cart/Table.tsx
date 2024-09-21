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
            <Th borderBottom="1px solid var(--grey)"></Th>
            <Th borderBottom="1px solid var(--grey)">Name</Th>
            <Th borderBottom="1px solid var(--grey)">Unit Price</Th>
            <Th borderBottom="1px solid var(--grey)">Quantity</Th>
            <Th borderBottom="1px solid var(--grey)" isNumeric>
              Total Price
            </Th>
            <Th borderBottom="1px solid var(--grey)"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {userCart.map((item) => (
            <Tr key={item.passTypeId}>
              <Td borderBottom="1px solid var(--grey)">
                <CartCheckbox id={item.passTypeId} checked={item.isChecked} />
              </Td>
              <Td borderBottom="1px solid var(--grey)">
                {`${
                  item.passType.durationInDays > 1
                    ? `${item.passType.durationInDays / 30} ${
                        item.passType.durationInDays / 30 > 1
                          ? "Months"
                          : "Month"
                      } ${item.passType.isPeak ? "Peak" : "Non-peak"}`
                    : `${item.passType.durationInDays} Day`
                } ${item.passType.category} Pass`}
              </Td>
              <Td borderBottom="1px solid var(--grey)">
                ${(item.passType.priceInCents / 100).toFixed(2)}
              </Td>
              <Td borderBottom="1px solid var(--grey)">{item.quantity}</Td>
              <Td borderBottom="1px solid var(--grey)" isNumeric>
                $
                {((item.passType.priceInCents * item.quantity) / 100).toFixed(
                  2
                )}
              </Td>
              <Td borderBottom="1px solid var(--grey)">
                <Stack direction="row">
                  <EditButton quantity={item.quantity} id={item.passTypeId} />
                  <DeleteButton id={item.passTypeId} />
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
