"use client";
import {
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { createPasses } from "@/app/action/passes";
import FormMessage from "@/components/Form/FormMessage";

interface ModalProps {
  totalPriceInCents: number;
}
const CheckoutModal = ({ totalPriceInCents }: ModalProps) => {
  const router = useRouter();
  const handleClose = () => router.back();
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const createPass = () => {
    startTransition(async () => {
      setError("");
      const data = await createPasses();
      setError(data?.error as string);
      setSuccess(data?.success as string);
    });
  };
  return (
    <Modal isCentered={true} isOpen={true} onClose={handleClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Payment</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Stack spacing={5}>
            <Divider borderColor="var(--grey)" />
            <Stack direction="row">
              <Text textStyle="h3">Total:</Text>
              <Text textStyle="h3">
                ${(totalPriceInCents / 100).toFixed(2)}
              </Text>
            </Stack>
            <Divider borderColor="var(--grey)" />
            {error && <FormMessage type="Error">{error}</FormMessage>}
            {success && <FormMessage type="Success">{success}</FormMessage>}
            <Stack direction="row" justifyContent="flex-end">
              <Button
                disabled={isPending}
                variant="orangeWhite"
                mr={3}
                onClick={handleClose}
              >
                Close
              </Button>
              <Button
                variant="outlineOrange"
                type="submit"
                isLoading={isPending}
                onClick={() => createPass()}
              >
                Confirm
              </Button>
            </Stack>
          </Stack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
