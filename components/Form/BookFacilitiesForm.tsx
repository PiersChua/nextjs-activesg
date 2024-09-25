"use client";
import { BookFacilitySchema } from "@/schemas";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  forwardRef,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Stack,
  Text,
} from "@chakra-ui/react";

import DatePicker from "react-datepicker";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState, useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormMessage from "./FormMessage";
import FormButton from "./FormButton";
import { CiCalendar } from "react-icons/ci";
import { CiCreditCard1 } from "react-icons/ci";
import {
  formatCreditCardNumber,
  formatCvv,
  formatExpiryDate,
} from "@/utils/formatCreditCard";

const BookFacilitiesForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof BookFacilitySchema>>({
    resolver: zodResolver(BookFacilitySchema),
  });
  const onSubmit = (values: z.infer<typeof BookFacilitySchema>) => {
    startTransition(async () => {
      setError(""); // clear error message
      // await signUp(values).then((data) => setError(data.error as string));
    });
  };

  const CustomInput = forwardRef(({ value, onClick }, ref) => (
    <Input
      {...register("date")}
      variant="cream"
      type="text"
      disabled={isPending}
      {...register("date")}
      min={new Date().toISOString().split("T")[0]}
      onClick={onClick} // Important for opening the datepicker
      ref={ref} // This is crucial to forward the ref
      value={value} // Value is controlled by react-datepicker
      placeholder="Select a date"
      readOnly // Makes sure users can't manually edit the date
    />
  ));

  return (
    <Stack
      p={5}
      mb={5}
      bg="var(--beige)"
      boxShadow="0 5px 20px rgba(0,0,0,0.2)"
      w="full"
      spacing={5}
      rounded="xl"
    >
      <Stack mb={3} alignItems="center" direction="row">
        <Icon boxSize={7} as={CiCalendar} />
        <Text textStyle="h3">Booking Details</Text>
      </Stack>
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={5}>
          <Stack direction={{ base: "column", md: "row" }}>
            <Stack flexWrap="wrap" flex="1" direction="row">
              <FormControl flex="1" isInvalid={!!errors?.date?.message}>
                <FormLabel>Date</FormLabel>
                <Input
                  variant="cream"
                  type="date"
                  disabled={isPending}
                  {...register("date")}
                  min={new Date().toISOString().split("T")[0]}
                />
                {/* <DatePicker
                placeholderText="Select a date"
                dateFormat="MMMM d, yyyy"
                customInput={<CustomInput />}
              /> */}
                {errors?.date?.message && (
                  <FormErrorMessage>{errors.date.message}</FormErrorMessage>
                )}
              </FormControl>
              <FormControl flex="1" isInvalid={!!errors?.startTime?.message}>
                <FormLabel>Time</FormLabel>
                <Input
                  variant="cream"
                  type="time"
                  disabled={isPending}
                  {...register("startTime")}
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors?.startTime?.message && (
                  <FormErrorMessage>
                    {errors.startTime.message}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Stack>
            <Stack flex="1" direction="row" flexWrap="wrap">
              <FormControl
                flex="1"
                isInvalid={!!errors?.durationInHours?.message}
              >
                <FormLabel>Duration (hr)</FormLabel>
                <NumberInput
                  variant="cream"
                  defaultValue={1}
                  min={1}
                  clampValueOnBlur={false}
                >
                  <NumberInputField
                    disabled={isPending}
                    {...register("durationInHours")}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                {errors?.durationInHours?.message && (
                  <FormErrorMessage>
                    {errors.durationInHours.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl
                flex="1"
                isInvalid={!!errors?.participantsCount?.message}
              >
                <FormLabel>Participant</FormLabel>
                <NumberInput
                  variant="cream"
                  defaultValue={1}
                  min={1}
                  clampValueOnBlur={false}
                >
                  <NumberInputField
                    disabled={isPending}
                    {...register("participantsCount")}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                {errors?.participantsCount?.message && (
                  <FormErrorMessage>
                    {errors.participantsCount.message}
                  </FormErrorMessage>
                )}
              </FormControl>
            </Stack>
          </Stack>
          <Stack my={3} alignItems="center" direction="row">
            <Icon boxSize={7} as={CiCreditCard1} />
            <Text textStyle="h3">Payment Details</Text>
          </Stack>
          <Stack direction={{ base: "column", md: "row" }}>
            <FormControl isInvalid={!!errors?.cardNumber?.message} flex="1">
              <FormLabel>Card number</FormLabel>
              <Input
                {...register("cardNumber")}
                variant="cream"
                type="text"
                placeholder="1234 1234 1234 1234"
                maxLength={19}
                onInput={formatCreditCardNumber}
              />
              {errors?.cardNumber?.message && (
                <FormErrorMessage>{errors.cardNumber.message}</FormErrorMessage>
              )}
            </FormControl>
            <Stack direction="row" flex="1">
              <FormControl isInvalid={!!errors.cardExpiry?.message}>
                <FormLabel>Expiry date</FormLabel>
                <Input
                  {...register("cardExpiry")}
                  variant="cream"
                  type="text"
                  placeholder="12 / 34"
                  maxLength={7}
                  onInput={formatExpiryDate}
                />
                {errors?.cardExpiry?.message && (
                  <FormErrorMessage>
                    {errors.cardExpiry.message}
                  </FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={!!errors?.cardCvv?.message}>
                <FormLabel>CVV</FormLabel>
                <Input
                  {...register("cardCvv")}
                  variant="cream"
                  type="text"
                  placeholder="123"
                  maxLength={4}
                  onInput={formatCvv}
                />
                {errors?.cardCvv?.message && (
                  <FormErrorMessage>{errors.cardCvv.message}</FormErrorMessage>
                )}
              </FormControl>
            </Stack>
          </Stack>
          {error && <FormMessage type="Error">{error}</FormMessage>}
          <FormButton isLoading={isPending} text="Pay" />
        </Stack>
      </form>
    </Stack>
  );
};

export default BookFacilitiesForm;
