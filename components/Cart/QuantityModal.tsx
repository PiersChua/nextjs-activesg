"use client";
import {
  createPassCart,
  updatePassCartQuantity,
} from "@/app/action/pass-carts";
import * as z from "zod";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Button,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Stack,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { CartSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import FormMessage from "../Form/FormMessage";
interface ModalProps {
  id: string;
  quantity?: number;
  type: "Create" | "Update";
  route: boolean;
}

const QuantityModal = ({ id, quantity = 1, type, route }: ModalProps) => {
  const router = useRouter();
  const handleClose = () => router.back();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof CartSchema>>({
    resolver: zodResolver(CartSchema),
  });
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const onSubmit = (values: z.infer<typeof CartSchema>) => {
    startTransition(async () => {
      setError("");
      switch (type) {
        case "Create": {
          const data = await createPassCart(id, values);
          setError(data?.error as string);
          setSuccess(data?.success as string);

          if (!data?.error && route) {
            router.push("/user-cart");
          }
          break;
        }
        case "Update": {
          await updatePassCartQuantity(id, values).then((data) => {
            setError(data?.error as string);
            setSuccess(data?.success as string);
          });
          break;
        }
      }
    });
  };
  return (
    <Modal isCentered={true} isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Quantity</ModalHeader>
        <ModalCloseButton />
        <form onSubmit={handleSubmit(onSubmit)}>
          <ModalBody>
            <Stack spacing={5}>
              <FormControl isInvalid={!!errors?.quantity?.message}>
                <NumberInput
                  defaultValue={quantity}
                  min={1}
                  max={99}
                  clampValueOnBlur={false}
                >
                  <NumberInputField
                    disabled={isPending}
                    {...register("quantity")}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                {errors?.quantity?.message && (
                  <FormErrorMessage>{errors.quantity.message}</FormErrorMessage>
                )}
              </FormControl>
              {error && <FormMessage type="Error">{error}</FormMessage>}
              {success && <FormMessage type="Success">{success}</FormMessage>}
              <Stack direction="row" justifyContent="flex-end">
                <Button
                  disabled={isPending}
                  color="#ffffff"
                  bg="var(--orange)"
                  _hover={{ bg: "var(--orange-1)" }}
                  mr={3}
                  onClick={handleClose}
                >
                  Close
                </Button>
                <Button
                  color="var(--orange)"
                  bg="#ffffff"
                  border="1px solid var(--orange)"
                  type="submit"
                  isLoading={isPending}
                >
                  Confirm
                </Button>
              </Stack>
            </Stack>
          </ModalBody>
        </form>
      </ModalContent>
    </Modal>
  );
};

export default QuantityModal;
